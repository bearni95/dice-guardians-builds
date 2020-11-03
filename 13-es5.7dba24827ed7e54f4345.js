function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Nr4K:function(e,t,n){"use strict";n.r(t),n.d(t,"AccessPageModule",(function(){return y}));var r,i,s,o,a=n("ofXK"),c=n("3Pt+"),l=n("TEn/"),p=n("tyNb"),u=n("dfJG"),f=n("fXoL"),h=n("tk/3"),m=n("mrSG"),d=((r=function(){function e(){_classCallCheck(this,e),this.hasAuthToken=!1,this.address="",this.email="",this.balance=0}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,r,i,s,o,a,c,l,p,f,h=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("auth-token"))){e.next=26;break}return n=new u.i,r=u.i.claimFromString(t),n.fromPrivateKey(localStorage.getItem("privateKey"),r.payload.email),this.profile.sm.values.wallet||this.profile.sm.setValue("wallet",n),this.profile.events.on("setValue",(function(e){h.profile.sm.setValue(e.key,e.value)})),this.profile.sm.events.emit("setValue",{key:"email",value:r.payload.email}),this.profile.sm.events.emit("setValue",{key:"address",value:n.address}),e.next=10,this.profile.getBalance();case 10:return e.next=12,this.profile.getAlias();case 12:return this.profile.sm.events.emit("authFn",{}),e.next=15,this.profile.getCards();case 15:for(i=e.sent,s=0;s<i.length;s++)o=i[s],a=u.i.claimFromString(o),this.profile.events.emit("gainOwnership-"+a.payload.card,{token:o,claim:a,profile:this.profile});return e.next=19,this.profile.getDice();case 19:for(c=e.sent,l=0;l<c.length;l++)p=c[l],f=u.i.claimFromString(p),this.profile.events.emit("gainOwnership-"+f.payload.dice,{token:p,claim:f,profile:this.profile});return e.next=23,this.profile.getInventory();case 23:this.starterDecks(),this.profile.loadActiveDeck(),this.profile.sm.enable("deckReady");case 26:case"end":return e.stop()}}),e,this)})))}},{key:"register",value:function(){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.profile.sm.values.isBusy){e.next=2;break}return e.abrupt("return");case 2:t=document.querySelector('ion-input[name="email"]').value.toString().trim(),n=document.querySelector('ion-input[name="password"]').value.toString().trim(),this.profile.events.emit("registerBg",{email:t,password:n,httpMessenger:this.httpMessenger});case 4:case"end":return e.stop()}}),e,this)})))}},{key:"auth",value:function(){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.profile.sm.values.isBusy){e.next=2;break}return e.abrupt("return");case 2:t=document.querySelector('ion-input[name="email"]').value.toString().trim(),n=document.querySelector('ion-input[name="password"]').value.toString().trim(),this.profile.events.emit("authBg",{email:t,password:n,httpMessenger:this.httpMessenger});case 4:case"end":return e.stop()}}),e,this)})))}},{key:"starterDecks",value:function(){var e=this.profile.sm.values.inventory;console.log("red player",e),e.filter((function(e){return"deck"===e.type&&e.title.indexOf("[SD")>=0})).length>0||this.profile.sm.enable("showStarterDeckPicker")}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=f.Fb({type:r,selectors:[["app-auth-modal"]],inputs:{events:"events",profile:"profile",httpMessenger:"httpMessenger"},decls:18,vars:0,consts:[[1,"panel"],["name","email","placeholder","Email","type","email"],["name","password","placeholder","Password","type","password"],[1,"tip"],[1,"button-container"],["color","primary",3,"click"]],template:function(e,t){1&e&&(f.Ob(0,"div",0),f.Ob(1,"p"),f.pc(2,"Access"),f.Nb(),f.Mb(3,"ion-input",1),f.Mb(4,"ion-input",2),f.Ob(5,"p",3),f.pc(6,"min 8 chars, 1 symbol (!,$,%,&,@,#),"),f.Mb(7,"br"),f.pc(8," 1 uppercase letter, 1 lowercase letter,"),f.Mb(9,"br"),f.pc(10," 1 number"),f.Nb(),f.Ob(11,"div",4),f.Ob(12,"ion-button",5),f.Wb("click",(function(){return t.register()})),f.pc(13,"Register"),f.Nb(),f.Ob(14,"span"),f.pc(15,"or"),f.Nb(),f.Ob(16,"ion-button",5),f.Wb("click",(function(){return t.auth()})),f.pc(17,"Sign in"),f.Nb(),f.Nb(),f.Nb())},styles:[".panel[_ngcontent-%COMP%]{font-family:Avenir;width:500px;display:flex;justify-content:center;align-items:center;flex-direction:column;font-size:1.2em;background-color:#12191f;padding:20px;color:#fff;box-shadow:0 0 25px #000;border:4px solid #243338;border-top:8px solid #c4812a}ion-input[_ngcontent-%COMP%]{background-color:#29383f;width:80%;border:2px solid #243338;margin:10px 0;text-align:center}.button-container[_ngcontent-%COMP%]{width:80%;display:flex;justify-content:space-evenly;align-items:center;margin:20px 0}p.tip[_ngcontent-%COMP%]{width:100%;font-size:.8em;text-align:center}"]}),r),g=[{path:"",component:(i=function(){function e(t){_classCallCheck(this,e),this.httpMessenger=new u.g(t),this.events=new u.f,this.profile=new u.h(this.events,!0,this.httpMessenger)}return _createClass(e,[{key:"ngOnInit",value:function(){localStorage.length>0&&localStorage.clear()}}]),e}(),i.\u0275fac=function(e){return new(e||i)(f.Lb(h.a))},i.\u0275cmp=f.Fb({type:i,selectors:[["app-access"]],decls:2,vars:3,consts:[[1,"main"],[3,"events","profile","httpMessenger"]],template:function(e,t){1&e&&(f.Ob(0,"div",0),f.Mb(1,"app-auth-modal",1),f.Nb()),2&e&&(f.zb(1),f.bc("events",t.events)("profile",t.profile)("httpMessenger",t.httpMessenger))},directives:[d],styles:[".main[_ngcontent-%COMP%]{width:100vw;height:100vh;position:fixed;top:0;left:0;display:flex;justify-content:center;align-items:center;background-color:#070709}"]}),i)}],b=((s=function e(){_classCallCheck(this,e)}).\u0275mod=f.Jb({type:s}),s.\u0275inj=f.Ib({factory:function(e){return new(e||s)},imports:[[p.i.forChild(g)],p.i]}),s),v=n("j1ZV"),y=((o=function e(){_classCallCheck(this,e)}).\u0275mod=f.Jb({type:o}),o.\u0275inj=f.Ib({factory:function(e){return new(e||o)},imports:[[a.b,c.a,l.k,b,v.a]]}),o)},j1ZV:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("ofXK"),i=n("fXoL"),s=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)},imports:[[r.b]]}),e}()}}]);