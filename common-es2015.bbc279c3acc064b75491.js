(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,i,n){"use strict";n.d(i,"a",(function(){return o})),n.d(i,"b",(function(){return r})),n.d(i,"c",(function(){return c})),n.d(i,"d",(function(){return a})),n.d(i,"e",(function(){return s}));const e={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const i=this.getEngine();if(!i)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;i.impact({style:n})},notification(t){const i=this.getEngine();if(!i)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;i.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},c=()=>{e.selection()},o=()=>{e.selectionStart()},r=()=>{e.selectionChanged()},s=()=>{e.selectionEnd()},a=t=>{e.impact(t)}},"6i10":function(t,i,n){"use strict";n.d(i,"a",(function(){return e}));const e={bubbles:{dur:1e3,circles:9,fn:(t,i,n)=>{const e=t*i/n-t+"ms",c=2*Math.PI*i/n;return{r:5,style:{top:9*Math.sin(c)+"px",left:9*Math.cos(c)+"px","animation-delay":e}}}},circles:{dur:1e3,circles:8,fn:(t,i,n)=>{const e=i/n,c=t*e-t+"ms",o=2*Math.PI*e;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":c}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,i)=>({r:6,style:{left:9-9*i+"px","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,i,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":t*i/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,i,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":t*i/n-t+"ms"}})}}},NqGI:function(t,i,n){"use strict";n.d(i,"a",(function(){return e})),n.d(i,"b",(function(){return c}));const e=async(t,i,n,e,c)=>{if(t)return t.attachViewToDom(i,n,c,e);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?i.ownerDocument&&i.ownerDocument.createElement(n):n;return e&&e.forEach(t=>o.classList.add(t)),c&&Object.assign(o,c),i.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},c=(t,i)=>{if(i){if(t)return t.removeViewFromDom(i.parentElement,i);i.remove()}return Promise.resolve()}},PYW1:function(t,i,n){"use strict";n.d(i,"a",(function(){return r}));var e=n("ePDZ"),c=n("ItpF"),o=n("2c9M");const r=(t,i)=>{let n,r;const s=(t,e,c)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,e);o&&i(o)?o!==n&&(l(),a(o,c)):l()},a=(t,i)=>{n=t,r||(r=n);const c=n;Object(e.g)(()=>c.classList.add("ion-activated")),i()},l=(t=!1)=>{if(!n)return;const i=n;Object(e.g)(()=>i.classList.remove("ion-activated")),t&&r!==n&&n.click(),n=void 0};return Object(c.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>s(t.currentX,t.currentY,o.a),onMove:t=>s(t.currentX,t.currentY,o.b),onEnd:()=>{l(!0),Object(o.e)(),r=void 0}})}},hcCc:function(t,i,n){"use strict";n.d(i,"a",(function(){return c})),n.d(i,"b",(function(){return o})),n.d(i,"c",(function(){return e})),n.d(i,"d",(function(){return s}));const e=(t,i)=>null!==i.closest(t),c=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,["ion-color-"+t]:!0}:void 0,o=t=>{const i={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>i[t]=!0),i},r=/^[a-z][a-z0-9+\-.]*:/,s=async(t,i,n,e)=>{if(null!=t&&"#"!==t[0]&&!r.test(t)){const c=document.querySelector("ion-router");if(c)return null!=i&&i.preventDefault(),c.push(t,n,e)}return!1}},j1ZV:function(t,i,n){"use strict";n.d(i,"a",(function(){return o}));var e=n("ofXK"),c=n("fXoL");let o=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(i){return new(i||t)},imports:[[e.b]]}),t})()},lXt9:function(t,i,n){"use strict";n.d(i,"a",(function(){return l}));var e=n("fXoL"),c=n("ofXK");function o(t,i){if(1&t){const t=e.Pb();e.Ob(0,"div",17),e.Wb("click",(function(){e.fc(t);const i=e.Yb(2);return i.toggleAbilityTooltip(i.card.activeAbility)})),e.lc(1),e.Nb()}if(2&t){const t=e.Yb(2);e.zb(1),e.mc(t.card.activeAbility.text)}}function r(t,i){if(1&t){const t=e.Pb();e.Ob(0,"div",18),e.Wb("click",(function(){e.fc(t);const n=i.$implicit;return e.Yb(2).toggleAbilityTooltip(n)})),e.Mb(1,"ion-img",19),e.Ob(2,"div",20),e.lc(3),e.Nb(),e.Nb()}if(2&t){const t=i.$implicit;e.Bb("card-ability card-ability-",t.id,""),e.zb(1),e.cc("src",t.iconUrl),e.zb(2),e.nc(" ",t.cost," ")}}function s(t,i){if(1&t&&(e.Ob(0,"div",14),e.kc(1,o,2,1,"div",15),e.kc(2,r,4,5,"div",16),e.Nb()),2&t){const t=e.Yb();e.zb(1),e.bc("ngIf",t.card.showAbility),e.zb(1),e.bc("ngForOf",t.card.abilities)}}function a(t,i){if(1&t){const t=e.Pb();e.Ob(0,"div",21),e.Wb("click",(function(){e.fc(t);const i=e.Yb();return i.magnify(i.card)})),e.Mb(1,"ion-icon",22),e.Nb()}}let l=(()=>{class t{constructor(){this.showMagnify=!1,this.statIcons=["assets/icons/mov-w-t.png","assets/icons/btl-w-t.png","assets/icons/vit.png","assets/icons/cst-w-t.png"],this.statToIcons={hex:"assets/icons/hex.png"}}ngOnInit(){}toggleAbilityTooltip(t){for(let i=0;i<this.card.abilities.length;i++)this.card.abilities[i].id===t.id&&(this.card.showAbility?(this.card.showAbility=!1,this.card.activeAbility=this.card.abilities[i]):(this.card.showAbility=!0,this.card.activeAbility=this.card.abilities[i]));console.log(this.card)}magnify(t){this.board.cardModal(t)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Fb({type:t,selectors:[["app-card"]],inputs:{board:"board",card:"card",player:"player",width:"width",showMagnify:"showMagnify"},decls:24,vars:24,consts:[[1,"card-absolute-container"],[1,"card-stats"],[1,"card-stat-item","mov"],[3,"src"],[1,"stat-value"],[1,"card-stat-item","btl"],[1,"card-stat-item","vit"],["clickeable","",1,"card-stat-item","card-cost",3,"ngClass","click"],[1,"illustration"],[1,"illustration-circle",3,"src"],[1,"illustration-battler",3,"src"],["class","card-abilities",4,"ngIf"],[1,"card-title"],["class","magnify","clickeable","",3,"click",4,"ngIf"],[1,"card-abilities"],["class","ability-tooltip",3,"click",4,"ngIf"],[3,"class","click",4,"ngFor","ngForOf"],[1,"ability-tooltip",3,"click"],[3,"click"],[1,"ability-icon",3,"src"],[1,"ability-cost"],["clickeable","",1,"magnify",3,"click"],["name","search-outline"]],template:function(t,i){1&t&&(e.Ob(0,"div",0),e.Ob(1,"div"),e.Ob(2,"div",1),e.Ob(3,"div",2),e.Mb(4,"ion-img",3),e.Ob(5,"div",4),e.lc(6),e.Nb(),e.Nb(),e.Ob(7,"div",5),e.Mb(8,"ion-img",3),e.Ob(9,"div",4),e.lc(10),e.Nb(),e.Nb(),e.Ob(11,"div",6),e.Mb(12,"ion-img",3),e.Ob(13,"div",4),e.lc(14),e.Nb(),e.Nb(),e.Ob(15,"div",7),e.Wb("click",(function(){return i.board.castBg(i.player,i.card)})),e.lc(16),e.Nb(),e.Nb(),e.Ob(17,"div",8),e.Mb(18,"ion-img",9),e.Mb(19,"ion-img",10),e.Nb(),e.kc(20,s,3,2,"div",11),e.Ob(21,"div",12),e.lc(22),e.Nb(),e.kc(23,a,2,0,"div",13),e.Nb(),e.Nb()),2&t&&(e.jc("\n  width:",i.width,"px;\n  height:",1.5*i.width,"px;\n"),e.zb(1),e.jc("\n    background-image:url(",i.card.backgroundUrl,");\n    transform: scale(calc( ",i.width," / 500));\n  "),e.Bb("card-outer ",i.card.classes.join(" "),""),e.zb(3),e.cc("src",i.statIcons[0]),e.zb(2),e.nc("",i.card.mov," "),e.zb(2),e.cc("src",i.statIcons[1]),e.zb(2),e.nc("",i.card.btl," "),e.zb(2),e.cc("src",i.statIcons[2]),e.zb(2),e.nc("",i.card.vit," "),e.zb(1),e.bc("ngClass",i.card.canCast?"can-cast":""),e.zb(1),e.nc(" ",i.card.cost," "),e.zb(2),e.cc("src",i.card.circleUrl),e.zb(1),e.cc("src",i.card.battlerUrl),e.zb(1),e.bc("ngIf",i.card.abilities),e.zb(2),e.mc(i.card.title),e.zb(1),e.bc("ngIf",i.showMagnify))},directives:[c.h,c.j,c.i],styles:[".card-outer[_ngcontent-%COMP%]{width:500px;height:750px;border:10px solid #fff;overflow:hidden;flex-direction:column;border-radius:10px;position:absolute}.card-outer[_ngcontent-%COMP%], .card-stats[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center}.card-stats[_ngcontent-%COMP%]{width:100%;height:125px}.card-stats[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:62.5px;border:3px solid #fff;border-radius:5px;background-color:#000}.card-ability[_ngcontent-%COMP%], .card-stat-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;align-items:center;height:120px;width:90px;font-size:2em;padding:10px 12px;border-radius:5px}.card-stat-item[_ngcontent-%COMP%]{background-color:#131313}.card-ability[_ngcontent-%COMP%]{background-color:#2d3e48}.illustration[_ngcontent-%COMP%]{width:75%;display:flex;justify-content:center;align-items:center}.illustration[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:100%}.illustration-battler[_ngcontent-%COMP%]{-webkit-filter:drop-shadow(0 0 10px #fff);filter:drop-shadow(0 0 10px white)}.card-abilities[_ngcontent-%COMP%]{width:100%;height:125px;display:flex;justify-content:space-around;align-items:center}.card-ability[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:62.5px;border:3px solid #fff;border-radius:5px}.card-title[_ngcontent-%COMP%]{top:0;left:0;letter-spacing:2px;font-size:1.4em;width:95%;margin:2.5%;background-color:rgba(0,0,0,.4);padding:10px;text-align:center;border-radius:10px;border:1px solid #000}.stat-value[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-top:10px}.card-absolute-container[_ngcontent-%COMP%]{border:1px solid purple;display:flex;justify-content:center;align-items:center;position:relative}.illustration-circle[_ngcontent-%COMP%]{position:absolute;width:70%}.can-cast[_ngcontent-%COMP%]{background-color:#32b3e2}.ability-tooltip[_ngcontent-%COMP%]{position:absolute;background-color:rgba(0,0,0,.8);width:100%;padding:20px;top:auto;opacity:1;visibility:visible;transition:.3s}.ability-tooltip.hidden[_ngcontent-%COMP%]{visibility:hidden;opacity:0;top:100%}.card-cost[_ngcontent-%COMP%]{font-size:4em}.magnify[_ngcontent-%COMP%]{width:100px;height:100px;background-color:#000;position:absolute;bottom:215px;right:17px;font-size:3em;display:flex;justify-content:center;align-items:center;border-radius:100%;border:5px solid #fff}"]}),t})()}}]);