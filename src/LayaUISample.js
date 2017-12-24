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
Laya.class(SceneSuccess, "SceneSuccess", SceneSuccessUI);

Laya.init(Browser.clientWidth, Browser.clientHeight);
Laya.stage.scaleMode = "showall";

Laya.loader.load("res/atlas/comp.json", Handler.create(this, onAssetLoaded), null, Loader.ATLAS);

function onAssetLoaded()
{
	scList=new SceneList();
	scHome=new SceneHome();
	Laya.stage.addChild(scList);
	scList.on("intoHome",null,onIntoHome)
}
function onIntoHome(event){
	Laya.stage.removeChild(scList);
	Laya.stage.addChild(scHome);
}
