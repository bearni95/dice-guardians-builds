function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,i,r){return i&&_defineProperties(e.prototype,i),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"5BzM":function(e,i,r){"use strict";r.r(i),r.d(i,"CardViewerPageModule",(function(){return y}));var n=r("ofXK"),t=r("3Pt+"),a=r("TEn/"),c=r("tyNb"),o=r("m/Q0"),l=r("fXoL"),d=r("Sjme"),s=r("lXt9");function b(e,i){if(1&e&&l.Mb(0,"app-card",4),2&e){var r=l.Yb();l.bc("width",r.getFullscreenWidth())("card",r.getCard())("board",r.lib.board)("player",r.lib.board.players.red)}}function u(e,i){if(1&e){var r=l.Pb();l.Ob(0,"ion-button",5),l.Wb("click",(function(){return l.hc(r),l.Yb().viewAll()})),l.pc(1,"View All"),l.Nb()}}function f(e,i){if(1&e){var r=l.Pb();l.Ob(0,"app-card",6),l.Wb("click",(function(){l.hc(r);var e=i.$implicit;return l.Yb().viewCard(e)})),l.Nb()}if(2&e){var n=i.$implicit,t=l.Yb();l.bc("width",300)("card",n)("board",t.lib.board)("player",t.lib.board.players.red)}}var p,h,w,g=[{path:"",component:(p=function(){function e(i){_classCallCheck(this,e),this.isSingleCard=!0,this.cards=[],this.lib=i}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.getCard(),window.addEventListener("hashchange",(function(){e.getCard()}),!1)}},{key:"getCard",value:function(){var e=window.location.hash.substr(1),i=o.cardCollection[e];if(this.cards=[],i)return this.isSingleCard=!0,i;this.isSingleCard=!1;for(var r=Object.keys(o.cardCollection),n=0;n<r.length;n++)this.cards.push(o.cardCollection[r[n]]);return this.cards[0]}},{key:"viewCard",value:function(e){for(var i=Object.keys(o.cardCollection),r=0;r<i.length;r++){var n=o.cardCollection[i[r]];console.log(e,n),n.title===e.title&&(window.location.href="/card-viewer#"+i[r])}}},{key:"viewAll",value:function(){window.location.hash=""}},{key:"getFullscreenWidth",value:function(){return document.querySelector(".grid").clientHeight/1.5-50}}]),e}(),p.\u0275fac=function(e){return new(e||p)(l.Lb(d.a))},p.\u0275cmp=l.Fb({type:p,selectors:[["app-card-viewer"]],decls:9,vars:3,consts:[[1,"grid"],[3,"width","card","board","player",4,"ngIf"],["color","primary","class","view-all",3,"click",4,"ngIf"],[3,"width","card","board","player","click",4,"ngFor","ngForOf"],[3,"width","card","board","player"],["color","primary",1,"view-all",3,"click"],[3,"width","card","board","player","click"]],template:function(e,i){1&e&&(l.Ob(0,"ion-header"),l.Ob(1,"ion-toolbar"),l.Ob(2,"ion-title"),l.pc(3,"Dice Guardians - Card Viewer"),l.Nb(),l.Nb(),l.Nb(),l.Ob(4,"ion-content"),l.Ob(5,"div",0),l.oc(6,b,1,4,"app-card",1),l.oc(7,u,2,0,"ion-button",2),l.oc(8,f,1,4,"app-card",3),l.Nb(),l.Nb()),2&e&&(l.zb(6),l.bc("ngIf",i.isSingleCard),l.zb(1),l.bc("ngIf",i.isSingleCard),l.zb(1),l.bc("ngForOf",i.cards))},directives:[a.e,a.i,a.h,a.d,n.j,n.i,s.a,a.c],styles:[".grid[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100%;flex-wrap:wrap}.view-all[_ngcontent-%COMP%]{position:absolute;top:25px;right:25px}"]}),p)}],v=((h=function e(){_classCallCheck(this,e)}).\u0275mod=l.Jb({type:h}),h.\u0275inj=l.Ib({factory:function(e){return new(e||h)},imports:[[c.i.forChild(g)],c.i]}),h),C=r("j1ZV"),y=((w=function e(){_classCallCheck(this,e)}).\u0275mod=l.Jb({type:w}),w.\u0275inj=l.Ib({factory:function(e){return new(e||w)},imports:[[n.b,t.a,a.j,v,C.a]]}),w)}}]);