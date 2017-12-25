function SceneIndex() {
    var Event = laya.events.Event;
    var Browser = Laya.Browser;
    var ui = this;
    var sound = laya.media.SoundManager;
    var words=[];

    SceneIndex.super(this);
    this.width = Browser.clientWidth;
    this.height = Browser.clientHeight;
    this.btn_start.on(Event.CLICK, util.dataCache.lesson, onBtnStart);
    this.on(Event.ADDED, this, onAdded);
    this.on(Event.REMOVED, this, onRemoved);
    function onAdded(event) {
        hideAll();
        getData();
    }
    function onRemoved(event){
        sound.stopAll();
    }
    function hideAll() {
        ui.btn_start.visible = false;
        ui.btn_again.visible = false;
    }
    function getData() {
        var xhr = new Laya.HttpRequest();
        // xhr.http.timeout = 10000;//设置超时时间；
        xhr.once(Event.COMPLETE, this, completeHandler);
        xhr.once(Event.ERROR, this, errorHandler);
        xhr.on(Event.PROGRESS, this, processHandler);
        xhr.send(util.apiPath + "preview/" + util.dataCache.lessonGeneral.id, "", "get");
    }
    function processHandler(res) {
    }
    function errorHandler(res) {
    }
    function completeHandler(res) {
        console.log(res);
        var json = JSON.parse(res);
        console.log(json.success)
        if (json.success) {
            util.dataCache.lesson = json.data;
            words=json.data.wordsAndOthers;
            startLogic();
        }
    }
    function startLogic() {
        showBtns()
        showData();
        showWords();
    }
    function showBtns() {
        if (util.dataCache.previewNum > 0) {
            ui.btn_again.visible = true;
        } else {
            ui.btn_start.visible = true;
            sound.playMusic(util.dataCache.bgMusic);
        }
    }
    function showData() {
        console.log(util.dataCache)
        ui.title_en.text = util.dataCache.lesson.enTitle;
        ui.title_zh.text = util.dataCache.lesson.zhTitle;
    }
    function showWords(){
        ui.content.style.align="center";
        ui.content.style.lineHeight=25;
        ui.content.style.fontSize=14;
        ui.content.style.color="#ab7020";
        var words_type1=_.filter(words, ['type', 1]);
        var words_type2=_.filter(words, ['type', 2]);
        var htmlText="";
        if(words_type1.length>0){
            _(words_type1).forEach(function(value){
                htmlText+="<span>"+value.enContent+"</span>"+"<br/>"+"<span>"+value.zhContent+"</span><br/>";
            })
        }
        if(words_type2.length>0){
            _(words_type2).forEach(function(value){
                htmlText+="<span>"+value.enContent+"</span>"+"<br/>"+"<span>"+value.zhContent+"</span><br/>";
            })
        }
        console.log(htmlText)
        ui.content.innerHTML=htmlText;
    }
    function onBtnStart() {
        ui.event("intoDetail", null);
    }
}