function SceneDetail() {
    var Event = laya.events.Event;
    var Handler = Laya.Handler;
    var Browser = Laya.Browser;

    SceneDetail.super(this);
    //全屏适配
    this.width=Browser.clientWidth;
    this.height=Browser.clientHeight;
    //页面变量赋值
    var ui = this;                          //当前组件对象
    var sound = laya.media.SoundManager;    //声音播放对象
    var curSoundType;                       //当前播放声音的类型 t 老师音频  s 学生音频
    var lesson;                             //课程数据
    var pages;                              //页面数据
    var pageIndex;                          //当前页面索引
    var curPage;                            //当前页面数据
    var autoPlay;                           //是否自动播放老师音频
    //添加事件监听
    this.on(Event.ADDED, this, onAdded);
    this.on(Event.REMOVED, this, onRemoved);
    this.btn_next.on(Event.CLICK, this, next);
    this.btn_prev.on(Event.CLICK, this, prev);
    this.btn_t.on(Event.CLICK, this, playTeacherSound);
    this.btn_s.on(Event.CLICK, this, replay);
    this.btn_r.on(Event.MOUSE_DOWN, this, record);
    this.btn_r.on(Event.MOUSE_OUT, this, stopRecord);
    this.btn_r.on(Event.MOUSE_UP, this, stopRecord);
    //场景被添加到舞台时处理
    function onAdded(event) {
      start();
    }
     //场景被移出舞台时处理
     function onRemoved(event){
        sound.stopAll();
    }
    //页面逻辑执行
    function start(){
        init();
        showPage();
        playTeacherSound();
    }
    //初始化
    function init(){
        initUI();
        initValue();
    }
    //初始化UI
    function initUI(){
        ui.btn_prev.disabled=true;
        ui.btn_next.disabled=true;
        ui.btn_r.disabled=true;
        ui.btn_t.disabled=true;
        ui.btn_s.disabled=true;
        ui.img.skin="";
        ui.text_zh.text="";
        ui.text_en.text="";
    }
    //初始化变量
    function initValue(){
        pageIndex=0;
        lesson=util.dataCache.lesson;
        pages=lesson.wordsAndOthers;
        autoPlay=true;
    }
    function showPage() {
        ui.btn_prev.disabled=false;
        ui.btn_t.disabled=false;
        curPage=pages[pageIndex];
        ui.img.skin=curPage.imgFileUrl;
        ui.text_en.text=curPage.enContent
        ui.text_zh.text=curPage.zhContent
    }
    function next(){
        pageIndex++
        if(pageIndex>=pages.length){
            ui.event("intoSuccess");
            return;
        }
        initUI();
        showPage();
    }
     function prev(){
        pageIndex--
        if(pageIndex<0){
            ui.event("detailBackIndex");
            return;
        }
        showPage()
    }
    function playTeacherSound(){
        sound.stopAll();
        sound.playMusic(curPage.audioFileUrl,1,new Handler(this, onTPlayEnd));
    }
    function replay(){
        sound.stopAll();
        sound.playMusic(curPage.s_audioUrl,1,new Handler(this, onSPlayEnd));
    }
    function record(){
        wx.startRecord({
             success:function(){
                
            }
        })
    }
     function stopRecord(){
        console.log("release")
        wx.stopRecord({
            success:function(res){
                uploadRecord(res.localId)
            }
        });
    }
    
    function uploadRecord(localId){
        wx.uploadVoice({
             localId: localId,
             isShowProgressTips: 1,
             success: function (res) {
                sendRecordId(res.serverId);
            },
        })
    }
    function sendRecord(serverId){
        var xhr = new Laya.HttpRequest();
        // xhr.http.timeout = 10000;//设置超时时间；
        xhr.once(Event.COMPLETE, this, onSendSuccess);
        xhr.once(Event.ERROR, this, onSendError);
        xhr.send(util.apiPath +"translation/" + curPage.id+ "/score/?media_id=" + serverId, "", "get");
    }
    function onSendSuccess(res){
        if(res.success){
            showScore(res.data.score)
            if(parseInt(res.data.score)>10){
                curPage.s_audioUrl=res.data.audioFileUrl;
                ui.btn_next.disabled=false;
                addScore(res.data.score);
            }else{
                
            }
        }
    }
    function onSendError(){

    }
    function showScore(score){

    }
    function addScore(score){
        
    }
    function onTPlayEnd(event){
        ui.btn_r.disabled=false;
    }
    function onSPlayEnd(event){
        
    }
    function onBtnStart(event){
    }
}