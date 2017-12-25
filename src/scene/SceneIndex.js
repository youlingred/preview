function SceneIndex() {
    var Event = laya.events.Event;
    var Browser = Laya.Browser;
    var ui = this;
    var sound = laya.media.SoundManager;

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
        xhr.send(util.apiPath + "preview/" + util.dataCache.lesson.id, "", "get");
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
            startLogic();
        }
    }
    function startLogic() {
        showBtns()
        showData();
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
    function onBtnStart() {
        ui.event("intoDetail", null);
    }
}