var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;
var Browser = Laya.Browser;
var Event=laya.events.Event;

var scList;
var scHome;
var scIndex;
var scDetail;
var scSuccess;


Laya.class(SceneList, "SceneList", SceneListUI);
Laya.class(SceneHome, "SceneHome", SceneHomeUI);
Laya.class(SceneIndex, "SceneIndex", SceneIndexUI);
Laya.class(SceneDetail, "SceneDetail", SceneDetailUI);
// Laya.class(SceneSuccess, "SceneSuccess", SceneSuccessUI);

Laya.init(Browser.clientWidth, Browser.clientHeight);
Laya.stage.scaleMode = "showall";
Laya.stage.bgColor="#fffbf2";

MUtils.wxReady(function(){
	aler(1)
});
Laya.loader.load("res/atlas/comp.atlas", Handler.create(this, onAssetLoaded), null, Loader.ATLAS);

function onAssetLoaded()
{
	scList=new SceneList();
	scHome=new SceneHome();
	scIndex=new SceneIndex();
	scDetail=new SceneDetail();

	Laya.stage.addChild(scList);
	scList.on("intoHome",null,onIntoHome)
}
function onIntoHome(event){
	Laya.stage.removeChild(scList);
	Laya.stage.addChild(scHome);
	scHome.on("intoIndex",null,onIntoIndex)
}
function onIntoIndex(event){
	Laya.stage.removeChild(scHome);
	Laya.stage.addChild(scIndex);
	scIndex.on("intoDetail",null,onIntoDetail)
}
function onIntoDetail(event){
	Laya.stage.removeChild(scIndex);
	Laya.stage.addChild(scDetail);
	scDetail.on("detailBackIndex",null,onDetailBackIndex)
	scDetail.on("intoSuccess",null,onIntoSuccess)
}
function onIntoSuccess(event){
	Laya.stage.removeChild(scSuccess);
	Laya.stage.addChild(scSuccess);
	scSuccess.on("backIndex",null,onBackIndex)
	scSuccess.on("backDetail",null,onBackDetail)
}
function onDetailBackIndex(event){
	Laya.stage.removeChild(scDetail);
	Laya.stage.addChild(scIndex);
}
function onBackIndex(event){
	Laya.stage.removeChild(scSuccess);
	Laya.stage.addChild(scIndex);
}
function onBackDetail(event){
	Laya.stage.removeChild(scSuccess);
	Laya.stage.addChild(scDetail);
}
