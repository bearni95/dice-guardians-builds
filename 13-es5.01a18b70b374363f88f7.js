function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{pBHM:function(e,n,t){"use strict";t.r(n),t.d(n,"DiceTesterPageModule",(function(){return w}));var i,c,o,r=t("ofXK"),s=t("3Pt+"),l=t("TEn/"),a=t("tyNb"),b=t("m/Q0"),u=t("fXoL"),f=t("1dsY"),p=[{path:"",component:(i=function(){function e(){_classCallCheck(this,e),this.dice=new b.Dice(3),console.log(this.dice)}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"roll",value:function(){this.dice.roll()}}]),e}(),i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=u.Fb({type:i,selectors:[["app-dice-tester"]],decls:11,vars:2,consts:[[3,"dice","click"]],template:function(e,n){1&e&&(u.Ob(0,"ion-header"),u.Ob(1,"ion-toolbar"),u.Ob(2,"ion-title"),u.oc(3,"dice-tester"),u.Nb(),u.Nb(),u.Nb(),u.Ob(4,"ion-content"),u.Ob(5,"app-dice",0),u.Wb("click",(function(){return n.roll()})),u.Nb(),u.Ob(6,"p"),u.Ob(7,"b"),u.oc(8,"Rolls:"),u.Nb(),u.Nb(),u.Ob(9,"p"),u.oc(10),u.Nb(),u.Nb()),2&e&&(u.zb(5),u.bc("dice",n.dice),u.zb(5),u.pc(n.dice.rolls.join("\n")))},directives:[l.e,l.i,l.h,l.d,f.a],styles:[""]}),i)}],d=((c=function e(){_classCallCheck(this,e)}).\u0275mod=u.Jb({type:c}),c.\u0275inj=u.Ib({factory:function(e){return new(e||c)},imports:[[a.i.forChild(p)],a.i]}),c),h=t("j1ZV"),w=((o=function e(){_classCallCheck(this,e)}).\u0275mod=u.Jb({type:o}),o.\u0275inj=u.Ib({factory:function(e){return new(e||o)},imports:[[r.b,s.a,l.j,d,h.a]]}),o)}}]);