(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"5BzM":function(t,i,r){"use strict";r.r(i),r.d(i,"CardViewerPageModule",(function(){return f}));var n=r("ofXK"),e=r("3Pt+"),c=r("TEn/"),o=r("tyNb"),a=r("m/Q0"),l=r("fXoL"),d=r("Sjme"),s=r("lXt9");function b(t,i){if(1&t&&l.Mb(0,"app-card",4),2&t){const t=l.Yb();l.bc("width",t.getFullscreenWidth())("card",t.getCard())("board",t.lib.board)("player",t.lib.board.players.red)}}function p(t,i){if(1&t){const t=l.Pb();l.Ob(0,"ion-button",5),l.Wb("click",(function(){return l.gc(t),l.Yb().viewAll()})),l.oc(1,"View All"),l.Nb()}}function h(t,i){if(1&t){const t=l.Pb();l.Ob(0,"app-card",6),l.Wb("click",(function(){l.gc(t);const r=i.$implicit;return l.Yb().viewCard(r)})),l.Nb()}if(2&t){const t=i.$implicit,r=l.Yb();l.bc("width",300)("card",t)("board",r.lib.board)("player",r.lib.board.players.red)}}const u=[{path:"",component:(()=>{class t{constructor(t){this.isSingleCard=!0,this.cards=[],this.lib=t}ngOnInit(){const t=this;this.getCard(),window.addEventListener("hashchange",()=>{t.getCard()},!1)}getCard(){const t=window.location.hash.substr(1),i=a.cardCollection[t];if(this.cards=[],i)return this.isSingleCard=!0,i;{this.isSingleCard=!1;const t=Object.keys(a.cardCollection);for(let i=0;i<t.length;i++)this.cards.push(a.cardCollection[t[i]]);return this.cards[0]}}viewCard(t){const i=Object.keys(a.cardCollection);for(let r=0;r<i.length;r++){const n=a.cardCollection[i[r]];console.log(t,n),n.title===t.title&&(window.location.href="/card-viewer#"+i[r])}}viewAll(){window.location.hash=""}getFullscreenWidth(){return document.querySelector(".grid").clientHeight/1.5-50}}return t.\u0275fac=function(i){return new(i||t)(l.Lb(d.a))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-card-viewer"]],decls:9,vars:3,consts:[[1,"grid"],[3,"width","card","board","player",4,"ngIf"],["color","primary","class","view-all",3,"click",4,"ngIf"],[3,"width","card","board","player","click",4,"ngFor","ngForOf"],[3,"width","card","board","player"],["color","primary",1,"view-all",3,"click"],[3,"width","card","board","player","click"]],template:function(t,i){1&t&&(l.Ob(0,"ion-header"),l.Ob(1,"ion-toolbar"),l.Ob(2,"ion-title"),l.oc(3,"Dice Guardians - Card Viewer"),l.Nb(),l.Nb(),l.Nb(),l.Ob(4,"ion-content"),l.Ob(5,"div",0),l.nc(6,b,1,4,"app-card",1),l.nc(7,p,2,0,"ion-button",2),l.nc(8,h,1,4,"app-card",3),l.Nb(),l.Nb()),2&t&&(l.zb(6),l.bc("ngIf",i.isSingleCard),l.zb(1),l.bc("ngIf",i.isSingleCard),l.zb(1),l.bc("ngForOf",i.cards))},directives:[c.d,c.g,c.f,c.c,n.i,n.h,s.a,c.b],styles:[".grid[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100%;flex-wrap:wrap}.view-all[_ngcontent-%COMP%]{position:absolute;top:25px;right:25px}"]}),t})()}];let w=(()=>{class t{}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(i){return new(i||t)},imports:[[o.i.forChild(u)],o.i]}),t})();var g=r("j1ZV");let f=(()=>{class t{}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(i){return new(i||t)},imports:[[n.b,e.a,c.h,w,g.a]]}),t})()}}]);