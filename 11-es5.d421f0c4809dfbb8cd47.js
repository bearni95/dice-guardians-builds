function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1+Ht":function(t,n,e){"use strict";e.r(n),e.d(n,"BattlefieldPageModule",(function(){return W}));var i,o=e("ofXK"),c=e("3Pt+"),r=e("TEn/"),a=e("tyNb"),l=e("fXoL"),s=e("Sjme"),d=((i=function(){function t(){_classCallCheck(this,t),this.monitorTitle="Your turn begins",this.monitorText="Pick 3 dice"}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=l.Fb({type:i,selectors:[["app-game-monitor"]],inputs:{board:"board"},decls:20,vars:4,consts:[[1,"scoreboard"],[1,"score-blue","score"],["color","outline"],["color","secondary"],[1,"score-red","score"],["color","danger"],[1,"monitor"]],template:function(t,n){1&t&&(l.Ob(0,"div",0),l.Ob(1,"div",1),l.Ob(2,"ion-chip"),l.Ob(3,"ion-label",2),l.lc(4,"CPU"),l.Nb(),l.Nb(),l.Ob(5,"ion-chip"),l.Ob(6,"ion-label",3),l.lc(7),l.Nb(),l.Nb(),l.Nb(),l.Ob(8,"div",4),l.Ob(9,"ion-chip"),l.Ob(10,"ion-label",2),l.lc(11,"Player"),l.Nb(),l.Nb(),l.Ob(12,"ion-chip"),l.Ob(13,"ion-label",5),l.lc(14),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Ob(15,"div",6),l.Ob(16,"h1"),l.lc(17),l.Nb(),l.Ob(18,"p"),l.lc(19),l.Nb(),l.Nb()),2&t&&(l.zb(7),l.nc("",n.board.players.blue.score," points"),l.zb(7),l.nc("",n.board.players.blue.score," points"),l.zb(3),l.mc(n.monitorTitle),l.zb(2),l.mc(n.monitorText))},styles:[".score[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center}ion-chip[_ngcontent-%COMP%]{width:45%}.monitor[_ngcontent-%COMP%], ion-label[_ngcontent-%COMP%]{width:100%;text-align:center}.monitor[_ngcontent-%COMP%]{display:flex;flex-direction:column;border-top:1px solid #fff;border-bottom:1px solid #fff;margin:20px 0;padding:10px}"]}),i);function b(t,n){if(1&t&&(l.Ob(0,"ion-card-stat"),l.Ob(1,"ion-label"),l.Ob(2,"ion-card-stat-value"),l.lc(3),l.Nb(),l.Nb(),l.Ob(4,"div",1),l.Mb(5,"ion-img",2),l.Nb(),l.Ob(6,"ion-label"),l.Ob(7,"ion-card-stat-value"),l.lc(8),l.Nb(),l.Nb(),l.Nb()),2&t){var e=n.$implicit,i=l.Yb();l.zb(3),l.mc(i.board.players.blue.edgePool[e]),l.zb(2),l.cc("src",i.board.players.red.edgePool.faces[e]),l.zb(3),l.mc(i.board.players.red.edgePool[e])}}var g,p,f=((g=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||g)},g.\u0275cmp=l.Fb({type:g,selectors:[["app-edge-pool"]],inputs:{board:"board"},decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"edge-icon"],[3,"src"]],template:function(t,n){1&t&&(l.Ob(0,"ion-edge-pool"),l.kc(1,b,9,3,"ion-card-stat",0),l.Nb()),2&t&&(l.zb(1),l.bc("ngForOf",n.board.players.blue.edgePool.stats))},directives:[o.h],styles:["ion-edge-pool[_ngcontent-%COMP%]{display:flex;margin:20px 0}ion-card-stat-value[_ngcontent-%COMP%]{width:100%;display:block;height:-webkit-max-content;height:-moz-max-content;height:max-content;font-size:2em;text-align:center}"]}),g),u=e("m/Q0"),O=((p=function(){function t(){_classCallCheck(this,t),this.ranks=[["1","2","3","4","5","6"],["CST2","CST2","CST2","CST","MOV","BTL"],["CST2","CST2","CST","MOV","BTL2","HEX"],["CST2","CST","HEX","HEX2","HEX3","MOV2"],["BTL","BTL","BTL2","BTL2","BTL3","HEX2"],["MOV","MOV","MOV2","MOV2","MOV3","BTL2"]],this.d6={CST:"/assets/dice/d6fcst.png",CST2:"/assets/dice/d6fcst2.png",MOV:"/assets/dice/d6fmov.png",MOV2:"/assets/dice/d6fmov2.png",MOV3:"/assets/dice/d6fmov3.png",BTL:"/assets/dice/d6fbtl.png",BTL2:"/assets/dice/d6fbtl2.png",BTL3:"/assets/dice/d6fbtl3.png",HEX:"/assets/dice/d6fhex.png",HEX2:"/assets/dice/d6fhex2.png",HEX3:"/assets/dice/d6fhex3.png"},this.colors=["","#2e7345","#b32d91","#2d4eb3","#562e73","#e57e3a"]}return _createClass(t,[{key:"ngOnInit",value:function(){this.dice.setCtx(this)}}]),t}()).\u0275fac=function(t){return new(t||p)},p.\u0275cmp=l.Fb({type:p,selectors:[["app-dice"]],inputs:{dice:"dice"},decls:8,vars:27,consts:[[1,"view"],[1,"diceFace","front"],[1,"diceFace","right"],[1,"diceFace","back"],[1,"diceFace","left"],[1,"diceFace","top"],[1,"diceFace","bottom"]],template:function(t,n){1&t&&(l.Ob(0,"div",0),l.Ob(1,"div"),l.Mb(2,"div",1),l.Mb(3,"div",2),l.Mb(4,"div",3),l.Mb(5,"div",4),l.Mb(6,"div",5),l.Mb(7,"div",6),l.Nb(),l.Nb()),2&t&&(l.zb(1),l.Bb("dice ",n.dice.rolledFaceClass,""),l.zb(1),l.jc("\n            background-color:",n.colors[n.dice.rank],";\n            background-image:url('",n.d6[n.ranks[n.dice.rank][0]],"')\n          "),l.zb(1),l.jc("\n            background-color:",n.colors[n.dice.rank],";\n            background-image:url('",n.d6[n.ranks[n.dice.rank][1]],"')\n          "),l.zb(1),l.jc("\n            background-color:",n.colors[n.dice.rank],";\n            background-image:url('",n.d6[n.ranks[n.dice.rank][2]],"')\n          "),l.zb(1),l.jc("\n            background-color:",n.colors[n.dice.rank],";\n            background-image:url('",n.d6[n.ranks[n.dice.rank][3]],"')\n          "),l.zb(1),l.jc("\n            background-color:",n.colors[n.dice.rank],";\n            background-image:url('",n.d6[n.ranks[n.dice.rank][4]],"')\n          "),l.zb(1),l.jc("\n            background-color:",n.colors[n.dice.rank],";\n            background-image:url('",n.d6[n.ranks[n.dice.rank][5]],"')\n          "))},styles:[".view[_ngcontent-%COMP%]{margin:25px;perspective:150px}.dice[_ngcontent-%COMP%], .view[_ngcontent-%COMP%]{width:50px;height:50px}.dice[_ngcontent-%COMP%]{position:relative;transform-style:preserve-3d;transition:transform .5s}.dice-front[_ngcontent-%COMP%]{transform:rotateY(1turn)!important}.dice-right[_ngcontent-%COMP%]{transform:rotateY(-90deg)!important}.dice-back[_ngcontent-%COMP%]{transform:rotateY(180deg)!important}.dice-left[_ngcontent-%COMP%]{transform:rotateY(90deg)!important}.dice-top[_ngcontent-%COMP%]{transform:rotateX(-90deg)!important}.dice-bottom[_ngcontent-%COMP%]{transform:rotateX(90deg)!important}.btnFront[_ngcontent-%COMP%]:checked ~ .view[_ngcontent-%COMP%] > .dice[_ngcontent-%COMP%]{transform:rotateY(1turn)!important}.btnRight[_ngcontent-%COMP%]:checked ~ .view[_ngcontent-%COMP%] > .dice[_ngcontent-%COMP%]{transform:rotateY(-90deg)!important}.btnBack[_ngcontent-%COMP%]:checked ~ .view[_ngcontent-%COMP%] > .dice[_ngcontent-%COMP%]{transform:rotateY(180deg)!important}.btnLeft[_ngcontent-%COMP%]:checked ~ .view[_ngcontent-%COMP%] > .dice[_ngcontent-%COMP%]{transform:rotateY(90deg)!important}.btnTop[_ngcontent-%COMP%]:checked ~ .view[_ngcontent-%COMP%] > .dice[_ngcontent-%COMP%]{transform:rotateX(-90deg)!important}.btnBottom[_ngcontent-%COMP%]:checked ~ .view[_ngcontent-%COMP%] > .dice[_ngcontent-%COMP%]{transform:rotateX(90deg)!important}.diceFace[_ngcontent-%COMP%]{position:absolute;width:50px;height:50px;text-align:center;line-height:50px;font-size:1.2em;border:2px solid #fff;background-size:cover}.front[_ngcontent-%COMP%]{background-color:rgba(255,0,0,.6);transform:rotateY(0deg) translateZ(25px)}.right[_ngcontent-%COMP%]{background-color:rgba(0,255,0,.6);transform:rotateY(90deg) translateZ(25px)}.back[_ngcontent-%COMP%]{background-color:rgba(255,255,0,.6);transform:rotateY(180deg) translateZ(25px)}.left[_ngcontent-%COMP%]{background-color:rgba(255,0,255,.6);transform:rotateY(-90deg) translateZ(25px)}.top[_ngcontent-%COMP%]{background-color:rgba(0,255,255,.6);transform:rotateX(90deg) translateZ(25px)}.bottom[_ngcontent-%COMP%]{transform:rotateX(-90deg) translateZ(25px)}span[_ngcontent-%COMP%]{display:inline-block;padding:4px 10px;margin:3px;background-color:#0aa;border:2px inset #dd0}.test[_ngcontent-%COMP%]:checked + .test2[_ngcontent-%COMP%]{display:block;width:80px;background-color:#0aa}input[type=radio][_ngcontent-%COMP%]{transform:scale(2);margin:10px;color:red}"]}),p);function h(t,n){if(1&t&&(l.Ob(0,"div",10),l.Mb(1,"ion-img",11),l.Nb()),2&t){var e=n.$implicit,i=l.Yb(2);l.zb(1),l.cc("src",i.d6[e])}}function m(t,n){if(1&t&&(l.Ob(0,"div"),l.kc(1,h,2,1,"div",9),l.Nb()),2&t){var e=n.$implicit;l.Bb("dice-info-lvl-",n.index+1," dice-info-lvl"),l.zb(1),l.bc("ngForOf",e)}}function C(t,n){if(1&t){var e=l.Pb();l.Ob(0,"ion-dice",12),l.Wb("click",(function(){l.fc(e);var t=n.$implicit;return l.Yb().player.pickDice(t)})),l.Nb()}2&t&&l.Bb("dice-lvl dice-lvl-",n.$implicit.rank,"")}function v(t,n){if(1&t){var e=l.Pb();l.Ob(0,"app-dice",13),l.Wb("click",(function(){l.fc(e);var t=n.index;return l.Yb().player.unpickDice(t)})),l.Nb()}2&t&&l.bc("dice",n.$implicit)}var k,M=((k=function(){function t(){_classCallCheck(this,t),this.showDiceInfo="none",this.turnText="end turn",this.ranks=[["CST2","CST2","CST2","CST","MOV","BTL"],["CST2","CST2","CST","MOV","BTL2","HEX"],["CST2","CST","HEX","HEX2","HEX3","MOV2"],["BTL","BTL","BTL2","BTL2","BTL3","HEX2"],["MOV","MOV","MOV2","MOV2","MOV3","BTL2"]],this.d6={CST:"assets/dice/d6fcst.png",CST2:"assets/dice/d6fcst2.png",MOV:"assets/dice/d6fmov.png",MOV2:"assets/dice/d6fmov2.png",MOV3:"assets/dice/d6fmov3.png",BTL:"assets/dice/d6fbtl.png",BTL2:"assets/dice/d6fbtl2.png",BTL3:"assets/dice/d6fbtl3.png",HEX:"assets/dice/d6fhex.png",HEX2:"assets/dice/d6fhex2.png",HEX3:"assets/dice/d6fhex3.png"},this.dicePool=[];for(var n=0;n<5;n++)this.dicePool.push(new u.Dice(n+1))}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"toggleDiceExplanation",value:function(){this.showDiceInfo="none"===this.showDiceInfo?"flex":"none"}},{key:"selectDice",value:function(t){this.player.dice.push(t)}}]),t}()).\u0275fac=function(t){return new(t||k)},k.\u0275cmp=l.Fb({type:k,selectors:[["app-dice-pool"]],inputs:{player:"player"},decls:16,vars:9,consts:[[1,"dice-pool"],["color","primary",1,"bigBtn",3,"click"],[1,"dice-info-container"],[1,"dice-info"],[3,"class",4,"ngFor","ngForOf"],[3,"class","click",4,"ngFor","ngForOf"],[3,"dice","click",4,"ngFor","ngForOf"],[1,"bigBtn",3,"color","click"],["is-turn-btn","true",1,"bigBtn",3,"color","click"],["class","dice-info-face",4,"ngFor","ngForOf"],[1,"dice-info-face"],[3,"src"],[3,"click"],[3,"dice","click"]],template:function(t,n){1&t&&(l.Ob(0,"div",0),l.Ob(1,"ion-button",1),l.Wb("click",(function(){return n.toggleDiceExplanation()})),l.lc(2,"?"),l.Nb(),l.Ob(3,"div",2),l.Ob(4,"div",3),l.lc(5," Dice faces per rank "),l.kc(6,m,2,4,"div",4),l.Nb(),l.Nb(),l.Ob(7,"ion-dice-area"),l.Ob(8,"ion-dice-pool"),l.kc(9,C,1,3,"ion-dice",5),l.Nb(),l.Ob(10,"ion-selected-dices"),l.kc(11,v,1,1,"app-dice",6),l.Nb(),l.Nb(),l.Ob(12,"ion-button",7),l.Wb("click",(function(){return n.player.rollDice()})),l.lc(13,"Roll"),l.Nb(),l.Ob(14,"ion-button",8),l.Wb("click",(function(){return n.player.endTurn()})),l.lc(15),l.Nb(),l.Nb()),2&t&&(l.zb(4),l.ic("display:",n.showDiceInfo,""),l.zb(2),l.bc("ngForOf",n.ranks),l.zb(3),l.bc("ngForOf",n.dicePool),l.zb(2),l.bc("ngForOf",n.player.dice),l.zb(1),l.cc("color",n.player.__rollButtonColor),l.zb(2),l.cc("color",n.player.__turnChange),l.zb(1),l.mc(n.turnText))},directives:[o.h,O],styles:[".dice-info-container[_ngcontent-%COMP%]{width:100%;position:relative}.dice-info[_ngcontent-%COMP%]{position:absolute;width:100%;left:100%;padding:10px;background-color:#121212;color:#fff;flex-direction:column;border-radius:10px;border:1px solid #000}.dice-info[_ngcontent-%COMP%], .dice-info-lvl[_ngcontent-%COMP%]{display:flex}.dice-info-lvl-1[_ngcontent-%COMP%], .dice-lvl-1[_ngcontent-%COMP%]{background-color:#2e7345}.dice-info-lvl-2[_ngcontent-%COMP%], .dice-lvl-2[_ngcontent-%COMP%]{background-color:#b32d91}.dice-info-lvl-3[_ngcontent-%COMP%], .dice-lvl-3[_ngcontent-%COMP%]{background-color:#2d4eb3}.dice-info-lvl-4[_ngcontent-%COMP%], .dice-lvl-4[_ngcontent-%COMP%]{background-color:#562e73}.dice-info-lvl-5[_ngcontent-%COMP%], .dice-lvl-5[_ngcontent-%COMP%]{background-color:#e57e3a}.dice-info-face[_ngcontent-%COMP%]{border:1px solid #fff}ion-dice-area[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;width:100%;flex-direction:column}.dice-pool[_ngcontent-%COMP%], ion-dice-pool[_ngcontent-%COMP%]{display:flex}.dice-pool[_ngcontent-%COMP%]{flex-direction:column}.dice-lvl[_ngcontent-%COMP%]{width:50px;height:50px;border:3px solid #fff;border-radius:7px;margin:3px}ion-selected-dices[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%}"]}),k);function x(t,n){if(1&t){var e=l.Pb();l.Ob(0,"div",8),l.Wb("click",(function(){return l.fc(e),l.Yb().$implicit.click()})),l.Nb()}}function w(t,n){if(1&t&&(l.Ob(0,"div",6),l.kc(1,x,1,0,"div",7),l.Nb()),2&t){var e=n.$implicit;l.Cb("cell ",e.classes.join(" ")," x-",e.x," y-",e.y,""),l.zb(1),l.bc("ngIf",!0===e._canClick)}}var _=function(t){return[t]};function P(t,n){if(1&t&&(l.Ob(0,"div",4),l.kc(1,w,2,6,"div",5),l.Nb()),2&t){var e=n.$implicit,i=l.Yb().$implicit,o=l.Yb();l.Bb("y-",e,""),l.zb(1),l.bc("ngForOf",l.dc(4,_,o.lib.board.getCell(i,e)))}}function y(t,n){if(1&t&&(l.Ob(0,"div",2),l.kc(1,P,2,6,"div",3),l.Nb()),2&t){var e=n.$implicit,i=l.Yb();l.Bb("x-",e,""),l.zb(1),l.bc("ngForOf",i.lib.board.rows)}}var N,z=((N=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){console.log(this.lib)}}]),t}()).\u0275fac=function(t){return new(t||N)},N.\u0275cmp=l.Fb({type:N,selectors:[["app-board"]],inputs:{lib:"lib"},decls:2,vars:1,consts:[[1,"ion-play-area"],["class","ion-play-row",3,"class",4,"ngFor","ngForOf"],[1,"ion-play-row"],["class","ion-play-col",3,"class",4,"ngFor","ngForOf"],[1,"ion-play-col"],["class","ion-play-cell",3,"class",4,"ngFor","ngForOf"],[1,"ion-play-cell"],["class","cell-click-area",3,"click",4,"ngIf"],[1,"cell-click-area",3,"click"]],template:function(t,n){1&t&&(l.Ob(0,"div",0),l.kc(1,y,2,4,"div",1),l.Nb()),2&t&&(l.zb(1),l.bc("ngForOf",n.lib.board.cols))},directives:[o.h,o.i],styles:[".ion-play-row[_ngcontent-%COMP%]{width:100%}.ion-play-cell[_ngcontent-%COMP%], .ion-play-row[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.ion-play-cell[_ngcontent-%COMP%]{font-size:1.5em;font-weight:700;width:50px;height:50px;margin:3px;color:#fff;border-radius:5px;border:1px solid #000;transition:.1s;background-image:url(/assets/textures/gray-mat.png);background-size:cover}.player-tile[_ngcontent-%COMP%]{background-image:url(/assets/textures/stone-orange.png);background-size:cover}.rival-tile[_ngcontent-%COMP%]{background-image:url(/assets/textures/stone-blue.png);background-size:cover}.victory-tile[_ngcontent-%COMP%]{background-image:url(/assets/textures/exit-gate.png);background-size:cover}.wall-tile[_ngcontent-%COMP%]{background-image:url(/assets/textures/wall-tile.png);background-size:cover;background-color:#545651}.neutral-tile[_ngcontent-%COMP%]{background-image:url(/assets/textures/neutral-tile.png);background-size:cover}"]}),N);function T(t,n){if(1&t){var e=l.Pb();l.Ob(0,"div",16),l.Wb("click",(function(){l.fc(e);var t=n.$implicit;return l.Yb(2).toggleAbilityTooltip(t)})),l.Mb(1,"ion-img",17),l.Ob(2,"div"),l.lc(3),l.Nb(),l.Ob(4,"div",18),l.lc(5),l.Nb(),l.Nb()}if(2&t){var i=n.$implicit;l.Bb("card-ability card-ability-",i.id,""),l.zb(1),l.cc("src",i.iconUrl),l.zb(1),l.Bb("ability-tooltip ",i.hidden,""),l.zb(1),l.mc(i.text),l.zb(2),l.nc(" ",i.cost," ")}}function F(t,n){if(1&t&&(l.Ob(0,"div",14),l.kc(1,T,6,9,"div",15),l.Nb()),2&t){var e=l.Yb();l.zb(1),l.bc("ngForOf",e.card.abilities)}}var B,j,Y=((j=function(){function t(){_classCallCheck(this,t),this.statIcons=["assets/icons/mov-w-t.png","assets/icons/btl-w-t.png","assets/icons/vit.png","assets/icons/cst-w-t.png"],this.statToIcons={hex:"assets/icons/hex.png"}}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"toggleAbilityTooltip",value:function(t){for(var n=0;n<this.card.abilities.length;n++)this.card.abilities[n].id===t.id&&(this.card.abilities[n].hidden="hidden"===this.card.abilities[n].hidden?"visible":"hidden")}}]),t}()).\u0275fac=function(t){return new(t||j)},j.\u0275cmp=l.Fb({type:j,selectors:[["app-card"]],inputs:{card:"card",width:"width"},decls:28,vars:23,consts:[[1,"card-absolute-container"],[1,"card-stats"],[1,"card-stat-item","mov"],[3,"src"],[1,"stat-value"],["name","cube-outline"],[1,"card-stat-item","btl"],[1,"card-stat-item","vit"],["clickeable","",1,"card-stat-item","cst",3,"click"],[1,"illustration"],[1,"illustration-circle",3,"src"],[1,"illustration-battler",3,"src"],["class","card-abilities",4,"ngIf"],[1,"card-title"],[1,"card-abilities"],[3,"class","click",4,"ngFor","ngForOf"],[3,"click"],[1,"ability-icon",3,"src"],[1,"ability-cost"]],template:function(t,n){1&t&&(l.Ob(0,"div",0),l.Ob(1,"div"),l.Ob(2,"div",1),l.Ob(3,"div",2),l.Mb(4,"ion-img",3),l.Ob(5,"div",4),l.lc(6),l.Mb(7,"ion-icon",5),l.Nb(),l.Nb(),l.Ob(8,"div",6),l.Mb(9,"ion-img",3),l.Ob(10,"div",4),l.lc(11),l.Mb(12,"ion-icon",5),l.Nb(),l.Nb(),l.Ob(13,"div",7),l.Mb(14,"ion-img",3),l.Ob(15,"div",4),l.lc(16),l.Mb(17,"ion-icon",5),l.Nb(),l.Nb(),l.Ob(18,"div",8),l.Wb("click",(function(){return n.card.owner.castBg(n.card)})),l.Mb(19,"ion-img",3),l.Ob(20,"div",4),l.lc(21),l.Nb(),l.Nb(),l.Nb(),l.Ob(22,"div",9),l.Mb(23,"ion-img",10),l.Mb(24,"ion-img",11),l.Nb(),l.kc(25,F,2,1,"div",12),l.Ob(26,"div",13),l.lc(27),l.Nb(),l.Nb(),l.Nb()),2&t&&(l.jc("\n  width:",n.width,"px;\n  height:",1.5*n.width,"px;\n"),l.zb(1),l.jc("\n    background-image:url(",n.card.backgroundUrl,");\n    transform: scale(calc( ",n.width," / 500));\n  "),l.Bb("card-outer ",n.card.classes.join(" "),""),l.zb(3),l.cc("src",n.statIcons[0]),l.zb(2),l.nc("",n.card.mov," "),l.zb(3),l.cc("src",n.statIcons[1]),l.zb(2),l.nc("",n.card.btl," "),l.zb(3),l.cc("src",n.statIcons[2]),l.zb(2),l.nc("",n.card.vit," "),l.zb(3),l.cc("src",n.statIcons[3]),l.zb(2),l.nc("",n.card.cst," "),l.zb(2),l.cc("src",n.card.circleUrl),l.zb(1),l.cc("src",n.card.battlerUrl),l.zb(1),l.bc("ngIf",n.card.abilities),l.zb(2),l.mc(n.card.title))},directives:[o.i,o.h],styles:[".card-outer[_ngcontent-%COMP%]{font-family:Beaver;width:500px;height:750px;border:10px solid #fff;overflow:hidden;flex-direction:column;border-radius:10px;position:absolute}.card-outer[_ngcontent-%COMP%], .card-stats[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center}.card-stats[_ngcontent-%COMP%]{width:100%;height:125px}.card-stats[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:62.5px;border:3px solid #fff;border-radius:5px;background-color:#000}.card-ability[_ngcontent-%COMP%], .card-stat-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;align-items:center;height:100%;font-size:2em;padding:10px 12px;border-radius:5px}.card-stat-item[_ngcontent-%COMP%]{background-color:#131313}.card-ability[_ngcontent-%COMP%]{background-color:#2d3e48}.illustration[_ngcontent-%COMP%]{width:75%;display:flex;justify-content:center;align-items:center}.illustration[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:100%}.illustration-battler[_ngcontent-%COMP%]{-webkit-filter:drop-shadow(0 0 10px #fff);filter:drop-shadow(0 0 10px white)}.card-abilities[_ngcontent-%COMP%]{width:100%;height:125px;display:flex;justify-content:space-around;align-items:center}.card-ability[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:62.5px;border:3px solid #fff;border-radius:5px}.card-title[_ngcontent-%COMP%]{top:0;left:0;letter-spacing:2px;font-size:1.4em;width:95%;margin:2.5%;background-color:rgba(0,0,0,.4);padding:10px;text-align:center;border-radius:10px;border:1px solid #000}.stat-value[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-absolute-container[_ngcontent-%COMP%]{border:1px solid purple;display:flex;justify-content:center;align-items:center;position:relative}.illustration-circle[_ngcontent-%COMP%]{position:absolute;width:70%}.can-cast[_ngcontent-%COMP%]   .cst[_ngcontent-%COMP%]{background-color:#32b3e2}.ability-tooltip[_ngcontent-%COMP%]{position:absolute;background-color:rgba(0,0,0,.6);width:100%;padding:20px;top:auto;opacity:1;visibility:visible;transition:.3s}.ability-tooltip.hidden[_ngcontent-%COMP%]{visibility:hidden;opacity:0;top:100%}"]}),j),X=((B=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||B)},B.\u0275cmp=l.Fb({type:B,selectors:[["app-board-battler"]],decls:2,vars:0,template:function(t,n){1&t&&(l.Ob(0,"p"),l.lc(1," board-battler works!\n"),l.Nb())},styles:[""]}),B);function L(t,n){1&t&&l.Mb(0,"app-board-battler",12),2&t&&l.bc("card",n.$implicit)}function I(t,n){if(1&t){var e=l.Pb();l.Ob(0,"app-card",13),l.Wb("click",(function(){l.fc(e);var t=n.$implicit;return l.Yb().lib.board.cardModal(t)})),l.Nb()}2&t&&l.bc("card",n.$implicit)("width",200)}var S,V,E,D=[{path:"",component:(S=function(){function t(n){_classCallCheck(this,t),this.leftToggleName="arrow-back-outline",this.leftDrawerClass="shown",this.bottomToggleName="arrow-down-outline",this.bottomDrawerClass="shown",this.lib=n}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"toggle",value:function(t){switch(t){case"left":"arrow-forward-outline"===this.leftToggleName?(this.leftToggleName="arrow-back-outline",this.leftDrawerClass="shown"):(this.leftToggleName="arrow-forward-outline",this.leftDrawerClass="hidden");break;case"bottom":"arrow-up-outline"===this.bottomToggleName?(this.bottomToggleName="arrow-down-outline",this.bottomDrawerClass="shown"):(this.bottomToggleName="arrow-up-outline",this.bottomDrawerClass="hidden");break;default:throw new Error("Unrecognized toggle target `"+t+"`")}}}]),t}(),S.\u0275fac=function(t){return new(t||S)(l.Lb(s.a))},S.\u0275cmp=l.Fb({type:S,selectors:[["app-battlefield"]],decls:17,vars:15,consts:[[1,"main"],[3,"board"],[3,"player"],[1,"drawer","central-drawer"],[3,"card",4,"ngFor","ngForOf"],[3,"lib"],[1,"right-drawer","drawer"],[1,"toggle-button"],[3,"name","click"],[3,"card","width","click",4,"ngFor","ngForOf"],[1,"close-card-modal",3,"click"],[3,"card","width"],[3,"card"],[3,"card","width","click"]],template:function(t,n){1&t&&(l.Ob(0,"ion-content"),l.Ob(1,"div",0),l.Ob(2,"div"),l.Mb(3,"app-game-monitor",1),l.Mb(4,"app-edge-pool",1),l.Mb(5,"app-dice-pool",2),l.Nb(),l.Ob(6,"div",3),l.kc(7,L,1,1,"app-board-battler",4),l.Mb(8,"app-board",5),l.Nb(),l.Ob(9,"div",6),l.Ob(10,"div",7),l.Ob(11,"ion-icon",8),l.Wb("click",(function(){return n.toggle("bottom")})),l.Nb(),l.Nb(),l.kc(12,I,1,2,"app-card",9),l.Nb(),l.Ob(13,"div"),l.Ob(14,"div",10),l.Wb("click",(function(){return n.lib.board.cardModal(n.lib.board.activeCard)})),l.lc(15,"x"),l.Nb(),l.Mb(16,"app-card",11),l.Nb(),l.Nb(),l.Nb()),2&t&&(l.zb(2),l.Bb("drawer left-drawer ",n.leftDrawerClass,""),l.zb(1),l.bc("board",n.lib.board),l.zb(1),l.bc("board",n.lib.board),l.zb(1),l.bc("player",n.lib.board.players.red),l.zb(2),l.bc("ngForOf",n.lib.board.players.blue.boardCards),l.zb(1),l.bc("lib",n.lib),l.zb(3),l.cc("name",n.bottomToggleName),l.zb(1),l.bc("ngForOf",n.lib.board.players.red.deckCards),l.zb(1),l.Bb("card-view-modal ",n.lib.board.cardModalClasses.join(" "),""),l.zb(3),l.bc("card",n.lib.board.activeCard)("width",600))},directives:[r.b,d,f,M,o.h,z,r.d,Y,X],styles:[".left-drawer[_ngcontent-%COMP%]{transition:.3s;left:0;top:0;width:300px;height:100vh;background-color:rgba(0,0,0,.8);padding:10px}.left-drawer.shown[_ngcontent-%COMP%]{transform:translateX(0)}.left-drawer.hidden[_ngcontent-%COMP%]{transform:translateX(-300px)}.toggle-button[_ngcontent-%COMP%]{width:30px;height:30px;position:absolute;background-color:#000;border:3px solid #fff;display:flex;justify-content:center;align-items:center;font-size:25px;border-radius:100%}.left-drawer[_ngcontent-%COMP%]   .toggle-button[_ngcontent-%COMP%]{right:-40px;top:40px;top:0}.bottom-drawer[_ngcontent-%COMP%]   .toggle-button[_ngcontent-%COMP%]{top:5px;left:calc(50vw - 15px);z-index:9999}.central-drawer[_ngcontent-%COMP%], .right-drawer[_ngcontent-%COMP%]{height:100vh;display:flex;justify-content:center;align-items:center}.right-drawer[_ngcontent-%COMP%]{width:500px;top:0;right:0;flex-wrap:wrap;background-color:#000;overflow-y:scroll}.bottom-drawer[_ngcontent-%COMP%]{display:flex;position:fixed;bottom:0;left:0;width:100vw;overflow-x:scroll;background-color:rgba(0,0,0,.8);padding:10px;transition:.3s}.bottom-drawer.shown[_ngcontent-%COMP%]{transform:translateY(0)}.bottom-drawer.hidden[_ngcontent-%COMP%]{transform:translateY(300px)}.card-view-modal[_ngcontent-%COMP%]{position:fixed;top:0;left:0;transform:translateX(0) translateY(0);width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.6);transition:.3s;opacity:1;visibility:visible}.card-view-modal.hidden[_ngcontent-%COMP%]{opacity:0;visibility:0;transform:translateY(100vh)}.close-card-modal[_ngcontent-%COMP%]{width:50px;height:50px;font-size:2em;justify-content:center;text-align:center;border-radius:100%;background-color:#000;border:5px solid #fff;color:#fff;position:absolute;top:50px;right:50px}.close-card-modal[_ngcontent-%COMP%], .main[_ngcontent-%COMP%]{display:flex;align-items:center}.main[_ngcontent-%COMP%]{position:fixed;width:100vw;height:100vh;top:0;left:0;justify-content:space-between}"]}),S)}],H=((V=function t(){_classCallCheck(this,t)}).\u0275mod=l.Jb({type:V}),V.\u0275inj=l.Ib({factory:function(t){return new(t||V)},imports:[[a.i.forChild(D)],a.i]}),V),$=e("j1ZV"),W=((E=function t(){_classCallCheck(this,t)}).\u0275mod=l.Jb({type:E}),E.\u0275inj=l.Ib({factory:function(t){return new(t||E)},imports:[[o.b,c.a,r.h,H,$.a]]}),E)}}]);