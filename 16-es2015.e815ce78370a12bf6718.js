(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"9JbG":function(e,t,i){"use strict";i.r(t),i.d(t,"InventoryPageModule",(function(){return R}));var c=i("ofXK"),n=i("3Pt+"),o=i("TEn/"),r=i("tyNb"),d=i("mrSG"),l=i("dfJG"),s=i("fXoL"),a=i("Sjme"),g=i("mvyS");function b(e,t){if(1&e&&(s.Ob(0,"div",5),s.pc(1),s.Nb()),2&e){const e=s.Yb(2);s.zb(1),s.rc(" ",e.dgService.toast.title," ")}}function f(e,t){if(1&e&&(s.Ob(0,"div",6),s.pc(1),s.Nb()),2&e){const e=s.Yb(2);s.zb(1),s.rc(" ",e.dgService.toast.body," ")}}function p(e,t){if(1&e&&(s.Ob(0,"div",9),s.Ob(1,"ion-button",10),s.Wb("click",(function(){return t.$implicit.fn()})),s.pc(2),s.Nb(),s.Nb()),2&e){const e=t.$implicit;s.zb(1),s.cc("color",e.color),s.zb(1),s.qc(e.action)}}function v(e,t){if(1&e&&(s.Ob(0,"div",7),s.oc(1,p,3,2,"div",8),s.Nb()),2&e){const e=s.Yb(2);s.zb(1),s.bc("ngForOf",e.dgService.toast.actions)}}function h(e,t){if(1&e&&(s.Ob(0,"div",1),s.oc(1,b,2,1,"div",2),s.oc(2,f,2,1,"div",3),s.oc(3,v,2,1,"div",4),s.Nb()),2&e){const e=s.Yb();s.zb(1),s.bc("ngIf",e.dgService.toast.title.length>0),s.zb(1),s.bc("ngIf",e.dgService.toast.body.length>0),s.zb(1),s.bc("ngIf",e.dgService.toast.actions.length>0)}}let m=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Fb({type:e,selectors:[["app-toast"]],inputs:{dgService:"dgService"},decls:1,vars:1,consts:[["class","toast",4,"ngIf"],[1,"toast"],["class","title",4,"ngIf"],["class","body",4,"ngIf"],["class","actions",4,"ngIf"],[1,"title"],[1,"body"],[1,"actions"],["class","action",4,"ngFor","ngForOf"],[1,"action"],[3,"color","click"]],template:function(e,t){1&e&&s.oc(0,h,4,3,"div",0),2&e&&s.bc("ngIf",t.dgService.toast.visible)},directives:[c.j,c.i],styles:[".toast[_ngcontent-%COMP%]{width:600px;position:relative;left:calc(50% - 300px);background-color:#070709;color:#fff;border:2px solid #29383f;border-radius:10px;padding:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 0 10px #29383f;margin:20px 0}.actions[_ngcontent-%COMP%], .body[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{margin:20px 10px}.body[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{width:100%;text-align:center}.title[_ngcontent-%COMP%]{font-size:1.2em;font-weight:700}.actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-evenly;align-items:center}.actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{min-width:150px;width:30%}.actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:100%}"]}),e})();var u=i("PvpL"),O=i("Vtdy"),C=i("yqEA"),k=i("Y5WK");function x(e,t){if(1&e){const e=s.Pb();s.Ob(0,"div",15),s.Wb("click",(function(){s.jc(e);const i=t.$implicit;return s.Yb().setFilterAttribute(i)})),s.Mb(1,"ion-img",16),s.Nb()}if(2&e){const e=t.$implicit,i=s.Yb();s.Bb("attribute-filter-item filter-item filter-item-",e,""),s.zb(1),s.cc("src",i.util.getDiceFace(e))}}function M(e,t){if(1&e){const e=s.Pb();s.Ob(0,"app-dice-full",25),s.Wb("dblclick",(function(){s.jc(e);const t=s.Yb().$implicit;return s.Yb(2).selectAndClick(t)})),s.Nb()}if(2&e){const e=s.Yb().$implicit;s.bc("dice",e)}}function y(e,t){if(1&e&&(s.Ob(0,"div",23),s.oc(1,M,1,1,"app-dice-full",24),s.Nb()),2&e){const e=t.$implicit;s.zb(1),s.bc("ngIf",e.values.copies>0)}}function S(e,t){if(1&e&&(s.Ob(0,"h2"),s.pc(1),s.Nb()),2&e){const e=s.Yb(2);s.zb(1),s.rc("Dice Deck (",e.dgService.profile.diceCaboodle.getFiltered("isInDeck",!0).length,"/5)")}}function P(e,t){if(1&e){const e=s.Pb();s.Ob(0,"app-dice-full",25),s.Wb("dblclick",(function(){s.jc(e);const i=t.$implicit;return s.Yb(2).deselectAndClick(i)})),s.Nb()}2&e&&s.bc("dice",t.$implicit)}function _(e,t){if(1&e&&(s.Ob(0,"div",17),s.Ob(1,"h1"),s.pc(2,"Dice Collection"),s.Nb(),s.Ob(3,"div",18),s.oc(4,y,2,1,"div",19),s.Nb(),s.oc(5,S,2,1,"h2",20),s.Ob(6,"div",21),s.oc(7,P,1,1,"app-dice-full",22),s.Nb(),s.Nb()),2&e){const e=s.Yb();s.zb(4),s.bc("ngForOf",e.getDiceCollection()),s.zb(1),s.bc("ngIf",e.dgService.profile.sm.values.canModifyDeck),s.zb(2),s.bc("ngForOf",e.dgService.profile.diceCaboodle.getFiltered("isInDeck",!0))}}function w(e,t){if(1&e){const e=s.Pb();s.Ob(0,"app-card-mini",28),s.Wb("dblclick",(function(){s.jc(e);const t=s.Yb().$implicit;return s.Yb().selectAndClick(t)})),s.Nb()}if(2&e){const e=s.Yb().$implicit,t=s.Yb();s.bc("card",e)("numberCopies",e.values.copies)("board",t.dgService.board)}}function I(e,t){if(1&e&&(s.Ob(0,"div",26),s.oc(1,w,1,3,"app-card-mini",27),s.Nb()),2&e){const e=t.$implicit;s.zb(1),s.bc("ngIf",e.values.copies>0)}}function D(e,t){if(1&e){const e=s.Pb();s.Ob(0,"app-card-mini",29),s.Wb("dblclick",(function(){s.jc(e);const i=t.$implicit,c=t.index;return s.Yb().deselectAndClick(i,c)})),s.Nb()}if(2&e){const e=t.$implicit,i=s.Yb();s.bc("card",e)("board",i.dgService.board)}}let N=(()=>{class e{constructor(e){this.util=l.k,this.isCardSelected=!1,this.isDiceSelected=!1,this.filters={attribute:"",cost:-1},this.diceCollectionLength=-1,this.dgService=e}ngOnInit(){return Object(d.a)(this,void 0,void 0,(function*(){}))}selectCard(e){return Object(d.a)(this,void 0,void 0,(function*(){this.clearSelectedDice(),this.clearSelectedCards(),this.isDiceSelected=!1,this.isCardSelected=!0;const t=this.dgService.profile.cardsCaboodle.getFiltered("originalHash",e.originalHash);e.sm.toggle("isSelected");let i=t.filter(e=>!e.sm.values.isInDeck)[0];i||(i=e),i.sm.enable("isSelected")}))}selectDeckCard(e){this.clearSelectedCards(),e.sm.toggle("isSelected")}selectDice(e){return Object(d.a)(this,void 0,void 0,(function*(){this.clearSelectedDice(),this.clearSelectedCards(),this.isDiceSelected=!0,this.isCardSelected=!1,e.sm.setValue("isSelected",!e.sm.values.isSelected)}))}addToDeck(){this.isCardSelected&&!this.isDiceSelected&&this.addCardsToDeck(),this.isDiceSelected&&!this.isCardSelected&&this.addDiceToDeck()}rmFromDeck(){}viewItem(){}addCardsToDeck(){const e=this.dgService.profile.cardsCaboodle.getFiltered("isSelected",!0);for(let t=0;t<e.length;t++)e[t].sm.enable("isInDeck");this.clearSelectedCards()}clearSelectedCards(){}clearSelectedDice(){const e=this.dgService.profile.diceCaboodle.items;for(let t=0;t<e.length;t++)e[t].sm.setState("deselected-"+e[t].hash)}rmCardsFromDeck(){const e=this.dgService.profile.cardsCaboodle.getFiltered("isSelected",!0);for(let t=0;t<e.length;t++)e[t].sm.setState("rmFromDeck-"+e[t].hash);this.clearSelectedCards()}addDiceToDeck(){const e=this.dgService.profile.diceCaboodle.getFiltered("isSelected",!0);for(let t=0;t<e.length;t++)e[t].sm.setState("addToDeck-"+e[t].hash);this.clearSelectedDice()}rmDiceFromDeck(){const e=this.dgService.profile.diceCaboodle.getFiltered("isSelected",!0);for(let t=0;t<e.length;t++)e[t].sm.setState("rmFromDeck-"+e[t].hash);this.clearSelectedDice()}getBoosterPack(){return Object(d.a)(this,void 0,void 0,(function*(){yield this.dgService.profile.getBalance(),this.dgService.profile.events.on("purchaseFn",e=>{}),this.dgService.profile.events.emit("purchaseBg",{profile:this.dgService.profile,httpMessenger:this.httpMessenger})}))}storeLocalDeck(){var e=this.dgService.profile.cardsCaboodle.getFiltered("isInDeck",!0).map(e=>({hash:e.hash,originalHash:e.originalHash}));localStorage.setItem("deck",JSON.stringify(e));var t=this.dgService.profile.diceCaboodle.getFiltered("isInDeck",!0).map(e=>({hash:e.hash,originalHash:e.originalHash}));localStorage.setItem("dice-deck",JSON.stringify(t))}closeModal(){return Object(d.a)(this,void 0,void 0,(function*(){try{const e=this.dgService.profile.cardsCaboodle.getFiltered("isInDeck",!0),t=this.dgService.profile.diceCaboodle.getFiltered("isInDeck",!0);if(10!==e.length||5!==t.length)return this.dgService.showToast("Your deck must contain 10 cards and 5 dice");yield this.storeRemoteDeck(),yield l.k.sleep(500),yield this.dgService.profile.getInventory(),this.dgService.profile.loadActiveDeck(),this.dgService.profile.sm.disable("showCardCollectionModal")}catch(e){console.error(e)}}))}selectAndClick(e){return Object(d.a)(this,void 0,void 0,(function*(){if(e instanceof k.a){if(this.dgService.profile.diceCaboodle.getFiltered("isInDeck",!0).length>=5)return;if(this.dgService.profile.diceCaboodle.getFiltered("originalHash",e.hash).length<=2){e.values.copies-=1,e.values.copiesInDeck+=1,this.dgService.board.diceCollection.update(e);const t=l.d.fromAbstract(this.dgService.events,e);t.sm.enable("isInDeck"),t.sm.enable("isOwned"),console.log("dice",t),this.dgService.profile.diceCaboodle.add(t)}}if(e instanceof C.a){if(this.dgService.profile.cardsCaboodle.getFiltered("isInDeck",!0).length>=10)return;if(this.dgService.profile.cardsCaboodle.getFiltered("originalHash",e.hash).length<=2){e.values.copies-=1,e.values.copiesInDeck+=1,this.dgService.board.cardCollection.update(e);const t=l.b.fromAbstract(this.dgService.events,e);t.sm.enable("isInDeck"),t.sm.enable("isOwned"),console.log("card",t),this.dgService.profile.cardsCaboodle.add(t)}}console.log("caboodle",this.dgService.profile.cardsCaboodle)}))}deselectAndClick(e,t=-1){return Object(d.a)(this,void 0,void 0,(function*(){if(e instanceof l.d&&(yield this.selectDice(e),this.rmDiceFromDeck()),e instanceof l.b){this.dgService.profile.cardsCaboodle.items.splice(t,1);const i=this.dgService.board.cardCollection.getFiltered("title",e.title)[0];i&&(i.values.copies+=1,i.values.copiesInDeck-=1,this.dgService.board.cardCollection.update(i))}}))}getFiltersAttributes(){return["water","fire","forest","wind","thunder","metal","light","dark","aether","neutral"]}setFilterAttribute(e){const t=document.querySelectorAll(".attribute-filter-item");let i=!0;document.querySelector(".filter-item-"+e).classList.contains("active")&&(i=!1);for(let c=0;c<t.length;c++)t[c].classList.remove("active");i?(this.filters.attribute=e,document.querySelector(".filter-item-"+e).classList.add("active")):this.filters.attribute=""}getDiceCollection(){let e=[];return this.dgService.profile.diceCaboodle.getFiltered("isInDeck",!0).map(e=>e.sm.values.originalHash),e=""===this.filters.attribute?this.dgService.board.diceCollection.getAllCopiesOwned():this.dgService.board.diceCollection.getAllCopiesOwned().filter(e=>e.faces.includes(this.filters.attribute)),e}getCardCollection(){let e=[];const t=this.dgService.profile.cardsCaboodle.getFiltered("isInDeck",!0).map(e=>e.sm.values.originalHash);if(""===this.filters.attribute)e=this.dgService.board.cardCollection.getFiltered("isOwned",!0,"attribute").filter(e=>!t.includes(e.hash));else{const t=this.dgService.board.cardCollection.getFiltered("isOwned",!0,"attribute");console.log("inDeck",t),e=t.filter(e=>!t.includes(e.hash)&&e.attribute===this.filters.attribute)}return e}getDiceDeck(){}storeRemoteDeck(){return Object(d.a)(this,void 0,void 0,(function*(){const e=this.dgService.profile.cardsCaboodle.getFiltered("isInDeck",!0),t=this.dgService.profile.diceCaboodle.getFiltered("isInDeck",!0),i=[];for(let o=0;o<e.length;o++)i.push({hash:e[o].sm.values.hash,originalHash:e[o].originalHash});const c=[];for(let o=0;o<t.length;o++)c.push({hash:t[o].sm.values.hash,originalHash:t[o].originalHash});this.dgService.profile.sm.values.activeDeck.cards=i,this.dgService.profile.sm.values.activeDeck.dice=c;const n=yield this.dgService.profile.postDeck(this.httpMessenger,this.dgService.profile.sm.values.activeDeck.title,{dice:c,cards:i},1);console.log("postdeck res",n)}))}cancelAndClose(){this.dgService.profile.sm.disable("showCardCollectionModal")}}return e.\u0275fac=function(t){return new(t||e)(s.Lb(a.a))},e.\u0275cmp=s.Fb({type:e,selectors:[["app-card-collection"]],inputs:{httpMessenger:"httpMessenger"},decls:22,vars:7,consts:[[1,"main"],[1,"panel"],[1,"filters-container"],[1,"deck-title"],[1,"filter","attribute-filter"],[3,"class","click",4,"ngFor","ngForOf"],["class","dice-side",4,"ngIf"],[1,"cards-side",3,"ngClass"],[1,"grid","card-collection"],["class","deck-card-container",4,"ngFor","ngForOf"],[1,"card-deck-grid"],[3,"card","board","dblclick",4,"ngFor","ngForOf"],[1,"close-modal"],["color","light",3,"click"],["color","primary",3,"click"],[3,"click"],[1,"filter-icon",3,"src"],[1,"dice-side"],[1,"dice-grid"],["class","collection-dice-container",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"dice-grid","dice-grid-bottom"],[3,"dice","dblclick",4,"ngFor","ngForOf"],[1,"collection-dice-container"],[3,"dice","dblclick",4,"ngIf"],[3,"dice","dblclick"],[1,"deck-card-container"],[3,"card","numberCopies","board","dblclick",4,"ngIf"],[3,"card","numberCopies","board","dblclick"],[3,"card","board","dblclick"]],template:function(e,t){1&e&&(s.Ob(0,"div",0),s.Ob(1,"div",1),s.Ob(2,"div",2),s.Ob(3,"div",3),s.pc(4),s.Nb(),s.Ob(5,"div",4),s.oc(6,x,2,4,"div",5),s.Nb(),s.Nb(),s.oc(7,_,8,3,"div",6),s.Ob(8,"div",7),s.Ob(9,"h1"),s.pc(10,"Card Collection"),s.Nb(),s.Ob(11,"div",8),s.oc(12,I,2,1,"div",9),s.Nb(),s.Ob(13,"h2"),s.pc(14),s.Nb(),s.Ob(15,"div",10),s.oc(16,D,1,2,"app-card-mini",11),s.Nb(),s.Nb(),s.Nb(),s.Ob(17,"div",12),s.Ob(18,"ion-button",13),s.Wb("click",(function(){return t.cancelAndClose()})),s.pc(19,"Cancel"),s.Nb(),s.Ob(20,"ion-button",14),s.Wb("click",(function(){return t.closeModal()})),s.pc(21,"Done"),s.Nb(),s.Nb(),s.Nb()),2&e&&(s.zb(4),s.rc(" ",t.dgService.profile.sm.values.activeDeck.title," "),s.zb(2),s.bc("ngForOf",t.getFiltersAttributes()),s.zb(1),s.bc("ngIf",t.dgService.profile.sm.values.canModifyDeck),s.zb(1),s.bc("ngClass",t.dgService.profile.sm.values.canModifyDeck?"":"cannot-edit"),s.zb(4),s.bc("ngForOf",t.getCardCollection()),s.zb(2),s.rc("Card Deck (",t.dgService.profile.cardsCaboodle.getFiltered("isInDeck",!0).length,"/10)"),s.zb(2),s.bc("ngForOf",t.dgService.profile.cardsCaboodle.getFiltered("isInDeck",!0)))},directives:[c.i,c.j,c.h,u.a,O.a],styles:[".main[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#070709;display:flex;justify-content:center;align-items:center}.close-modal[_ngcontent-%COMP%]{position:fixed;top:20px;right:20px}.panel[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:space-evenly;align-items:center;background-color:#12191f;width:95%;height:90%;border-bottom:4px solid #243338;border-top:8px solid #c4812a;margin-top:80px;padding:20px}.filters-container[_ngcontent-%COMP%]{position:absolute;height:74px;top:-74px;width:95vw}.filter-item[_ngcontent-%COMP%], .filters-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.filter-item[_ngcontent-%COMP%]{width:48px;height:48px;border:4px solid #243338;overflow:hidden;border-radius:100%}.filter-item.active[_ngcontent-%COMP%]{background-color:#c4812a}.filter-icon[_ngcontent-%COMP%]{width:80%}.attribute-filter[_ngcontent-%COMP%]{width:-webkit-min-content;width:-moz-min-content;width:min-content;border-color:#c4812a #c4812a #12191f;padding:0 20px}.attribute-filter[_ngcontent-%COMP%], .deck-title[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background-color:#12191f;border-style:solid;border-width:8px 4px 4px;height:100%}.deck-title[_ngcontent-%COMP%]{position:absolute;left:0;width:20%;max-width:400px;text-overflow:ellipsis;border-color:#c4812a #c4812a #12191f #12191f;font-size:1.3em;color:#fff}.dice-side[_ngcontent-%COMP%]{width:400px;height:100%;justify-content:center}.dice-grid[_ngcontent-%COMP%], .dice-side[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}.dice-grid[_ngcontent-%COMP%]{height:calc(100% - 400px);width:100%;overflow-y:scroll;overflow-x:hidden;justify-content:flex-start;background-color:#070709;border:2px solid #243338}.dice-grid-bottom[_ngcontent-%COMP%]{height:300px}.cards-side[_ngcontent-%COMP%]{height:100%;width:calc(95% - 400px);display:flex;justify-content:center;align-items:center;flex-direction:column}app-card-mini[_ngcontent-%COMP%]{margin:20px}.card-collection[_ngcontent-%COMP%]{justify-content:center;align-items:flex-start;flex-wrap:wrap;overflow-y:scroll;height:calc(100% - 400px)}.card-collection[_ngcontent-%COMP%], .card-deck-grid[_ngcontent-%COMP%]{display:flex;background-color:#070709;border:2px solid #243338}.card-deck-grid[_ngcontent-%COMP%]{justify-content:flex-start;align-items:center;overflow-y:hidden;overflow-x:scroll;height:300px;width:100%}.separator[_ngcontent-%COMP%]{width:90%;position:relative;left:5%;height:1px;background-color:#243338;margin:20px 0}h1[_ngcontent-%COMP%]{color:#c4812a;font-size:1.5em}h2[_ngcontent-%COMP%]{color:#fff;font-size:1.2em}.deck-card-container[_ngcontent-%COMP%]{padding:20px}"]}),e})();var F=i("aVLY");const z=function(e){return{active:e}};function j(e,t){if(1&e){const e=s.Pb();s.Ob(0,"div",17),s.Wb("click",(function(){s.jc(e);const i=t.$implicit;return s.Yb().selectItem(i)})),s.Ob(1,"div",18),s.pc(2),s.Nb(),s.Ob(3,"div",19),s.Mb(4,"ion-img",20),s.Nb(),s.Ob(5,"div",21),s.pc(6),s.Nb(),s.Nb()}if(2&e){const e=t.$implicit;s.bc("ngClass",s.fc(4,z,1===e.active)),s.zb(2),s.rc(" ",e.title," "),s.zb(2),s.cc("src",e.data.url||"assets/icons/deck.png"),s.zb(2),s.rc(" \xb7 ",e.type.toUpperCase()," \xb7 ")}}function A(e,t){if(1&e&&(s.Ob(0,"div",28),s.Ob(1,"div",18),s.pc(2),s.Nb(),s.Ob(3,"div",19),s.Mb(4,"ion-img",20),s.Nb(),s.Ob(5,"div",21),s.pc(6),s.Nb(),s.Nb()),2&e){const e=s.Yb(2);s.zb(2),s.rc(" ",e.activeItem.title," "),s.zb(2),s.cc("src","assets/icons/deck.png"),s.zb(2),s.rc(" \xb7 ",e.activeItem.type.toUpperCase()," \xb7 ")}}function Y(e,t){if(1&e&&(s.Ob(0,"div",28),s.Ob(1,"div",18),s.pc(2),s.Nb(),s.Ob(3,"div",19),s.Mb(4,"ion-img",20),s.Nb(),s.Ob(5,"div",21),s.pc(6),s.Nb(),s.Nb()),2&e){const e=s.Yb(2);s.zb(2),s.rc(" ",e.activeItem.title," "),s.zb(2),s.cc("src",e.activeItem.data.url),s.zb(2),s.rc(" \xb7 ",e.activeItem.type.toUpperCase()," \xb7 ")}}function H(e,t){if(1&e){const e=s.Pb();s.Ob(0,"ion-button",31),s.Wb("click",(function(){s.jc(e);const t=s.Yb(3);return t.activateAvatar(t.activeItem)})),s.pc(1,"Activate"),s.Nb()}}function $(e,t){if(1&e&&(s.Ob(0,"div",29),s.oc(1,H,2,0,"ion-button",30),s.Nb()),2&e){const e=s.Yb(2);s.zb(1),s.bc("ngIf",e.activeItem.active<1)}}function W(e,t){if(1&e){const e=s.Pb();s.Ob(0,"ion-button",36),s.Wb("click",(function(){s.jc(e);const t=s.Yb(3);return t.activateDeck(t.activeItem)})),s.pc(1,"Activate"),s.Nb()}}function T(e,t){if(1&e){const e=s.Pb();s.Ob(0,"div",32),s.oc(1,W,2,0,"ion-button",33),s.Ob(2,"ion-button",34),s.Wb("click",(function(){s.jc(e);const t=s.Yb(2);return t.editDeck(t.activeItem)})),s.pc(3,"Edit"),s.Nb(),s.Ob(4,"ion-button",35),s.Wb("click",(function(){s.jc(e);const t=s.Yb(2);return t.deleteDeck(t.activeItem)})),s.pc(5,"Delete"),s.Nb(),s.Nb()}if(2&e){const e=s.Yb(2);s.zb(1),s.bc("ngIf",e.activeItem.active<1)}}function q(e,t){1&e&&s.Mb(0,"app-dice-full",42),2&e&&s.bc("dice",t.$implicit)}function L(e,t){if(1&e&&s.Mb(0,"app-card-mini",43),2&e){const e=t.$implicit,i=s.Yb(3);s.bc("card",e)("board",i.dgService.board)}}function J(e,t){if(1&e&&(s.Ob(0,"div",37),s.Ob(1,"div",38),s.oc(2,q,1,1,"app-dice-full",39),s.Nb(),s.Ob(3,"div",40),s.oc(4,L,1,2,"app-card-mini",41),s.Nb(),s.Nb()),2&e){const e=s.Yb(2);s.zb(2),s.bc("ngForOf",e.getDiceInDeck(e.activeItem.data.dice)),s.zb(2),s.bc("ngForOf",e.getCardsInDeck(e.activeItem.data.cards))}}function B(e,t){if(1&e&&(s.Ob(0,"div",22),s.oc(1,A,7,3,"div",23),s.oc(2,Y,7,3,"div",23),s.oc(3,$,2,1,"div",24),s.oc(4,T,6,1,"div",25),s.Ob(5,"div",26),s.oc(6,J,5,2,"div",27),s.Nb(),s.Nb()),2&e){const e=s.Yb();s.zb(1),s.bc("ngIf","deck"===e.activeItem.type),s.zb(1),s.bc("ngIf","avatar"===e.activeItem.type),s.zb(1),s.bc("ngIf","avatar"===e.activeItem.type),s.zb(1),s.bc("ngIf","deck"===e.activeItem.type),s.zb(2),s.bc("ngIf","deck"===e.activeItem.type)}}function V(e,t){if(1&e&&(s.Ob(0,"div",44),s.Mb(1,"app-card-collection",45),s.Nb()),2&e){const e=s.Yb();s.zb(1),s.bc("httpMessenger",e.dgService.httpMessenger)}}function E(e,t){if(1&e&&(s.Ob(0,"div",46),s.Mb(1,"app-card-full",43),s.Nb()),2&e){const e=s.Yb();s.zb(1),s.bc("card",e.dgService.board.sm.values.cardInDisplay)("board",e.dgService.board)}}const G=[{path:"",component:(()=>{class e{constructor(e){this.activeItem={},localStorage.getItem("auth-token")||(window.location.href="/access"),this.dgService=e}ngOnInit(){}selectItem(e){this.activeItem=e,console.log("selected",e)}getDiceInDeck(e){const t=[];for(let i=0;i<e.length;i++){e[i].originalHash=l.k.hashPrefix(e[i].originalHash);const c=this.dgService.board.diceCollection.getFiltered("hash",e[i].originalHash)[0];c&&t.push(c)}return console.log(t),t}createDeck(){return Object(d.a)(this,void 0,void 0,(function*(){const e=document.querySelector("#new-deck-name").value.trim();0!==e.length&&(yield this.dgService.profile.postDeck(this.dgService.httpMessenger,e,{cards:[],dice:[]},0),yield l.k.sleep(500),yield this.dgService.profile.getInventory(),document.querySelector("#new-deck-name").value="")}))}getCardsInDeck(e=[]){const t=[];for(let i=0;i<e.length;i++){e[i].originalHash=l.k.hashPrefix(e[i].originalHash);const c=this.dgService.board.cardCollection.getFiltered("hash",e[i].originalHash)[0];c&&t.push(c)}return t}editDeck(e){const t=document.querySelector("#edit-deck");t.hasAttribute("disabled")||(t.setAttribute("disabled","true"),this.dgService.profile.sm.enable("showCardCollectionModal"),this.dgService.profile.sm.values.activeDeck.title=e.title,this.dgService.profile.sm.values.activeDeck.cards=e.data.cards,this.dgService.profile.sm.values.activeDeck.dice=e.data.dice,console.log(e.data.cards),this.dgService.profile.loadActiveDeck(e.data.cards,e.data.dice),console.log(this.dgService.profile.diceCaboodle),this.activeItem={},t.removeAttribute("disabled"))}activateDeck(e){return Object(d.a)(this,void 0,void 0,(function*(){const t=document.querySelector("#activate-deck");t.hasAttribute("disabled")||(t.setAttribute("disabled","true"),this.dgService.profile.sm.values.activeDeck.title=e.title,this.dgService.profile.sm.values.activeDeck.cards=e.data.cards,this.dgService.profile.sm.values.activeDeck.dice=e.data.dice,yield this.dgService.profile.postDeck(this.dgService.httpMessenger,e.title,{card:e.data.cards,dice:e.data.dice},1),this.activeItem={},this.dgService.showToast("Deck `"+e.title+"` activated"),yield l.k.sleep(500),yield this.dgService.profile.getInventory(),t.removeAttribute("disabled"))}))}activateAvatar(e){return Object(d.a)(this,void 0,void 0,(function*(){const t=document.querySelector("#activate-avatar");t.hasAttribute("disabled")||(t.setAttribute("disabled","true"),yield this.dgService.profile.addAvatar(this.dgService.httpMessenger,e.data.url,e.data.title,1),this.dgService.showToast("Avatar `"+e.title+"` activated"),this.activeItem={},yield l.k.sleep(500),yield this.dgService.profile.getInventory(),t.removeAttribute("disabled"))}))}deleteDeck(e){return Object(d.a)(this,void 0,void 0,(function*(){const t=document.querySelector("#delete-deck");t.hasAttribute("disabled")||(t.setAttribute("disabled","true"),this.dgService.showToast("Are you sure?","You are about to delete all decks named `"+e.title+"`. Do you want to proceed?",[{action:"No",color:"danger",fn:()=>{t.removeAttribute("disabled"),this.dgService.toast.visible=!1}},{action:"Yes",color:"success",fn:()=>Object(d.a)(this,void 0,void 0,(function*(){this.dgService.toast.visible=!1,yield this.dgService.profile.deleteDeck(e.title,this.dgService.httpMessenger),this.activeItem.active={},yield l.k.sleep(500),yield this.dgService.profile.getInventory(),t.removeAttribute("disabled")}))}]))}))}}return e.\u0275fac=function(t){return new(t||e)(s.Lb(a.a))},e.\u0275cmp=s.Fb({type:e,selectors:[["app-inventory"]],decls:18,vars:6,consts:[[1,"main"],[1,"panel"],[1,"panel-header"],[1,"item-filter"],[1,"new-deck-form"],[1,"text-container"],["id","new-deck-name","type","text","placeholder","Deck Name"],["color","primary",3,"click"],[1,"inventory-items","items"],["class","item",3,"ngClass","click",4,"ngFor","ngForOf"],["class","item-detail",4,"ngIf"],[1,"bottom-nav"],["activeTab","inventory",3,"profile"],["class","card-collection-modal",4,"ngIf"],["class","modal",4,"ngIf"],[1,"toaster"],[3,"dgService"],[1,"item",3,"ngClass","click"],[1,"item-title"],[1,"item-avatar"],[3,"src"],[1,"item-type"],[1,"item-detail"],["class","item",4,"ngIf"],["class","actions-avatar",4,"ngIf"],["class","actions-deck",4,"ngIf"],[1,"description"],["class","deck-detail",4,"ngIf"],[1,"item"],[1,"actions-avatar"],["id","activate-avatar","color","primary",3,"click",4,"ngIf"],["id","activate-avatar","color","primary",3,"click"],[1,"actions-deck"],["id","activate-deck","color","primary",3,"click",4,"ngIf"],["id","edit-deck","color","primary",3,"click"],["id","delete-deck","color","primary",3,"click"],["id","activate-deck","color","primary",3,"click"],[1,"deck-detail"],[1,"dice-deck"],[3,"dice",4,"ngFor","ngForOf"],[1,"card-deck"],[3,"card","board",4,"ngFor","ngForOf"],[3,"dice"],[3,"card","board"],[1,"card-collection-modal"],[3,"httpMessenger"],[1,"modal"]],template:function(e,t){1&e&&(s.Ob(0,"div",0),s.Ob(1,"div",1),s.Ob(2,"div",2),s.Mb(3,"div",3),s.Ob(4,"div",4),s.Ob(5,"div",5),s.Mb(6,"ion-input",6),s.Nb(),s.Ob(7,"ion-button",7),s.Wb("click",(function(){return t.createDeck()})),s.pc(8,"+"),s.Nb(),s.Nb(),s.Nb(),s.Ob(9,"div",8),s.oc(10,j,7,6,"div",9),s.Nb(),s.oc(11,B,7,5,"div",10),s.Nb(),s.Nb(),s.Ob(12,"div",11),s.Mb(13,"app-navigation",12),s.Nb(),s.oc(14,V,2,1,"div",13),s.oc(15,E,2,2,"div",14),s.Ob(16,"div",15),s.Mb(17,"app-toast",16),s.Nb()),2&e&&(s.zb(10),s.bc("ngForOf",t.dgService.profile.sm.values.inventory),s.zb(1),s.bc("ngIf",t.activeItem.active>=0),s.zb(2),s.bc("profile",t.dgService.profile),s.zb(1),s.bc("ngIf",t.dgService.profile.sm.values.showCardCollectionModal),s.zb(1),s.bc("ngIf",t.dgService.profile.sm.values.isLoggedIn&&t.dgService.board.sm.values.cardInDisplay),s.zb(2),s.bc("dgService",t.dgService))},directives:[o.f,o.p,o.b,c.i,c.j,g.a,m,c.h,o.e,u.a,O.a,N,F.a],styles:[".main[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;overflow:hidden;background-color:#070709;display:flex;justify-content:flex-start;align-items:center;flex-direction:column;padding-top:96px}.bottom-nav[_ngcontent-%COMP%]{width:80%;left:10%;height:128px;position:fixed;bottom:0}.panel[_ngcontent-%COMP%]{width:95%;max-width:100%;padding-top:25px;background-color:#12191f;border-bottom:4px solid #243338;border-top:8px solid #c4812a;justify-content:flex-start;height:calc(100vh - 256px);box-shadow:0 0 25px #000;border-radius:4px;position:relative}.panel[_ngcontent-%COMP%], .panel-header[_ngcontent-%COMP%]{display:flex;align-items:center}.panel-header[_ngcontent-%COMP%]{width:95vw;max-width:100vw;height:72px;top:-72px;position:absolute;z-index:2;justify-content:space-between}.item-filter[_ngcontent-%COMP%]{width:30%;height:100%;background-color:#12191f;border-right:4px solid #c4812a;border-bottom:4px solid #12191f;border-top:8px solid #c4812a}.item-filter[_ngcontent-%COMP%], .item-filter[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.item-filter[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:48px;height:48px;margin:0 20px;border:2px solid #243338;background-color:#091315;box-shadow:0 0 5px #000;transition:.3s}.item-filter[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:36px}.item-filter[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover{box-shadow:0 0 5px #fff}.item-filter[_ngcontent-%COMP%]   .icon.active[_ngcontent-%COMP%]{border:2px solid #c4812a}.new-deck-form[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;align-items:center;width:40%;height:100%;background-color:#12191f;border-left:4px solid #c4812a;border-bottom:4px solid #12191f;border-top:8px solid #c4812a}.new-deck-form[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]{width:70%}.new-deck-form[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{background-color:#29383f;border:2px solid #243338;margin:10px 0;text-align:center;color:#fff}.new-deck-form[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:48px}.inventory-items.items[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:flex-start;overflow-y:scroll;flex-wrap:wrap}.inventory-items.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{width:256px;height:256px;margin:10px;border:2px solid #243338;border-radius:10px;display:flex;justify-content:space-between;align-items:center;flex-direction:column;padding-bottom:20px;background-color:#091315;transition:.3s}.inventory-items.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{transition:.3s}.inventory-items.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-avatar[_ngcontent-%COMP%]{width:128px;height:128px;border:2px solid #243338;border-radius:3px;overflow:hidden;background-color:#070709;padding:24px;display:flex;justify-content:center;align-items:center;transition:.3s}.inventory-items.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-type[_ngcontent-%COMP%]{width:100%;text-align:center;color:#fff;font-size:1em;padding:5px 0}.inventory-items.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%]{width:100%;text-align:center;font-size:1.2em;padding:10px 0;color:#fff}.inventory-items.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-deck-info[_ngcontent-%COMP%]{background-color:#000;border:1px solid #fff;color:#fff;border-radius:3px;display:flex;justify-content:space-evenly;align-items:center;flex-direction:column;width:128px;height:128px}.inventory-items.items[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%]{border:2px solid #091315;background-color:#070709}.inventory-items.items[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%]   .item-avatar[_ngcontent-%COMP%]{background-color:#243338}.inventory-items.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{text-shadow:0 0 5px #c4812a;border:2px solid #c4812a}.inventory-items.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   ion-img[_ngcontent-%COMP%]{filter:drop-shadow(0 0 5px #c4812a)}.inventory-items.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .item-avatar[_ngcontent-%COMP%]{border:2px solid #c4812a}.item-detail[_ngcontent-%COMP%]{width:700px;height:100%;border:2px solid #243338;background-color:#091315;justify-content:flex-start;margin:20px;overflow-y:scroll}.item-detail[_ngcontent-%COMP%], .item-detail[_ngcontent-%COMP%]   .dice-deck[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}.item-detail[_ngcontent-%COMP%]   .dice-deck[_ngcontent-%COMP%]{justify-content:center}.item-detail[_ngcontent-%COMP%]   .card-deck[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap}.item-detail[_ngcontent-%COMP%]   .card-deck[_ngcontent-%COMP%]   app-card-mini[_ngcontent-%COMP%]{margin:20px}.item-detail[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{width:256px;height:256px;margin:10px;border:2px solid #243338;border-radius:10px;display:flex;justify-content:space-between;align-items:center;flex-direction:column;padding-bottom:20px;background-color:#091315;transition:.3s}.item-detail[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{transition:.3s}.item-detail[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-avatar[_ngcontent-%COMP%]{width:128px;height:128px;border:2px solid #243338;border-radius:3px;overflow:hidden;background-color:#070709;padding:24px;display:flex;justify-content:center;align-items:center;transition:.3s}.item-detail[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-type[_ngcontent-%COMP%]{width:100%;text-align:center;color:#fff;font-size:1em;padding:5px 0}.item-detail[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%]{width:100%;text-align:center;font-size:1.2em;padding:10px 0;color:#fff}.item-detail[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-deck-info[_ngcontent-%COMP%]{background-color:#000;border:1px solid #fff;color:#fff;border-radius:3px;display:flex;justify-content:space-evenly;align-items:center;flex-direction:column;width:128px;height:128px}.modal[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.8);display:flex;justify-content:center;align-items:center}.card-collection-modal[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]{position:fixed;left:0;top:0;width:100vw;height:100vh}.toaster[_ngcontent-%COMP%]{position:fixed;width:100%;top:0;left:0}"]}),e})()}];let U=(()=>{class e{}return e.\u0275mod=s.Jb({type:e}),e.\u0275inj=s.Ib({factory:function(t){return new(t||e)},imports:[[r.i.forChild(G)],r.i]}),e})();var K=i("j1ZV");let R=(()=>{class e{}return e.\u0275mod=s.Jb({type:e}),e.\u0275inj=s.Ib({factory:function(t){return new(t||e)},imports:[[c.b,n.a,o.m,U,K.a]]}),e})()}}]);