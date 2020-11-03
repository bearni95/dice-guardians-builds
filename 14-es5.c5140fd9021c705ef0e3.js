function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Nr4K:function(e,t,n){"use strict";n.r(t),n.d(t,"AccessPageModule",(function(){return w}));var r,o,i,a,s=n("ofXK"),c=n("3Pt+"),l=n("TEn/"),u=n("tyNb"),p=n("dfJG"),f=n("fXoL"),h=n("tk/3"),d=n("mrSG"),b=((r=function(){function e(){_classCallCheck(this,e),this.hasAuthToken=!1,this.address="",this.email="",this.balance=0}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.getItem("auth-token")||(t=document.querySelector("#channel-selector"),console.log("select",t),n=localStorage.getItem("channel"),console.log("value",n),t.value=n);case 1:case"end":return e.stop()}}),e)})))}},{key:"setSelectedChannel",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.querySelector("#channel-selector").value,["Production","Alpha","Beta","Dev"].includes(t)){e.next=3;break}throw new Error("Could not set channel `"+t+"`");case 3:return console.log("set channel",t),localStorage.setItem("channel",t),e.next=7,p.k.sleep(100);case 7:window.location.reload();case 8:case"end":return e.stop()}}),e)})))}},{key:"register",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.profile.sm.values.isBusy){e.next=2;break}return e.abrupt("return");case 2:t=document.querySelector('ion-input[name="email"]').value.toString().trim(),n=document.querySelector('ion-input[name="password"]').value.toString().trim(),this.profile.events.emit("registerBg",{email:t,password:n,httpMessenger:this.httpMessenger});case 4:case"end":return e.stop()}}),e,this)})))}},{key:"auth",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.profile.sm.values.isBusy){e.next=2;break}return e.abrupt("return");case 2:t=document.querySelector('ion-input[name="email"]').value.toString().trim(),n=document.querySelector('ion-input[name="password"]').value.toString().trim(),this.profile.events.emit("authBg",{email:t,password:n,httpMessenger:this.httpMessenger});case 4:case"end":return e.stop()}}),e,this)})))}},{key:"starterDecks",value:function(){var e=this.profile.sm.values.inventory;console.log("red player",e),e.filter((function(e){return"deck"===e.type&&e.title.indexOf("[SD")>=0})).length>0||this.profile.sm.enable("showStarterDeckPicker")}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=f.Fb({type:r,selectors:[["app-auth-modal"]],inputs:{events:"events",profile:"profile",httpMessenger:"httpMessenger"},decls:23,vars:0,consts:[[1,"panel"],["id","channel-selector",3,"change"],["value","Beta"],["value","Dev"],["name","email","placeholder","Email","type","email"],["name","password","placeholder","Password","type","password"],[1,"tip"],[1,"button-container"],["color","primary",3,"click"]],template:function(e,t){1&e&&(f.Ob(0,"div",0),f.Ob(1,"p"),f.pc(2,"Access"),f.Nb(),f.Ob(3,"select",1),f.Wb("change",(function(){return t.setSelectedChannel()})),f.Ob(4,"option",2),f.pc(5,"Beta"),f.Nb(),f.Ob(6,"option",3),f.pc(7,"Dev"),f.Nb(),f.Nb(),f.Mb(8,"ion-input",4),f.Mb(9,"ion-input",5),f.Ob(10,"p",6),f.pc(11,"min 8 chars, 1 symbol (!,$,%,&,@,#),"),f.Mb(12,"br"),f.pc(13," 1 uppercase letter, 1 lowercase letter,"),f.Mb(14,"br"),f.pc(15," 1 number"),f.Nb(),f.Ob(16,"div",7),f.Ob(17,"ion-button",8),f.Wb("click",(function(){return t.register()})),f.pc(18,"Register"),f.Nb(),f.Ob(19,"span"),f.pc(20,"or"),f.Nb(),f.Ob(21,"ion-button",8),f.Wb("click",(function(){return t.auth()})),f.pc(22,"Sign in"),f.Nb(),f.Nb(),f.Nb())},styles:[".panel[_ngcontent-%COMP%]{font-family:Avenir;width:500px;display:flex;justify-content:center;align-items:center;flex-direction:column;font-size:1.2em;background-color:#12191f;padding:20px;color:#fff;box-shadow:0 0 25px #000;border:4px solid #243338;border-top:8px solid #c4812a}ion-input[_ngcontent-%COMP%]{background-color:#29383f;width:80%;border:2px solid #243338;margin:10px 0;text-align:center}.button-container[_ngcontent-%COMP%]{width:80%;display:flex;justify-content:space-evenly;align-items:center;margin:20px 0}p.tip[_ngcontent-%COMP%]{width:100%}p.tip[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{font-size:.8em;text-align:center}select[_ngcontent-%COMP%]{width:80%;background-color:#29383f;color:#fff;border:2px solid #243338}"]}),r),m=[{path:"",component:(o=function(){function e(t){_classCallCheck(this,e);var n=localStorage.getItem("channel");localStorage.length>0&&localStorage.clear(),n&&localStorage.setItem("channel",n),this.httpMessenger=new p.g(t),this.events=new p.f,this.profile=new p.h(this.events,!0,this.httpMessenger)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),o.\u0275fac=function(e){return new(e||o)(f.Lb(h.a))},o.\u0275cmp=f.Fb({type:o,selectors:[["app-access"]],decls:2,vars:3,consts:[[1,"main"],[3,"events","profile","httpMessenger"]],template:function(e,t){1&e&&(f.Ob(0,"div",0),f.Mb(1,"app-auth-modal",1),f.Nb()),2&e&&(f.zb(1),f.bc("events",t.events)("profile",t.profile)("httpMessenger",t.httpMessenger))},directives:[b],styles:[".main[_ngcontent-%COMP%]{width:100vw;height:100vh;position:fixed;top:0;left:0;display:flex;justify-content:center;align-items:center;background-color:#070709}"]}),o)}],g=((i=function e(){_classCallCheck(this,e)}).\u0275mod=f.Jb({type:i}),i.\u0275inj=f.Ib({factory:function(e){return new(e||i)},imports:[[u.i.forChild(m)],u.i]}),i),v=n("j1ZV"),w=((a=function e(){_classCallCheck(this,e)}).\u0275mod=f.Jb({type:a}),a.\u0275inj=f.Ib({factory:function(e){return new(e||a)},imports:[[s.b,c.a,l.m,g,v.a]]}),a)},j1ZV:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("ofXK"),o=n("fXoL"),i=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({factory:function(t){return new(t||e)},imports:[[r.b]]}),e}()}}]);