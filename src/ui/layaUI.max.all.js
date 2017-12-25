var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var SceneDetailUI=(function(_super){
		function SceneDetailUI(){
			
		    this.img=null;
		    this.btn_prev=null;
		    this.btn_next=null;
		    this.text_en=null;
		    this.text_zh=null;
		    this.btn_r=null;
		    this.btn_t=null;
		    this.btn_s=null;

			SceneDetailUI.__super.call(this);
		}

		CLASS$(SceneDetailUI,'ui.test.SceneDetailUI',_super);
		var __proto__=SceneDetailUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SceneDetailUI.uiView);

		}

		SceneDetailUI.uiView={"type":"View","props":{"width":375,"height":667,"centerX":0},"child":[{"type":"Image","props":{"width":300,"var":"img","top":60,"skin":"https://mobile.mmears.com/mmears-preview-source/dist/static/images/home.png","height":300,"centerX":0}},{"type":"Button","props":{"width":71,"var":"btn_prev","top":10,"skin":"comp/button.png","left":10,"label":"prev","height":25}},{"type":"Button","props":{"width":71,"var":"btn_next","top":10,"skin":"comp/button.png","right":10,"label":"next","height":25}},{"type":"Label","props":{"y":390,"width":89,"var":"text_en","text":"label","height":28,"centerX":0,"align":"center"}},{"type":"Label","props":{"y":415,"width":89,"var":"text_zh","text":"label","height":28,"centerX":0,"align":"center"}},{"type":"Button","props":{"x":142,"width":96,"var":"btn_r","skin":"comp/button.png","label":"record","height":31,"bottom":30}},{"type":"Button","props":{"x":9,"width":96,"var":"btn_t","skin":"comp/button.png","label":"teacher","height":31,"bottom":30}},{"type":"Button","props":{"x":256,"width":96,"var":"btn_s","skin":"comp/button.png","label":"replay","height":31,"bottom":30}}]};
		return SceneDetailUI;
	})(View);
var SceneHomeUI=(function(_super){
		function SceneHomeUI(){
			
		    this.btn_start=null;
		    this.title_en=null;
		    this.title_zh=null;

			SceneHomeUI.__super.call(this);
		}

		CLASS$(SceneHomeUI,'ui.test.SceneHomeUI',_super);
		var __proto__=SceneHomeUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SceneHomeUI.uiView);

		}

		SceneHomeUI.uiView={"type":"View","props":{"width":375,"height":667},"child":[{"type":"Image","props":{"width":392,"top":0,"skin":"home.png","height":677,"centerX":2.5}},{"type":"Button","props":{"width":170,"var":"btn_start","skin":"comp/button.png","labelBold":true,"labelAlign":"center","label":"开始预习","height":50,"centerX":0,"bottom":30}},{"type":"Label","props":{"width":269,"var":"title_en","valign":"middle","top":160,"text":"my bag","height":18,"fontSize":16,"font":"Microsoft YaHei","color":"#FFFFFF","centerX":0,"bold":true,"align":"center"}},{"type":"Label","props":{"width":269,"var":"title_zh","valign":"middle","top":180,"text":"my bag","height":18,"fontSize":16,"font":"Microsoft YaHei","color":"FFFFFF","centerX":0,"bold":true,"align":"center"}}]};
		return SceneHomeUI;
	})(View);
