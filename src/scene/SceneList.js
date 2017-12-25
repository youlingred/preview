function SceneList() {
    var Event = laya.events.Event;
    var Handler = Laya.Handler;
    var Browser = Laya.Browser;
    var ui = this;
    SceneList.super(this);
    this.width=Browser.clientWidth;
    this.height=Browser.clientHeight;
    this.on(Event.ADDED, this, onAdded);
    function onAdded(event) {
        // 使用但隐藏滚动条
		ui.list.vScrollBarSkin = "";
        ui.list.height=100;
		ui.list.selectEnable = true;
        ui.list.visible=false;
        getData();
    }
    function getData() {
        var xhr = new Laya.HttpRequest();
        // xhr.http.timeout = 10000;//设置超时时间；
        xhr.once(Event.COMPLETE, this, completeHandler);
        xhr.once(Event.ERROR, this, errorHandler);
        xhr.on(Event.PROGRESS, this, processHandler);
        xhr.send(util.apiPath + "student/preview", "", "get");
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
            showList(json.data)
        }
    }
    function showList(data) {
        ui.list.array = data;
        if(data.length>0){
            ui.list.visible=true;
            ui.list.repeatY=data.length;
            ui.list.renderHandler = new Handler(this, onRender);;
        }
       
    }
    function onRender(cell, index) {
        var data = ui.list.array[index];
        var lb_lesTime = cell.getChildByName("lb_lesTime");
        var lb_lesName = cell.getChildByName("lb_lesName");
        var lb_lesPreviewNum = cell.getChildByName("lb_lesPreviewNum");
        var btn_start=cell.getChildByName("btn_start");
        lb_lesTime.text = data.courseStartAt;
        lb_lesName.text = data.enTitle;
        lb_lesPreviewNum.text = parseInt(data.previewNum) == 0 ? "未预习" : "已预习" + data.previewNum;
        btn_start.off(Event.CLICK,data,onBtnStart);
        btn_start.on(Event.CLICK,data,onBtnStart);
    }
    function onBtnStart(event){
        util.dataCache.lessonGeneral=this;
        ui.event("intoHome");
    }
}