(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,n,i){"use strict";i.d(n,"a",(function(){return o})),i.d(n,"b",(function(){return r})),i.d(n,"c",(function(){return c})),i.d(n,"d",(function(){return s})),i.d(n,"e",(function(){return a}));const e={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const n=this.getEngine();if(!n)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:i})},notification(t){const n=this.getEngine();if(!n)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:i})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},c=()=>{e.selection()},o=()=>{e.selectionStart()},r=()=>{e.selectionChanged()},a=()=>{e.selectionEnd()},s=t=>{e.impact(t)}},"6i10":function(t,n,i){"use strict";i.d(n,"a",(function(){return e}));const e={bubbles:{dur:1e3,circles:9,fn:(t,n,i)=>{const e=t*n/i-t+"ms",c=2*Math.PI*n/i;return{r:5,style:{top:9*Math.sin(c)+"px",left:9*Math.cos(c)+"px","animation-delay":e}}}},circles:{dur:1e3,circles:8,fn:(t,n,i)=>{const e=n/i,c=t*e-t+"ms",o=2*Math.PI*e;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":c}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,n)=>({r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,n,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/i-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,n,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/i-t+"ms"}})}}},NqGI:function(t,n,i){"use strict";i.d(n,"a",(function(){return e})),i.d(n,"b",(function(){return c}));const e=async(t,n,i,e,c)=>{if(t)return t.attachViewToDom(n,i,c,e);if("string"!=typeof i&&!(i instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof i?n.ownerDocument&&n.ownerDocument.createElement(i):i;return e&&e.forEach(t=>o.classList.add(t)),c&&Object.assign(o,c),n.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},c=(t,n)=>{if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},PYW1:function(t,n,i){"use strict";i.d(n,"a",(function(){return r}));var e=i("ePDZ"),c=i("ItpF"),o=i("2c9M");const r=(t,n)=>{let i,r;const a=(t,e,c)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,e);o&&n(o)?o!==i&&(l(),s(o,c)):l()},s=(t,n)=>{i=t,r||(r=i);const c=i;Object(e.g)(()=>c.classList.add("ion-activated")),n()},l=(t=!1)=>{if(!i)return;const n=i;Object(e.g)(()=>n.classList.remove("ion-activated")),t&&r!==i&&i.click(),i=void 0};return Object(c.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,o.a),onMove:t=>a(t.currentX,t.currentY,o.b),onEnd:()=>{l(!0),Object(o.e)(),r=void 0}})}},hcCc:function(t,n,i){"use strict";i.d(n,"a",(function(){return c})),i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return e})),i.d(n,"d",(function(){return a}));const e=(t,n)=>null!==n.closest(t),c=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,["ion-color-"+t]:!0}:void 0,o=t=>{const n={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>n[t]=!0),n},r=/^[a-z][a-z0-9+\-.]*:/,a=async(t,n,i,e)=>{if(null!=t&&"#"!==t[0]&&!r.test(t)){const c=document.querySelector("ion-router");if(c)return null!=n&&n.preventDefault(),c.push(t,i,e)}return!1}},j1ZV:function(t,n,i){"use strict";i.d(n,"a",(function(){return o}));var e=i("ofXK"),c=i("fXoL");let o=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(n){return new(n||t)},imports:[[e.b]]}),t})()},lXt9:function(t,n,i){"use strict";i.d(n,"a",(function(){return b}));var e=i("m/Q0"),c=i("fXoL"),o=i("ofXK");function r(t,n){if(1&t&&(c.Ob(0,"div",17),c.Mb(1,"ion-img",10),c.Nb()),2&t){const t=n.$implicit,i=c.Yb();c.zb(1),c.cc("src",i.dice.getAttrImage(t))}}function a(t,n){if(1&t){const t=c.Pb();c.Ob(0,"div",21),c.Wb("click",(function(){c.hc(t);const n=c.Yb(2);return n.toggleAbilityTooltip(n.card.activeAbility)})),c.pc(1),c.Nb()}if(2&t){const t=c.Yb(2);c.zb(1),c.qc(t.card.activeAbility.text)}}function s(t,n){if(1&t){const t=c.Pb();c.Ob(0,"div",22),c.Wb("click",(function(){c.hc(t);const i=n.$implicit;return c.Yb(2).toggleAbilityTooltip(i)})),c.Mb(1,"ion-img",23),c.Nb()}if(2&t){const t=n.$implicit;c.Bb("card-ability card-ability-",t.id,""),c.zb(1),c.cc("src",t.iconUrl)}}function l(t,n){if(1&t&&(c.Ob(0,"div",18),c.oc(1,a,2,1,"div",19),c.oc(2,s,2,4,"div",20),c.Nb()),2&t){const t=c.Yb();c.zb(1),c.bc("ngIf",t.card.showAbility),c.zb(1),c.bc("ngForOf",t.card.abilities)}}function d(t,n){if(1&t){const t=c.Pb();c.Ob(0,"div",15),c.Wb("click",(function(){c.hc(t);const n=c.Yb();return n.board.castBg(n.player,n.card)})),c.pc(1,"Cast"),c.Nb()}}let b=(()=>{class t{constructor(){this.innerAlign="space-evenly",this.disableMenu="flex",this.dice=new e.Dice(0),this.showMagnify=!1,this.statIcons=["assets/icons/mov-w-t.png","assets/icons/btl-w-t.png","assets/icons/vit.png","assets/icons/cst-w-t.png"],this.statToIcons={hex:"assets/icons/hex.png"}}ngOnInit(){}toggleAbilityTooltip(t){for(let n=0;n<this.card.abilities.length;n++)this.card.abilities[n].id===t.id&&(this.card.showAbility?(this.card.showAbility=!1,this.card.activeAbility=this.card.abilities[n]):(this.card.showAbility=!0,this.card.activeAbility=this.card.abilities[n]));console.log(this.card)}magnify(t){new e.DGAudio("assets/audio/card-view.mp3").play(),this.board.cardModal(t)}pad(t,n=2){let i=t+"";for(;i.length<n;)i="0"+i;return i}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Fb({type:t,selectors:[["app-card"]],inputs:{board:"board",card:"card",player:"player",width:"width",innerAlign:"innerAlign",disableMenu:"disableMenu",showMagnify:"showMagnify"},decls:27,vars:27,consts:[[1,"card-absolute-container"],[1,"card-title"],[1,"card-cost-container"],["class","cost-item",4,"ngFor","ngForOf"],[1,"illustration"],[1,"illustration-circle",3,"src"],[1,"illustration-battler",3,"src"],["class","card-abilities",4,"ngIf"],[1,"card-stats"],[1,"card-stat-item","mov"],[3,"src"],[1,"stat-value"],[1,"card-stat-item","btl"],[1,"card-stat-item","vit"],[1,"board-card-menu"],[1,"menu-item",3,"click"],["class","menu-item",3,"click",4,"ngIf"],[1,"cost-item"],[1,"card-abilities"],["class","ability-tooltip",3,"click",4,"ngIf"],[3,"class","click",4,"ngFor","ngForOf"],[1,"ability-tooltip",3,"click"],[3,"click"],[1,"ability-icon",3,"src"]],template:function(t,n){1&t&&(c.Ob(0,"div",0),c.Ob(1,"div"),c.Ob(2,"div",1),c.pc(3),c.Nb(),c.Ob(4,"div",2),c.oc(5,r,2,1,"div",3),c.Nb(),c.Ob(6,"div",4),c.Mb(7,"ion-img",5),c.Mb(8,"ion-img",6),c.Nb(),c.oc(9,l,3,2,"div",7),c.Ob(10,"div",8),c.Ob(11,"div",9),c.Mb(12,"ion-img",10),c.Ob(13,"div",11),c.pc(14),c.Nb(),c.Nb(),c.Ob(15,"div",12),c.Mb(16,"ion-img",10),c.Ob(17,"div",11),c.pc(18),c.Nb(),c.Nb(),c.Ob(19,"div",13),c.Mb(20,"ion-img",10),c.Ob(21,"div",11),c.pc(22),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Ob(23,"div",14),c.Ob(24,"div",15),c.Wb("click",(function(){return n.magnify(n.card)})),c.pc(25,"View"),c.Nb(),c.oc(26,d,2,0,"div",16),c.Nb(),c.Nb()),2&t&&(c.lc("\n  width:",n.width,"px;\n  height:",1.5*n.width,"px;\n"),c.zb(1),c.mc("\n    background-image:url(",n.card.backgroundUrl,");\n    transform: scale(calc( ",n.width," / 500));\n    justify-content: ",n.innerAlign,"\n  "),c.Bb("card-outer ",n.card.classes.join(" "),""),c.zb(2),c.qc(n.card.title),c.zb(2),c.bc("ngForOf",n.card.cost),c.zb(2),c.cc("src",n.card.getCircleUrl()),c.zb(1),c.cc("src",n.card.getBattlerUrl()),c.zb(1),c.bc("ngIf",n.card.abilities.length>0),c.zb(3),c.cc("src",n.statIcons[0]),c.zb(2),c.rc("",n.pad(n.card.mov)," "),c.zb(2),c.cc("src",n.statIcons[1]),c.zb(2),c.rc("",n.pad(n.card.btl)," "),c.zb(2),c.cc("src",n.statIcons[2]),c.zb(2),c.rc("",n.pad(n.card.vit)," "),c.zb(1),c.kc("display:",n.disableMenu,""),c.zb(3),c.bc("ngIf",!n.card.owner.hasCasted))},directives:[o.i,o.j],styles:[".card-outer[_ngcontent-%COMP%]{width:500px;height:750px;border:10px solid #fff;overflow:hidden;flex-direction:column;border-radius:10px;position:absolute}.card-outer[_ngcontent-%COMP%], .card-stats[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;align-items:center}.card-stats[_ngcontent-%COMP%]{width:100%;height:auto;margin-bottom:20px}.card-ability[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%], .card-stats[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:62.5px;border:3px solid #fff;border-radius:5px;background-color:#000}.card-ability[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:80%;height:80%}.card-stat-item[_ngcontent-%COMP%]{justify-content:space-between;width:140px;padding:10px 12px}.card-ability[_ngcontent-%COMP%], .card-stat-item[_ngcontent-%COMP%]{display:flex;align-items:center;height:80px;font-size:2em;border-radius:5px}.card-ability[_ngcontent-%COMP%]{justify-content:center;width:80px;border-bottom:5px solid #fff;background-color:hsla(0,0%,100%,.3)}.card-stat-item[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.4);border-bottom:5px solid #000}.card-stat-item.mov[_ngcontent-%COMP%]{top:-40px;left:-40px}.card-stat-item.btl[_ngcontent-%COMP%]{top:-40px;left:110px}.card-stat-item.vit[_ngcontent-%COMP%]{top:-40px;right:-40px}.card-stat-item.card-cost[_ngcontent-%COMP%]{top:-40px;right:-40px;display:flex;justify-content:flex-end;align-items:center}.illustration[_ngcontent-%COMP%]{width:75%;display:flex;justify-content:center;align-items:center;position:relative;margin-top:40px;margin-bottom:0}.illustration[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:100%}.illustration-battler[_ngcontent-%COMP%]{-webkit-filter:drop-shadow(0 0 10px #fff);filter:drop-shadow(0 0 10px white)}.card-abilities[_ngcontent-%COMP%]{width:100%;height:125px;display:flex;justify-content:space-around;align-items:center}.card-title[_ngcontent-%COMP%]{top:0;left:0;letter-spacing:2px;font-size:1.4em;width:95%;margin:2.5%;background-color:rgba(0,0,0,.4);padding:10px;text-align:center;border-radius:10px;border-bottom:10px solid #000}.card-cost-container[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;align-items:center;width:95%;margin-left:2.5%}.card-cost-container[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:40px;width:40px}.stat-value[_ngcontent-%COMP%]{width:40%;height:100%}.card-absolute-container[_ngcontent-%COMP%], .stat-value[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.card-absolute-container[_ngcontent-%COMP%]{position:relative}.illustration-circle[_ngcontent-%COMP%]{position:absolute;width:70%}.can-cast[_ngcontent-%COMP%]{background-color:#32b3e2}.ability-tooltip[_ngcontent-%COMP%]{position:absolute;background-color:rgba(0,0,0,.8);width:100%;padding:20px;top:auto;opacity:1;visibility:visible;transition:.3s}.ability-tooltip.hidden[_ngcontent-%COMP%]{visibility:hidden;opacity:0;top:100%}.card-cost[_ngcontent-%COMP%]{opacity:0;font-size:4em}.magnify[_ngcontent-%COMP%]{width:100px;height:100px;background-color:#000;position:absolute;top:0;left:0;font-size:3em;display:flex;justify-content:center;align-items:center;border-radius:100%;border:5px solid #fff}.card-stat-item[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:60px;width:60px;margin-right:10px}.cost-item[_ngcontent-%COMP%]{width:50px;height:50px;background-color:#fff;display:flex;justify-content:center;align-items:center;border-radius:100%;box-shadow:0 0 20px #fff}.cost-item[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{border-radius:100%;overflow:hidden}.illustration-circle[_ngcontent-%COMP%]{width:130%!important}.board-card-menu[_ngcontent-%COMP%]{top:0;position:absolute;width:100%;height:200px;left:0;background-color:transparent;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;transition:.3s}.board-card-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{width:80%;background-color:#37474f;border:1px solid #78909c;border-bottom-color:#607d8b;display:flex;justify-content:center;align-items:center;opacity:0}.board-card-menu[_ngcontent-%COMP%]:hover{top:-50px}.board-card-menu[_ngcontent-%COMP%]:hover   .menu-item[_ngcontent-%COMP%]{opacity:1}.menu-item.disabled[_ngcontent-%COMP%]{background-color:#78909c;border:1px solid #37474f}"]}),t})()}}]);