var SceneIndexUI=(function(_super){
		function SceneIndexUI(){
			
		    this.title_en=null;
		    this.title_zh=null;
		    this.btn_again=null;
		    this.btn_start=null;
		    this.textBox=null;
		    this.content=null;

			SceneIndexUI.__super.call(this);
		}

		CLASS$(SceneIndexUI,'ui.test.SceneIndexUI',_super);
		var __proto__=SceneIndexUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("HTMLDivElement",laya.html.dom.HTMLDivElement);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SceneIndexUI.uiView);

		}

		SceneIndexUI.uiView={"type":"View","props":{"width":355,"height":567},"child":[{"type":"Image","props":{"top":0,"skin":"index_title_bg.png","centerX":0}},{"type":"Label","props":{"width":261,"var":"title_en","valign":"middle","top":2,"text":"label","height":33,"fontSize":16,"color":"FFFFFF","centerX":0,"bold":false,"align":"center"}},{"type":"Label","props":{"width":261,"var":"title_zh","valign":"middle","top":28,"text":"label","height":33,"fontSize":16,"color":"FFFFFF","centerX":1,"bold":false,"align":"center"}},{"type":"Button","props":{"var":"btn_again","skin":"comp/button.png","label":"再来一遍","centerX":0,"bottom":100}},{"type":"Button","props":{"var":"btn_start","skin":"comp/button.png","label":"开始","centerX":0,"bottom":100}},{"type":"Panel","props":{"width":263,"visible":true,"vScrollBarSkin":"comp/vscroll.png","top":120,"mouseEnabled":true,"height":247,"centerX":0,"bottom":200,"alpha":1},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"textBox","mouseEnabled":true},"child":[{"type":"HTMLDivElement","props":{"y":0,"x":0,"width":263,"var":"content","mouseEnabled":true,"innerHTML":"htmlText","height":301}}]}]}]};
		return SceneIndexUI;
	})(View);
var SceneListUI=(function(_super){
		function SceneListUI(){
			
		    this.titleBar=null;
		    this.list=null;

			SceneListUI.__super.call(this);
		}

		CLASS$(SceneListUI,'ui.test.SceneListUI',_super);
		var __proto__=SceneListUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SceneListUI.uiView);

		}

		SceneListUI.uiView={"type":"View","props":{"width":414,"height":736},"child":[{"type":"Box","props":{"var":"titleBar","top":0,"right":0,"left":0,"height":50},"child":[{"type":"Rect","props":{"y":0,"x":0,"width":414,"lineWidth":1,"height":50,"fillColor":"#b675c5"}},{"type":"Label","props":{"valign":"middle","text":"我的预习","fontSize":20,"font":"Microsoft YaHei","color":"#ffffff","centerY":0,"centerX":0,"bold":true,"align":"center"}}]},{"type":"List","props":{"var":"list","top":50,"right":0,"repeatX":1,"left":0,"bottom":0},"child":[{"type":"Box","props":{"right":0,"name":"render","left":0},"child":[{"type":"Image","props":{"skin":"template/List/SimpleListBoxItemBackground.png","right":0,"left":0}},{"type":"Label","props":{"y":7,"x":16,"width":180,"text":"11111111","name":"lb_lesTime","height":12}},{"type":"Label","props":{"y":29,"x":10,"width":180,"text":"11111111","name":"lb_lesName","height":12}},{"type":"Label","props":{"y":57,"x":9,"width":180,"text":"11111111","name":"lb_lesPreviewNum","height":12}},{"type":"Button","props":{"stateNum":3,"skin":"comp/button.png","right":50,"renderType":"render","name":"btn_start","labelPadding":"-1,-3","labelFont":"Microsoft YaHei","labelColors":"0","labelBold":true,"labelAlign":"center","label":"立即预习>","centerY":10}}]}]}]};
		return SceneListUI;
	})(View);
var SceneSuccessUI=(function(_super){
		function SceneSuccessUI(){
			
		    this.btn_replay=null;
		    this.btn_again=null;
		    this.btn_review=null;
		    this.btn_share=null;

			SceneSuccessUI.__super.call(this);
		}

		CLASS$(SceneSuccessUI,'ui.test.SceneSuccessUI',_super);
		var __proto__=SceneSuccessUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SceneSuccessUI.uiView);

		}

		SceneSuccessUI.uiView={"type":"View","props":{"width":375,"height":667},"child":[{"type":"Image","props":{"width":362,"top":30,"skin":"resultBG.png","height":362,"centerX":0}},{"type":"Button","props":{"x":140,"width":96,"var":"btn_replay","label":"replay","height":31,"bottom":244}},{"type":"Button","props":{"x":55,"width":96,"var":"btn_again","skin":"comp/button.png","label":"again","height":31,"bottom":120}},{"type":"Button","props":{"x":209,"width":96,"var":"btn_review","skin":"comp/button.png","label":"review","height":31,"bottom":120}},{"type":"Button","props":{"x":89.5,"width":197,"var":"btn_share","skin":"comp/button.png","label":"share","height":31,"bottom":58}}]};
		return SceneSuccessUI;
	})(View);
