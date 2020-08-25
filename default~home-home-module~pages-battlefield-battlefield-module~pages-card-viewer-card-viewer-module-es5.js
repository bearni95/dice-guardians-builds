function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~pages-battlefield-battlefield-module~pages-card-viewer-card-viewer-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth-modal/auth-modal.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth-modal/auth-modal.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAuthModalAuthModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-shadow\">\n  <ion-card class=\"modal auth-modal\">\n    <ion-label>Sign in</ion-label>\n    <ion-input placeholder=\"Email/username\" [(ngModel)]=\"signin_email\"></ion-input>\n    <ion-input placeholder=\"password\" [(ngModel)]=\"signin_pwd\" type=\"password\"></ion-input>\n    <ion-button (click)=\"lib.user.auth(signin_email, signin_pwd)\">Sign in</ion-button>\n    <ion-label>Register</ion-label>\n    <ion-input placeholder=\"Invitation code (required)\" type=\"text\" [(ngModel)]=\"register_voucher\"></ion-input>\n    <ion-input placeholder=\"Email\" type=\"email\" [(ngModel)]=\"register_email\"></ion-input>\n    <ion-input minlength=\"6\" maxlength=\"54\" placeholder=\"Username\" [(ngModel)]=\"register_user\"></ion-input>\n    <ion-input minlength=\"8\" maxlength=\"54\" placeholder=\"Password\" type=\"password\" [(ngModel)]=\"register_pwd\"></ion-input>\n    <ion-button (click)=\"register()\">Register</ion-button>\n  </ion-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/board-battler/board-battler.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/board-battler/board-battler.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBoardBattlerBoardBattlerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"board-battler\">\n  <div\n    class=\"creature-shadow creature-shadow-{{player.color}}\"\n    style=\"left:{{ -1 * card.offset.x}}px;bottom: {{ -1 * card.offset.y}}px;\"\n    *ngIf=\"!player.isBattlePending && !player.isMovePending\"\n    ></div>\n\n  <!--\n  <div class=\"tooltip {{tooltipClass}}\">\n    <div class=\"vit-txt\">\n      {{card.vitality}}/{{card.maxVitality}}\n    </div>\n    <ion-progress-bar value=\"{{vitPercent()}}\">\n    </ion-progress-bar>\n    <div class=\"card-name\">{{card.title}}</div>\n    <div class=\"edge-container\">\n      <div\n        class=\"board-edge\"\n        (click)=\"magnify(card)\"\n      >\n        <ion-img\n          src=\"assets/icons/magnify.png\"\n        ></ion-img>\n      </div>\n      <div\n        class=\"board-edge\"\n        [ngClass]=\"{'can-move': !card.hasMoved}\"\n        (click)=\"board.moveBg(player, card, true)\"\n      >\n        <ion-img\n          src=\"assets/icons/mov-w-t.png\"\n        ></ion-img>\n      </div>\n\n      <div\n        class=\"board-edge\"\n        (click)=\"board.battleBg(player, card, true)\"\n        [ngClass]=\"{'can-attack': card.hasBattled}\"\n      >\n        <ion-img\n          src=\"assets/icons/btl-w-t.png\"\n        ></ion-img>\n      </div>\n\n      <div\n        class=\"board-edge\"\n      >\n        <ion-img\n          src=\"assets/icons/hex-w-t.png\"\n        ></ion-img>\n      </div>\n    </div>\n  </div>\n\n  -->\n  <ion-img\n    (click)=\"toggleTooltip()\"\n    class=\"illustration\"\n    src=\"{{card.getBattlerUrl()}}\"\n    [ngClass]=\"{\n      'rival-illustration' : board.isRival(player),\n      'click-events-enable' : card.canBeClicked,\n      'click-events-disable' : !card.canBeClicked\n    }\"\n  ></ion-img>\n\n  <div\n    *ngIf=\"card.showMenu\"\n    class=\"board-card-menu click-events-enable card-top-menu\"\n  >\n  <div class=\"menu-item h1 menu-item-{{player.color}}\">{{card.title}}</div>\n\n    <div class=\"menu-item\">\n      <div class=\"progress-bar\" style=\"width:{{card.getVitPercent()}}%;\"></div>\n      <div class=\"progress-bar-text\">VIT: {{card.boardStats.vit}}/{{card.vit}}</div>\n    </div>\n    <div class=\"menu-item\" (click)=\"board.cardModal(card);toggleTooltip();\">View Card</div>\n    <div class=\"menu-item\" (click)=\"toggleTooltip()\">[Close]</div>\n  </div>\n\n\n  <div\n    *ngIf=\"card.showMenu\"\n    class=\"board-card-menu click-events-enable card-right-menu\"\n  >\n    <app-chip\n      *ngIf=\"!board.isRival(player) && !card.hasMoved\"\n      (click)=\"toggleTooltip();board.moveBg(player, card, true);\"\n      text=\"MOV: {{card.boardStats.mov}}\"\n    ></app-chip>\n    <div *ngIf=\"board.isRival(player)  || card.hasMoved\" class=\"menu-item\">\n      Move ({{card.boardStats.mov}})\n    </div>\n    <app-chip\n      *ngIf=\"!board.isRival(player) && !card.hasBattled\"\n      (click)=\"toggleTooltip();board.battleBg(player, card);\"\n      text=\"BTL: {{card.boardStats.btl}}\"\n    ></app-chip>\n    <div *ngIf=\"board.isRival(player) || card.hasBattled\" class=\"menu-item\">\n      Battle ({{card.boardStats.btl}})\n    </div>\n    <div class=\"menu-item\">\n      Vitality: {{card.vit}}\n    </div>\n    <div class=\"menu-item\">\n      Range: {{card.boardStats.rng}}\n    </div>\n  </div>\n\n  <div\n    class=\"action-ring\"\n    style=\"left:{{ -1 * card.offset.x}}px;bottom: {{ -1 * card.offset.y}}px;\"\n    *ngIf=\"\n      player.isMovePending && board.pendingCard.id === card.id\n    \"\n  >\n    <div class=\"top-triangle\"></div>\n    <div class=\"left-triangle\"></div>\n    <ion-img\n      (click)=\"board.cancelMove(player, card)\"\n      class=\"action-img click-events-enable\"\n      src=\"assets/icons/mov-w-t.png\"\n    ></ion-img>\n    <div class=\"bottom-triangle\"></div>\n    <div class=\"right-triangle\"></div>\n    <div class=\"step-counter\">{{player.moveCounter + 1}}</div>\n\n  </div>\n\n  <div\n    class=\"action-ring\"\n    style=\"left:{{ -1 * card.offset.x}}px;bottom: {{ -1 * card.offset.y}}px;\"\n    *ngIf=\"\n      player.isBattlePending && board.pendingCard.id === card.id\n    \"\n  >\n    <div class=\"top-triangle\"></div>\n    <div class=\"left-triangle\"></div>\n    <ion-img\n      (click)=\"board.cancelBattle(player, card)\"\n      class=\"action-img click-events-enable\"\n      src=\"assets/icons/btl-w-t.png\"\n    ></ion-img>\n    <div class=\"bottom-triangle\"></div>\n    <div class=\"right-triangle\"></div>\n    <div class=\"step-counter\">{{card.btl}}</div>\n\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/board/board.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/board/board.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBoardBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ion-play-area\">\n  <ion-img class=\"board-background\" src=\"{{lib.board.getActiveRoom().backgroundUrl}}\"></ion-img>\n  <div class=\"ion-play-row\"\n    *ngFor=\"let x of lib.board.getActiveRoom().cols; let n = index;\"\n    class=\"x-{{x}}\"\n  >\n    <div class=\"ion-play-col\"\n      *ngFor=\"let y of lib.board.getActiveRoom().rows; let l = index;\"\n      class=\"y-{{y}}\"\n    >\n      <div class=\"ion-play-cell\"\n        (click)=\"cell.click(lib.board.players.red)\"\n        *ngFor=\"let cell of [lib.board.getCell(x, y)]; let i = index\"\n        class=\"cell {{cell.classes.join(' ')}} {{cell.domPrefix}}x-{{cell.x}}-y-{{cell.y}}\"\n      >\n        <div class=\"sprite\"\n          *ngIf=\"cell.sprite\"\n          style=\"\n            background-image:url({{cell.sprite.url}});\n            background-size:{{2 * cell.sprite.width}}px {{2 * cell.sprite.height}}px;\n            background-position: {{ -64 * cell.sprite.x}}px {{ -64 * cell.sprite.y}}px;\n          \"\n\n        ></div>\n        <div *ngIf=\"cell.src === ''\" class=\"ion-cell-borders\"></div>\n        <!--{{cell.x}} : {{cell.y}}-->\n\n      </div>\n    </div>\n  </div>\n\n  <app-board-battler\n    *ngFor=\"let card of lib.board.players.blue.boardCards\"\n    [card]=\"card\"\n    [board]=\"lib.board\"\n    [player]=\"lib.board.players.blue\"\n    style=\"top:{{card.y}}px;left:{{card.x}}px;\"\n  ></app-board-battler>\n  <app-board-battler\n    *ngFor=\"let card of lib.board.players.red.boardCards\"\n    [card]=\"card\"\n    [board]=\"lib.board\"\n    [player]=\"lib.board.players.red\"\n    style=\"top:{{card.y}}px;left:{{card.x}}px;\"\n  ></app-board-battler>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/button/button.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/button/button.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsButtonButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"button-outer\" style=\"width:{{width}};\">\n  <div class=\"corner left-corner\"></div>\n  <div class=\"button-inner\">\n    <ion-icon *ngIf=\"iconLeft !== ''\" name=\"{{iconLeft}}\"></ion-icon>\n    {{text}}\n    <ion-icon *ngIf=\"iconRight !== ''\" name=\"{{iconRight}}\"></ion-icon>\n  </div>\n  <div class=\"corner right-corner\"></div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCardCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\nclass=\"card-absolute-container\"\nstyle=\"\n  width:{{width}}px;\n  height:{{(width * 1.5)}}px;\n\"\n>\n\n<div\n  class=\"card-outer {{card.classes.join(' ')}}\"\n  style=\"\n    background-image:url({{card.backgroundUrl}});\n    transform: scale(calc( {{width}} / 500));\n    justify-content: {{innerAlign}}\n  \">\n\n  <!--<ion-img\n    class=\"illustration-background\"\n    src=\"{{card.backgroundUrl}}\"\n  ></ion-img>-->\n\n  <div class=\"card-title\">{{card.title}}</div>\n  <div class=\"card-cost-container\">\n    <div class=\"cost-item\" *ngFor=\"let cost of card.cost\" >\n      <ion-img src=\"{{dice.getAttrImage(cost)}}\"></ion-img>\n    </div>\n  </div>\n\n\n\n  <div class=\"illustration\">\n\n    <ion-img\n      class=\"illustration-circle\"\n      src=\"{{card.getCircleUrl()}}\"\n    ></ion-img>\n    <ion-img\n      class=\"illustration-battler\"\n      src=\"{{card.getBattlerUrl()}}\"\n    ></ion-img>\n\n  </div>\n\n\n  <div *ngIf=\"card.abilities.length > 0\" class=\"card-abilities\">\n    <div\n      class=\"ability-tooltip\"\n      *ngIf=\"card.showAbility\"\n      (click)=\"toggleAbilityTooltip(card.activeAbility)\"\n\n    >{{card.activeAbility.text}}</div>\n    <div\n      *ngFor=\"let ability of card.abilities; let i = index\"\n      class=\"card-ability card-ability-{{ability.id}}\"\n      (click)=\"toggleAbilityTooltip(ability)\"\n    >\n      <ion-img class=\"ability-icon\" src=\"{{ability.iconUrl}}\"></ion-img>\n      <!--<ion-img class=\"ability-icon\" src=\"{{statToIcons[ability.cost_stat]}}\"></ion-img>-->\n\n    </div>\n  </div>\n\n\n  <div class=\"card-stats\">\n\n    <div class=\"card-stat-item mov\">\n      <ion-img src=\"{{statIcons[0]}}\"></ion-img>\n      <div class=\"stat-value\">{{pad(card.mov)}}\n      </div>\n    </div>\n    <div class=\"card-stat-item btl\">\n      <ion-img src=\"{{statIcons[1]}}\"></ion-img>\n      <div class=\"stat-value\">{{pad(card.btl)}}\n      </div>\n    </div>\n    <div class=\"card-stat-item vit\">\n      <ion-img src=\"{{statIcons[2]}}\"></ion-img>\n      <div class=\"stat-value\">{{pad(card.vit)}}\n      </div>\n    </div>\n  </div>\n\n\n\n</div>\n\n<div class=\"board-card-menu\" style=\"display:{{disableMenu}}\">\n  <div class=\"menu-item\" (click)=\"magnify(card)\">View</div>\n  <div\n    class=\"menu-item\"\n    (click)=\"board.castBg(player, card)\"\n    *ngIf=\"!card.owner.hasCasted\"\n  >Cast</div>\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chip/chip.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chip/chip.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsChipChipComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"chip\">\n  {{text}}\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dice-pool/dice-pool.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dice-pool/dice-pool.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDicePoolDicePoolComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-button\r\n  *ngIf=\"player.color==='red'\"\r\n  class=\"viewDeckButton\"\r\n  (click)=\"board.toggleDeckView()\"\r\n  text=\"Toggle Deck View\"\r\n  width=\"100%\"\r\n></app-button>\r\n\r\n<div class=\"dice-pool\">\r\n  <div class=\"player-dice-pool\" *ngIf=\"!board.isRival(player)\">\r\n    <div\r\n      *ngFor=\"let dice of player.dicePool\"\r\n      class=\"dice-model\"\r\n      style=\"--src: url({{dice.rankedInfo[dice.rank]}})\"\r\n      (click)=\"player.pickDice(dice)\"\r\n    >\r\n      <ion-img src=\"{{dice.getAttrImage(dice.faces[0])}}\"></ion-img>\r\n    </div>\r\n  </div>\r\n  <div class=\"selected-dice\">\r\n      <app-dice\r\n        *ngFor=\"let dice of player.dice;let i = index\"\r\n        [dice]=\"dice\"\r\n        (click)=\"player.unpickDice(dice)\"\r\n      ></app-dice>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<app-button\r\n  (click)=\"player.rollDice()\"\r\n  text=\"ROLL DICE\"\r\n  width=\"100%\"\r\n  *ngIf=\"!board.isRival(player)\"\r\n  class=\"rollDiceButton\"\r\n></app-button>\r\n\r\n<app-button\r\n  (click)=\"board.endTurn(player)\"\r\n  text=\"END TURN\"\r\n  width=\"100%\"\r\n  *ngIf=\"!board.isRival(player)\"\r\n  class=\"endTurnButton\"\r\n></app-button>\r\n\r\n<!--\r\n  <ion-button (click)=\"toggleDiceExplanation()\" color=\"primary\" class=\"bigBtn\" >?</ion-button>\r\n\r\n  <ion-selected-dices>\r\n    <app-dice\r\n      *ngFor=\"let dice of board.players.blue.dice;let i = index\"\r\n      [dice]=\"dice\"\r\n    ></app-dice>\r\n  </ion-selected-dices>\r\n  <div class=\"dice-info-container\">\r\n    <div class=\"dice-info\" style=\"display:{{showDiceInfo}}\">\r\n      Dice faces per rank\r\n      <div\r\n        *ngFor=\"let rank of ranks;let i = index\"\r\n        class=\"dice-info-lvl-{{i}} dice-info-lvl\"\r\n      >\r\n        <div\r\n          class=\"dice-info-face\"\r\n          *ngFor=\"let face of rank\"\r\n        >\r\n          <ion-img src=\"{{d6[face]}}\"></ion-img>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ion-dice-area>\r\n    <ion-dice-pool>\r\n      <ion-dice\r\n        *ngFor=\"let dice of dicePool;let i = index\"\r\n        class=\"dice-lvl dice-lvl-{{dice.rank}}\"\r\n        (click)=\"player.pickDice(dice)\"\r\n      >\r\n      </ion-dice>\r\n    </ion-dice-pool>\r\n\r\n    <ion-selected-dices>\r\n      <app-dice\r\n        *ngFor=\"let dice of player.dice;let i = index\"\r\n        [dice]=\"dice\"\r\n        (click)=\"player.unpickDice(i)\"\r\n      ></app-dice>\r\n\r\n    </ion-selected-dices>\r\n  </ion-dice-area>\r\n  <ion-button\r\n    (click)=\"player.rollDice()\"\r\n    class=\"bigBtn\"\r\n    [color]=\"player.canRoll ? 'primary' : 'light'\"\r\n    >Roll</ion-button>\r\n\r\n  <ion-button\r\n    (click)=\"board.endTurn(player)\"\r\n    class=\"bigBtn\"\r\n    is-turn-btn=\"true\"\r\n    [color]=\"player.canEndTurn ? 'primary' : 'light'\"\r\n  >{{turnText}}</ion-button>-->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dice/dice.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dice/dice.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDiceDiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<input type=\"radio\" name=\"roll\" id=\"btnFront\">Front\n<input type=\"radio\" name=\"roll\" id=\"btnRight\">Right\n<input type=\"radio\" name=\"roll\" id=\"btnBack\">Back\n<input type=\"radio\" name=\"roll\" id=\"btnLeft\">Left\n<input type=\"radio\" name=\"roll\" id=\"btnTop\">Top\n<input type=\"radio\" name=\"roll\" id=\"btnBottom\">Bottom\n-->\n<div class=\"view\">\n    <div class=\"dice {{dice.rolledFaceClass}}\">\n        <div class=\"diceFace front\"\n          style=\"\n            background-color:{{dice.color}};\n            background-image:url('{{dice.getAttrImage(dice.faces[0])}}')\n          \"\n        ><!--Front--></div>\n        <div class=\"diceFace right\"\n          style=\"\n          background-color:{{dice.color}};\n          background-image:url('{{dice.getAttrImage(dice.faces[1])}}')\n          \"\n        ><!--Right--></div>\n        <div class=\"diceFace back\"\n          style=\"\n          background-color:{{dice.color}};\n          background-image:url('{{dice.getAttrImage(dice.faces[2])}}')\n          \"\n        ><!--Back--></div>\n        <div class=\"diceFace left\"\n          style=\"\n          background-color:{{dice.color}};\n          background-image:url('{{dice.getAttrImage(dice.faces[3])}}')\n          \"\n        ><!--Left--></div>\n        <div class=\"diceFace top\"\n          style=\"\n          background-color:{{dice.color}};\n          background-image:url('{{dice.getAttrImage(dice.faces[4])}}')\n          \"\n        ><!--Top--></div>\n        <div\n          class=\"diceFace bottom\"\n          style=\"\n          background-color:{{dice.color}};\n          background-image:url('{{dice.getAttrImage(dice.faces[5])}}')\n          \"\n        ><!--Bottom--></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/energy-pool/energy-pool.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/energy-pool/energy-pool.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEnergyPoolEnergyPoolComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"energy-pool player-energy-pool\">\n  <div\n    *ngFor=\"let energy of visible\"\n    class=\"energy-item\"\n    (click)=\"toggleTooltip(energy.type)\"\n  >\n    <div class=\"energy-type\">\n      <ion-img src=\"assets/dice/{{energy.type}}.png\"></ion-img>\n    </div>\n    <div class=\"energy-value\">\n      {{energy.value}}\n    </div>\n    <div class=\"energy-name {{getToolTipClass(energy.type)}}\">\n      {{energy.type.toUpperCase()}}\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-monitor/game-monitor.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-monitor/game-monitor.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsGameMonitorGameMonitorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"scoreboard\">\n  <div class=\"score-blue score\">\n    <ion-chip>\n      <ion-label color=\"outline\">CPU</ion-label>\n    </ion-chip>\n    <ion-chip>\n      <ion-label color=\"secondary\">{{board.players.blue.score}} points</ion-label>\n    </ion-chip>\n  </div>\n  <div class=\"score-red score\">\n    <ion-chip>\n      <ion-label color=\"outline\">Player</ion-label>\n    </ion-chip>\n    <ion-chip>\n      <ion-label color=\"danger\">{{board.players.red.score}} points</ion-label>\n    </ion-chip>\n  </div>\n</div>\n<div class=\"monitor\">\n  <h1>{{monitorTitle}}</h1>\n  <p>{{monitorText}}</p>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\n  class=\"profile-container profile-color-{{player.color}}\"\n>\n\n  <div class=\"profile-image\">\n    <div\n      class=\"profile-img-src confident\"\n      style=\"background-image: url({{player.avatar.src}})\"\n    >\n    </div>\n  </div>\n\n\n  <div class=\"user-chips\">\n    <app-chip width=\"50%\" color=\"neutral\" [text]=\"player.name\"></app-chip>\n    <app-chip width=\"50%\" [color]=\"player.color\" text=\"{{player.score}} points\"></app-chip>\n  </div>\n\n  <app-energy-pool [player]=\"player\"></app-energy-pool>\n  <app-dice-pool [board]=\"board\" [player]=\"player\"></app-dice-pool>\n\n</div>\n\n\n<div class=\"instructions-container\">\n  <div\n    *ngIf=\"player.activeMessage !== ''\"\n    class=\"spoken-words\"\n  >\n    <p>{{player.activeMessage}}</p>\n    <div class=\"page\" *ngIf=\"board.isRival(player)\">{{board.tutorial.emitNonce}} / {{board.tutorial.emits.length}}</div>\n  </div>\n\n  <div class=\"tutorial-buttons\">\n    <app-button\n      *ngIf=\"player.color !== 'red'\"\n      text=\"Previous\"\n      width=\"100%\"\n      class=\"gotItButton\"\n      (click)=\"board.tutorial.backward()\"\n    ></app-button>\n    <app-button\n      *ngIf=\"player.color !== 'red'\"\n      text=\"Next\"\n      width=\"100%\"\n      class=\"gotItButton\"\n      (click)=\"board.tutorial.forward()\"\n    ></app-button>\n  </div>\n</div>\n\n<div\n*ngIf=\"player.color === 'blue'\"\nclass=\"tutorial-overlay\"\n>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/splash/splash.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/splash/splash.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSplashSplashComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"overall\" style=\"display:{{board.splashDisplay}}\">\n  <ion-img\n    class=\"background\"\n    src=\"assets/intro.png\"\n  ></ion-img>\n  <ion-img\n    class=\"logo\"\n    src=\"assets/logo-text.png\">\n  </ion-img>\n  <div class=\"container\">\n    <p>{{text}}</p>\n    <app-button\n      *ngIf=\"ready\"\n      (click)=\"hideSplash()\"\n      text=\"Launch Demo\"\n      ></app-button>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>Music</ion-label>\n          <ion-toggle slot=\"end\" value=\"music\" [checked]=\"config.volume.music > 0\" (ionChange)=\"updateAudioSettings()\"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label>Effects</ion-label>\n          <ion-toggle slot=\"end\" value=\"effect\" [checked]=\"config.volume.effect > 0\"  (ionChange)=\"updateAudioSettings()\"></ion-toggle>\n        </ion-item>\n      </ion-list>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/components/auth-modal/auth-modal.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/auth-modal/auth-modal.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAuthModalAuthModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC1tb2RhbC9hdXRoLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/auth-modal/auth-modal.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/auth-modal/auth-modal.component.ts ***!
    \***************************************************************/

  /*! exports provided: AuthModalComponent */

  /***/
  function srcAppComponentsAuthModalAuthModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModalComponent", function () {
      return AuthModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AuthModalComponent = /*#__PURE__*/function () {
      function AuthModalComponent() {
        _classCallCheck(this, AuthModalComponent);

        this.signin_email = '';
        this.signin_pwd = '';
        this.register_voucher = '';
        this.register_email = '';
        this.register_user = '';
        this.register_pwd = '';
      }

      _createClass(AuthModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.lib);
        }
      }, {
        key: "register",
        value: function register() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log('calling register');
                    console.log(this.lib.user.register);
                    _context.next = 4;
                    return this.lib.user.register(this.register_user, this.register_email, this.register_pwd, this.register_voucher);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "signin",
        value: function signin() {}
      }]);

      return AuthModalComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AuthModalComponent.prototype, "lib", void 0);
    AuthModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./auth-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/auth-modal/auth-modal.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./auth-modal.component.scss */
      "./src/app/components/auth-modal/auth-modal.component.scss"))["default"]]
    })], AuthModalComponent);
    /***/
  },

  /***/
  "./src/app/components/board-battler/board-battler.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/board-battler/board-battler.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBoardBattlerBoardBattlerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".board-battler {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  z-index: 9999;\n  justify-content: center;\n  align-items: center;\n  /*  pointer-events: none*/\n  /*background-color:purple;*/\n}\n\n.tooltip {\n  position: absolute;\n  height: 80px;\n  background-color: rgba(0, 0, 0, 0.8);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 0.8em;\n  width: 100%;\n  padding: 3px;\n  top: -80px;\n  border-radius: 5px;\n}\n\n.edge-container {\n  width: 100%;\n  height: 50%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  /*    pointer-events:all;*/\n}\n\nion-img {\n  height: 100%;\n}\n\n.board-edge {\n  height: 100%;\n  max-width: 30%;\n  background-color: transparent;\n  padding: 3px;\n  border-radius: 5px;\n  /*  pointer-events:all;*/\n}\n\n.can-move {\n  background-color: #fa9d1c;\n}\n\n.can-attack {\n  background-color: #f85859;\n}\n\n.can-deffend {\n  background-color: #2d3e48;\n}\n\n.can-special {\n  background-color: #f9fdfe;\n}\n\n.card-name {\n  width: 100%;\n  height: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.illustration {\n  -webkit-filter: drop-shadow(0px 0px 5px white);\n          filter: drop-shadow(0px 0px 5px white);\n  /*  pointer-events: all;*/\n}\n\n.rival-creature .illustration {\n  transform: scaleX(-1);\n}\n\nion-progress-bar {\n  height: 12px;\n}\n\n.vit-txt {\n  position: absolute;\n  top: 2px;\n  z-index: 10;\n  font-size: 0.8em;\n}\n\n.tooltip.hidden {\n  display: none;\n}\n\n.tooltip.visible {\n  display: flex;\n}\n\n.board-card-menu {\n  position: absolute;\n  width: 320px;\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  transition: 300ms;\n}\n\n.board-card-menu .menu-item {\n  position: relative;\n  width: 100%;\n  background-color: rgba(55, 71, 79, 0.6);\n  border: 1px solid #78909c;\n  border-bottom: 1px solid #607d8b;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /*    pointer-events:all;*/\n  text-align: center;\n}\n\n.board-card-menu .menu-item.h1 {\n  /*font-size:1.2em;*/\n  font-weight: 700;\n}\n\n.card-right-menu {\n  left: 100%;\n  top: 0;\n  width: 160px;\n}\n\n.card-top-menu {\n  top: -100px;\n  width: 300px;\n}\n\n.board-card-menu.hidden {\n  display: none;\n}\n\n.board-card-menu.visible {\n  display: flex;\n}\n\n.rival-illustration {\n  transform: scaleX(-1);\n}\n\n.action-ring {\n  position: absolute;\n  border: 5px solid #263238;\n  border-radius: 100%;\n  width: 100px;\n  height: 100px;\n}\n\n.top-triangle {\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-bottom: 10px solid #263238;\n  position: absolute;\n  top: -21px;\n  left: calc(50% - 8.5px);\n}\n\n.bottom-triangle {\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-top: 10px solid #263238;\n  position: absolute;\n  left: calc(50% - 8.5px);\n  bottom: -40px;\n}\n\n.left-triangle {\n  width: 0;\n  height: 0;\n  border-top: 10px solid transparent;\n  border-right: 10px solid #263238;\n  border-bottom: 10px solid transparent;\n  position: absolute;\n  top: calc(50% - 8.5px);\n  left: -13px;\n}\n\n.right-triangle {\n  width: 0;\n  height: 0;\n  border-top: 10px solid transparent;\n  border-left: 10px solid #263238;\n  border-bottom: 10px solid transparent;\n  position: absolute;\n  top: calc(50% - 8.5px);\n  right: -13px;\n}\n\n.action-ring ion-img {\n  width: 64px;\n  position: absolute;\n  bottom: -32px;\n  left: calc(50% - 32px);\n  height: 64px;\n  background-color: #263238;\n  border-radius: 100%;\n  padding: 10px;\n  border: 3px solid #263238;\n}\n\n.step-counter {\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.1em;\n  background-color: #263238;\n  border-radius: 100%;\n  left: calc(50% - 16px);\n  border: 3px solid #263238;\n  top: -16px;\n}\n\n.progress-bar {\n  position: absolute;\n  height: 100%;\n  background-color: darkgreen;\n  left: 0;\n  box-shadow: inset 0px 0px 5px lightgreen;\n}\n\n.progress-bar-text {\n  color: white;\n  z-index: 1;\n}\n\napp-chip {\n  width: 100%;\n}\n\n.menu-item-red {\n  background-color: #eb445a !important;\n}\n\n.menu-item-blue {\n  background-color: #3880ff !important;\n}\n\n.creature-shadow {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.5);\n  bottom: 0;\n  width: 60%;\n  margin-left: 20%;\n  height: 30px;\n  border-radius: 100%;\n}\n\n.creature-shadow-red {\n  border: 2.5px solid #eb445a;\n}\n\n.creature-shadow-blue {\n  border: 2.5px solid #3880ff;\n}\n\n.action-img:hover:after {\n  width: 64px;\n  height: 64px;\n  content: \"x\";\n  background-color: #263238;\n  top: -3px;\n  left: -3px;\n  position: absolute;\n  border-radius: 100%;\n  font-size: 3em;\n  text-align: center;\n  line-height: 56px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Qcm9qZWN0cy9kaWNlLWd1YXJkaWFucy9hcHAvc3JjL2FwcC9jb21wb25lbnRzL2JvYXJkLWJhdHRsZXIvYm9hcmQtYmF0dGxlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC1iYXR0bGVyL2JvYXJkLWJhdHRsZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0YseUJBQUE7RUFDRSwyQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDSiwwQkFBQTtBQ0dBOztBREFBO0VBQVEsWUFBQTtBQ0lSOztBREZBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNGLHdCQUFBO0FDS0E7O0FERkE7RUFBVSx5QkFBQTtBQ01WOztBRExBO0VBQVkseUJBQUE7QUNTWjs7QURSQTtFQUFhLHlCQUFBO0FDWWI7O0FEWEE7RUFBYSx5QkFBQTtBQ2ViOztBRGJBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2dCRjs7QURiQTtFQUNFLDhDQUFBO1VBQUEsc0NBQUE7RUFDRix5QkFBQTtBQ2dCQTs7QURiQTtFQUNFLHFCQUFBO0FDZ0JGOztBRGJBO0VBQ0UsWUFBQTtBQ2dCRjs7QURiQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ2dCRjs7QURiQTtFQUNFLGFBQUE7QUNnQkY7O0FEYkE7RUFDRSxhQUFBO0FDZ0JGOztBRGJBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNnQkY7O0FEZEU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNKLDBCQUFBO0VBQ0ksa0JBQUE7QUNnQko7O0FEYkU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDZUo7O0FEUkE7RUFDRSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUNXRjs7QURSQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDV0Y7O0FEUkE7RUFDRSxhQUFBO0FDV0Y7O0FEVEE7RUFDRSxhQUFBO0FDWUY7O0FEVEE7RUFDRSxxQkFBQTtBQ1lGOztBRFRBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNZRjs7QURUQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUNZRjs7QURUQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNZRjs7QURSQTtFQUNFLFFBQUE7RUFDRixTQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNXQTs7QURQQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO0VBQ0Ysa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNVQTs7QURSQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDV0Y7O0FEUkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ1dGOztBRFJBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxPQUFBO0VBQ0Esd0NBQUE7QUNXRjs7QURSQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FDV0Y7O0FEUkE7RUFDRSxXQUFBO0FDV0Y7O0FEUEE7RUFDRSxvQ0FBQTtBQ1VGOztBRFBBO0VBQ0Usb0NBQUE7QUNVRjs7QURQQTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDVUY7O0FEUEE7RUFDRSwyQkFBQTtBQ1VGOztBRFBBO0VBQ0UsMkJBQUE7QUNVRjs7QURQQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNVRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9hcmQtYmF0dGxlci9ib2FyZC1iYXR0bGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvYXJkLWJhdHRsZXJ7XHJcbiAgd2lkdGg6MTAwcHg7XHJcbiAgaGVpZ2h0OjEwMHB4O1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgei1pbmRleDo5OTk5O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuLyogIHBvaW50ZXItZXZlbnRzOiBub25lKi9cclxuICAvKmJhY2tncm91bmQtY29sb3I6cHVycGxlOyovXHJcbn1cclxuLnRvb2x0aXB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogODBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgdG9wOiAtODBweDtcclxuICBib3JkZXItcmFkaXVzOjVweDtcclxufVxyXG4uZWRnZS1jb250YWluZXJ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjUwJTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4vKiAgICBwb2ludGVyLWV2ZW50czphbGw7Ki9cclxufVxyXG5cclxuaW9uLWltZ3toZWlnaHQ6MTAwJX1cclxuXHJcbi5ib2FyZC1lZGdle1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIG1heC13aWR0aDozMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzozcHg7XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbi8qICBwb2ludGVyLWV2ZW50czphbGw7Ki9cclxufVxyXG5cclxuLmNhbi1tb3Zle2JhY2tncm91bmQtY29sb3I6I2ZhOWQxYzt9XHJcbi5jYW4tYXR0YWNre2JhY2tncm91bmQtY29sb3I6I2Y4NTg1OTt9XHJcbi5jYW4tZGVmZmVuZHtiYWNrZ3JvdW5kLWNvbG9yOiMyZDNlNDg7fVxyXG4uY2FuLXNwZWNpYWx7YmFja2dyb3VuZC1jb2xvcjojZjlmZGZlO31cclxuXHJcbi5jYXJkLW5hbWV7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6NTAlO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbn1cclxuXHJcbi5pbGx1c3RyYXRpb257XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDVweCB3aGl0ZSk7XHJcbi8qICBwb2ludGVyLWV2ZW50czogYWxsOyovXHJcbn1cclxuXHJcbi5yaXZhbC1jcmVhdHVyZSAuaWxsdXN0cmF0aW9ue1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxufVxyXG5cclxuaW9uLXByb2dyZXNzLWJhcntcclxuICBoZWlnaHQ6MTJweDtcclxufVxyXG5cclxuLnZpdC10eHR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMnB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxuXHJcbi50b29sdGlwLmhpZGRlbntcclxuICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcbi50b29sdGlwLnZpc2libGV7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG59XHJcblxyXG4uYm9hcmQtY2FyZC1tZW51e1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHdpZHRoOjMyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIHRyYW5zaXRpb246MzAwbXM7XHJcblxyXG4gIC5tZW51LWl0ZW17XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU1LCA3MSwgNzksIC42KSA7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICM3ODkwOWM7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjNjA3ZDhiO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbi8qICAgIHBvaW50ZXItZXZlbnRzOmFsbDsqL1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubWVudS1pdGVtLmgxe1xyXG4gICAgLypmb250LXNpemU6MS4yZW07Ki9cclxuICAgIGZvbnQtd2VpZ2h0OjcwMDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbi5jYXJkLXJpZ2h0LW1lbnV7XHJcbiAgbGVmdDoxMDAlO1xyXG4gIHRvcDowO1xyXG4gIHdpZHRoOjE2MHB4O1xyXG59XHJcblxyXG4uY2FyZC10b3AtbWVudXtcclxuICB0b3A6IC0xMDBweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5ib2FyZC1jYXJkLW1lbnUuaGlkZGVue1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufVxyXG4uYm9hcmQtY2FyZC1tZW51LnZpc2libGV7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG59XHJcblxyXG4ucml2YWwtaWxsdXN0cmF0aW9ue1xyXG4gIHRyYW5zZm9ybTpzY2FsZVgoLTEpO1xyXG59XHJcblxyXG4uYWN0aW9uLXJpbmd7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgIzI2MzIzODtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4udG9wLXRyaWFuZ2xle1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjMjYzMjM4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0yMXB4O1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gOC41cHgpO1xyXG59XHJcblxyXG4uYm90dG9tLXRyaWFuZ2xle1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMjYzMjM4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDguNXB4KTtcclxuICBib3R0b206IC00MHB4O1xyXG5cclxufVxyXG5cclxuLmxlZnQtdHJpYW5nbGV7XHJcbiAgd2lkdGg6IDA7XHJcbmhlaWdodDogMDtcclxuYm9yZGVyLXRvcDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICMyNjMyMzg7XHJcbmJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbnBvc2l0aW9uOmFic29sdXRlO1xyXG50b3A6IGNhbGMoNTAlIC0gOC41cHgpO1xyXG5sZWZ0Oi0xM3B4O1xyXG59XHJcblxyXG5cclxuLnJpZ2h0LXRyaWFuZ2xle1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICMyNjMyMzg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbnRvcDogY2FsYyg1MCUgLSA4LjVweCk7XHJcbnJpZ2h0Oi0xM3B4O1xyXG59XHJcbi5hY3Rpb24tcmluZyBpb24taW1ne1xyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC0zMnB4O1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMzJweCk7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjMyMzg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMyNjMyMzg7XHJcbn1cclxuXHJcbi5zdGVwLWNvdW50ZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzMjM4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSAxNnB4KTtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjMjYzMjM4O1xyXG4gIHRvcDogLTE2cHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXJ7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpkYXJrZ3JlZW47XHJcbiAgbGVmdDowO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNXB4IGxpZ2h0Z3JlZW47XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXItdGV4dHtcclxuICBjb2xvcjp3aGl0ZTtcclxuICB6LWluZGV4OjE7XHJcbn1cclxuXHJcbmFwcC1jaGlwe1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcblxyXG4ubWVudS1pdGVtLXJlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNlYjQ0NWEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lbnUtaXRlbS1ibHVle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzM4ODBmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3JlYXR1cmUtc2hhZG93e1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNSk7XHJcbiAgYm90dG9tOjA7XHJcbiAgd2lkdGg6NjAlO1xyXG4gIG1hcmdpbi1sZWZ0OjIwJTtcclxuICBoZWlnaHQ6MzBweDtcclxuICBib3JkZXItcmFkaXVzOjEwMCU7XHJcbn1cclxuXHJcbi5jcmVhdHVyZS1zaGFkb3ctcmVke1xyXG4gIGJvcmRlcjoyLjVweCBzb2xpZCAjZWI0NDVhO1xyXG59XHJcblxyXG4uY3JlYXR1cmUtc2hhZG93LWJsdWV7XHJcbiAgYm9yZGVyOjIuNXB4IHNvbGlkICMzODgwZmY7XHJcbn1cclxuXHJcbi5hY3Rpb24taW1nOmhvdmVyOmFmdGVye1xyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGhlaWdodDogNjRweDtcclxuICBjb250ZW50OiBcInhcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzMjM4O1xyXG4gIHRvcDogLTNweDtcclxuICBsZWZ0OiAtM3B4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogM2VtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNTZweDtcclxufVxyXG4iLCIuYm9hcmQtYmF0dGxlciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgei1pbmRleDogOTk5OTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qICBwb2ludGVyLWV2ZW50czogbm9uZSovXG4gIC8qYmFja2dyb3VuZC1jb2xvcjpwdXJwbGU7Ki9cbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOGVtO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogM3B4O1xuICB0b3A6IC04MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5lZGdlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qICAgIHBvaW50ZXItZXZlbnRzOmFsbDsqL1xufVxuXG5pb24taW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYm9hcmQtZWRnZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLyogIHBvaW50ZXItZXZlbnRzOmFsbDsqL1xufVxuXG4uY2FuLW1vdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE5ZDFjO1xufVxuXG4uY2FuLWF0dGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmODU4NTk7XG59XG5cbi5jYW4tZGVmZmVuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDNlNDg7XG59XG5cbi5jYW4tc3BlY2lhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZkZmU7XG59XG5cbi5jYXJkLW5hbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaWxsdXN0cmF0aW9uIHtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDVweCB3aGl0ZSk7XG4gIC8qICBwb2ludGVyLWV2ZW50czogYWxsOyovXG59XG5cbi5yaXZhbC1jcmVhdHVyZSAuaWxsdXN0cmF0aW9uIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xufVxuXG5pb24tcHJvZ3Jlc3MtYmFyIHtcbiAgaGVpZ2h0OiAxMnB4O1xufVxuXG4udml0LXR4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycHg7XG4gIHotaW5kZXg6IDEwO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4udG9vbHRpcC5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udG9vbHRpcC52aXNpYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJvYXJkLWNhcmQtbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAzMDBtcztcbn1cbi5ib2FyZC1jYXJkLW1lbnUgLm1lbnUtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTUsIDcxLCA3OSwgMC42KTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc4OTA5YztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2MDdkOGI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiAgICBwb2ludGVyLWV2ZW50czphbGw7Ki9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJvYXJkLWNhcmQtbWVudSAubWVudS1pdGVtLmgxIHtcbiAgLypmb250LXNpemU6MS4yZW07Ki9cbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNhcmQtcmlnaHQtbWVudSB7XG4gIGxlZnQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDE2MHB4O1xufVxuXG4uY2FyZC10b3AtbWVudSB7XG4gIHRvcDogLTEwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5ib2FyZC1jYXJkLW1lbnUuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJvYXJkLWNhcmQtbWVudS52aXNpYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnJpdmFsLWlsbHVzdHJhdGlvbiB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn1cblxuLmFjdGlvbi1yaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDVweCBzb2xpZCAjMjYzMjM4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi50b3AtdHJpYW5nbGUge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICMyNjMyMzg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjFweDtcbiAgbGVmdDogY2FsYyg1MCUgLSA4LjVweCk7XG59XG5cbi5ib3R0b20tdHJpYW5nbGUge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICMyNjMyMzg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogY2FsYyg1MCUgLSA4LjVweCk7XG4gIGJvdHRvbTogLTQwcHg7XG59XG5cbi5sZWZ0LXRyaWFuZ2xlIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICMyNjMyMzg7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtIDguNXB4KTtcbiAgbGVmdDogLTEzcHg7XG59XG5cbi5yaWdodC10cmlhbmdsZSB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICMyNjMyMzg7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtIDguNXB4KTtcbiAgcmlnaHQ6IC0xM3B4O1xufVxuXG4uYWN0aW9uLXJpbmcgaW9uLWltZyB7XG4gIHdpZHRoOiA2NHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTMycHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMzJweCk7XG4gIGhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MzIzODtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzI2MzIzODtcbn1cblxuLnN0ZXAtY291bnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjMyMzg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTZweCk7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMyNjMyMzg7XG4gIHRvcDogLTE2cHg7XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xuICBsZWZ0OiAwO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDVweCBsaWdodGdyZWVuO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbmFwcC1jaGlwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZW51LWl0ZW0tcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViNDQ1YSAhaW1wb3J0YW50O1xufVxuXG4ubWVudS1pdGVtLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4MGZmICFpbXBvcnRhbnQ7XG59XG5cbi5jcmVhdHVyZS1zaGFkb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5jcmVhdHVyZS1zaGFkb3ctcmVkIHtcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjZWI0NDVhO1xufVxuXG4uY3JlYXR1cmUtc2hhZG93LWJsdWUge1xuICBib3JkZXI6IDIuNXB4IHNvbGlkICMzODgwZmY7XG59XG5cbi5hY3Rpb24taW1nOmhvdmVyOmFmdGVyIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgY29udGVudDogXCJ4XCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjMyMzg7XG4gIHRvcDogLTNweDtcbiAgbGVmdDogLTNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBmb250LXNpemU6IDNlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/board-battler/board-battler.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/board-battler/board-battler.component.ts ***!
    \*********************************************************************/

  /*! exports provided: BoardBattlerComponent */

  /***/
  function srcAppComponentsBoardBattlerBoardBattlerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardBattlerComponent", function () {
      return BoardBattlerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BoardBattlerComponent = /*#__PURE__*/function () {
      function BoardBattlerComponent() {
        _classCallCheck(this, BoardBattlerComponent);

        this.tooltipClass = 'hidden';
        this.currentVit = 0;
      }

      _createClass(BoardBattlerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentVit = this.card.vit;
        }
      }, {
        key: "vitPercent",
        value: function vitPercent() {
          return Math.floor(100 * this.currentVit / this.card.vit);
        }
      }, {
        key: "magnify",
        value: function magnify(card) {
          this.board.cardModal(card);
        }
      }, {
        key: "toggleTooltip",
        value: function toggleTooltip() {
          console.log('toggleTooltip');

          if (this.board.players.red.isBattlePending && this.board.isRival(this.player)) {
            console.log('calling battlefn');
            this.board.battleFn(this.board.players.red, this.card);
            return;
          }

          var cards = this.board.getAllBoardCards();

          for (var i = 0; i < cards.length; i++) {
            cards[i].canBeClicked = !cards[i].canBeClicked;
          }

          this.card.canBeClicked = !this.card.canBeClicked;
          this.card.showMenu = !this.card.showMenu;
          /*
              if (this.tooltipClass === 'hidden'){
                this.tooltipClass = 'visible'
              } else {
                this.tooltipClass = 'hidden'
              }*/
        }
      }]);

      return BoardBattlerComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BoardBattlerComponent.prototype, "card", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BoardBattlerComponent.prototype, "board", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BoardBattlerComponent.prototype, "player", void 0);
    BoardBattlerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-board-battler',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./board-battler.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/board-battler/board-battler.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./board-battler.component.scss */
      "./src/app/components/board-battler/board-battler.component.scss"))["default"]]
    })], BoardBattlerComponent);
    /***/
  },

  /***/
  "./src/app/components/board/board.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/board/board.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBoardBoardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ion-play-area {\n  position: relative;\n}\n\n.ion-play-row {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.ion-play-cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5em;\n  font-weight: 700;\n  width: 64px;\n  height: 64px;\n  color: white;\n  position: relative;\n}\n\n.ion-cell-borders {\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 80%;\n  height: 80%;\n  margin: 10%;\n  border-radius: 10px;\n}\n\n.ion-play-cell ion-img {\n  width: 150%;\n  height: 150%;\n  position: absolute;\n  top: -3px;\n  left: -19px;\n}\n\n/*\n.player-tile{\n  background-image: url(\"/assets/textures/stone-orange.png\");\n  background-size: cover;\n}\n\n\n.rival-tile{\n  background-image: url(\"/assets/textures/stone-blue.png\");\n  background-size: cover;\n}\n\n.victory-tile{\n  background-image: url(\"/assets/textures/exit-gate.png\");\n  background-size: cover;\n}\n\n.wall-tile{\n  background-image: url(\"/assets/textures/wall-tile.png\");\n  background-size: cover;\n  background-color: #545651;\n}\n\n.neutral-tile{\n  background-image: url(\"/assets/textures/neutral-tile.png\");\n  background-size: cover;\n}\n*/\n\n.player-tower-hp-3 {\n  background-image: url(\"/assets/textures/orange_pillar_hp_3.png\");\n  background-size: cover;\n  border: 3px solid green;\n  box-shadow: 0px 0px 15px green;\n}\n\n.player-tower-hp-2 {\n  background-image: url(\"/assets/textures/orange_pillar_hp_2.png\");\n  background-size: cover;\n  border: 3px solid yellow;\n  box-shadow: 0px 0px 15px yellow;\n}\n\n.player-tower-hp-1 {\n  background-image: url(\"/assets/textures/orange_pillar_hp_1.png\");\n  background-size: cover;\n  border: 3px solid red;\n  box-shadow: 0px 0px 15px red;\n}\n\n.player-tower-hp-0 {\n  background-image: url(\"/assets/textures/orange_pillar_hp_0.png\");\n  background-size: cover;\n}\n\n.player-tower-hp-dead {\n  background-image: url(\"/assets/textures/orange_pillar_hp_dead.png\");\n  background-size: cover;\n}\n\n.rival-tower-hp-3 {\n  background-image: url(\"/assets/textures/blue_pillar_hp_3.png\");\n  border: 3px solid green;\n  box-shadow: 0px 0px 15px green;\n  background-size: cover;\n}\n\n.rival-tower-hp-2 {\n  background-image: url(\"/assets/textures/blue_pillar_hp_2.png\");\n  background-size: cover;\n  border: 3px solid yellow;\n  box-shadow: 0px 0px 15px yellow;\n}\n\n.rival-tower-hp-1 {\n  background-image: url(\"/assets/textures/blue_pillar_hp_1.png\");\n  background-size: cover;\n  border: 3px solid red;\n  box-shadow: 0px 0px 15px red;\n}\n\n.rival-tower-hp-0 {\n  background-image: url(\"/assets/textures/blue_pillar_hp_0.png\");\n  background-size: cover;\n  border: none;\n  box-shadow: none;\n}\n\n.rival-tower-hp-dead {\n  background-image: url(\"/assets/textures/blue_pillar_hp_dead.png\");\n  background-size: cover;\n  border: none;\n  box-shadow: none;\n}\n\n.board-battlers-container {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\napp-board-battler {\n  position: absolute;\n  pointer-events: none;\n}\n\n.cell {\n  font-size: 0.8em;\n}\n\n.sprite {\n  width: 100%;\n  height: 100%;\n}\n\n.board-background {\n  position: absolute;\n  width: 1080px;\n  height: 1080px;\n  left: -253px;\n  top: -253px;\n}\n\n.wall .ion-cell-borders {\n  border: none;\n  background-color: transparent;\n}\n\n.floor .ion-cell-borders {\n  border: none;\n  background-color: transparent;\n}\n\n.player-tile .ion-cell-borders {\n  background-color: rgba(235, 68, 90, 0.7);\n}\n\n.rival-tile .ion-cell-borders {\n  background-color: rgba(56, 128, 255, 0.7);\n}\n\n.player-tile-locked .ion-cell-borders {\n  background-color: rgba(235, 68, 90, 0.3);\n}\n\n.victory-tile .ion-cell-borders {\n  background-color: rgba(106, 27, 154, 0.7);\n}\n\n.neutral-ground .ion-cell-borders {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.vit-restore .ion-cell-borders {\n  background-color: rgba(45, 211, 111, 0.7);\n}\n\n.possible-cast-tile .ion-cell-borders {\n  border: 3px solid #dedede;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n.possible-unfold-tile .ion-cell-borders {\n  border: 3px solid #dedede;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n.possible-move-tile .ion-cell-borders {\n  border: 3px solid #dedede;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n.possible-battle-tile .ion-cell-borders {\n  border: 3px solid #dedede;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Qcm9qZWN0cy9kaWNlLWd1YXJkaWFucy9hcHAvc3JjL2FwcC9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNIRjs7QURVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7O0FBOEJBO0VBQ0UsZ0VBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7QUNURjs7QURZQTtFQUNFLGdFQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0FDVEY7O0FEWUE7RUFDRSxnRUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQ1RGOztBRFlBO0VBQ0UsZ0VBQUE7RUFDQSxzQkFBQTtBQ1RGOztBRGFBO0VBQ0UsbUVBQUE7RUFDQSxzQkFBQTtBQ1ZGOztBRGVBO0VBQ0UsOERBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUNaRjs7QURlQTtFQUNFLDhEQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0FDWkY7O0FEZUE7RUFDRSw4REFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQ1pGOztBRGVBO0VBQ0UsOERBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1pGOztBRGdCQTtFQUNFLGlFQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNiRjs7QURpQkE7RUFDRSxXQUFBO0VBQ0YsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNkQTs7QURpQkE7RUFDRSxrQkFBQTtFQUNGLG9CQUFBO0FDZEE7O0FEaUJBO0VBQ0UsZ0JBQUE7QUNkRjs7QURrQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ2ZGOztBRG9CQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2pCRjs7QURvQkE7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FDakJGOztBRG9CQTtFQUNFLHdDQUFBO0FDakJGOztBRG9CQTtFQUNFLHlDQUFBO0FDakJGOztBRG9CQTtFQUNFLHdDQUFBO0FDakJGOztBRG9CQTtFQUNFLHlDQUFBO0FDakJGOztBRG9CQTtFQUNFLDBDQUFBO0FDakJGOztBRG9CQTtFQUNFLHlDQUFBO0FDakJGOztBRHFCQTtFQUNFLHlCQUFBO0VBQ0EsMENBQUE7QUNsQkY7O0FEcUJBO0VBQ0UseUJBQUE7RUFDQSwwQ0FBQTtBQ2xCRjs7QURxQkE7RUFDRSx5QkFBQTtFQUNBLDBDQUFBO0FDbEJGOztBRHFCQTtFQUNFLHlCQUFBO0VBQ0EsMENBQUE7QUNsQkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1wbGF5LWFyZWF7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4uaW9uLXBsYXktcm93e1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pb24tcGxheS1jb2x7XG5cbn1cblxuLmlvbi1wbGF5LWNlbGx7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgZm9udC1zaXplOjEuNWVtO1xuICBmb250LXdlaWdodDo3MDA7XG4gIHdpZHRoOjY0cHg7XG4gIGhlaWdodDo2NHB4O1xuICBjb2xvcjp3aGl0ZTtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG59XG5cbi5pb24tY2VsbC1ib3JkZXJze1xuICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjQpO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdG9wOjA7XG4gIGxlZnQ6MDtcbiAgd2lkdGg6ODAlO1xuICBoZWlnaHQ6ODAlO1xuICBtYXJnaW46MTAlO1xuICBib3JkZXItcmFkaXVzOjEwcHg7XG59XG5cbi5pb24tcGxheS1jZWxsIGlvbi1pbWd7XG4gIHdpZHRoOjE1MCU7XG4gIGhlaWdodDoxNTAlO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdG9wOi0zcHg7XG4gIGxlZnQ6LTE5cHg7XG59XG5cbi5jZWxsLWNsaWNrLWFyZWF7XG5cbn1cblxuLypcbi5wbGF5ZXItdGlsZXtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy90ZXh0dXJlcy9zdG9uZS1vcmFuZ2UucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5cbi5yaXZhbC10aWxle1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3RleHR1cmVzL3N0b25lLWJsdWUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udmljdG9yeS10aWxle1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3RleHR1cmVzL2V4aXQtZ2F0ZS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi53YWxsLXRpbGV7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdGV4dHVyZXMvd2FsbC10aWxlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NTY1MTtcbn1cblxuLm5ldXRyYWwtdGlsZXtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy90ZXh0dXJlcy9uZXV0cmFsLXRpbGUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuKi9cblxuXG4ucGxheWVyLXRvd2VyLWhwLTN7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdGV4dHVyZXMvb3JhbmdlX3BpbGxhcl9ocF8zLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyOjNweCBzb2xpZCBncmVlbjtcbiAgYm94LXNoYWRvdzowcHggMHB4IDE1cHggZ3JlZW47XG59XG5cbi5wbGF5ZXItdG93ZXItaHAtMntcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy90ZXh0dXJlcy9vcmFuZ2VfcGlsbGFyX2hwXzIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXI6M3B4IHNvbGlkIHllbGxvdztcbiAgYm94LXNoYWRvdzowcHggMHB4IDE1cHggeWVsbG93O1xufVxuXG4ucGxheWVyLXRvd2VyLWhwLTF7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdGV4dHVyZXMvb3JhbmdlX3BpbGxhcl9ocF8xLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyOjNweCBzb2xpZCByZWQ7XG4gIGJveC1zaGFkb3c6MHB4IDBweCAxNXB4IHJlZDtcbn1cblxuLnBsYXllci10b3dlci1ocC0we1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3RleHR1cmVzL29yYW5nZV9waWxsYXJfaHBfMC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cblxuLnBsYXllci10b3dlci1ocC1kZWFke1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3RleHR1cmVzL29yYW5nZV9waWxsYXJfaHBfZGVhZC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cblxuXG4ucml2YWwtdG93ZXItaHAtM3tcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy90ZXh0dXJlcy9ibHVlX3BpbGxhcl9ocF8zLnBuZ1wiKTtcbiAgYm9yZGVyOjNweCBzb2xpZCBncmVlbjtcbiAgYm94LXNoYWRvdzowcHggMHB4IDE1cHggZ3JlZW47XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5yaXZhbC10b3dlci1ocC0ye1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3RleHR1cmVzL2JsdWVfcGlsbGFyX2hwXzIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXI6M3B4IHNvbGlkIHllbGxvdztcbiAgYm94LXNoYWRvdzowcHggMHB4IDE1cHggeWVsbG93O1xufVxuXG4ucml2YWwtdG93ZXItaHAtMXtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy90ZXh0dXJlcy9ibHVlX3BpbGxhcl9ocF8xLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyOjNweCBzb2xpZCByZWQ7XG4gIGJveC1zaGFkb3c6MHB4IDBweCAxNXB4IHJlZDtcbn1cblxuLnJpdmFsLXRvd2VyLWhwLTB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdGV4dHVyZXMvYmx1ZV9waWxsYXJfaHBfMC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlcjpub25lO1xuICBib3gtc2hhZG93Om5vbmU7XG59XG5cblxuLnJpdmFsLXRvd2VyLWhwLWRlYWR7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdGV4dHVyZXMvYmx1ZV9waWxsYXJfaHBfZGVhZC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlcjpub25lO1xuICBib3gtc2hhZG93Om5vbmU7XG59XG5cblxuLmJvYXJkLWJhdHRsZXJzLWNvbnRhaW5lcntcbiAgd2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDEwMCU7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG50b3A6IDA7XG5sZWZ0OiAwO1xufVxuXG5hcHAtYm9hcmQtYmF0dGxlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xucG9pbnRlci1ldmVudHM6IG5vbmVcbn1cblxuLmNlbGx7XG4gIGZvbnQtc2l6ZTowLjhlbTtcbn1cblxuXG4uc3ByaXRle1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTAwJTtcblxufVxuXG5cbi5ib2FyZC1iYWNrZ3JvdW5ke1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgd2lkdGg6MTA4MHB4O1xuICBoZWlnaHQ6MTA4MHB4O1xuICBsZWZ0Oi0yNTNweDtcbiAgdG9wOi0yNTNweDtcbn1cblxuLndhbGwgLmlvbi1jZWxsLWJvcmRlcnN7XG4gIGJvcmRlcjpub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xufVxuXG4uZmxvb3IgLmlvbi1jZWxsLWJvcmRlcnN7XG4gIGJvcmRlcjpub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xufVxuXG4ucGxheWVyLXRpbGUgLmlvbi1jZWxsLWJvcmRlcnN7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMzUsNjgsOTAsIC43KTtcbn1cblxuLnJpdmFsLXRpbGUgLmlvbi1jZWxsLWJvcmRlcnN7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSg1NiwxMjgsMjU1LCAuNyk7XG59XG5cbi5wbGF5ZXItdGlsZS1sb2NrZWQgLmlvbi1jZWxsLWJvcmRlcnN7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMzUsNjgsOTAsIC4zKTtcbn1cblxuLnZpY3RvcnktdGlsZSAuaW9uLWNlbGwtYm9yZGVyc3tcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEwNiwgMjcsIDE1NCwgLjcpO1xufVxuXG4ubmV1dHJhbC1ncm91bmQgLmlvbi1jZWxsLWJvcmRlcnN7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMik7XG59XG5cbi52aXQtcmVzdG9yZSAuaW9uLWNlbGwtYm9yZGVyc3tcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ1LCAyMTEsIDExMSwgLjcpO1xufVxuXG5cbi5wb3NzaWJsZS1jYXN0LXRpbGUgLmlvbi1jZWxsLWJvcmRlcnN7XG4gIGJvcmRlcjozcHggc29saWQgI2RlZGVkZTtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4zKTtcbn1cblxuLnBvc3NpYmxlLXVuZm9sZC10aWxlIC5pb24tY2VsbC1ib3JkZXJze1xuICBib3JkZXI6M3B4IHNvbGlkICNkZWRlZGU7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMyk7XG59XG5cbi5wb3NzaWJsZS1tb3ZlLXRpbGUgLmlvbi1jZWxsLWJvcmRlcnN7XG4gIGJvcmRlcjozcHggc29saWQgI2RlZGVkZTtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC4zKTtcbn1cblxuLnBvc3NpYmxlLWJhdHRsZS10aWxlIC5pb24tY2VsbC1ib3JkZXJze1xuICBib3JkZXI6M3B4IHNvbGlkICNkZWRlZGU7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuMyk7XG59XG4iLCIuaW9uLXBsYXktYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlvbi1wbGF5LXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmlvbi1wbGF5LWNlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pb24tY2VsbC1ib3JkZXJzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIG1hcmdpbjogMTAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaW9uLXBsYXktY2VsbCBpb24taW1nIHtcbiAgd2lkdGg6IDE1MCU7XG4gIGhlaWdodDogMTUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0zcHg7XG4gIGxlZnQ6IC0xOXB4O1xufVxuXG4vKlxuLnBsYXllci10aWxle1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3RleHR1cmVzL3N0b25lLW9yYW5nZS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cblxuLnJpdmFsLXRpbGV7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdGV4dHVyZXMvc3RvbmUtYmx1ZS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi52aWN0b3J5LXRpbGV7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdGV4dHVyZXMvZXhpdC1nYXRlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLndhbGwtdGlsZXtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy90ZXh0dXJlcy93YWxsLXRpbGUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1NjUxO1xufVxuXG4ubmV1dHJhbC10aWxle1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3RleHR1cmVzL25ldXRyYWwtdGlsZS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4qL1xuLnBsYXllci10b3dlci1ocC0zIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy90ZXh0dXJlcy9vcmFuZ2VfcGlsbGFyX2hwXzMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXI6IDNweCBzb2xpZCBncmVlbjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IGdyZWVuO1xufVxuXG4ucGxheWVyLXRvd2VyLWhwLTIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3RleHR1cmVzL29yYW5nZV9waWxsYXJfaHBfMi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHllbGxvdztcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHllbGxvdztcbn1cblxuLnBsYXllci10b3dlci1ocC0xIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy90ZXh0dXJlcy9vcmFuZ2VfcGlsbGFyX2hwXzEucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCByZWQ7XG59XG5cbi5wbGF5ZXItdG93ZXItaHAtMCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdGV4dHVyZXMvb3JhbmdlX3BpbGxhcl9ocF8wLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnBsYXllci10b3dlci1ocC1kZWFkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy90ZXh0dXJlcy9vcmFuZ2VfcGlsbGFyX2hwX2RlYWQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucml2YWwtdG93ZXItaHAtMyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdGV4dHVyZXMvYmx1ZV9waWxsYXJfaHBfMy5wbmdcIik7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGdyZWVuO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggZ3JlZW47XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5yaXZhbC10b3dlci1ocC0yIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy90ZXh0dXJlcy9ibHVlX3BpbGxhcl9ocF8yLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyOiAzcHggc29saWQgeWVsbG93O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggeWVsbG93O1xufVxuXG4ucml2YWwtdG93ZXItaHAtMSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdGV4dHVyZXMvYmx1ZV9waWxsYXJfaHBfMS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJlZDtcbn1cblxuLnJpdmFsLXRvd2VyLWhwLTAge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3RleHR1cmVzL2JsdWVfcGlsbGFyX2hwXzAucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5yaXZhbC10b3dlci1ocC1kZWFkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy90ZXh0dXJlcy9ibHVlX3BpbGxhcl9ocF9kZWFkLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYm9hcmQtYmF0dGxlcnMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbmFwcC1ib2FyZC1iYXR0bGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNlbGwge1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4uc3ByaXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJvYXJkLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDgwcHg7XG4gIGhlaWdodDogMTA4MHB4O1xuICBsZWZ0OiAtMjUzcHg7XG4gIHRvcDogLTI1M3B4O1xufVxuXG4ud2FsbCAuaW9uLWNlbGwtYm9yZGVycyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mbG9vciAuaW9uLWNlbGwtYm9yZGVycyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5wbGF5ZXItdGlsZSAuaW9uLWNlbGwtYm9yZGVycyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM1LCA2OCwgOTAsIDAuNyk7XG59XG5cbi5yaXZhbC10aWxlIC5pb24tY2VsbC1ib3JkZXJzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NiwgMTI4LCAyNTUsIDAuNyk7XG59XG5cbi5wbGF5ZXItdGlsZS1sb2NrZWQgLmlvbi1jZWxsLWJvcmRlcnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwgNjgsIDkwLCAwLjMpO1xufVxuXG4udmljdG9yeS10aWxlIC5pb24tY2VsbC1ib3JkZXJzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDYsIDI3LCAxNTQsIDAuNyk7XG59XG5cbi5uZXV0cmFsLWdyb3VuZCAuaW9uLWNlbGwtYm9yZGVycyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuLnZpdC1yZXN0b3JlIC5pb24tY2VsbC1ib3JkZXJzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwgMjExLCAxMTEsIDAuNyk7XG59XG5cbi5wb3NzaWJsZS1jYXN0LXRpbGUgLmlvbi1jZWxsLWJvcmRlcnMge1xuICBib3JkZXI6IDNweCBzb2xpZCAjZGVkZWRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbi5wb3NzaWJsZS11bmZvbGQtdGlsZSAuaW9uLWNlbGwtYm9yZGVycyB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNkZWRlZGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cblxuLnBvc3NpYmxlLW1vdmUtdGlsZSAuaW9uLWNlbGwtYm9yZGVycyB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNkZWRlZGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cblxuLnBvc3NpYmxlLWJhdHRsZS10aWxlIC5pb24tY2VsbC1ib3JkZXJzIHtcbiAgYm9yZGVyOiAzcHggc29saWQgI2RlZGVkZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/board/board.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/board/board.component.ts ***!
    \*****************************************************/

  /*! exports provided: BoardComponent */

  /***/
  function srcAppComponentsBoardBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoardComponent", function () {
      return BoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BoardComponent = /*#__PURE__*/function () {
      function BoardComponent() {
        _classCallCheck(this, BoardComponent);
      }

      _createClass(BoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BoardComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BoardComponent.prototype, "lib", void 0);
    BoardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-board',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/board/board.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./board.component.scss */
      "./src/app/components/board/board.component.scss"))["default"]]
    })], BoardComponent);
    /***/
  },

  /***/
  "./src/app/components/button/button.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/button/button.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsButtonButtonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".button-outer {\n  width: 100%;\n  display: flex;\n  margin: 10px 0px;\n}\n\n.button-inner {\n  width: 100%;\n  height: 40px;\n  background-color: #37474f;\n  border-top: 1px solid #78909c;\n  border-bottom: 1px solid #607d8b;\n  position: relative;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #eceff1;\n}\n\n.corner {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: relative;\n}\n\n.left-corner {\n  border-top: 20px solid transparent;\n  border-right: 20px solid #37474f;\n  border-bottom: 20px solid transparent;\n}\n\n.left-corner::before {\n  content: \"\";\n  background-color: #78909c;\n  position: absolute;\n  top: -10px;\n  left: -4px;\n  width: 28px;\n  height: 1px;\n  transform: rotate(-45deg);\n}\n\n.left-corner::after {\n  content: \"\";\n  background-color: #607d8b;\n  position: absolute;\n  top: 9px;\n  left: -4px;\n  width: 28px;\n  height: 1px;\n  transform: rotate(45deg);\n}\n\n.right-corner {\n  border-top: 20px solid transparent;\n  border-left: 20px solid #37474f;\n  border-bottom: 20px solid transparent;\n}\n\n.right-corner::before {\n  content: \"\";\n  background-color: #78909c;\n  position: absolute;\n  top: -10px;\n  left: -24px;\n  width: 28px;\n  height: 1px;\n  transform: rotate(45deg);\n}\n\n.right-corner::after {\n  content: \"\";\n  background-color: #607d8b;\n  position: absolute;\n  top: 9px;\n  left: -24px;\n  width: 28px;\n  height: 1px;\n  transform: rotate(-45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Qcm9qZWN0cy9kaWNlLWd1YXJkaWFucy9hcHAvc3JjL2FwcC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHFDQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTtFQUNFLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQ0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLW91dGVye1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIG1hcmdpbjoxMHB4IDBweDtcclxufVxyXG4uYnV0dG9uLWlubmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NDc0ZiA7XHJcbiAgYm9yZGVyLXRvcDoxcHggc29saWQgIzc4OTA5YztcclxuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjNjA3ZDhiO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjp3aGl0ZTtcclxuXHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICBjb2xvcjogI2VjZWZmMSA7XHJcbn1cclxuXHJcbi5jb3JuZXJ7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuXHJcbi5sZWZ0LWNvcm5lciB7XHJcbiAgYm9yZGVyLXRvcDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgIzM3NDc0ZiAgO1xyXG4gIGJvcmRlci1ib3R0b206IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5sZWZ0LWNvcm5lcjo6YmVmb3Jle1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4OTA5YztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTBweDtcclxuICBsZWZ0OiAtNHB4O1xyXG4gIHdpZHRoOiAyOHB4O1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi5sZWZ0LWNvcm5lcjo6YWZ0ZXJ7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3ZDhiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDlweDtcclxuICBsZWZ0OiAtNHB4O1xyXG4gIHdpZHRoOiAyOHB4O1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuLnJpZ2h0LWNvcm5lciB7XHJcbiAgYm9yZGVyLXRvcDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjMzc0NzRmICA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnJpZ2h0LWNvcm5lcjo6YmVmb3Jle1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4OTA5YztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTBweDtcclxuICBsZWZ0OiAtMjRweDtcclxuICB3aWR0aDogMjhweDtcclxuICBoZWlnaHQ6IDFweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi5yaWdodC1jb3JuZXI6OmFmdGVye1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA5cHg7XHJcbiAgbGVmdDogLTI0cHg7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG4iLCIuYnV0dG9uLW91dGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbi5idXR0b24taW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0NzRmO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzc4OTA5YztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2MDdkOGI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNlY2VmZjE7XG59XG5cbi5jb3JuZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sZWZ0LWNvcm5lciB7XG4gIGJvcmRlci10b3A6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCAjMzc0NzRmO1xuICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ubGVmdC1jb3JuZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODkwOWM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgbGVmdDogLTRweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMXB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4ubGVmdC1jb3JuZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDlweDtcbiAgbGVmdDogLTRweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMXB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5yaWdodC1jb3JuZXIge1xuICBib3JkZXItdG9wOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjMzc0NzRmO1xuICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ucmlnaHQtY29ybmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg5MDljO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIGxlZnQ6IC0yNHB4O1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLnJpZ2h0LWNvcm5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3ZDhiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOXB4O1xuICBsZWZ0OiAtMjRweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMXB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/button/button.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/button/button.component.ts ***!
    \*******************************************************/

  /*! exports provided: ButtonComponent */

  /***/
  function srcAppComponentsButtonButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
      return ButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ButtonComponent = /*#__PURE__*/function () {
      function ButtonComponent() {
        _classCallCheck(this, ButtonComponent);

        this.text = '';
        this.width = '';
        this.iconLeft = '';
        this.iconRight = '';
      }

      _createClass(ButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ButtonComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ButtonComponent.prototype, "text", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ButtonComponent.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ButtonComponent.prototype, "iconLeft", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ButtonComponent.prototype, "iconRight", void 0);
    ButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-button',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/button/button.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./button.component.scss */
      "./src/app/components/button/button.component.scss"))["default"]]
    })], ButtonComponent);
    /***/
  },

  /***/
  "./src/app/components/card/card.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/card/card.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCardCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-outer {\n  /*font-family: 'Beaver';*/\n  /*\n  width is y\n  height is y + y / 2\n\n  w, y = 500\n  h = 500 + 500/2 = 750\n  x = y / 4 = 125\n\n\n  */\n  width: 500px;\n  height: 750px;\n  border: 10px solid white;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  border-radius: 10px;\n  position: absolute;\n}\n\n.card-stats {\n  width: 100%;\n  height: auto;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.card-stats ion-img, .card-ability ion-img {\n  height: 62.5px;\n  border: 3px solid white;\n  border-radius: 5px;\n  background-color: black;\n}\n\n.card-ability ion-img {\n  width: 80%;\n  height: 80%;\n}\n\n.card-stat-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 80px;\n  width: 140px;\n  font-size: 2em;\n  padding: 10px 12px;\n  border-radius: 5px;\n}\n\n.card-ability {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 80px;\n  width: 80px;\n  font-size: 2em;\n  border-radius: 5px;\n  border-bottom: 5px solid white;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n.card-stat-item {\n  background-color: rgba(0, 0, 0, 0.4);\n  border-bottom: 5px solid black;\n}\n\n.card-stat-item.mov {\n  top: -40px;\n  left: -40px;\n}\n\n.card-stat-item.btl {\n  top: -40px;\n  left: 110px;\n}\n\n.card-stat-item.vit {\n  top: -40px;\n  right: -40px;\n}\n\n.card-stat-item.card-cost {\n  top: -40px;\n  right: -40px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  /*width:100px;*/\n  /*  height:100px;*/\n}\n\n.card-stat-item:last-child {\n  /*  border:1px solid white;*/\n}\n\n.illustration {\n  width: 75%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  margin-top: 40px;\n  margin-bottom: 0px;\n}\n\n.illustration ion-img {\n  width: 100%;\n}\n\n.illustration-battler {\n  /*position:absolute;\n  top:0;\n  left:0;*/\n  -webkit-filter: drop-shadow(0px 0px 10px white);\n          filter: drop-shadow(0px 0px 10px white);\n}\n\n.card-abilities {\n  width: 100%;\n  height: 125px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n/*\n.card-ability {\n  display:flex;\n  flex-direction:column;\n  justify-content: space-around;\n  align-items:center;\n  height:100%;\n  font-size: 2em;\n}\n*/\n\n.card-title {\n  top: 0;\n  left: 0;\n  letter-spacing: 2px;\n  font-size: 1.4em;\n  width: 95%;\n  margin: 2.5%;\n  background-color: rgba(0, 0, 0, 0.4);\n  padding: 10px;\n  text-align: center;\n  border-radius: 10px;\n  border-bottom: 10px solid black;\n}\n\n.card-cost-container {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 95%;\n  margin-left: 2.5%;\n}\n\n.card-cost-container ion-img {\n  height: 40px;\n  width: 40px;\n}\n\n.stat-value {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40%;\n  height: 100%;\n}\n\n.card-absolute-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.illustration-circle {\n  position: absolute;\n  width: 70%;\n}\n\n.can-cast {\n  background-color: #32b3e2;\n}\n\n.ability-tooltip {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.8);\n  width: 100%;\n  padding: 20px;\n  top: auto;\n  opacity: 1;\n  visibility: visible;\n  transition: 300ms;\n}\n\n.ability-tooltip.hidden {\n  visibility: hidden;\n  opacity: 0;\n  top: 100%;\n}\n\n.card-cost {\n  opacity: 0;\n  font-size: 4em;\n}\n\n.magnify {\n  width: 100px;\n  height: 100px;\n  background-color: black;\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 3em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n  border: 5px solid white;\n}\n\n.card-stat-item ion-img {\n  height: 60px;\n  width: 60px;\n  margin-right: 10px;\n}\n\n.cost-item {\n  width: 50px;\n  height: 50px;\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n  box-shadow: 0px 0px 20px white;\n}\n\n.cost-item ion-img {\n  border-radius: 100%;\n  overflow: hidden;\n}\n\n.illustration-circle {\n  width: 130% !important;\n}\n\n.board-card-menu {\n  top: 0;\n  position: absolute;\n  width: 100%;\n  height: 200px;\n  left: 0;\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  transition: 300ms;\n}\n\n.board-card-menu .menu-item {\n  width: 80%;\n  background-color: #37474f;\n  border: 1px solid #78909c;\n  border-bottom: 1px solid #607d8b;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0;\n}\n\n.board-card-menu:hover {\n  top: -50px;\n}\n\n.board-card-menu:hover .menu-item {\n  opacity: 1;\n}\n\n.menu-item.disabled {\n  background-color: #78909c;\n  border: 1px solid #37474f;\n  border-bottom: 1px solid #37474f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Qcm9qZWN0cy9kaWNlLWd1YXJkaWFucy9hcHAvc3JjL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFFRSx5QkFBQTtFQUVBOzs7Ozs7Ozs7R0FBQTtFQVVBLFlBdkJFO0VBd0JGLGFBdkJFO0VBd0JGLHdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1hGOztBRGNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDWEY7O0FEY0E7RUFDRSxjQXZDSTtFQXdDSix1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNYRjs7QURjQTtFQUVFLFVBQUE7RUFDRixXQUFBO0FDWkE7O0FEZUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNaRjs7QURnQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtBQ2JGOztBRG1CQTtFQUNFLG9DQUFBO0VBQ0EsOEJBQUE7QUNoQkY7O0FEb0JBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDRixrQkFBQTtBQ2pCQTs7QURvQkE7RUFDQSw0QkFBQTtBQ2pCQTs7QURvQkE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsV0FBQTtBQ2pCRjs7QURvQkE7RUFDRTs7VUFBQTtFQUdBLCtDQUFBO1VBQUEsdUNBQUE7QUNqQkY7O0FEc0JBO0VBQ0UsV0FBQTtFQUNBLGFBN0lFO0VBOElGLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDbkJGOztBRHNCQTs7Ozs7Ozs7O0NBQUE7O0FBWUE7RUFDRSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQ3JCRjs7QUR5QkE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ3RCRjs7QUR5QkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ3RCRjs7QUR3QkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDckJGOztBRHdCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNyQkY7O0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDckJGOztBRDBCQTtFQUNFLHlCQUFBO0FDdkJGOztBRDBCQTtFQUNFLGtCQUFBO0VBQ0Ysb0NBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ3ZCQTs7QUQwQkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDdkJGOztBRDBCQTtFQUNFLFVBQUE7RUFFQSxjQUFBO0FDeEJGOztBRDRCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ3pCRjs7QUQ2QkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDMUJGOztBRCtCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUM1QkY7O0FEK0JBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQzVCRjs7QUQrQkE7RUFDRSxzQkFBQTtBQzVCRjs7QURnQ0E7RUFDRSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQzdCRjs7QUQrQkU7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDN0JKOztBRGlDQTtFQUNFLFVBQUE7QUM5QkY7O0FEZ0NFO0VBQ0UsVUFBQTtBQzlCSjs7QURtQ0E7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7QUNoQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR3OiA1MDBweDtcclxuJGg6IDc1MHB4O1xyXG5cclxuJHk6ICR3O1xyXG4keDogJHkgLyA0O1xyXG5cclxuJHgyOiAkeCAqIDI7XHJcbiR4XzI6ICR4IC8gMjtcclxuXHJcbi5jYXJkLW91dGVye1xyXG5cclxuICAvKmZvbnQtZmFtaWx5OiAnQmVhdmVyJzsqL1xyXG5cclxuICAvKlxyXG4gIHdpZHRoIGlzIHlcclxuICBoZWlnaHQgaXMgeSArIHkgLyAyXHJcblxyXG4gIHcsIHkgPSA1MDBcclxuICBoID0gNTAwICsgNTAwLzIgPSA3NTBcclxuICB4ID0geSAvIDQgPSAxMjVcclxuXHJcblxyXG4gICovXHJcbiAgd2lkdGg6JHc7XHJcbiAgaGVpZ2h0OiRoO1xyXG4gIGJvcmRlcjoxMHB4IHNvbGlkIHdoaXRlO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG59XHJcblxyXG4uY2FyZC1zdGF0c3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6YXV0bztcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206MjBweDtcclxufVxyXG5cclxuLmNhcmQtc3RhdHMgaW9uLWltZywgLmNhcmQtYWJpbGl0eSBpb24taW1ne1xyXG4gIGhlaWdodDokeF8yO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4uY2FyZC1hYmlsaXR5IGlvbi1pbWd7XHJcblxyXG4gIHdpZHRoOiA4MCU7XHJcbmhlaWdodDogODAlO1xyXG59XHJcblxyXG4uY2FyZC1zdGF0LWl0ZW17XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG59XHJcblxyXG4uY2FyZC1hYmlsaXR5e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1ib3R0b206NXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uY2FyZC1zdGF0LWl0ZW17XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40KTtcclxuICBib3JkZXItYm90dG9tOjVweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuXHJcbi5jYXJkLXN0YXQtaXRlbS5tb3Z7XHJcbiAgdG9wOi00MHB4O1xyXG4gIGxlZnQ6LTQwcHg7XHJcbn1cclxuXHJcbi5jYXJkLXN0YXQtaXRlbS5idGx7XHJcbiAgdG9wOi00MHB4O1xyXG4gIGxlZnQ6MTEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLXN0YXQtaXRlbS52aXR7XHJcbiAgdG9wOi00MHB4O1xyXG4gIHJpZ2h0Oi00MHB4O1xyXG59XHJcblxyXG4uY2FyZC1zdGF0LWl0ZW0uY2FyZC1jb3N0e1xyXG4gIHRvcDotNDBweDtcclxuICByaWdodDotNDBweDtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8qd2lkdGg6MTAwcHg7Ki9cclxuLyogIGhlaWdodDoxMDBweDsqL1xyXG59XHJcblxyXG4uY2FyZC1zdGF0LWl0ZW06bGFzdC1jaGlsZHtcclxuLyogIGJvcmRlcjoxcHggc29saWQgd2hpdGU7Ki9cclxufVxyXG5cclxuLmlsbHVzdHJhdGlvbntcclxuICB3aWR0aDogNzUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOjQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uaWxsdXN0cmF0aW9uIGlvbi1pbWd7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLmlsbHVzdHJhdGlvbi1iYXR0bGVye1xyXG4gIC8qcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowOyovXHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDEwcHggd2hpdGUpO1xyXG5cclxufVxyXG5cclxuXHJcbi5jYXJkLWFiaWxpdGllc3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6ICR4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLypcclxuLmNhcmQtYWJpbGl0eSB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuKi9cclxuXHJcblxyXG4uY2FyZC10aXRsZXtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXJnaW46Mi41JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIGJsYWNrO1xyXG5cclxufVxyXG5cclxuLmNhcmQtY29zdC1jb250YWluZXJ7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICB3aWR0aDo5NSU7XHJcbiAgbWFyZ2luLWxlZnQ6Mi41JTtcclxufVxyXG5cclxuLmNhcmQtY29zdC1jb250YWluZXIgaW9uLWltZyB7XHJcbiAgaGVpZ2h0OjQwcHg7XHJcbiAgd2lkdGg6NDBweDtcclxufVxyXG4uc3RhdC12YWx1ZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkLWFic29sdXRlLWNvbnRhaW5lcntcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG4uaWxsdXN0cmF0aW9uLWNpcmNsZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDcwJTtcclxuXHJcbn1cclxuXHJcblxyXG4uY2FuLWNhc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzMyYjNlMjtcclxufVxyXG5cclxuLmFiaWxpdHktdG9vbHRpcHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjgpO1xyXG53aWR0aDogMTAwJTtcclxucGFkZGluZzogMjBweDtcclxudG9wOmF1dG87XHJcbm9wYWNpdHk6MTtcclxudmlzaWJpbGl0eTogdmlzaWJsZTtcclxudHJhbnNpdGlvbjozMDBtcztcclxufVxyXG5cclxuLmFiaWxpdHktdG9vbHRpcC5oaWRkZW57XHJcbiAgdmlzaWJpbGl0eTpoaWRkZW47XHJcbiAgb3BhY2l0eTowO1xyXG4gIHRvcDoxMDAlO1xyXG59XHJcblxyXG4uY2FyZC1jb3N0e1xyXG4gIG9wYWNpdHk6MDtcclxuXHJcbiAgZm9udC1zaXplOjRlbTtcclxufVxyXG5cclxuXHJcbi5tYWduaWZ5e1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgZm9udC1zaXplOiAzZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYm9yZGVyOjVweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5jYXJkLXN0YXQtaXRlbSBpb24taW1ne1xyXG4gIGhlaWdodDo2MHB4O1xyXG4gIHdpZHRoOjYwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OjEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmNvc3QtaXRlbXtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHdoaXRlO1xyXG59XHJcblxyXG4uY29zdC1pdGVtIGlvbi1pbWd7XHJcbiAgYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG5cclxuLmlsbHVzdHJhdGlvbi1jaXJjbGV7XHJcbiAgd2lkdGg6MTMwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmJvYXJkLWNhcmQtbWVudXtcclxuICB0b3A6MDtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoyMDBweDtcclxuICBsZWZ0OjA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjozMDBtcztcclxuXHJcbiAgLm1lbnUtaXRlbXtcclxuICAgIHdpZHRoOjgwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNzQ3NGYgO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjNzg5MDljO1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzYwN2Q4YjtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgb3BhY2l0eTowO1xyXG4gIH1cclxufVxyXG5cclxuLmJvYXJkLWNhcmQtbWVudTpob3ZlcntcclxuICB0b3A6LTUwcHg7XHJcblxyXG4gIC5tZW51LWl0ZW17XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLm1lbnUtaXRlbS5kaXNhYmxlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg5MDljO1xyXG4gIGJvcmRlcjoxcHggc29saWQgIzM3NDc0ZjtcclxuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMzc0NzRmO1xyXG59XHJcbiIsIi5jYXJkLW91dGVyIHtcbiAgLypmb250LWZhbWlseTogJ0JlYXZlcic7Ki9cbiAgLypcbiAgd2lkdGggaXMgeVxuICBoZWlnaHQgaXMgeSArIHkgLyAyXG5cbiAgdywgeSA9IDUwMFxuICBoID0gNTAwICsgNTAwLzIgPSA3NTBcbiAgeCA9IHkgLyA0ID0gMTI1XG5cblxuICAqL1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNzUwcHg7XG4gIGJvcmRlcjogMTBweCBzb2xpZCB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNhcmQtc3RhdHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNhcmQtc3RhdHMgaW9uLWltZywgLmNhcmQtYWJpbGl0eSBpb24taW1nIHtcbiAgaGVpZ2h0OiA2Mi41cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uY2FyZC1hYmlsaXR5IGlvbi1pbWcge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbn1cblxuLmNhcmQtc3RhdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAxNDBweDtcbiAgZm9udC1zaXplOiAyZW07XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY2FyZC1hYmlsaXR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuXG4uY2FyZC1zdGF0LWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCBibGFjaztcbn1cblxuLmNhcmQtc3RhdC1pdGVtLm1vdiB7XG4gIHRvcDogLTQwcHg7XG4gIGxlZnQ6IC00MHB4O1xufVxuXG4uY2FyZC1zdGF0LWl0ZW0uYnRsIHtcbiAgdG9wOiAtNDBweDtcbiAgbGVmdDogMTEwcHg7XG59XG5cbi5jYXJkLXN0YXQtaXRlbS52aXQge1xuICB0b3A6IC00MHB4O1xuICByaWdodDogLTQwcHg7XG59XG5cbi5jYXJkLXN0YXQtaXRlbS5jYXJkLWNvc3Qge1xuICB0b3A6IC00MHB4O1xuICByaWdodDogLTQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qd2lkdGg6MTAwcHg7Ki9cbiAgLyogIGhlaWdodDoxMDBweDsqL1xufVxuXG4uY2FyZC1zdGF0LWl0ZW06bGFzdC1jaGlsZCB7XG4gIC8qICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlOyovXG59XG5cbi5pbGx1c3RyYXRpb24ge1xuICB3aWR0aDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5pbGx1c3RyYXRpb24gaW9uLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaWxsdXN0cmF0aW9uLWJhdHRsZXIge1xuICAvKnBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6MDtcbiAgbGVmdDowOyovXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxMHB4IHdoaXRlKTtcbn1cblxuLmNhcmQtYWJpbGl0aWVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKlxuLmNhcmQtYWJpbGl0eSB7XG4gIGRpc3BsYXk6ZmxleDtcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBoZWlnaHQ6MTAwJTtcbiAgZm9udC1zaXplOiAyZW07XG59XG4qL1xuLmNhcmQtdGl0bGUge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogMi41JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgYmxhY2s7XG59XG5cbi5jYXJkLWNvc3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbi1sZWZ0OiAyLjUlO1xufVxuXG4uY2FyZC1jb3N0LWNvbnRhaW5lciBpb24taW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbn1cblxuLnN0YXQtdmFsdWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FyZC1hYnNvbHV0ZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaWxsdXN0cmF0aW9uLWNpcmNsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLmNhbi1jYXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyYjNlMjtcbn1cblxuLmFiaWxpdHktdG9vbHRpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgdG9wOiBhdXRvO1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2l0aW9uOiAzMDBtcztcbn1cblxuLmFiaWxpdHktdG9vbHRpcC5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRvcDogMTAwJTtcbn1cblxuLmNhcmQtY29zdCB7XG4gIG9wYWNpdHk6IDA7XG4gIGZvbnQtc2l6ZTogNGVtO1xufVxuXG4ubWFnbmlmeSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDNlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uY2FyZC1zdGF0LWl0ZW0gaW9uLWltZyB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNvc3QtaXRlbSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHdoaXRlO1xufVxuXG4uY29zdC1pdGVtIGlvbi1pbWcge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaWxsdXN0cmF0aW9uLWNpcmNsZSB7XG4gIHdpZHRoOiAxMzAlICFpbXBvcnRhbnQ7XG59XG5cbi5ib2FyZC1jYXJkLW1lbnUge1xuICB0b3A6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDMwMG1zO1xufVxuLmJvYXJkLWNhcmQtbWVudSAubWVudS1pdGVtIHtcbiAgd2lkdGg6IDgwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NDc0ZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc4OTA5YztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2MDdkOGI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uYm9hcmQtY2FyZC1tZW51OmhvdmVyIHtcbiAgdG9wOiAtNTBweDtcbn1cbi5ib2FyZC1jYXJkLW1lbnU6aG92ZXIgLm1lbnUtaXRlbSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5tZW51LWl0ZW0uZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg5MDljO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzc0NzRmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzM3NDc0Zjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/card/card.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/card/card.component.ts ***!
    \***************************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppComponentsCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var dice_guardians_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! dice-guardians-module */
    "./dice-guardians-module/dist/index.js");
    /* harmony import */


    var dice_guardians_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dice_guardians_module__WEBPACK_IMPORTED_MODULE_2__);

    var CardComponent = /*#__PURE__*/function () {
      function CardComponent() {
        _classCallCheck(this, CardComponent);

        this.innerAlign = "space-evenly";
        this.disableMenu = "flex";
        this.dice = new dice_guardians_module__WEBPACK_IMPORTED_MODULE_2__["Dice"](0);
        this.showMagnify = false;
        this.statIcons = ['assets/icons/mov-w-t.png', 'assets/icons/btl-w-t.png', 'assets/icons/vit.png', 'assets/icons/cst-w-t.png'];
        this.statToIcons = {
          'hex': 'assets/icons/hex.png'
        };
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleAbilityTooltip",
        value: function toggleAbilityTooltip(ability) {
          for (var i = 0; i < this.card.abilities.length; i++) {
            if (this.card.abilities[i].id === ability.id) {
              if (!this.card.showAbility) {
                //this.card.abilities[i]['hidden'] = 'visible'
                this.card.showAbility = true;
                this.card.activeAbility = this.card.abilities[i];
              } else {
                //this.card.abilities[i]['hidden'] = 'hidden'
                this.card.showAbility = false;
                this.card.activeAbility = this.card.abilities[i];
              }
            }
          }

          console.log(this.card);
        }
      }, {
        key: "magnify",
        value: function magnify(card) {
          var sound = new dice_guardians_module__WEBPACK_IMPORTED_MODULE_2__["DGAudio"]('assets/audio/card-view.mp3');
          sound.play();
          this.board.cardModal(card);
        }
      }, {
        key: "pad",
        value: function pad(num) {
          var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
          var s = num + "";

          while (s.length < size) {
            s = "0" + s;
          }

          return s;
        }
      }]);

      return CardComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "board", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "card", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "player", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "innerAlign", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "disableMenu", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "showMagnify", void 0);
    CardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./card.component.scss */
      "./src/app/components/card/card.component.scss"))["default"]]
    })], CardComponent);
    /***/
  },

  /***/
  "./src/app/components/chip/chip.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/chip/chip.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsChipChipComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".chip {\n  width: 100%;\n  padding: 5px 10px;\n  background-color: #546e7a;\n  border: 1px solid #263238;\n  border-radius: 50px;\n  text-align: center;\n  font-size: 0.95em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Qcm9qZWN0cy9kaWNlLWd1YXJkaWFucy9hcHAvc3JjL2FwcC9jb21wb25lbnRzL2NoaXAvY2hpcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jaGlwL2NoaXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoaXAvY2hpcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGlwe1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgcGFkZGluZzo1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiM1NDZlN2EgO1xyXG4gIGJvcmRlcjoxcHggc29saWQgIzI2MzIzOCA7XHJcbiAgYm9yZGVyLXJhZGl1czo1MHB4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGZvbnQtc2l6ZTowLjk1ZW07XHJcbn1cclxuIiwiLmNoaXAge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDZlN2E7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNjMyMzg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjk1ZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/chip/chip.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/chip/chip.component.ts ***!
    \***************************************************/

  /*! exports provided: ChipComponent */

  /***/
  function srcAppComponentsChipChipComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChipComponent", function () {
      return ChipComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ChipComponent = /*#__PURE__*/function () {
      function ChipComponent() {
        _classCallCheck(this, ChipComponent);
      }

      _createClass(ChipComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChipComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChipComponent.prototype, "text", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChipComponent.prototype, "color", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChipComponent.prototype, "width", void 0);
    ChipComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chip',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./chip.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chip/chip.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./chip.component.scss */
      "./src/app/components/chip/chip.component.scss"))["default"]]
    })], ChipComponent);
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./card/card.component */
    "./src/app/components/card/card.component.ts");
    /* harmony import */


    var _dice_dice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dice/dice.component */
    "./src/app/components/dice/dice.component.ts");
    /* harmony import */


    var _dice_pool_dice_pool_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dice-pool/dice-pool.component */
    "./src/app/components/dice-pool/dice-pool.component.ts");
    /* harmony import */


    var _game_monitor_game_monitor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./game-monitor/game-monitor.component */
    "./src/app/components/game-monitor/game-monitor.component.ts");
    /* harmony import */


    var _auth_modal_auth_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth-modal/auth-modal.component */
    "./src/app/components/auth-modal/auth-modal.component.ts");
    /* harmony import */


    var _board_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./board/board.component */
    "./src/app/components/board/board.component.ts");
    /* harmony import */


    var _energy_pool_energy_pool_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./energy-pool/energy-pool.component */
    "./src/app/components/energy-pool/energy-pool.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _button_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./button/button.component */
    "./src/app/components/button/button.component.ts");
    /* harmony import */


    var _chip_chip_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./chip/chip.component */
    "./src/app/components/chip/chip.component.ts");
    /* harmony import */


    var _splash_splash_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./splash/splash.component */
    "./src/app/components/splash/splash.component.ts");
    /* harmony import */


    var _board_battler_board_battler_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./board-battler/board-battler.component */
    "./src/app/components/board-battler/board-battler.component.ts"); //import { CardFullComponent } from './card-full/card-full.component'
    //import { BoardCardsComponent } from './board-cards/board-cards.component'
    //import { ToasterComponent } from './toaster/toaster.component'


    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [//CardFullComponent,
      //BoardCardsComponent,
      _board_battler_board_battler_component__WEBPACK_IMPORTED_MODULE_14__["BoardBattlerComponent"], //ToasterComponent,
      _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _dice_dice_component__WEBPACK_IMPORTED_MODULE_4__["DiceComponent"], _dice_pool_dice_pool_component__WEBPACK_IMPORTED_MODULE_5__["DicePoolComponent"], _auth_modal_auth_modal_component__WEBPACK_IMPORTED_MODULE_7__["AuthModalComponent"], _game_monitor_game_monitor_component__WEBPACK_IMPORTED_MODULE_6__["GameMonitorComponent"], _energy_pool_energy_pool_component__WEBPACK_IMPORTED_MODULE_9__["EnergyPoolComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_11__["ButtonComponent"], _chip_chip_component__WEBPACK_IMPORTED_MODULE_12__["ChipComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_8__["BoardComponent"], _splash_splash_component__WEBPACK_IMPORTED_MODULE_13__["SplashComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [//CardFullComponent,
      //BoardCardsComponent,
      _board_battler_board_battler_component__WEBPACK_IMPORTED_MODULE_14__["BoardBattlerComponent"], //ToasterComponent,
      _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _dice_dice_component__WEBPACK_IMPORTED_MODULE_4__["DiceComponent"], _dice_pool_dice_pool_component__WEBPACK_IMPORTED_MODULE_5__["DicePoolComponent"], _auth_modal_auth_modal_component__WEBPACK_IMPORTED_MODULE_7__["AuthModalComponent"], _energy_pool_energy_pool_component__WEBPACK_IMPORTED_MODULE_9__["EnergyPoolComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_11__["ButtonComponent"], _game_monitor_game_monitor_component__WEBPACK_IMPORTED_MODULE_6__["GameMonitorComponent"], _chip_chip_component__WEBPACK_IMPORTED_MODULE_12__["ChipComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_8__["BoardComponent"], _splash_splash_component__WEBPACK_IMPORTED_MODULE_13__["SplashComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/dice-pool/dice-pool.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/dice-pool/dice-pool.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDicePoolDicePoolComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dice-info-container {\n  width: 100%;\n  position: relative;\n}\n\n.dice-info {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  left: 100%;\n  padding: 10px;\n  background-color: #121212;\n  color: white;\n  flex-direction: column;\n  border-radius: 10px;\n  border: 1px solid black;\n}\n\n.dice-info-lvl {\n  display: flex;\n}\n\n.dice-info-lvl-1, .dice-lvl-1 {\n  background-color: #b32d91;\n}\n\n.dice-info-lvl-2, .dice-lvl-2 {\n  background-color: #2d4eb3;\n}\n\n.dice-info-lvl-3, .dice-lvl-3 {\n  background-color: #562e73;\n}\n\n.dice-info-lvl-4, .dice-lvl-4 {\n  background-color: #e57e3a;\n}\n\n.dice-info-lvl-5, .dice-lvl-5 {\n  background-color: #e57e3a;\n}\n\n.dice-info-face {\n  border: 1px solid white;\n}\n\nion-dice-area {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  flex-direction: column;\n}\n\nion-dice-pool {\n  display: flex;\n}\n\n.dice-pool {\n  display: flex;\n  flex-direction: column;\n}\n\n.dice-lvl {\n  width: 50px;\n  height: 50px;\n  border: 3px solid white;\n  border-radius: 7px;\n  margin: 3px;\n}\n\n.selected-dice {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100px;\n}\n\n.player-dice-pool {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  background-color: #37474f;\n  border: 1px solid #78909c;\n  border-bottom: 1px solid #607d8b;\n  margin: 5px 0px;\n}\n\n.dice-model {\n  width: 30px;\n  height: 30px;\n  border: 1px solid white;\n  border-radius: 5px;\n  margin: 3px;\n  position: relative;\n}\n\n.dice-model ion-img {\n  overflow: hidden;\n  border-radius: 5px;\n}\n\n.dice-model:hover::before {\n  content: \"\";\n  position: absolute;\n  top: -240px;\n  left: calc(50% - 75px);\n  background-image: var(--src);\n  background-position: center;\n  background-size: cover;\n  width: 150px;\n  height: 225px;\n  border-radius: 5px;\n  border: 1px solid #78909c;\n  opacity: 0.8;\n}\n\n.dice-model:hover::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-top: 10px solid #78909c;\n  top: -14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Qcm9qZWN0cy9kaWNlLWd1YXJkaWFucy9hcHAvc3JjL2FwcC9jb21wb25lbnRzL2RpY2UtcG9vbC9kaWNlLXBvb2wuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGljZS1wb29sL2RpY2UtcG9vbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FER0E7RUFDRSxhQUFBO0FDQUY7O0FESUE7RUFBOEIseUJBQUE7QUNBOUI7O0FEQ0E7RUFBOEIseUJBQUE7QUNHOUI7O0FERkE7RUFBOEIseUJBQUE7QUNNOUI7O0FETEE7RUFBOEIseUJBQUE7QUNTOUI7O0FEUkE7RUFBOEIseUJBQUE7QUNZOUI7O0FEVEE7RUFDRSx1QkFBQTtBQ1lGOztBRFJFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNXSjs7QURQRTtFQUNFLGFBQUE7QUNVSjs7QURQRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ1VKOztBRFBFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1VKOztBRE5BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ1NKOztBRE5BO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUNTRjs7QURQQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1VGOztBRFBBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ1VGOztBRFBBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ1VGOztBRFBBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FDVUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RpY2UtcG9vbC9kaWNlLXBvb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmRpY2UtaW5mby1jb250YWluZXJ7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG4uZGljZS1pbmZve1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuLmRpY2UtaW5mby1sdmx7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG59XHJcblxyXG5cclxuLmRpY2UtaW5mby1sdmwtMSwgLmRpY2UtbHZsLTF7YmFja2dyb3VuZC1jb2xvcjojYjMyZDkxO31cclxuLmRpY2UtaW5mby1sdmwtMiwgLmRpY2UtbHZsLTJ7YmFja2dyb3VuZC1jb2xvcjojMmQ0ZWIzO31cclxuLmRpY2UtaW5mby1sdmwtMywgLmRpY2UtbHZsLTN7YmFja2dyb3VuZC1jb2xvcjojNTYyZTczO31cclxuLmRpY2UtaW5mby1sdmwtNCwgLmRpY2UtbHZsLTR7YmFja2dyb3VuZC1jb2xvcjojZTU3ZTNhO31cclxuLmRpY2UtaW5mby1sdmwtNSwgLmRpY2UtbHZsLTV7YmFja2dyb3VuZC1jb2xvcjojZTU3ZTNhO31cclxuXHJcblxyXG4uZGljZS1pbmZvLWZhY2V7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuXHJcbiAgaW9uLWRpY2UtYXJlYXtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICB9XHJcblxyXG5cclxuICBpb24tZGljZS1wb29se1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gIH1cclxuXHJcbiAgLmRpY2UtcG9vbHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5kaWNlLWx2bCB7XHJcbiAgICB3aWR0aDo1MHB4O1xyXG4gICAgaGVpZ2h0OjUwcHg7XHJcbiAgICBib3JkZXI6M3B4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czo3cHg7XHJcbiAgICBtYXJnaW46M3B4O1xyXG4gIH1cclxuXHJcblxyXG4uc2VsZWN0ZWQtZGljZXtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDBweDtcclxuICB9XHJcblxyXG4ucGxheWVyLWRpY2UtcG9vbHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgZmxleC13cmFwOndyYXA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMzc0NzRmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODkwOWM7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2MDdkOGI7XHJcbiAgbWFyZ2luOjVweCAwcHg7XHJcbn1cclxuLmRpY2UtbW9kZWx7XHJcbiAgd2lkdGg6MzBweDtcclxuICBoZWlnaHQ6MzBweDtcclxuICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gIG1hcmdpbjozcHg7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuXHJcbi5kaWNlLW1vZGVsIGlvbi1pbWd7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xyXG59XHJcblxyXG4uZGljZS1tb2RlbDpob3Zlcjo6YmVmb3Jle1xyXG4gIGNvbnRlbnQ6XCJcIjtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6LTI0MHB4O1xyXG4gIGxlZnQ6Y2FsYyg1MCUgLSA3NXB4KTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOnZhcigtLXNyYyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gIHdpZHRoOjE1MHB4O1xyXG4gIGhlaWdodDoyMjVweDtcclxuICBib3JkZXItcmFkaXVzOjVweDtcclxuICBib3JkZXI6MXB4IHNvbGlkICM3ODkwOWM7XHJcbiAgb3BhY2l0eTowLjg7XHJcbn1cclxuXHJcbi5kaWNlLW1vZGVsOmhvdmVyOjphZnRlcntcclxuICBjb250ZW50OlwiXCI7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICM3ODkwOWMgO1xyXG4gIHRvcDotMTRweDtcclxufVxyXG4iLCIuZGljZS1pbmZvLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kaWNlLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uZGljZS1pbmZvLWx2bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaWNlLWluZm8tbHZsLTEsIC5kaWNlLWx2bC0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzMmQ5MTtcbn1cblxuLmRpY2UtaW5mby1sdmwtMiwgLmRpY2UtbHZsLTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ0ZWIzO1xufVxuXG4uZGljZS1pbmZvLWx2bC0zLCAuZGljZS1sdmwtMyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NjJlNzM7XG59XG5cbi5kaWNlLWluZm8tbHZsLTQsIC5kaWNlLWx2bC00IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1N2UzYTtcbn1cblxuLmRpY2UtaW5mby1sdmwtNSwgLmRpY2UtbHZsLTUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU3ZTNhO1xufVxuXG4uZGljZS1pbmZvLWZhY2Uge1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuaW9uLWRpY2UtYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaW9uLWRpY2UtcG9vbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaWNlLXBvb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZGljZS1sdmwge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW46IDNweDtcbn1cblxuLnNlbGVjdGVkLWRpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5wbGF5ZXItZGljZS1wb29sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzQ3NGY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODkwOWM7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjA3ZDhiO1xuICBtYXJnaW46IDVweCAwcHg7XG59XG5cbi5kaWNlLW1vZGVsIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRpY2UtbW9kZWwgaW9uLWltZyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmRpY2UtbW9kZWw6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjQwcHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNzVweCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLXNyYyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDIyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODkwOWM7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmRpY2UtbW9kZWw6aG92ZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICM3ODkwOWM7XG4gIHRvcDogLTE0cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/dice-pool/dice-pool.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/dice-pool/dice-pool.component.ts ***!
    \*************************************************************/

  /*! exports provided: DicePoolComponent */

  /***/
  function srcAppComponentsDicePoolDicePoolComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DicePoolComponent", function () {
      return DicePoolComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DicePoolComponent = /*#__PURE__*/function () {
      /*
        public showDiceInfo:string='none'
        public turnText:string = 'end turn'
      
      
        public ranks: Array<Array<string>> = Dice.ranks
        public d6: any = Dice.d6
        public dicePool:Array<Dice>=[]
      
      */
      function DicePoolComponent() {
        /*
        const max = 4
        for (let i = 0; i < max; i++){
            this.dicePool.push(new Dice(i + 1))
          }*/

        _classCallCheck(this, DicePoolComponent);
      }

      _createClass(DicePoolComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleDiceExplanation",
        value: function toggleDiceExplanation() {
          /*
          if (this.showDiceInfo === 'none'){
            this.showDiceInfo = 'flex'
          } else {
            this.showDiceInfo = 'none'
               }*/
        }
      }, {
        key: "selectDice",
        value: function selectDice(dice) {
          this.player.dice.push(dice);
        }
      }]);

      return DicePoolComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DicePoolComponent.prototype, "player", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DicePoolComponent.prototype, "board", void 0);
    DicePoolComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dice-pool',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dice-pool.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dice-pool/dice-pool.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dice-pool.component.scss */
      "./src/app/components/dice-pool/dice-pool.component.scss"))["default"]]
    })], DicePoolComponent);
    /***/
  },

  /***/
  "./src/app/components/dice/dice.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/dice/dice.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDiceDiceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\n    .view{\n    width:200px;\n    height:200px;\n    margin:50px;\n    perspective:600px;\n    }\n    .dice{\n    width:200px;\n    height:200px;\n    position:relative;\n    transform-style:preserve-3d;\n    transition: transform 1s;\n    }\n\n\n    .dice-front{transform:rotateY(360deg) !important;}\n    .dice-right{transform:rotateY(-90deg) !important;}\n    .dice-back{transform:rotateY(180deg) !important;}\n    .dice-left{transform:rotateY(90deg) !important;}\n    .dice-top{transform:rotateX(-90deg) !important;}\n    .dice-bottom {transform:rotateX(90deg) !important;}\n\n    .btnFront:checked ~ .view>.dice{\n    transform:rotateY(360deg) !important;\n    }\n    .btnRight:checked ~ .view>.dice{\n    transform:rotateY(-90deg) !important;\n    }\n    .btnBack:checked ~ .view>.dice{\n    transform:rotateY(180deg) !important;\n    }\n    .btnLeft:checked ~ .view>.dice{\n    transform:rotateY(90deg) !important;\n    }\n    .btnTop:checked ~ .view>.dice{\n    transform:rotateX(-90deg) !important;\n    }\n    .btnBottom:checked ~ .view>.dice{\n    transform:rotateX(90deg) !important;\n    }\n    .diceFace{\n    position:absolute;\n    width:200px;\n    height:200px;\n    text-align:center;\n    line-height:200px;\n    font-size:45px;\n    border:2px solid white;\n    }\n    .front{\n    background-color:rgba(255,0,0,0.6);\n    transform:rotateY(0deg) translateZ(50px);\n    }\n    .right{\n    background-color:rgba(0,255,0,0.6);\n    transform:rotateY(90deg) translateZ(50px);\n    }\n    .back{\n    background-color:rgba(255,255,0,0.6);\n    transform:rotateY(180deg) translateZ(50px);\n    }\n    .left{\n    background-color:rgba(255,0,255,0.6);\n    transform:rotateY(-90deg) translateZ(50px);\n    }\n    .top{\n    background-color:rgba(0,255,255,0.6);\n    transform:rotateX(90deg) translateZ(50px);\n    }\n    .bottom{\n    background-color:rgba(0,0,255,0.6);\n    transform:rotateX(-90deg) translateZ(50px);\n    }\n    span{\n    display:inline-block;\n    padding:4px 10px;\n    margin:3px;\n    background-color:#0aa;\n    border:2px inset #dd0\n    }\n\n\n    .test:checked + #test2{\n    display:block;\n    width:80px;\n    background-color:#0aa;\n    }\n    input[type=\"radio\"]{\n    transform:scale(2,2);\n    margin:10px;\n    color:red;\n    }\n*/\n.view {\n  width: 50px;\n  height: 50px;\n  margin: 25px;\n  perspective: 150px;\n}\n.dice {\n  width: 50px;\n  height: 50px;\n  position: relative;\n  transform-style: preserve-3d;\n  transition: transform 500ms;\n}\n.dice-front {\n  transform: rotateY(360deg) !important;\n}\n.dice-right {\n  transform: rotateY(-90deg) !important;\n}\n.dice-back {\n  transform: rotateY(180deg) !important;\n}\n.dice-left {\n  transform: rotateY(90deg) !important;\n}\n.dice-top {\n  transform: rotateX(-90deg) !important;\n}\n.dice-bottom {\n  transform: rotateX(90deg) !important;\n}\n.btnFront:checked ~ .view > .dice {\n  transform: rotateY(360deg) !important;\n}\n.btnRight:checked ~ .view > .dice {\n  transform: rotateY(-90deg) !important;\n}\n.btnBack:checked ~ .view > .dice {\n  transform: rotateY(180deg) !important;\n}\n.btnLeft:checked ~ .view > .dice {\n  transform: rotateY(90deg) !important;\n}\n.btnTop:checked ~ .view > .dice {\n  transform: rotateX(-90deg) !important;\n}\n.btnBottom:checked ~ .view > .dice {\n  transform: rotateX(90deg) !important;\n}\n.diceFace {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  font-size: 1.2em;\n  border: 2px solid white;\n  background-size: cover;\n}\n.front {\n  background-color: rgba(255, 0, 0, 0.6);\n  transform: rotateY(0deg) translateZ(25px);\n}\n.right {\n  background-color: rgba(0, 255, 0, 0.6);\n  transform: rotateY(90deg) translateZ(25px);\n}\n.back {\n  background-color: rgba(255, 255, 0, 0.6);\n  transform: rotateY(180deg) translateZ(25px);\n}\n.left {\n  background-color: rgba(255, 0, 255, 0.6);\n  transform: rotateY(-90deg) translateZ(25px);\n}\n.top {\n  background-color: rgba(0, 255, 255, 0.6);\n  transform: rotateX(90deg) translateZ(25px);\n}\n.bottom {\n  /*background-color:rgba(0,0,255,0.6);*/\n  transform: rotateX(-90deg) translateZ(25px);\n}\nspan {\n  display: inline-block;\n  padding: 4px 10px;\n  margin: 3px;\n  background-color: #0aa;\n  border: 2px inset #dd0;\n}\n.test:checked + .test2 {\n  display: block;\n  width: 80px;\n  background-color: #0aa;\n}\ninput[type=radio] {\n  transform: scale(2, 2);\n  margin: 10px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Qcm9qZWN0cy9kaWNlLWd1YXJkaWFucy9hcHAvc3JjL2FwcC9jb21wb25lbnRzL2RpY2UvZGljZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kaWNlL2RpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FBaUdJO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNGSjtBRElJO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUNESjtBREtJO0VBQVkscUNBQUE7QUNEaEI7QURFSTtFQUFZLHFDQUFBO0FDRWhCO0FEREk7RUFBVyxxQ0FBQTtBQ0tmO0FESkk7RUFBVyxvQ0FBQTtBQ1FmO0FEUEk7RUFBVSxxQ0FBQTtBQ1dkO0FEVkk7RUFBYyxvQ0FBQTtBQ2NsQjtBRFpJO0VBQ0EscUNBQUE7QUNlSjtBRGJJO0VBQ0EscUNBQUE7QUNnQko7QURkSTtFQUNBLHFDQUFBO0FDaUJKO0FEZkk7RUFDQSxvQ0FBQTtBQ2tCSjtBRGhCSTtFQUNBLHFDQUFBO0FDbUJKO0FEakJJO0VBQ0Esb0NBQUE7QUNvQko7QURsQkk7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQ3FCSjtBRG5CSTtFQUNBLHNDQUFBO0VBQ0EseUNBQUE7QUNzQko7QURwQkk7RUFDQSxzQ0FBQTtFQUNBLDBDQUFBO0FDdUJKO0FEckJJO0VBQ0Esd0NBQUE7RUFDQSwyQ0FBQTtBQ3dCSjtBRHRCSTtFQUNBLHdDQUFBO0VBQ0EsMkNBQUE7QUN5Qko7QUR2Qkk7RUFDQSx3Q0FBQTtFQUNBLDBDQUFBO0FDMEJKO0FEeEJJO0VBQ0Esc0NBQUE7RUFDQSwyQ0FBQTtBQzJCSjtBRHZCSTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQzBCSjtBRHRCSTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUN5Qko7QUR2Qkk7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDMEJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kaWNlL2RpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgLnZpZXd7XHJcbiAgICB3aWR0aDoyMDBweDtcclxuICAgIGhlaWdodDoyMDBweDtcclxuICAgIG1hcmdpbjo1MHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6NjAwcHg7XHJcbiAgICB9XHJcbiAgICAuZGljZXtcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5kaWNlLWZyb250e3RyYW5zZm9ybTpyb3RhdGVZKDM2MGRlZykgIWltcG9ydGFudDt9XHJcbiAgICAuZGljZS1yaWdodHt0cmFuc2Zvcm06cm90YXRlWSgtOTBkZWcpICFpbXBvcnRhbnQ7fVxyXG4gICAgLmRpY2UtYmFja3t0cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpICFpbXBvcnRhbnQ7fVxyXG4gICAgLmRpY2UtbGVmdHt0cmFuc2Zvcm06cm90YXRlWSg5MGRlZykgIWltcG9ydGFudDt9XHJcbiAgICAuZGljZS10b3B7dHJhbnNmb3JtOnJvdGF0ZVgoLTkwZGVnKSAhaW1wb3J0YW50O31cclxuICAgIC5kaWNlLWJvdHRvbSB7dHJhbnNmb3JtOnJvdGF0ZVgoOTBkZWcpICFpbXBvcnRhbnQ7fVxyXG5cclxuICAgIC5idG5Gcm9udDpjaGVja2VkIH4gLnZpZXc+LmRpY2V7XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlWSgzNjBkZWcpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYnRuUmlnaHQ6Y2hlY2tlZCB+IC52aWV3Pi5kaWNle1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZVkoLTkwZGVnKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJ0bkJhY2s6Y2hlY2tlZCB+IC52aWV3Pi5kaWNle1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZVkoMTgwZGVnKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJ0bkxlZnQ6Y2hlY2tlZCB+IC52aWV3Pi5kaWNle1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZVkoOTBkZWcpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYnRuVG9wOmNoZWNrZWQgfiAudmlldz4uZGljZXtcclxuICAgIHRyYW5zZm9ybTpyb3RhdGVYKC05MGRlZykgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5idG5Cb3R0b206Y2hlY2tlZCB+IC52aWV3Pi5kaWNle1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZVgoOTBkZWcpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZGljZUZhY2V7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDoyMDBweDtcclxuICAgIGZvbnQtc2l6ZTo0NXB4O1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5mcm9udHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMCwwLDAuNik7XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlWSgwZGVnKSB0cmFuc2xhdGVaKDUwcHgpO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMjU1LDAsMC42KTtcclxuICAgIHRyYW5zZm9ybTpyb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDUwcHgpO1xyXG4gICAgfVxyXG4gICAgLmJhY2t7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwwLDAuNik7XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooNTBweCk7XHJcbiAgICB9XHJcbiAgICAubGVmdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMCwyNTUsMC42KTtcclxuICAgIHRyYW5zZm9ybTpyb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWig1MHB4KTtcclxuICAgIH1cclxuICAgIC50b3B7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwyNTUsMjU1LDAuNik7XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWig1MHB4KTtcclxuICAgIH1cclxuICAgIC5ib3R0b217XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDI1NSwwLjYpO1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKDUwcHgpO1xyXG4gICAgfVxyXG4gICAgc3BhbntcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzo0cHggMTBweDtcclxuICAgIG1hcmdpbjozcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwYWE7XHJcbiAgICBib3JkZXI6MnB4IGluc2V0ICNkZDBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLnRlc3Q6Y2hlY2tlZCArICN0ZXN0MntcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB3aWR0aDo4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMGFhO1xyXG4gICAgfVxyXG4gICAgaW5wdXRbdHlwZT1cInJhZGlvXCJde1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDIsMik7XHJcbiAgICBtYXJnaW46MTBweDtcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIH1cclxuKi9cclxuXHJcblxyXG5cclxuICAgIC52aWV3e1xyXG4gICAgd2lkdGg6NTBweDtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgbWFyZ2luOjI1cHg7XHJcbiAgICBwZXJzcGVjdGl2ZToxNTBweDtcclxuICAgIH1cclxuICAgIC5kaWNle1xyXG4gICAgd2lkdGg6NTBweDtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5kaWNlLWZyb250e3RyYW5zZm9ybTpyb3RhdGVZKDM2MGRlZykgIWltcG9ydGFudDt9XHJcbiAgICAuZGljZS1yaWdodHt0cmFuc2Zvcm06cm90YXRlWSgtOTBkZWcpICFpbXBvcnRhbnQ7fVxyXG4gICAgLmRpY2UtYmFja3t0cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpICFpbXBvcnRhbnQ7fVxyXG4gICAgLmRpY2UtbGVmdHt0cmFuc2Zvcm06cm90YXRlWSg5MGRlZykgIWltcG9ydGFudDt9XHJcbiAgICAuZGljZS10b3B7dHJhbnNmb3JtOnJvdGF0ZVgoLTkwZGVnKSAhaW1wb3J0YW50O31cclxuICAgIC5kaWNlLWJvdHRvbSB7dHJhbnNmb3JtOnJvdGF0ZVgoOTBkZWcpICFpbXBvcnRhbnQ7fVxyXG5cclxuICAgIC5idG5Gcm9udDpjaGVja2VkIH4gLnZpZXc+LmRpY2V7XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlWSgzNjBkZWcpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYnRuUmlnaHQ6Y2hlY2tlZCB+IC52aWV3Pi5kaWNle1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZVkoLTkwZGVnKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJ0bkJhY2s6Y2hlY2tlZCB+IC52aWV3Pi5kaWNle1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZVkoMTgwZGVnKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJ0bkxlZnQ6Y2hlY2tlZCB+IC52aWV3Pi5kaWNle1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZVkoOTBkZWcpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYnRuVG9wOmNoZWNrZWQgfiAudmlldz4uZGljZXtcclxuICAgIHRyYW5zZm9ybTpyb3RhdGVYKC05MGRlZykgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5idG5Cb3R0b206Y2hlY2tlZCB+IC52aWV3Pi5kaWNle1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZVgoOTBkZWcpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZGljZUZhY2V7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOjUwcHg7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6NTBweDtcclxuICAgIGZvbnQtc2l6ZToxLjJlbTtcclxuICAgIGJvcmRlcjoycHggc29saWQgd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICB9XHJcbiAgICAuZnJvbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDAsMCwwLjYpO1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWigyNXB4KTtcclxuICAgIH1cclxuICAgIC5yaWdodHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDI1NSwwLDAuNik7XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigyNXB4KTtcclxuICAgIH1cclxuICAgIC5iYWNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMCwwLjYpO1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDI1cHgpO1xyXG4gICAgfVxyXG4gICAgLmxlZnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDAsMjU1LDAuNik7XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooMjVweCk7XHJcbiAgICB9XHJcbiAgICAudG9we1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMjU1LDI1NSwwLjYpO1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooMjVweCk7XHJcbiAgICB9XHJcbiAgICAuYm90dG9te1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDI1NSwwLjYpOyovXHJcbiAgICB0cmFuc2Zvcm06cm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooMjVweCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNwYW57XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6NHB4IDEwcHg7XHJcbiAgICBtYXJnaW46M3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMGFhO1xyXG4gICAgYm9yZGVyOjJweCBpbnNldCAjZGQwXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC50ZXN0OmNoZWNrZWQgKyAudGVzdDJ7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgd2lkdGg6ODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzBhYTtcclxuICAgIH1cclxuICAgIGlucHV0W3R5cGU9XCJyYWRpb1wiXXtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgyLDIpO1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICB9XHJcbiIsIi8qXG4gICAgLnZpZXd7XG4gICAgd2lkdGg6MjAwcHg7XG4gICAgaGVpZ2h0OjIwMHB4O1xuICAgIG1hcmdpbjo1MHB4O1xuICAgIHBlcnNwZWN0aXZlOjYwMHB4O1xuICAgIH1cbiAgICAuZGljZXtcbiAgICB3aWR0aDoyMDBweDtcbiAgICBoZWlnaHQ6MjAwcHg7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgICB9XG5cblxuICAgIC5kaWNlLWZyb250e3RyYW5zZm9ybTpyb3RhdGVZKDM2MGRlZykgIWltcG9ydGFudDt9XG4gICAgLmRpY2UtcmlnaHR7dHJhbnNmb3JtOnJvdGF0ZVkoLTkwZGVnKSAhaW1wb3J0YW50O31cbiAgICAuZGljZS1iYWNre3RyYW5zZm9ybTpyb3RhdGVZKDE4MGRlZykgIWltcG9ydGFudDt9XG4gICAgLmRpY2UtbGVmdHt0cmFuc2Zvcm06cm90YXRlWSg5MGRlZykgIWltcG9ydGFudDt9XG4gICAgLmRpY2UtdG9we3RyYW5zZm9ybTpyb3RhdGVYKC05MGRlZykgIWltcG9ydGFudDt9XG4gICAgLmRpY2UtYm90dG9tIHt0cmFuc2Zvcm06cm90YXRlWCg5MGRlZykgIWltcG9ydGFudDt9XG5cbiAgICAuYnRuRnJvbnQ6Y2hlY2tlZCB+IC52aWV3Pi5kaWNle1xuICAgIHRyYW5zZm9ybTpyb3RhdGVZKDM2MGRlZykgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJ0blJpZ2h0OmNoZWNrZWQgfiAudmlldz4uZGljZXtcbiAgICB0cmFuc2Zvcm06cm90YXRlWSgtOTBkZWcpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5idG5CYWNrOmNoZWNrZWQgfiAudmlldz4uZGljZXtcbiAgICB0cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5idG5MZWZ0OmNoZWNrZWQgfiAudmlldz4uZGljZXtcbiAgICB0cmFuc2Zvcm06cm90YXRlWSg5MGRlZykgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJ0blRvcDpjaGVja2VkIH4gLnZpZXc+LmRpY2V7XG4gICAgdHJhbnNmb3JtOnJvdGF0ZVgoLTkwZGVnKSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYnRuQm90dG9tOmNoZWNrZWQgfiAudmlldz4uZGljZXtcbiAgICB0cmFuc2Zvcm06cm90YXRlWCg5MGRlZykgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmRpY2VGYWNle1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHdpZHRoOjIwMHB4O1xuICAgIGhlaWdodDoyMDBweDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDoyMDBweDtcbiAgICBmb250LXNpemU6NDVweDtcbiAgICBib3JkZXI6MnB4IHNvbGlkIHdoaXRlO1xuICAgIH1cbiAgICAuZnJvbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwwLDAsMC42KTtcbiAgICB0cmFuc2Zvcm06cm90YXRlWSgwZGVnKSB0cmFuc2xhdGVaKDUwcHgpO1xuICAgIH1cbiAgICAucmlnaHR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMjU1LDAsMC42KTtcbiAgICB0cmFuc2Zvcm06cm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWig1MHB4KTtcbiAgICB9XG4gICAgLmJhY2t7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMCwwLjYpO1xuICAgIHRyYW5zZm9ybTpyb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlWig1MHB4KTtcbiAgICB9XG4gICAgLmxlZnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwwLDI1NSwwLjYpO1xuICAgIHRyYW5zZm9ybTpyb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWig1MHB4KTtcbiAgICB9XG4gICAgLnRvcHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwyNTUsMjU1LDAuNik7XG4gICAgdHJhbnNmb3JtOnJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooNTBweCk7XG4gICAgfVxuICAgIC5ib3R0b217XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwyNTUsMC42KTtcbiAgICB0cmFuc2Zvcm06cm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooNTBweCk7XG4gICAgfVxuICAgIHNwYW57XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzo0cHggMTBweDtcbiAgICBtYXJnaW46M3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IzBhYTtcbiAgICBib3JkZXI6MnB4IGluc2V0ICNkZDBcbiAgICB9XG5cblxuICAgIC50ZXN0OmNoZWNrZWQgKyAjdGVzdDJ7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICB3aWR0aDo4MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IzBhYTtcbiAgICB9XG4gICAgaW5wdXRbdHlwZT1cInJhZGlvXCJde1xuICAgIHRyYW5zZm9ybTpzY2FsZSgyLDIpO1xuICAgIG1hcmdpbjoxMHB4O1xuICAgIGNvbG9yOnJlZDtcbiAgICB9XG4qL1xuLnZpZXcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDI1cHg7XG4gIHBlcnNwZWN0aXZlOiAxNTBweDtcbn1cblxuLmRpY2Uge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcztcbn1cblxuLmRpY2UtZnJvbnQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwZGVnKSAhaW1wb3J0YW50O1xufVxuXG4uZGljZS1yaWdodCB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpICFpbXBvcnRhbnQ7XG59XG5cbi5kaWNlLWJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSAhaW1wb3J0YW50O1xufVxuXG4uZGljZS1sZWZ0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSAhaW1wb3J0YW50O1xufVxuXG4uZGljZS10b3Age1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSAhaW1wb3J0YW50O1xufVxuXG4uZGljZS1ib3R0b20ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpICFpbXBvcnRhbnQ7XG59XG5cbi5idG5Gcm9udDpjaGVja2VkIH4gLnZpZXcgPiAuZGljZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpICFpbXBvcnRhbnQ7XG59XG5cbi5idG5SaWdodDpjaGVja2VkIH4gLnZpZXcgPiAuZGljZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpICFpbXBvcnRhbnQ7XG59XG5cbi5idG5CYWNrOmNoZWNrZWQgfiAudmlldyA+IC5kaWNlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgIWltcG9ydGFudDtcbn1cblxuLmJ0bkxlZnQ6Y2hlY2tlZCB+IC52aWV3ID4gLmRpY2Uge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpICFpbXBvcnRhbnQ7XG59XG5cbi5idG5Ub3A6Y2hlY2tlZCB+IC52aWV3ID4gLmRpY2Uge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSAhaW1wb3J0YW50O1xufVxuXG4uYnRuQm90dG9tOmNoZWNrZWQgfiAudmlldyA+IC5kaWNlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSAhaW1wb3J0YW50O1xufVxuXG4uZGljZUZhY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZnJvbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooMjVweCk7XG59XG5cbi5yaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjYpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMjVweCk7XG59XG5cbi5iYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMC42KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlWigyNXB4KTtcbn1cblxuLmxlZnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMjU1LCAwLjYpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDI1cHgpO1xufVxuXG4udG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDI1NSwgMC42KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDI1cHgpO1xufVxuXG4uYm90dG9tIHtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDI1NSwwLjYpOyovXG4gIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooMjVweCk7XG59XG5cbnNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBtYXJnaW46IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhYTtcbiAgYm9yZGVyOiAycHggaW5zZXQgI2RkMDtcbn1cblxuLnRlc3Q6Y2hlY2tlZCArIC50ZXN0MiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhYTtcbn1cblxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDIsIDIpO1xuICBtYXJnaW46IDEwcHg7XG4gIGNvbG9yOiByZWQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/dice/dice.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/dice/dice.component.ts ***!
    \***************************************************/

  /*! exports provided: DiceComponent */

  /***/
  function srcAppComponentsDiceDiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiceComponent", function () {
      return DiceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var dice_guardians_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! dice-guardians-module */
    "./dice-guardians-module/dist/index.js");
    /* harmony import */


    var dice_guardians_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dice_guardians_module__WEBPACK_IMPORTED_MODULE_2__);

    var DiceComponent = /*#__PURE__*/function () {
      function DiceComponent() {
        _classCallCheck(this, DiceComponent);

        this.ranks = dice_guardians_module__WEBPACK_IMPORTED_MODULE_2__["Dice"].ranks;
        this.colors = dice_guardians_module__WEBPACK_IMPORTED_MODULE_2__["Dice"].colors;
      }

      _createClass(DiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dice.setCtx(this);
        }
      }]);

      return DiceComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DiceComponent.prototype, "dice", void 0);
    DiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dice',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dice.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dice/dice.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dice.component.scss */
      "./src/app/components/dice/dice.component.scss"))["default"]]
    })], DiceComponent);
    /***/
  },

  /***/
  "./src/app/components/energy-pool/energy-pool.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/energy-pool/energy-pool.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEnergyPoolEnergyPoolComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".energy-pool {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  justify-content: space-evenly;\n  align-items: center;\n  position: relative;\n  margin: 5px 0px;\n}\n\n.energy-item {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  background-color: #90a4ae;\n  border: 1px solid #eceff1;\n  margin: 5px 0px;\n  width: 20%;\n  flex-direction: column;\n}\n\n.energy-type {\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  border: 3px solid #eceff1;\n  margin: 5px 0px;\n  color: #eceff1;\n  overflow: hidden;\n}\n\n.energy-type img, .energy-type ion-img {\n  border-radius: 5px;\n}\n\n.energy-value {\n  font-size: 2em;\n}\n\n.energy-name {\n  position: absolute;\n  height: 30px;\n  top: -40px;\n  background-color: #263238;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px 10px;\n  border-radius: 30px;\n  border: 1px solid #eceff1;\n}\n\n.energy-name.visible {\n  display: flex;\n}\n\n.energy-name.hidden {\n  display: none;\n}\n\n.energy-name::after {\n  position: absolute;\n  width: 0;\n  height: 0;\n  content: \"\";\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-top: 10px solid #eceff1;\n  bottom: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Qcm9qZWN0cy9kaWNlLWd1YXJkaWFucy9hcHAvc3JjL2FwcC9jb21wb25lbnRzL2VuZXJneS1wb29sL2VuZXJneS1wb29sLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2VuZXJneS1wb29sL2VuZXJneS1wb29sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURJQTtFQUNFLGNBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDREY7O0FES0E7RUFDRSxhQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0FDRkY7O0FETUM7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNISCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW5lcmd5LXBvb2wvZW5lcmd5LXBvb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW5lcmd5LXBvb2x7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtd3JhcDp3cmFwO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIG1hcmdpbjo1cHggMHB4O1xyXG59XHJcblxyXG4uZW5lcmd5LWl0ZW17XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiM5MGE0YWU7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCAjZWNlZmYxIDtcclxuICBtYXJnaW46NXB4IDBweDtcclxuICB3aWR0aDoyMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG59XHJcblxyXG5cclxuLmVuZXJneS10eXBle1xyXG4gIHdpZHRoOjUwcHg7XHJcbiAgaGVpZ2h0OjUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gIGJvcmRlcjozcHggc29saWQgI2VjZWZmMTtcclxuICBtYXJnaW46NXB4IDBweDtcclxuICBjb2xvcjojZWNlZmYxIDtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuXHJcbi5lbmVyZ3ktdHlwZSBpbWcsIC5lbmVyZ3ktdHlwZSBpb24taW1ne1xyXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xyXG5cclxufVxyXG5cclxuLmVuZXJneS12YWx1ZXtcclxuICBmb250LXNpemU6MmVtO1xyXG59XHJcblxyXG4uZW5lcmd5LW5hbWV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICB0b3A6IC00MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjMyMzg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZWZmMSA7XHJcbiB9XHJcblxyXG5cclxuLmVuZXJneS1uYW1lLnZpc2libGV7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG59XHJcblxyXG4uZW5lcmd5LW5hbWUuaGlkZGVue1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuXHJcbiAuZW5lcmd5LW5hbWU6OmFmdGVye1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIHdpZHRoOiAwO1xyXG4gICBoZWlnaHQ6IDA7XHJcbiAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI2VjZWZmMSA7XHJcbiAgIGJvdHRvbTogLTEwcHg7XHJcbiB9XHJcbiIsIi5lbmVyZ3ktcG9vbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLmVuZXJneS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MGE0YWU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlY2VmZjE7XG4gIG1hcmdpbjogNXB4IDBweDtcbiAgd2lkdGg6IDIwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmVuZXJneS10eXBlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiAzcHggc29saWQgI2VjZWZmMTtcbiAgbWFyZ2luOiA1cHggMHB4O1xuICBjb2xvcjogI2VjZWZmMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmVuZXJneS10eXBlIGltZywgLmVuZXJneS10eXBlIGlvbi1pbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5lbmVyZ3ktdmFsdWUge1xuICBmb250LXNpemU6IDJlbTtcbn1cblxuLmVuZXJneS1uYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHRvcDogLTQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjMyMzg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZWZmMTtcbn1cblxuLmVuZXJneS1uYW1lLnZpc2libGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZW5lcmd5LW5hbWUuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmVuZXJneS1uYW1lOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjZWNlZmYxO1xuICBib3R0b206IC0xMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/energy-pool/energy-pool.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/energy-pool/energy-pool.component.ts ***!
    \*****************************************************************/

  /*! exports provided: EnergyPoolComponent */

  /***/
  function srcAppComponentsEnergyPoolEnergyPoolComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnergyPoolComponent", function () {
      return EnergyPoolComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EnergyPoolComponent = /*#__PURE__*/function () {
      function EnergyPoolComponent() {
        _classCallCheck(this, EnergyPoolComponent);

        this.tooltipClasses = {};
        this.visible = [];
      }

      _createClass(EnergyPoolComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var self = this;
          this.player.energyPool.events.on('mint', function () {
            self.getVisibleEnergies(self);
          });
          this.player.energyPool.events.on('burn', function () {
            self.getVisibleEnergies(self);
          });
          this.player.energyPool.events.on('reset', function () {
            self.getVisibleEnergies(self);
          });
          self.getVisibleEnergies(self);
        }
      }, {
        key: "sleep",
        value: function sleep() {
          var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    return _context2.abrupt("return", new Promise(function (resolve, reject) {
                      try {
                        setTimeout(function () {
                          resolve();
                        });
                      } catch (e) {
                        reject(e);
                      }
                    }));

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }, {
        key: "getVisibleEnergies",
        value: function getVisibleEnergies(ctx) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var visible, iterator, i, type, value;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.sleep();

                  case 2:
                    console.log(this.player.energyPool);
                    visible = [];
                    iterator = ctx.player.energyPool.types.values();

                    for (i = 0; i < ctx.player.energyPool.types.size; i++) {
                      type = iterator.next().value;

                      if (!ctx.tooltipClasses[type]) {
                        ctx.tooltipClasses[type] = 'hidden';
                      }

                      value = ctx.player.energyPool.get(type);

                      if (value > 0) {
                        visible.push({
                          type: type,
                          value: value
                        });
                      }
                    }

                    console.log(visible);
                    ctx.visible = visible;

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "toggleTooltip",
        value: function toggleTooltip(energy) {
          console.log('pre', this.tooltipClasses);

          if (this.tooltipClasses[energy] === 'visible') {
            this.tooltipClasses[energy] = 'hidden';
          } else {
            var keys = Object.keys(this.tooltipClasses);

            for (var i = 0; i < keys.length; i++) {
              this.tooltipClasses[keys[i]] = 'hidden';
            }

            this.tooltipClasses[energy] = 'visible';
          }

          console.log('post', this.tooltipClasses);
        }
      }, {
        key: "getToolTipClass",
        value: function getToolTipClass(energy) {
          return this.tooltipClasses[energy];
        }
      }]);

      return EnergyPoolComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EnergyPoolComponent.prototype, "player", void 0);
    EnergyPoolComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-energy-pool',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./energy-pool.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/energy-pool/energy-pool.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./energy-pool.component.scss */
      "./src/app/components/energy-pool/energy-pool.component.scss"))["default"]]
    })], EnergyPoolComponent);
    /***/
  },

  /***/
  "./src/app/components/game-monitor/game-monitor.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/game-monitor/game-monitor.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsGameMonitorGameMonitorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".score {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-chip {\n  width: 45%;\n}\n\nion-label {\n  width: 100%;\n  text-align: center;\n}\n\n.monitor {\n  display: flex;\n  flex-direction: column;\n  border-top: 1px solid white;\n  border-bottom: 1px solid white;\n  margin: 20px 0px;\n  padding: 10px;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Qcm9qZWN0cy9kaWNlLWd1YXJkaWFucy9hcHAvc3JjL2FwcC9jb21wb25lbnRzL2dhbWUtbW9uaXRvci9nYW1lLW1vbml0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1tb25pdG9yL2dhbWUtbW9uaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtbW9uaXRvci9nYW1lLW1vbml0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NvcmV7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyXHJcbn1cclxuXHJcbmlvbi1jaGlwe1xyXG4gIHdpZHRoOjQ1JTtcclxufVxyXG5cclxuaW9uLWxhYmVse1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5tb25pdG9ye1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgYm9yZGVyLXRvcDoxcHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgd2hpdGU7XHJcbiAgbWFyZ2luOjIwcHggMHB4O1xyXG4gIHBhZGRpbmc6MTBweDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbiIsIi5zY29yZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW9uLWNoaXAge1xuICB3aWR0aDogNDUlO1xufVxuXG5pb24tbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW9uaXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICBtYXJnaW46IDIwcHggMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/game-monitor/game-monitor.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/game-monitor/game-monitor.component.ts ***!
    \*******************************************************************/

  /*! exports provided: GameMonitorComponent */

  /***/
  function srcAppComponentsGameMonitorGameMonitorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameMonitorComponent", function () {
      return GameMonitorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GameMonitorComponent = /*#__PURE__*/function () {
      function GameMonitorComponent() {
        _classCallCheck(this, GameMonitorComponent);

        this.monitorTitle = '';
        this.monitorText = '';
      }

      _createClass(GameMonitorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.monitorTitle = this.board.monitorTitle;
          this.monitorText = this.board.monitorText;
        }
      }]);

      return GameMonitorComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GameMonitorComponent.prototype, "board", void 0);
    GameMonitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-game-monitor',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./game-monitor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-monitor/game-monitor.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./game-monitor.component.scss */
      "./src/app/components/game-monitor/game-monitor.component.scss"))["default"]]
    })], GameMonitorComponent);
    /***/
  },

  /***/
  "./src/app/components/profile/profile.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/profile/profile.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".score {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-chip {\n  width: 45%;\n}\n\nion-label {\n  width: 100%;\n  text-align: center;\n}\n\n.profile-image {\n  width: 120px;\n  height: 120px;\n  border-radius: 100%;\n  overflow: hidden;\n  background-color: white;\n  border: 5px solid white;\n  margin-bottom: 10px;\n}\n\n.profile-img-src {\n  background-size: 480px 240px;\n  width: 100%;\n  height: 100%;\n}\n\n.profile-img-src.neutral {\n  background-position: 0px 0px;\n}\n\n.profile-img-src.smile {\n  background-position: 120px 0px;\n}\n\n.profile-img-src.confident {\n  background-position: 240px 0px;\n}\n\n.profile-img-src.happy {\n  background-position: 360px 0px;\n}\n\n.profile-img-src.question {\n  background-position: 0px 120px;\n}\n\n.profile-img-src.pissed {\n  background-position: 120px 120px;\n}\n\n.profile-img-src.sad {\n  background-position: 240px 120px;\n}\n\n.profile-img-src.defeated {\n  background-position: 360px 120px;\n}\n\n.profile-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  width: 280px;\n}\n\n.instructions-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  margin-top: 20px;\n}\n\n.spoken-words {\n  background-color: #eceff1;\n  color: black;\n  padding: 10px 20px;\n  border-radius: 5px;\n  border: 1px solid black;\n  box-shadow: 0px 0px 10px black;\n  margin: 10px 0px;\n  transition: 300ms;\n}\n\n.spoken-words:hover {\n  background-color: white;\n}\n\n.profile-color-blue .profile-image {\n  transform: scaleX(-1);\n  border: 3px solid #3880ff;\n}\n\n.profile-color-blue .player-dice-pool {\n  display: none;\n}\n\n.profile-color-red .profile-image {\n  border: 3px solid #eb445a;\n}\n\napp-energy-pool {\n  width: 100%;\n}\n\napp-dice-pool {\n  width: 100%;\n}\n\n.user-chips {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin: 5px;\n  width: 100%;\n}\n\napp-chip {\n  width: 40%;\n}\n\n.tutorial-overlay {\n  display: none;\n  background-color: rgba(0, 0, 0, 0.6);\n  height: 100vh;\n  width: calc(100vw - 800px);\n  position: fixed;\n  top: 0;\n  left: 400px;\n}\n\n.page {\n  font-size: 0.8em;\n  width: 100%;\n  text-align: center;\n  margin: 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Qcm9qZWN0cy9kaWNlLWd1YXJkaWFucy9hcHAvc3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFBeUIsNEJBQUE7QUNFekI7O0FEREE7RUFBdUIsOEJBQUE7QUNLdkI7O0FESkE7RUFBMkIsOEJBQUE7QUNRM0I7O0FEUEE7RUFBdUIsOEJBQUE7QUNXdkI7O0FEVkE7RUFBMEIsOEJBQUE7QUNjMUI7O0FEYkE7RUFBd0IsZ0NBQUE7QUNpQnhCOztBRGhCQTtFQUFxQixnQ0FBQTtBQ29CckI7O0FEbkJBO0VBQTBCLGdDQUFBO0FDdUIxQjs7QURwQkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUN1QkY7O0FEcEJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDdUJGOztBRHBCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ3VCRjs7QURuQkE7RUFDRSx1QkFBQTtBQ3NCRjs7QURkRTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUNpQko7O0FEZEU7RUFBa0IsYUFBQTtBQ2lCcEI7O0FEWEU7RUFDRSx5QkFBQTtBQ2NKOztBRFRBO0VBQ0UsV0FBQTtBQ1lGOztBRFJBO0VBQ0UsV0FBQTtBQ1dGOztBRFJBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1dGOztBRFJBO0VBQVMsVUFBQTtBQ1lUOztBRFRBO0VBQ0UsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDWUY7O0FEUkE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDV0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY29yZXtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczpjZW50ZXJcclxufVxyXG5cclxuaW9uLWNoaXB7XHJcbiAgd2lkdGg6NDUlO1xyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgd2lkdGg6MTAwJTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1hZ2V7XHJcbiAgd2lkdGg6MTIwcHg7XHJcbiAgaGVpZ2h0OjEyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6MTAwJTtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICBib3JkZXI6NXB4IHNvbGlkIHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206MTBweDtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1nLXNyY3tcclxuICBiYWNrZ3JvdW5kLXNpemU6NDgwcHggMjQwcHg7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1nLXNyYy5uZXV0cmFse2JhY2tncm91bmQtcG9zaXRpb246MHB4IDBweDt9XHJcbi5wcm9maWxlLWltZy1zcmMuc21pbGV7YmFja2dyb3VuZC1wb3NpdGlvbjoxMjBweCAwcHg7fVxyXG4ucHJvZmlsZS1pbWctc3JjLmNvbmZpZGVudHtiYWNrZ3JvdW5kLXBvc2l0aW9uOjI0MHB4IDBweDt9XHJcbi5wcm9maWxlLWltZy1zcmMuaGFwcHl7YmFja2dyb3VuZC1wb3NpdGlvbjozNjBweCAwcHg7fVxyXG4ucHJvZmlsZS1pbWctc3JjLnF1ZXN0aW9ue2JhY2tncm91bmQtcG9zaXRpb246MHB4IDEyMHB4O31cclxuLnByb2ZpbGUtaW1nLXNyYy5waXNzZWR7YmFja2dyb3VuZC1wb3NpdGlvbjoxMjBweCAxMjBweDt9XHJcbi5wcm9maWxlLWltZy1zcmMuc2Fke2JhY2tncm91bmQtcG9zaXRpb246MjQwcHggMTIwcHg7fVxyXG4ucHJvZmlsZS1pbWctc3JjLmRlZmVhdGVke2JhY2tncm91bmQtcG9zaXRpb246MzYwcHggMTIwcHg7fVxyXG5cclxuXHJcbi5wcm9maWxlLWNvbnRhaW5lcntcclxuICB3aWR0aDoxMDAlO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICB3aWR0aDoyODBweDtcclxufVxyXG5cclxuLmluc3RydWN0aW9ucy1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6MjBweDtcclxufVxyXG5cclxuLnNwb2tlbi13b3Jkc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNlY2VmZjEgO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIHBhZGRpbmc6MTBweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XHJcbiAgYm94LXNoYWRvdzowcHggMHB4IDEwcHggYmxhY2s7XHJcbiAgbWFyZ2luOjEwcHggMHB4O1xyXG4gIHRyYW5zaXRpb246MzAwbXM7XHJcbn1cclxuXHJcblxyXG4uc3Bva2VuLXdvcmRzOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5wcm9maWxlLWNvbG9yLWJsdWUge1xyXG5cclxuICAucHJvZmlsZS1pbWFnZXtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcclxuICAgIGJvcmRlcjozcHggc29saWQgIzM4ODBmZjtcclxuICB9XHJcblxyXG4gIC5wbGF5ZXItZGljZS1wb29se2Rpc3BsYXk6bm9uZTt9XHJcbn1cclxuXHJcblxyXG4ucHJvZmlsZS1jb2xvci1yZWQge1xyXG5cclxuICAucHJvZmlsZS1pbWFnZXtcclxuICAgIGJvcmRlcjozcHggc29saWQgI2ViNDQ1YTtcclxuICB9XHJcblxyXG59XHJcblxyXG5hcHAtZW5lcmd5LXBvb2wge1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcblxyXG5hcHAtZGljZS1wb29se1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi51c2VyLWNoaXBze1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgbWFyZ2luOjVweDtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG5hcHAtY2hpcHt3aWR0aDo0MCU7fVxyXG5cclxuXHJcbi50dXRvcmlhbC1vdmVybGF5e1xyXG4gIGRpc3BsYXk6bm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gODAwcHgpO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDo0MDBweDtcclxufVxyXG5cclxuXHJcbi5wYWdle1xyXG4gIGZvbnQtc2l6ZTowLjhlbTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIG1hcmdpbjoxMHB4IDBweDtcclxufVxyXG4iLCIuc2NvcmUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1jaGlwIHtcbiAgd2lkdGg6IDQ1JTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2ZpbGUtaW1hZ2Uge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnByb2ZpbGUtaW1nLXNyYyB7XG4gIGJhY2tncm91bmQtc2l6ZTogNDgwcHggMjQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcm9maWxlLWltZy1zcmMubmV1dHJhbCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHg7XG59XG5cbi5wcm9maWxlLWltZy1zcmMuc21pbGUge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMjBweCAwcHg7XG59XG5cbi5wcm9maWxlLWltZy1zcmMuY29uZmlkZW50IHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjQwcHggMHB4O1xufVxuXG4ucHJvZmlsZS1pbWctc3JjLmhhcHB5IHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzYwcHggMHB4O1xufVxuXG4ucHJvZmlsZS1pbWctc3JjLnF1ZXN0aW9uIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDEyMHB4O1xufVxuXG4ucHJvZmlsZS1pbWctc3JjLnBpc3NlZCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEyMHB4IDEyMHB4O1xufVxuXG4ucHJvZmlsZS1pbWctc3JjLnNhZCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDI0MHB4IDEyMHB4O1xufVxuXG4ucHJvZmlsZS1pbWctc3JjLmRlZmVhdGVkIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzYwcHggMTIwcHg7XG59XG5cbi5wcm9maWxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAyODBweDtcbn1cblxuLmluc3RydWN0aW9ucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc3Bva2VuLXdvcmRzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCBibGFjaztcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgdHJhbnNpdGlvbjogMzAwbXM7XG59XG5cbi5zcG9rZW4td29yZHM6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2ZpbGUtY29sb3ItYmx1ZSAucHJvZmlsZS1pbWFnZSB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgYm9yZGVyOiAzcHggc29saWQgIzM4ODBmZjtcbn1cbi5wcm9maWxlLWNvbG9yLWJsdWUgLnBsYXllci1kaWNlLXBvb2wge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucHJvZmlsZS1jb2xvci1yZWQgLnByb2ZpbGUtaW1hZ2Uge1xuICBib3JkZXI6IDNweCBzb2xpZCAjZWI0NDVhO1xufVxuXG5hcHAtZW5lcmd5LXBvb2wge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYXBwLWRpY2UtcG9vbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udXNlci1jaGlwcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmFwcC1jaGlwIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLnR1dG9yaWFsLW92ZXJsYXkge1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gODAwcHgpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogNDAwcHg7XG59XG5cbi5wYWdlIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/profile/profile.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/profile/profile.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);

        this.instructions = [];
      }

      _createClass(ProfileComponent, [{
        key: "sleep",
        value: function sleep() {
          var ts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    return _context4.abrupt("return", new Promise(function (resolve, reject) {
                      setTimeout(function () {
                        resolve();
                      }, ts);
                    }));

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this = this;

            var self;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    self = this;
                    console.log('profile!', this.player);

                    if (this.player.color === 'blue') {
                      this.board.events.on('tutorial', function (payload) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  self.player.toast(payload.text);

                                case 1:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5);
                        }));
                      });
                      /*await this.sleep(3000)
                      this.instructions.push('For now you can see how the Board and basic UX will look like')
                      await this.sleep(3000)
                      this.instructions.push('Feel free to explore your deck in the bottom of the screen. You can also pick and roll your dice in the bottom red corner')
                      /*
                      await this.sleep()
                      this.instructions.push('Hello and welcome to Dice Guardians! I\'ll guide you on your first game')
                      await this.sleep()
                      this.instructions.push('You will be playing a deck with Water, Wood and Dark creatures')
                      await this.sleep()
                      this.instructions.push('Mine contains creatures of Fire, Metal, Light')
                      */
                    }

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "fadeOut",
        value: function fadeOut(idx) {
          idx = this.instructions.length - idx - 1;
          this.instructions.splice(idx, 1);
        }
      }]);

      return ProfileComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProfileComponent.prototype, "player", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProfileComponent.prototype, "board", void 0);
    ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/components/profile/profile.component.scss"))["default"]]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/components/splash/splash.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/splash/splash.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSplashSplashComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".overall {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: black;\n  color: #eceff1;\n  z-index: 99999999;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-direction: column;\n  transition: 500ms;\n}\n\n.container {\n  background-color: rgba(38, 50, 56, 0.95);\n  border: 1px solid #78909c;\n  border-bottom: 1px solid #607d8b;\n  z-index: 1;\n  width: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n}\n\n.container p {\n  font-size: 1.2em;\n  text-align: center;\n  color: #eceff1;\n  margin: 20px 0px;\n}\n\n.container .spinner {\n  width: 100px;\n  background-color: #eceff1;\n  border-radius: 100%;\n}\n\n.background {\n  position: fixed;\n  top: 0;\n  height: 100vh;\n  width: 100vh;\n}\n\napp-button {\n  margin-bottom: 10px;\n}\n\n.logo {\n  position: absolute;\n  width: 350px;\n  top: calc(50% - 100px);\n  -webkit-filter: drop-shadow(0px 0px 7px #eceff1);\n          filter: drop-shadow(0px 0px 7px #eceff1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Qcm9qZWN0cy9kaWNlLWd1YXJkaWFucy9hcHAvc3JjL2FwcC9jb21wb25lbnRzL3NwbGFzaC9zcGxhc2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc3BsYXNoL3NwbGFzaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHdDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURBRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FER0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDRixZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnREFBQTtVQUFBLHdDQUFBO0FDQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NwbGFzaC9zcGxhc2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmFsbHtcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgd2lkdGg6MTAwdnc7XHJcbiAgaGVpZ2h0OjEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6YmxhY2sgO1xyXG4gIGNvbG9yOiNlY2VmZjEgO1xyXG4gIHotaW5kZXg6OTk5OTk5OTk7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICB0cmFuc2l0aW9uOjUwMG1zO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgzOCwgNTAsIDU2LCAwLjk1KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNzg5MDljO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjA3ZDhiO1xyXG4gIHotaW5kZXg6MTtcclxuICB3aWR0aDozMDBweDtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206MTBweDtcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZToxLjJlbTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgY29sb3I6I2VjZWZmMSA7XHJcbiAgICBtYXJnaW46MjBweCAwcHg7XHJcbiAgfVxyXG5cclxuICAuc3Bpbm5lcntcclxuICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWNlZmYxIDtcclxuICAgIGJvcmRlci1yYWRpdXM6MTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5ke1xyXG4gIHBvc2l0aW9uOmZpeGVkO1xyXG4gIHRvcDowO1xyXG4gIGhlaWdodDoxMDB2aDtcclxuICB3aWR0aDoxMDB2aDtcclxufVxyXG5cclxuYXBwLWJ1dHRvbntcclxuICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbn1cclxuXHJcbi5sb2dve1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxud2lkdGg6IDM1MHB4O1xyXG50b3A6Y2FsYyg1MCUgLSAxMDBweCk7XHJcbmZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCA3cHggI2VjZWZmMSk7XHJcbn1cclxuIiwiLm92ZXJhbGwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6ICNlY2VmZjE7XG4gIHotaW5kZXg6IDk5OTk5OTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0cmFuc2l0aW9uOiA1MDBtcztcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzgsIDUwLCA1NiwgMC45NSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODkwOWM7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjA3ZDhiO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNlY2VmZjE7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG4uY29udGFpbmVyIC5zcGlubmVyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZmYxO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdmg7XG59XG5cbmFwcC1idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDM1MHB4O1xuICB0b3A6IGNhbGMoNTAlIC0gMTAwcHgpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggN3B4ICNlY2VmZjEpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/splash/splash.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/splash/splash.component.ts ***!
    \*******************************************************/

  /*! exports provided: SplashComponent */

  /***/
  function srcAppComponentsSplashSplashComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplashComponent", function () {
      return SplashComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var dice_guardians_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dice-guardians-module */
    "./dice-guardians-module/dist/index.js");
    /* harmony import */


    var dice_guardians_module__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dice_guardians_module__WEBPACK_IMPORTED_MODULE_3__);

    var SplashComponent = /*#__PURE__*/function () {
      function SplashComponent(animationCtrl) {
        _classCallCheck(this, SplashComponent);

        this.text = 'Loading, please wait...';
        this.ready = false;
        this.config = {
          volume: {
            overall: 1,
            music: 0.6,
            effect: 0.8
          }
        };
        this.animationCtrl = animationCtrl;
      }

      _createClass(SplashComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var self = this;
          this.board.events.on('ready', function () {
            setTimeout(function () {
              self.text = 'Game ready';
              self.ready = true;
            }, 1000);
          });
          var config = localStorage.getItem('audio-config');

          if (!config) {
            config = this.config;
            localStorage.setItem('audio-config', JSON.stringify(config));
            return;
          } else {
            config = JSON.parse(config);
          }

          this.config = config;
        }
      }, {
        key: "hideSplash",
        value: function hideSplash() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var splash, animation, audio;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    //this.board.splashDisplay = 'none'
                    splash = document.querySelector('.overall');
                    console.log('splash', splash);
                    animation = this.animationCtrl.create().addElement(splash).duration(350).easing('ease-in').fromTo('transform', 'translateY(0px)', 'translateY(100vh)').fromTo('opacity', '1', '0');
                    _context7.next = 5;
                    return animation.play();

                  case 5:
                    console.log(animation);
                    splash.parentNode.removeChild(splash);
                    this.board.events.emit('splashHidden', {});
                    audio = new dice_guardians_module__WEBPACK_IMPORTED_MODULE_3__["DGAudio"]('assets/audio/music-zapsplat-beach-cruzin.mp3', 'music');
                    audio.play();

                  case 10:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "updateAudioSettings",
        value: function updateAudioSettings() {
          var dom = document.querySelector('ion-toggle[value="music"]');
          var music = dom.checked;
          dom = document.querySelector('ion-toggle[value="effect"]');
          var fx = dom.checked;
          var config = localStorage.getItem('audio-config');

          if (!config) {
            config = {
              volume: {
                overall: 1,
                music: 0.6,
                effect: 0.8
              }
            };
            localStorage.setItem('audio-config', JSON.stringify(config));
          } else {
            config = JSON.parse(config);
          }

          if (music) {
            config.volume.music = 0.6;
          } else {
            config.volume.music = 0;
          }

          if (fx) {
            config.volume.effect = 0.6;
          } else {
            config.volume.effect = 0;
          }

          this.config = config;
          localStorage.setItem('audio-config', JSON.stringify(config));
        }
      }]);

      return SplashComponent;
    }();

    SplashComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SplashComponent.prototype, "board", void 0);
    SplashComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-splash',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./splash.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/splash/splash.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./splash.component.scss */
      "./src/app/components/splash/splash.component.scss"))["default"]]
    })], SplashComponent);
    /***/
  }
}]);
//# sourceMappingURL=default~home-home-module~pages-battlefield-battlefield-module~pages-card-viewer-card-viewer-module-es5.js.map