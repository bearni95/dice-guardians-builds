function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1+Ht":function(t,n,e){"use strict";e.r(n),e.d(n,"BattlefieldPageModule",(function(){return H}));var i=e("ofXK"),o=e("3Pt+"),c=e("TEn/"),r=e("tyNb"),a=e("fXoL"),l=e("Sjme");function s(t,n){if(1&t&&(a.Ob(0,"ion-card-stat"),a.Ob(1,"ion-label"),a.Ob(2,"ion-card-stat-value"),a.lc(3),a.Nb(),a.Nb(),a.Ob(4,"div",1),a.Mb(5,"ion-img",2),a.Nb(),a.Ob(6,"ion-label"),a.Ob(7,"ion-card-stat-value"),a.lc(8),a.Nb(),a.Nb(),a.Nb()),2&t){var e=n.$implicit,i=a.Yb();a.zb(3),a.mc(i.board.players.blue.edgePool[e]),a.zb(2),a.cc("src",i.board.players.red.edgePool.faces[e]),a.zb(3),a.mc(i.board.players.red.edgePool[e])}}var d,b,g=((d=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||d)},d.\u0275cmp=a.Fb({type:d,selectors:[["app-edge-pool"]],inputs:{board:"board"},decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"edge-icon"],[3,"src"]],template:function(t,n){1&t&&(a.Ob(0,"ion-edge-pool"),a.kc(1,s,9,3,"ion-card-stat",0),a.Nb()),2&t&&(a.zb(1),a.bc("ngForOf",n.board.players.blue.edgePool.stats))},directives:[i.h],styles:["ion-edge-pool[_ngcontent-%COMP%]{display:flex;margin:20px 0}ion-card-stat-value[_ngcontent-%COMP%]{width:100%;display:block;height:-webkit-max-content;height:-moz-max-content;height:max-content;font-size:2em;text-align:center}"]}),d),p=e("m/Q0"),f=((b=function(){function t(){_classCallCheck(this,t),this.ranks=[["1","2","3","4","5","6"],["CST2","CST2","CST2","CST","MOV","BTL"],["CST2","CST2","CST","MOV","BTL2","HEX"],["CST2","CST","HEX","HEX2","HEX3","MOV2"],["BTL","BTL","BTL2","BTL2","BTL3","HEX2"],["MOV","MOV","MOV2","MOV2","MOV3","BTL2"]],this.d6={CST:"/assets/dice/d6fcst.png",CST2:"/assets/dice/d6fcst2.png",MOV:"/assets/dice/d6fmov.png",MOV2:"/assets/dice/d6fmov2.png",MOV3:"/assets/dice/d6fmov3.png",BTL:"/assets/dice/d6fbtl.png",BTL2:"/assets/dice/d6fbtl2.png",BTL3:"/assets/dice/d6fbtl3.png",HEX:"/assets/dice/d6fhex.png",HEX2:"/assets/dice/d6fhex2.png",HEX3:"/assets/dice/d6fhex3.png"},this.colors=["","#2e7345","#b32d91","#2d4eb3","#562e73","#e57e3a"]}return _createClass(t,[{key:"ngOnInit",value:function(){this.dice.setCtx(this)}}]),t}()).\u0275fac=function(t){return new(t||b)},b.\u0275cmp=a.Fb({type:b,selectors:[["app-dice"]],inputs:{dice:"dice"},decls:8,vars:27,consts:[[1,"view"],[1,"diceFace","front"],[1,"diceFace","right"],[1,"diceFace","back"],[1,"diceFace","left"],[1,"diceFace","top"],[1,"diceFace","bottom"]],template:function(t,n){1&t&&(a.Ob(0,"div",0),a.Ob(1,"div"),a.Mb(2,"div",1),a.Mb(3,"div",2),a.Mb(4,"div",3),a.Mb(5,"div",4),a.Mb(6,"div",5),a.Mb(7,"div",6),a.Nb(),a.Nb()),2&t&&(a.zb(1),a.Bb("dice ",n.dice.rolledFaceClass,""),a.zb(1),a.jc("\n            background-color:",n.colors[n.dice.rank],";\n            background-image:url('",n.d6[n.ranks[n.dice.rank][0]],"')\n          "),a.zb(1),a.jc("\n            background-color:",n.colors[n.dice.rank],";\n            background-image:url('",n.d6[n.ranks[n.dice.rank][1]],"')\n          "),a.zb(1),a.jc("\n            background-color:",n.colors[n.dice.rank],";\n            background-image:url('",n.d6[n.ranks[n.dice.rank][2]],"')\n          "),a.zb(1),a.jc("\n            background-color:",n.colors[n.dice.rank],";\n            background-image:url('",n.d6[n.ranks[n.dice.rank][3]],"')\n          "),a.zb(1),a.jc("\n            background-color:",n.colors[n.dice.rank],";\n            background-image:url('",n.d6[n.ranks[n.dice.rank][4]],"')\n          "),a.zb(1),a.jc("\n            background-color:",n.colors[n.dice.rank],";\n            background-image:url('",n.d6[n.ranks[n.dice.rank][5]],"')\n          "))},styles:[".view[_ngcontent-%COMP%]{margin:25px;perspective:150px}.dice[_ngcontent-%COMP%], .view[_ngcontent-%COMP%]{width:50px;height:50px}.dice[_ngcontent-%COMP%]{position:relative;transform-style:preserve-3d;transition:transform 300s}.dice-front[_ngcontent-%COMP%]{transform:rotateY(1turn)!important}.dice-right[_ngcontent-%COMP%]{transform:rotateY(-90deg)!important}.dice-back[_ngcontent-%COMP%]{transform:rotateY(180deg)!important}.dice-left[_ngcontent-%COMP%]{transform:rotateY(90deg)!important}.dice-top[_ngcontent-%COMP%]{transform:rotateX(-90deg)!important}.dice-bottom[_ngcontent-%COMP%]{transform:rotateX(90deg)!important}.btnFront[_ngcontent-%COMP%]:checked ~ .view[_ngcontent-%COMP%] > .dice[_ngcontent-%COMP%]{transform:rotateY(1turn)!important}.btnRight[_ngcontent-%COMP%]:checked ~ .view[_ngcontent-%COMP%] > .dice[_ngcontent-%COMP%]{transform:rotateY(-90deg)!important}.btnBack[_ngcontent-%COMP%]:checked ~ .view[_ngcontent-%COMP%] > .dice[_ngcontent-%COMP%]{transform:rotateY(180deg)!important}.btnLeft[_ngcontent-%COMP%]:checked ~ .view[_ngcontent-%COMP%] > .dice[_ngcontent-%COMP%]{transform:rotateY(90deg)!important}.btnTop[_ngcontent-%COMP%]:checked ~ .view[_ngcontent-%COMP%] > .dice[_ngcontent-%COMP%]{transform:rotateX(-90deg)!important}.btnBottom[_ngcontent-%COMP%]:checked ~ .view[_ngcontent-%COMP%] > .dice[_ngcontent-%COMP%]{transform:rotateX(90deg)!important}.diceFace[_ngcontent-%COMP%]{position:absolute;width:50px;height:50px;text-align:center;line-height:50px;font-size:1.2em;border:2px solid #fff;background-size:cover}.front[_ngcontent-%COMP%]{background-color:rgba(255,0,0,.6);transform:rotateY(0deg) translateZ(25px)}.right[_ngcontent-%COMP%]{background-color:rgba(0,255,0,.6);transform:rotateY(90deg) translateZ(25px)}.back[_ngcontent-%COMP%]{background-color:rgba(255,255,0,.6);transform:rotateY(180deg) translateZ(25px)}.left[_ngcontent-%COMP%]{background-color:rgba(255,0,255,.6);transform:rotateY(-90deg) translateZ(25px)}.top[_ngcontent-%COMP%]{background-color:rgba(0,255,255,.6);transform:rotateX(90deg) translateZ(25px)}.bottom[_ngcontent-%COMP%]{transform:rotateX(-90deg) translateZ(25px)}span[_ngcontent-%COMP%]{display:inline-block;padding:4px 10px;margin:3px;background-color:#0aa;border:2px inset #dd0}.test[_ngcontent-%COMP%]:checked + .test2[_ngcontent-%COMP%]{display:block;width:80px;background-color:#0aa}input[type=radio][_ngcontent-%COMP%]{transform:scale(2);margin:10px;color:red}"]}),b);function u(t,n){if(1&t&&(a.Ob(0,"div",10),a.Mb(1,"ion-img",11),a.Nb()),2&t){var e=n.$implicit,i=a.Yb(2);a.zb(1),a.cc("src",i.d6[e])}}function O(t,n){if(1&t&&(a.Ob(0,"div"),a.kc(1,u,2,1,"div",9),a.Nb()),2&t){var e=n.$implicit;a.Bb("dice-info-lvl-",n.index+1," dice-info-lvl"),a.zb(1),a.bc("ngForOf",e)}}function m(t,n){if(1&t){var e=a.Pb();a.Ob(0,"ion-dice",12),a.Wb("click",(function(){a.fc(e);var t=n.$implicit;return a.Yb().player.pickDice(t)})),a.Nb()}2&t&&a.Bb("dice-lvl dice-lvl-",n.$implicit.rank,"")}function h(t,n){if(1&t){var e=a.Pb();a.Ob(0,"app-dice",13),a.Wb("click",(function(){a.fc(e);var t=n.index;return a.Yb().player.unpickDice(t)})),a.Nb()}2&t&&a.bc("dice",n.$implicit)}var v,C=((v=function(){function t(){_classCallCheck(this,t),this.showDiceInfo="none",this.turnText="end turn",this.ranks=[["CST2","CST2","CST2","CST","MOV","BTL"],["CST2","CST2","CST","MOV","BTL2","HEX"],["CST2","CST","HEX","HEX2","HEX3","MOV2"],["BTL","BTL","BTL2","BTL2","BTL3","HEX2"],["MOV","MOV","MOV2","MOV2","MOV3","BTL2"]],this.d6={CST:"assets/dice/d6fcst.png",CST2:"assets/dice/d6fcst2.png",MOV:"assets/dice/d6fmov.png",MOV2:"assets/dice/d6fmov2.png",MOV3:"assets/dice/d6fmov3.png",BTL:"assets/dice/d6fbtl.png",BTL2:"assets/dice/d6fbtl2.png",BTL3:"assets/dice/d6fbtl3.png",HEX:"assets/dice/d6fhex.png",HEX2:"assets/dice/d6fhex2.png",HEX3:"assets/dice/d6fhex3.png"},this.dicePool=[];for(var n=0;n<5;n++)this.dicePool.push(new p.Dice(n+1))}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"toggleDiceExplanation",value:function(){this.showDiceInfo="none"===this.showDiceInfo?"flex":"none"}},{key:"selectDice",value:function(t){this.player.dice.push(t)}}]),t}()).\u0275fac=function(t){return new(t||v)},v.\u0275cmp=a.Fb({type:v,selectors:[["app-dice-pool"]],inputs:{player:"player"},decls:16,vars:9,consts:[[1,"dice-pool"],["color","primary",1,"bigBtn",3,"click"],[1,"dice-info-container"],[1,"dice-info"],[3,"class",4,"ngFor","ngForOf"],[3,"class","click",4,"ngFor","ngForOf"],[3,"dice","click",4,"ngFor","ngForOf"],[1,"bigBtn",3,"color","click"],["is-turn-btn","true",1,"bigBtn",3,"color","click"],["class","dice-info-face",4,"ngFor","ngForOf"],[1,"dice-info-face"],[3,"src"],[3,"click"],[3,"dice","click"]],template:function(t,n){1&t&&(a.Ob(0,"div",0),a.Ob(1,"ion-button",1),a.Wb("click",(function(){return n.toggleDiceExplanation()})),a.lc(2,"?"),a.Nb(),a.Ob(3,"div",2),a.Ob(4,"div",3),a.lc(5," Dice faces per rank "),a.kc(6,O,2,4,"div",4),a.Nb(),a.Nb(),a.Ob(7,"ion-dice-area"),a.Ob(8,"ion-dice-pool"),a.kc(9,m,1,3,"ion-dice",5),a.Nb(),a.Ob(10,"ion-selected-dices"),a.kc(11,h,1,1,"app-dice",6),a.Nb(),a.Nb(),a.Ob(12,"ion-button",7),a.Wb("click",(function(){return n.player.rollDice()})),a.lc(13,"Roll"),a.Nb(),a.Ob(14,"ion-button",8),a.Wb("click",(function(){return n.player.endTurn()})),a.lc(15),a.Nb(),a.Nb()),2&t&&(a.zb(4),a.ic("display:",n.showDiceInfo,""),a.zb(2),a.bc("ngForOf",n.ranks),a.zb(3),a.bc("ngForOf",n.dicePool),a.zb(2),a.bc("ngForOf",n.player.dice),a.zb(1),a.cc("color",n.player.__rollButtonColor),a.zb(2),a.cc("color",n.player.__turnChange),a.zb(1),a.mc(n.turnText))},directives:[i.h,f],styles:[".dice-info-container[_ngcontent-%COMP%]{width:100%;position:relative}.dice-info[_ngcontent-%COMP%]{position:absolute;width:100%;left:100%;padding:10px;background-color:#121212;color:#fff;flex-direction:column;border-radius:10px;border:1px solid #000}.dice-info[_ngcontent-%COMP%], .dice-info-lvl[_ngcontent-%COMP%]{display:flex}.dice-info-lvl-1[_ngcontent-%COMP%], .dice-lvl-1[_ngcontent-%COMP%]{background-color:#2e7345}.dice-info-lvl-2[_ngcontent-%COMP%], .dice-lvl-2[_ngcontent-%COMP%]{background-color:#b32d91}.dice-info-lvl-3[_ngcontent-%COMP%], .dice-lvl-3[_ngcontent-%COMP%]{background-color:#2d4eb3}.dice-info-lvl-4[_ngcontent-%COMP%], .dice-lvl-4[_ngcontent-%COMP%]{background-color:#562e73}.dice-info-lvl-5[_ngcontent-%COMP%], .dice-lvl-5[_ngcontent-%COMP%]{background-color:#e57e3a}.dice-info-face[_ngcontent-%COMP%]{border:1px solid #fff}ion-dice-area[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;width:100%;flex-direction:column}.dice-pool[_ngcontent-%COMP%], ion-dice-pool[_ngcontent-%COMP%]{display:flex}.dice-pool[_ngcontent-%COMP%]{flex-direction:column}.dice-lvl[_ngcontent-%COMP%]{width:50px;height:50px;border:3px solid #fff;border-radius:7px;margin:3px}ion-selected-dices[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%}"]}),v);function k(t,n){if(1&t){var e=a.Pb();a.Ob(0,"div",8),a.Wb("click",(function(){return a.fc(e),a.Yb().$implicit.click()})),a.Nb()}}function M(t,n){if(1&t&&(a.Ob(0,"div",6),a.kc(1,k,1,0,"div",7),a.Nb()),2&t){var e=n.$implicit;a.Cb("cell ",e.classes.join(" ")," x-",e.x," y-",e.y,""),a.zb(1),a.bc("ngIf",!0===e._canClick)}}var w=function(t){return[t]};function x(t,n){if(1&t&&(a.Ob(0,"div",4),a.kc(1,M,2,6,"div",5),a.Nb()),2&t){var e=n.$implicit,i=a.Yb().$implicit,o=a.Yb();a.Bb("y-",e,""),a.zb(1),a.bc("ngForOf",a.dc(4,w,o.lib.board.getCell(i,e)))}}function _(t,n){if(1&t&&(a.Ob(0,"div",2),a.kc(1,x,2,6,"div",3),a.Nb()),2&t){var e=n.$implicit,i=a.Yb();a.Bb("x-",e,""),a.zb(1),a.bc("ngForOf",i.lib.board.rows)}}var P,y=((P=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){console.log(this.lib)}}]),t}()).\u0275fac=function(t){return new(t||P)},P.\u0275cmp=a.Fb({type:P,selectors:[["app-board"]],inputs:{lib:"lib"},decls:2,vars:1,consts:[[1,"ion-play-area"],["class","ion-play-row",3,"class",4,"ngFor","ngForOf"],[1,"ion-play-row"],["class","ion-play-col",3,"class",4,"ngFor","ngForOf"],[1,"ion-play-col"],["class","ion-play-cell",3,"class",4,"ngFor","ngForOf"],[1,"ion-play-cell"],["class","cell-click-area",3,"click",4,"ngIf"],[1,"cell-click-area",3,"click"]],template:function(t,n){1&t&&(a.Ob(0,"div",0),a.kc(1,_,2,4,"div",1),a.Nb()),2&t&&(a.zb(1),a.bc("ngForOf",n.lib.board.cols))},directives:[i.h,i.i],styles:[".ion-play-row[_ngcontent-%COMP%]{width:100%}.ion-play-cell[_ngcontent-%COMP%], .ion-play-row[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.ion-play-cell[_ngcontent-%COMP%]{font-size:1.5em;font-weight:700;width:50px;height:50px;margin:3px;color:#fff;border-radius:5px;border:1px solid #000;transition:.1s;background-image:url(/assets/textures/gray-mat.png);background-size:cover}.player-tile[_ngcontent-%COMP%]{background-image:url(/assets/textures/stone-orange.png);background-size:cover}.rival-tile[_ngcontent-%COMP%]{background-image:url(/assets/textures/stone-blue.png);background-size:cover}.victory-tile[_ngcontent-%COMP%]{background-image:url(/assets/textures/exit-gate.png);background-size:cover}.wall-tile[_ngcontent-%COMP%]{background-image:url(/assets/textures/wall-tile.png);background-size:cover;background-color:#545651}.neutral-tile[_ngcontent-%COMP%]{background-image:url(/assets/textures/neutral-tile.png);background-size:cover}"]}),P);function z(t,n){if(1&t){var e=a.Pb();a.Ob(0,"div",16),a.Wb("click",(function(){a.fc(e);var t=n.$implicit;return a.Yb(2).toggleAbilityTooltip(t)})),a.Mb(1,"ion-img",17),a.Ob(2,"div"),a.lc(3),a.Nb(),a.Ob(4,"div",18),a.lc(5),a.Nb(),a.Nb()}if(2&t){var i=n.$implicit;a.Bb("card-ability card-ability-",i.id,""),a.zb(1),a.cc("src",i.iconUrl),a.zb(1),a.Bb("ability-tooltip ",i.hidden,""),a.zb(1),a.mc(i.text),a.zb(2),a.nc(" ",i.cost," ")}}function N(t,n){if(1&t&&(a.Ob(0,"div",14),a.kc(1,z,6,9,"div",15),a.Nb()),2&t){var e=a.Yb();a.zb(1),a.bc("ngForOf",e.card.abilities)}}var T,F,B=((F=function(){function t(){_classCallCheck(this,t),this.statIcons=["assets/icons/mov-w-t.png","assets/icons/btl-w-t.png","assets/icons/vit.png","assets/icons/cst-w-t.png"],this.statToIcons={hex:"assets/icons/hex.png"}}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"toggleAbilityTooltip",value:function(t){for(var n=0;n<this.card.abilities.length;n++)this.card.abilities[n].id===t.id&&(this.card.abilities[n].hidden="hidden"===this.card.abilities[n].hidden?"visible":"hidden")}}]),t}()).\u0275fac=function(t){return new(t||F)},F.\u0275cmp=a.Fb({type:F,selectors:[["app-card"]],inputs:{card:"card",width:"width"},decls:28,vars:23,consts:[[1,"card-absolute-container"],[1,"card-stats"],[1,"card-stat-item","mov"],[3,"src"],[1,"stat-value"],["name","cube-outline"],[1,"card-stat-item","btl"],[1,"card-stat-item","vit"],["clickeable","",1,"card-stat-item","cst",3,"click"],[1,"illustration"],[1,"illustration-circle",3,"src"],[1,"illustration-battler",3,"src"],["class","card-abilities",4,"ngIf"],[1,"card-title"],[1,"card-abilities"],[3,"class","click",4,"ngFor","ngForOf"],[3,"click"],[1,"ability-icon",3,"src"],[1,"ability-cost"]],template:function(t,n){1&t&&(a.Ob(0,"div",0),a.Ob(1,"div"),a.Ob(2,"div",1),a.Ob(3,"div",2),a.Mb(4,"ion-img",3),a.Ob(5,"div",4),a.lc(6),a.Mb(7,"ion-icon",5),a.Nb(),a.Nb(),a.Ob(8,"div",6),a.Mb(9,"ion-img",3),a.Ob(10,"div",4),a.lc(11),a.Mb(12,"ion-icon",5),a.Nb(),a.Nb(),a.Ob(13,"div",7),a.Mb(14,"ion-img",3),a.Ob(15,"div",4),a.lc(16),a.Mb(17,"ion-icon",5),a.Nb(),a.Nb(),a.Ob(18,"div",8),a.Wb("click",(function(){return n.card.owner.castBg(n.card)})),a.Mb(19,"ion-img",3),a.Ob(20,"div",4),a.lc(21),a.Nb(),a.Nb(),a.Nb(),a.Ob(22,"div",9),a.Mb(23,"ion-img",10),a.Mb(24,"ion-img",11),a.Nb(),a.kc(25,N,2,1,"div",12),a.Ob(26,"div",13),a.lc(27),a.Nb(),a.Nb(),a.Nb()),2&t&&(a.jc("\n  width:",n.width,"px;\n  height:",1.5*n.width,"px;\n"),a.zb(1),a.jc("\n    background-image:url(",n.card.backgroundUrl,");\n    transform: scale(calc( ",n.width," / 500));\n  "),a.Bb("card-outer ",n.card.classes.join(" "),""),a.zb(3),a.cc("src",n.statIcons[0]),a.zb(2),a.nc("",n.card.mov," "),a.zb(3),a.cc("src",n.statIcons[1]),a.zb(2),a.nc("",n.card.btl," "),a.zb(3),a.cc("src",n.statIcons[2]),a.zb(2),a.nc("",n.card.vit," "),a.zb(3),a.cc("src",n.statIcons[3]),a.zb(2),a.nc("",n.card.cst," "),a.zb(2),a.cc("src",n.card.circleUrl),a.zb(1),a.cc("src",n.card.battlerUrl),a.zb(1),a.bc("ngIf",n.card.abilities),a.zb(2),a.mc(n.card.title))},directives:[i.i,i.h],styles:[".card-outer[_ngcontent-%COMP%]{font-family:Beaver;width:500px;height:750px;border:10px solid #fff;overflow:hidden;flex-direction:column;border-radius:10px;position:absolute}.card-outer[_ngcontent-%COMP%], .card-stats[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center}.card-stats[_ngcontent-%COMP%]{width:100%;height:125px}.card-stats[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:62.5px;border:3px solid #fff;border-radius:5px;background-color:#000}.card-ability[_ngcontent-%COMP%], .card-stat-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;align-items:center;height:100%;font-size:2em;padding:10px 12px;border-radius:5px}.card-stat-item[_ngcontent-%COMP%]{background-color:#131313}.card-ability[_ngcontent-%COMP%]{background-color:#2d3e48}.illustration[_ngcontent-%COMP%]{width:75%;display:flex;justify-content:center;align-items:center}.illustration[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:100%}.illustration-battler[_ngcontent-%COMP%]{-webkit-filter:drop-shadow(0 0 10px #fff);filter:drop-shadow(0 0 10px white)}.card-abilities[_ngcontent-%COMP%]{width:100%;height:125px;display:flex;justify-content:space-around;align-items:center}.card-ability[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:62.5px;border:3px solid #fff;border-radius:5px}.card-title[_ngcontent-%COMP%]{top:0;left:0;letter-spacing:2px;font-size:1.4em;width:95%;margin:2.5%;background-color:rgba(0,0,0,.4);padding:10px;text-align:center;border-radius:10px;border:1px solid #000}.stat-value[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.card-absolute-container[_ngcontent-%COMP%]{border:1px solid purple;display:flex;justify-content:center;align-items:center;position:relative}.illustration-circle[_ngcontent-%COMP%]{position:absolute;width:70%}.can-cast[_ngcontent-%COMP%]   .cst[_ngcontent-%COMP%]{background-color:#32b3e2}.ability-tooltip[_ngcontent-%COMP%]{position:absolute;background-color:rgba(0,0,0,.6);width:100%;padding:20px;top:auto;opacity:1;visibility:visible;transition:.3s}.ability-tooltip.hidden[_ngcontent-%COMP%]{visibility:hidden;opacity:0;top:100%}"]}),F),j=((T=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||T)},T.\u0275cmp=a.Fb({type:T,selectors:[["app-board-battler"]],decls:2,vars:0,template:function(t,n){1&t&&(a.Ob(0,"p"),a.lc(1," board-battler works!\n"),a.Nb())},styles:[""]}),T);function X(t,n){1&t&&a.Mb(0,"app-board-battler",12),2&t&&a.bc("card",n.$implicit)}function Y(t,n){if(1&t){var e=a.Pb();a.Ob(0,"app-card",13),a.Wb("click",(function(){a.fc(e);var t=n.$implicit;return a.Yb().lib.board.cardModal(t)})),a.Nb()}2&t&&a.bc("card",n.$implicit)("width",200)}var L,I,S,V=[{path:"",component:(L=function(){function t(n){_classCallCheck(this,t),this.leftToggleName="arrow-back-outline",this.leftDrawerClass="shown",this.bottomToggleName="arrow-down-outline",this.bottomDrawerClass="shown",this.lib=n}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"toggle",value:function(t){switch(t){case"left":"arrow-forward-outline"===this.leftToggleName?(this.leftToggleName="arrow-back-outline",this.leftDrawerClass="shown"):(this.leftToggleName="arrow-forward-outline",this.leftDrawerClass="hidden");break;case"bottom":"arrow-up-outline"===this.bottomToggleName?(this.bottomToggleName="arrow-down-outline",this.bottomDrawerClass="shown"):(this.bottomToggleName="arrow-up-outline",this.bottomDrawerClass="hidden");break;default:throw new Error("Unrecognized toggle target `"+t+"`")}}}]),t}(),L.\u0275fac=function(t){return new(t||L)(a.Lb(l.a))},L.\u0275cmp=a.Fb({type:L,selectors:[["app-battlefield"]],decls:19,vars:18,consts:[[1,"top-drawer","drawer"],[1,"toggle-button"],[3,"name","click"],[3,"board"],[3,"player"],[1,"drawer","central-drawer"],[3,"card",4,"ngFor","ngForOf"],[3,"lib"],[1,"right-drawer","drawer"],[3,"card","width","click",4,"ngFor","ngForOf"],[1,"close-card-modal",3,"click"],[3,"card","width"],[3,"card"],[3,"card","width","click"]],template:function(t,n){1&t&&(a.Ob(0,"ion-content"),a.Mb(1,"div",0),a.Ob(2,"div"),a.Ob(3,"div",1),a.Ob(4,"ion-icon",2),a.Wb("click",(function(){return n.toggle("left")})),a.Nb(),a.Nb(),a.Mb(5,"app-edge-pool",3),a.Mb(6,"app-dice-pool",4),a.Nb(),a.Ob(7,"div",5),a.kc(8,X,1,1,"app-board-battler",6),a.Mb(9,"app-board",7),a.Nb(),a.Mb(10,"div",8),a.Ob(11,"div"),a.Ob(12,"div",1),a.Ob(13,"ion-icon",2),a.Wb("click",(function(){return n.toggle("bottom")})),a.Nb(),a.Nb(),a.kc(14,Y,1,2,"app-card",9),a.Nb(),a.Ob(15,"div"),a.Ob(16,"div",10),a.Wb("click",(function(){return n.lib.board.cardModal(n.lib.board.activeCard)})),a.lc(17,"x"),a.Nb(),a.Mb(18,"app-card",11),a.Nb(),a.Nb()),2&t&&(a.zb(2),a.Bb("drawer left-drawer ",n.leftDrawerClass,""),a.zb(2),a.cc("name",n.leftToggleName),a.zb(1),a.bc("board",n.lib.board),a.zb(1),a.bc("player",n.lib.board.players.red),a.zb(2),a.bc("ngForOf",n.lib.board.players.blue.boardCards),a.zb(1),a.bc("lib",n.lib),a.zb(2),a.Bb("bottom-drawer drawer ",n.bottomDrawerClass,""),a.zb(2),a.cc("name",n.bottomToggleName),a.zb(1),a.bc("ngForOf",n.lib.board.players.red.deckCards),a.zb(1),a.Bb("card-view-modal ",n.lib.board.cardModalClasses.join(" "),""),a.zb(3),a.bc("card",n.lib.board.activeCard)("width",600))},directives:[c.b,c.d,g,C,i.h,y,B,j],styles:[".left-drawer[_ngcontent-%COMP%]{position:fixed;transition:.3s;left:0;top:0;width:300px;height:100vh;background-color:rgba(0,0,0,.8);padding:10px}.left-drawer.shown[_ngcontent-%COMP%]{transform:translateX(0)}.left-drawer.hidden[_ngcontent-%COMP%]{transform:translateX(-300px)}.toggle-button[_ngcontent-%COMP%]{width:30px;height:30px;position:absolute;background-color:#000;border:3px solid #fff;display:flex;justify-content:center;align-items:center;font-size:25px;border-radius:100%}.left-drawer[_ngcontent-%COMP%]   .toggle-button[_ngcontent-%COMP%]{right:-40px;top:40px;top:0}.bottom-drawer[_ngcontent-%COMP%]   .toggle-button[_ngcontent-%COMP%]{top:5px;left:calc(50vw - 15px);z-index:9999}.central-drawer[_ngcontent-%COMP%]{height:100vh;display:flex;justify-content:center;align-items:center}.bottom-drawer[_ngcontent-%COMP%]{display:flex;position:fixed;bottom:0;left:0;width:100vw;overflow-x:scroll;background-color:rgba(0,0,0,.8);padding:10px;transition:.3s}.bottom-drawer.shown[_ngcontent-%COMP%]{transform:translateY(0)}.bottom-drawer.hidden[_ngcontent-%COMP%]{transform:translateY(300px)}.card-view-modal[_ngcontent-%COMP%]{position:fixed;top:0;left:0;transform:translateX(0) translateY(0);width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.6);transition:.3s;opacity:1;visibility:visible}.card-view-modal.hidden[_ngcontent-%COMP%]{opacity:0;visibility:0;transform:translateY(100vh)}.close-card-modal[_ngcontent-%COMP%]{width:50px;height:50px;font-size:2em;display:flex;justify-content:center;align-items:center;text-align:center;border-radius:100%;background-color:#000;border:5px solid #fff;color:#fff;position:absolute;top:50px;right:50px}"]}),L)}],E=((I=function t(){_classCallCheck(this,t)}).\u0275mod=a.Jb({type:I}),I.\u0275inj=a.Ib({factory:function(t){return new(t||I)},imports:[[r.i.forChild(V)],r.i]}),I),D=e("j1ZV"),H=((S=function t(){_classCallCheck(this,t)}).\u0275mod=a.Jb({type:S}),S.\u0275inj=a.Ib({factory:function(t){return new(t||S)},imports:[[i.b,o.a,c.h,E,D.a]]}),S)}}]);