var TestPageUI=(function(_super){
		function TestPageUI(){
			
		    this.btn=null;
		    this.clip=null;
		    this.combobox=null;
		    this.tab=null;
		    this.list=null;
		    this.btn2=null;
		    this.check=null;
		    this.radio=null;
		    this.box=null;

			TestPageUI.__super.call(this);
		}

		CLASS$(TestPageUI,'ui.test.TestPageUI',_super);
		var __proto__=TestPageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TestPageUI.uiView);

		}

		TestPageUI.uiView={"type":"View","child":[{"props":{"x":0,"y":0,"skin":"comp/bg.png","sizeGrid":"30,4,4,4","width":600,"height":400},"type":"Image"},{"props":{"x":41,"y":56,"skin":"comp/button.png","label":"点我赋值","width":150,"height":37,"sizeGrid":"4,4,4,4","var":"btn"},"type":"Button"},{"props":{"x":401,"y":56,"skin":"comp/clip_num.png","clipX":10,"var":"clip"},"type":"Clip"},{"props":{"x":220,"y":143,"skin":"comp/combobox.png","labels":"select1,select2,selecte3","selectedIndex":1,"sizeGrid":"4,20,4,4","width":200,"height":23,"var":"combobox"},"type":"ComboBox"},{"props":{"x":220,"y":96,"skin":"comp/tab.png","labels":"tab1,tab2,tab3","var":"tab"},"type":"Tab"},{"props":{"x":259,"y":223,"skin":"comp/vscroll.png","height":150},"type":"VScrollBar"},{"props":{"x":224,"y":223,"skin":"comp/vslider.png","height":150},"type":"VSlider"},{"type":"List","child":[{"type":"Box","child":[{"props":{"skin":"comp/label.png","text":"this is a list","x":26,"y":5,"width":78,"height":20,"fontSize":14,"name":"label"},"type":"Label"},{"props":{"x":0,"y":2,"skin":"comp/clip_num.png","clipX":10,"name":"clip"},"type":"Clip"}],"props":{"name":"render","x":0,"y":0,"width":112,"height":30}}],"props":{"x":452,"y":68,"width":128,"height":299,"vScrollBarSkin":"comp/vscroll.png","repeatX":1,"var":"list"}},{"props":{"x":563,"y":4,"skin":"comp/btn_close.png","name":"close"},"type":"Button"},{"props":{"x":41,"y":112,"skin":"comp/button.png","label":"点我赋值","width":150,"height":66,"sizeGrid":"4,4,4,4","labelSize":30,"labelBold":true,"var":"btn2"},"type":"Button"},{"props":{"x":220,"y":188,"skin":"comp/checkbox.png","label":"checkBox1","var":"check"},"type":"CheckBox"},{"props":{"x":220,"y":61,"skin":"comp/radiogroup.png","labels":"radio1,radio2,radio3","var":"radio"},"type":"RadioGroup"},{"type":"Panel","child":[{"props":{"skin":"comp/image.png"},"type":"Image"}],"props":{"x":299,"y":223,"width":127,"height":150,"vScrollBarSkin":"comp/vscroll.png"}},{"props":{"x":326,"y":188,"skin":"comp/checkbox.png","label":"checkBox2","labelColors":"#ff0000"},"type":"CheckBox"},{"type":"Box","child":[{"props":{"y":70,"skin":"comp/progress.png","width":150,"height":14,"sizeGrid":"4,4,4,4","name":"progress"},"type":"ProgressBar"},{"props":{"y":103,"skin":"comp/label.png","text":"This is a Label","width":137,"height":26,"fontSize":20,"name":"label"},"type":"Label"},{"props":{"y":148,"skin":"comp/textinput.png","text":"textinput","width":150,"name":"input"},"type":"TextInput"},{"props":{"skin":"comp/hslider.png","width":150,"name":"slider"},"type":"HSlider"},{"props":{"y":34,"skin":"comp/hscroll.png","width":150,"name":"scroll"},"type":"HScrollBar"}],"props":{"x":41,"y":197,"var":"box"}}],"props":{"width":600,"height":400}};
		return TestPageUI;
	})(View);