function SceneSuccess() {
    var Event = laya.events.Event;
    var Browser = Laya.Browser;
    var ui = this;

    SceneHome.super(this);
    this.width=Browser.clientWidth;
    this.height=Browser.clientHeight;

    this.on(Event.ADDED, this, onAdded);
    function onAdded(event) {
        showData();
        this.btn_start.on(Event.CLICK,util.dataCache.lesson,onBtnStart);
    }
    function showData() {
        console.log(util.dataCache)
     ui.title_en.text=util.dataCache.lesson.enTitle;
     ui.title_zh.text=util.dataCache.lesson.zhTitle;
    }
    function onBtnStart(){
        ui.event("intoIndex",null);
    }
}