function SceneDetail() {
    var Event = laya.events.Event;
    var Handler = Laya.Handler;
    var Browser = Laya.Browser;
    var ui = this;
    var sound = laya.media.SoundManager;
    var lesson;
    var pages;
    var pageIndex;
    var curPage;
    SceneDetail.super(this);
    this.width=Browser.clientWidth;
    this.height=Browser.clientHeight;

    this.on(Event.ADDED, this, onAdded);
    this.on(Event.REMOVED, this, onRemoved);
    this.btn_next.on(Event.CLICK, this, next);
    this.btn_prev.on(Event.CLICK, this, prev);
    this.btn_t.on(Event.CLICK, this, playTeacherSound);
    this.btn_s.on(Event.CLICK, this, replay);
    this.btn_r.on(Event.MOUSE_DOWN, this, record);
    this.btn_r.on(Event.MOUSE_UP, this, stopRecord);
    function onAdded(event) {
      init();
      showPage();
    }
     function onRemoved(event){
        sound.stopAll();
    }
    function init(){
        pageIndex=0;
        lesson=util.dataCache.lesson;
        pages=lesson.wordsAndOthers;
    }
    function showPage() {
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
        showPage()
    }
     function prev(){
        pageIndex--
        if(pageIndex<0){
            ui.event("backIndex");
            return;
        }
        showPage()
    }
    function playTeacherSound(){
        sound.stopAll();
        sound.playMusic(curPage.audioFileUrl,1);
    }
    function replay(){

    }
    function record(){
        wx.startRecord()
    }
    function stopRecord(){
        wx.stopRecord();
    }
    function onBtnStart(event){
    }
}