function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./dice-guardians-module/dist/index.js":
  /*!*********************************************!*\
    !*** ./dice-guardians-module/dist/index.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function diceGuardiansModuleDistIndexJs(module, exports, __webpack_require__) {
    "use strict"; //export { TmuxController } from './controllers/tmux'
    //export { DiceTmux } from './controllers/dice-tmux'

    Object.defineProperty(exports, "__esModule", {
      value: true
    }); //export { CardModel } from './models/card-model'
    //export class TmuxController

    var user_1 = __webpack_require__(
    /*! ./lib/user */
    "./dice-guardians-module/dist/lib/user.js");

    Object.defineProperty(exports, "User", {
      enumerable: true,
      get: function get() {
        return user_1.User;
      }
    });

    var board_1 = __webpack_require__(
    /*! ./lib/board */
    "./dice-guardians-module/dist/lib/board.js");

    Object.defineProperty(exports, "Cell", {
      enumerable: true,
      get: function get() {
        return board_1.Cell;
      }
    });
    Object.defineProperty(exports, "Board", {
      enumerable: true,
      get: function get() {
        return board_1.Board;
      }
    });

    var map_1 = __webpack_require__(
    /*! ./lib/map */
    "./dice-guardians-module/dist/lib/map.js");

    Object.defineProperty(exports, "Map", {
      enumerable: true,
      get: function get() {
        return map_1.Map;
      }
    });

    var player_1 = __webpack_require__(
    /*! ./lib/player */
    "./dice-guardians-module/dist/lib/player.js");

    Object.defineProperty(exports, "Player", {
      enumerable: true,
      get: function get() {
        return player_1.Player;
      }
    });

    var dice_1 = __webpack_require__(
    /*! ./lib/dice */
    "./dice-guardians-module/dist/lib/dice.js");

    Object.defineProperty(exports, "Dice", {
      enumerable: true,
      get: function get() {
        return dice_1.Dice;
      }
    });

    var storage_1 = __webpack_require__(
    /*! ./lib/storage */
    "./dice-guardians-module/dist/lib/storage.js");

    Object.defineProperty(exports, "Storage", {
      enumerable: true,
      get: function get() {
        return storage_1.Storage;
      }
    });

    var demo_1 = __webpack_require__(
    /*! ./lib/demo */
    "./dice-guardians-module/dist/lib/demo.js");

    Object.defineProperty(exports, "DEFAULT_RED", {
      enumerable: true,
      get: function get() {
        return demo_1.DEFAULT_RED;
      }
    });
    Object.defineProperty(exports, "DEFAULT_BLUE", {
      enumerable: true,
      get: function get() {
        return demo_1.DEFAULT_BLUE;
      }
    });
    Object.defineProperty(exports, "cardCollection", {
      enumerable: true,
      get: function get() {
        return demo_1.cardCollection;
      }
    });

    var room_1 = __webpack_require__(
    /*! ./lib/room */
    "./dice-guardians-module/dist/lib/room.js");

    Object.defineProperty(exports, "Room", {
      enumerable: true,
      get: function get() {
        return room_1.Room;
      }
    });

    var room_collection_1 = __webpack_require__(
    /*! ./lib/room-collection */
    "./dice-guardians-module/dist/lib/room-collection.js");

    Object.defineProperty(exports, "Room0", {
      enumerable: true,
      get: function get() {
        return room_collection_1.Room0;
      }
    });
    Object.defineProperty(exports, "Room1", {
      enumerable: true,
      get: function get() {
        return room_collection_1.Room1;
      }
    });

    var assets_1 = __webpack_require__(
    /*! ./lib/assets */
    "./dice-guardians-module/dist/lib/assets.js");

    Object.defineProperty(exports, "ASSETS", {
      enumerable: true,
      get: function get() {
        return assets_1.ASSETS;
      }
    });

    var tutorial_1 = __webpack_require__(
    /*! ./lib/tutorial */
    "./dice-guardians-module/dist/lib/tutorial.js");

    Object.defineProperty(exports, "Tutorial", {
      enumerable: true,
      get: function get() {
        return tutorial_1.Tutorial;
      }
    });

    var audio_1 = __webpack_require__(
    /*! ./lib/audio */
    "./dice-guardians-module/dist/lib/audio.js");

    Object.defineProperty(exports, "DGAudio", {
      enumerable: true,
      get: function get() {
        return audio_1.DGAudio;
      }
    });
    /*
    export { Actor, Stanza } from './lib/index'
    export {
      NameService
    } from './outfits/index'*/

    /***/
  },

  /***/
  "./dice-guardians-module/dist/lib/assets.js":
  /*!**************************************************!*\
    !*** ./dice-guardians-module/dist/lib/assets.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function diceGuardiansModuleDistLibAssetsJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ASSETS = void 0;

    var AssetsManager = /*#__PURE__*/function () {
      function AssetsManager(config) {
        _classCallCheck(this, AssetsManager);

        this.config = config;
      }

      _createClass(AssetsManager, [{
        key: "get",
        value: function get(key) {
          /*if (!this.config[key]){
            throw new Error('No assets found for key `ASSETS.' + key + '`')
          }*/
          var keys = key.split('.');
          var current = null;

          for (var i = 0; i < keys.length; i++) {
            if (!current) {
              current = this.config[keys[i]];
            } else {
              if (!current[keys[i]]) {
                throw new Error('No assets found for key `ASSETS.' + key + '`');
              }

              current = current[keys[i]];
            }
          }

          if (!current) {
            throw new Error('No assets found for key `ASSETS.' + key + '`');
          }

          return current;
        }
      }]);

      return AssetsManager;
    }();

    var ASSETS = new AssetsManager({
      backgrounds: {},
      battlers: {},
      circles: {},
      dice: {},
      facesets: {},
      fonts: {},
      icons: {},
      mapmaking: {
        'ground': 'assets/mapmaking/ground-purple.png',
        'exit': 'assets/mapmaking/exit.png',
        'wall': 'assets/mapmaking/wall.png'
      },
      textures: {},
      spritesheets: {
        'mountain': 'assets/spritesheets/004-Mountain01.png',
        'floor-paths': 'assets/spritesheets/floor-paths.png'
      }
    });
    exports.ASSETS = ASSETS;
    /***/
  },

  /***/
  "./dice-guardians-module/dist/lib/audio.js":
  /*!*************************************************!*\
    !*** ./dice-guardians-module/dist/lib/audio.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function diceGuardiansModuleDistLibAudioJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DGAudio = void 0;

    var DGAudio = /*#__PURE__*/function () {
      function DGAudio(src) {
        var audioClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'effect';

        _classCallCheck(this, DGAudio);

        this.src = src;
        this["class"] = audioClass;
        var parts = src.split('.');
        var ext = parts[parts.length - 1];
        this.type = 'audio/' + ext;
        this.loadConfig();
      }

      _createClass(DGAudio, [{
        key: "play",
        value: function play() {
          try {
            var audio = document.createElement('audio');
            var audioId = 'audio-' + Date.now();
            audio.setAttribute('id', audioId);
            var source = document.createElement('source');
            source.setAttribute('src', this.src);
            source.setAttribute('type', this.type);
            audio.appendChild(source);
            var body = document.querySelector('body');
            body.appendChild(audio);

            var _audio = document.querySelector('#' + audioId);

            if (!audio) {
              return;
            }

            if (!audio['volume']) {
              return;
            }

            console.log('_audio', _audio);
            console.log('volume', this["class"], this.src, this.config.volume[this["class"]]);
            _audio.volume = this.config.volume.overall * this.config.volume[this["class"]];

            _audio.onended = function () {
              _audio.parentNode.removeChild(_audio);
            };

            _audio.play()["catch"](console.warn);
          } catch (e) {
            console.warn(e);
          }
        }
      }, {
        key: "loadConfig",
        value: function loadConfig() {
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

          this.config = config;
        }
      }]);

      return DGAudio;
    }();

    exports.DGAudio = DGAudio;
    /***/
  },

  /***/
  "./dice-guardians-module/dist/lib/board.js":
  /*!*************************************************!*\
    !*** ./dice-guardians-module/dist/lib/board.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function diceGuardiansModuleDistLibBoardJs(module, exports, __webpack_require__) {
    "use strict";

    var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Board = void 0;

    var card_1 = __webpack_require__(
    /*! ./card */
    "./dice-guardians-module/dist/lib/card.js");

    var events_1 = __webpack_require__(
    /*! ./events */
    "./dice-guardians-module/dist/lib/events.js");

    var tutorial_1 = __webpack_require__(
    /*! ./tutorial */
    "./dice-guardians-module/dist/lib/tutorial.js");

    var audio_1 = __webpack_require__(
    /*! ./audio */
    "./dice-guardians-module/dist/lib/audio.js");

    var cell_1 = __webpack_require__(
    /*! ./cell */
    "./dice-guardians-module/dist/lib/cell.js");

    Object.defineProperty(exports, "Cell", {
      enumerable: true,
      get: function get() {
        return cell_1.Cell;
      }
    });

    var Board = /*#__PURE__*/function () {
      function Board(ctx, rooms, //cols: number,
      //rows: number,
      players, isTutorial) {
        _classCallCheck(this, Board);

        this.classes = {
          PLAYER_TILE: 'player-tile',
          PLAYER_CHAMPION: 'player-champion',
          RIVAL_TILE: 'rival-tile',
          NEUTRAL_TILE: 'neutral-tile',
          RIVAL_CHAMPION: 'rival-champion',
          WALL: 'wall-tile',
          VICTORY: 'victory-tile',
          PLAYER_TOWER: 'player-tower-hp-3',
          RIVAL_TOWER: 'rival-tower-hp-3'
        };
        this.cardModalClasses = ['hidden'];
        this.cursorClass = '';
        this.roomNonce = 0;
        this.players = {};
        this.splashDisplay = 'flex';
        this.turnNonce = 0;
        this.pendingCard = new card_1.Card('', 'neutral', 0, 0, 0, ['neutral'], [], []);
        this.events = events_1.EVENTS;
        this.lastRoomNonce = -1;
        this.visitedRoomNonces = [];
        this.deckContainerClass = 'minimized';
        var self = this;
        this.ctx = ctx;

        if (isTutorial) {
          this.tutorial = new tutorial_1.Tutorial(players.red, players.blue);
        }

        this.events.on('freeCast', function (payload) {
          self.freeCast(payload.card, payload.cell);
        });

        for (var i = 0; i < rooms.length; i++) {
          rooms[i].setCtx(this.ctx);
          rooms[i].paintMap();
        }

        this.rooms = rooms;
        this.players.red = players.red;
        this.players.blue = players.blue;
        this.activeCard = this.players.red.deckCards[0]; //this.colors = ['red', 'blue']
        //this.players = {}

        /*
            for (let i = 0; i < this.colors.length; i++) {
              this.players[this.colors[i]] = opts.players[this.colors[i]]
            }*/

        this.listeners();
      }

      _createClass(Board, [{
        key: "cardModal",
        value: function cardModal(card) {
          this.activeCard = card;

          if (this.cardModalClasses.indexOf('hidden') >= 0) {
            this.cardModalClasses.splice(this.cardModalClasses.indexOf('hidden'), 1);
          } else {
            this.cardModalClasses.push('hidden');
          }
        }
      }, {
        key: "setCellsDoms",
        value: function setCellsDoms() {
          var _this = this;

          setTimeout(function () {
            var keys = Object.keys(_this.getActiveRoom().cells);

            for (var i = 0; i < keys.length; i++) {
              _this.getActiveRoom().cells[keys[i]].attachDom();
            }
          }, 500);
        }
      }, {
        key: "getCell",
        value: function getCell(x, y) {
          return this.getActiveRoom().getCell(x, y);
        }
      }, {
        key: "getAvailableBtlNearby",
        value: function getAvailableBtlNearby(x, y) {
          var _cells = [];
          var cells = [];
          var top = this.getCell(x, y - 1);
          var bottom = this.getCell(x, y + 1);
          var left = this.getCell(x - 1, y);
          var right = this.getCell(x + 1, y);

          if (top) {
            _cells.push(top);
          }

          if (bottom) {
            _cells.push(bottom);
          }

          if (left) {
            _cells.push(left);
          }

          if (right) {
            _cells.push(right);
          }

          for (var i = 0; i < _cells.length; i++) {
            if (_cells[i].hasClass('creature') //_cells[i].classes.indexOf('not-map') < 0
            //_cells[i].classes.indexOf('tile') >= 0

            /*
            && (
              _cells[i].classes.indexOf('wall-tile') < 0 ||
              _cells[i].classes.indexOf('available') >= 0
            )*/
            ) {
                cells.push(_cells[i]);
              }
          }

          return cells;
        }
      }, {
        key: "getAvailableMovNearby",
        value: function getAvailableMovNearby(x, y) {
          var _cells = [];
          var cells = [];
          var top = this.getCell(x, y - 1);
          var bottom = this.getCell(x, y + 1);
          var left = this.getCell(x - 1, y);
          var right = this.getCell(x + 1, y);

          if (top) {
            _cells.push(top);
          }

          if (bottom) {
            _cells.push(bottom);
          }

          if (left) {
            _cells.push(left);
          }

          if (right) {
            _cells.push(right);
          }

          for (var i = 0; i < _cells.length; i++) {
            if (_cells[i].hasClass('floor') && !_cells[i].hasClass('wall') && !_cells[i].hasClass('creature') //_cells[i].classes.indexOf('not-map') < 0
            //_cells[i].classes.indexOf('tile') >= 0

            /*
            && (
              _cells[i].classes.indexOf('wall-tile') < 0 ||
              _cells[i].classes.indexOf('available') >= 0
            )*/
            ) {
                cells.push(_cells[i]);
              }
          }

          return cells;
        }
      }, {
        key: "getAvailableUnfoldNearby",
        value: function getAvailableUnfoldNearby(cell) {
          var _cells = [];
          var cells = [];
          var top = this.getCell(cell.x, cell.y - 1);
          var bottom = this.getCell(cell.x, cell.y + 1);
          var left = this.getCell(cell.x - 1, cell.y);
          var right = this.getCell(cell.x + 1, cell.y);

          if (top) {
            _cells.push(top);
          }

          if (bottom) {
            _cells.push(bottom);
          }

          if (left) {
            _cells.push(left);
          }

          if (right) {
            _cells.push(right);
          }

          for (var i = 0; i < _cells.length; i++) {
            if (!_cells[i].hasClass('floor') && !_cells[i].hasClass('wall') && !_cells[i].hasClass('creature')
            /*
            _cells[i].classes.indexOf('tile') < 0 ||
            _cells[i].classes.indexOf('available') >= 0
            */
            ) {
                cells.push(_cells[i]);
              }
          }

          return cells;
        }
      }, {
        key: "getAvailableCstNearby",
        value: function getAvailableCstNearby(player, initialCells) {
          var _cells = [];
          var cells = [];

          for (var i = 0; i < initialCells.length; i++) {
            var cell = initialCells[i];
            var top = this.getCell(cell.x, cell.y - 1);
            var bottom = this.getCell(cell.x, cell.y + 1);
            var left = this.getCell(cell.x - 1, cell.y);
            var right = this.getCell(cell.x + 1, cell.y);

            if (top) {
              _cells.push(top);
            }

            if (bottom) {
              _cells.push(bottom);
            }

            if (left) {
              _cells.push(left);
            }

            if (right) {
              _cells.push(right);
            }
          }

          console.log('initialCells', initialCells);
          console.log('_cells', _cells);

          for (var _i = 0; _i < _cells.length; _i++) {
            if (!_cells[_i].hasClass('floor') && !_cells[_i].hasClass('wall') && !_cells[_i].hasClass('creature')
            /*
            _cells[i].classes.indexOf('tile') < 0 ||
            _cells[i].classes.indexOf('available') >= 0
            */
            ) {
                cells.push(_cells[_i]);
              }
          }

          console.log('cells', cells);
          return cells;
        }
      }, {
        key: "sleep",
        value: function sleep() {
          var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
          return new Promise(function (resolve, reject) {
            setTimeout(function () {
              resolve();
            }, ms);
          });
        }
      }, {
        key: "getCellsByClass",
        value: function getCellsByClass(_class) {
          var cells = [];
          var keys = Object.keys(this.getActiveRoom().cells);

          for (var i = 0; i < keys.length; i++) {
            var cell = this.getActiveRoom().cells[keys[i]];

            if (cell.hasClass(_class)) {
              cells.push(cell);
            }
          }

          return cells;
        }
      }, {
        key: "removeClassFromCells",
        value: function removeClassFromCells(_class) {
          var cells = [];
          var keys = Object.keys(this.getActiveRoom().cells);

          for (var i = 0; i < keys.length; i++) {
            var cell = this.getActiveRoom().cells[keys[i]];

            if (cell.hasClass(_class) >= 0) {
              cell.rmClass(_class);
              cell.dom.classList.remove(_class);
            }
          } //await this.sleep()
          //return cells

        }
      }, {
        key: "castBg",
        value: function castBg(player, card) {
          if (card.canBeCasted(player.energyPool)) {
            var possibleCells = this.getPossibleFirstCstCells(player);

            if (possibleCells.length > 0) {
              var possibles = this.getAvailableCstNearby(player, possibleCells);

              for (var i = 0; i < possibles.length; i++) {
                possibles[i].addClass('possible-cast-tile');
                possibles[i].canBeClicked = true;
              }

              this.deckContainerClass = 'minimized';
              player.isCastPending = true;
              this.pendingCard = card;
              this.events.emit('castBg', {
                player: player,
                card: card
              });
              var sound = new audio_1.DGAudio('assets/audio/castBg.wav');
              sound.play();
            } else {// notify?
            }
          }
        }
      }, {
        key: "getPossibleFirstCstCells",
        value: function getPossibleFirstCstCells(player) {
          console.log('cst', player);
          var playerTile = 'player-tile';

          if (this.isRival(player)) {
            playerTile = 'rival-tile';
          }

          var _cells = this.getCellsByClass(playerTile);

          var cells = [];
          console.log('cst', _cells);

          for (var i = 0; i < _cells.length; i++) {
            console.log('cst', _cells[i].classes);

            if (!_cells[i].hasClass('creature')) {
              cells.push(_cells[i]);
            }
          }

          console.log('cst', cells);
          return cells;
        }
        /*
          getAvailableNearbyPlayer(player:Player){
            let _class = ''
            if (player.name === this.players.red.name){
              // player
              _class = 'player-tile'
            } else {
              // rival
              _class = 'rival-tile'
        
            }
        
            const nearby = []
            const cells = this.getActiveRoom().getCells()
            const keys = Object.keys(cells)
        
            for (let i = 0; i < keys.length; i++) {
              const parts = keys[i].split(':')
              const x = Number(parts[0])
              const y = Number(parts[1])
        
              const cell = this.getCell(x, y)
        
              const classes = cell.classes
        
              if (classes.indexOf(_class) >= 0){
                const _nearby = this.getAvailableCstNearby(cell.x, cell.y)
        
                for (let j = 0; j < _nearby.length; j++){
                  _nearby[j].addClass('possible-cast-tile')
                  _nearby[j].canBeClicked = true
                  nearby.push(_nearby[j])
                }
              }
            }
        
        
        
        
          }*/

      }, {
        key: "isRival",
        value: function isRival(player) {
          if (player.name === this.players.red.name) {
            return false;
          }

          return true;
        }
      }, {
        key: "clearClass",
        value: function clearClass(_class) {
          this.getActiveRoom().clearClass(_class);
        }
      }, {
        key: "getOffset",
        value: function getOffset(card, cell) {
          if (!cell.dom) {
            cell.attachDom();
          }

          var el = cell.dom;

          if (!el) {
            return {
              x: 0,
              y: 0
            };
          }

          var x = 0;
          var y = 0;
          x = el.offsetLeft - el.scrollLeft;
          y = el.offsetTop - el.scrollTop;
          x = x - 18 + card.offset.x;
          y = y - 43 + card.offset.y;
          return {
            y: y,
            x: x
          };
        }
      }, {
        key: "teleport",
        value: function teleport(card, cell) {
          // like a free moveBg/moveFn
          var offset = this.getOffset(card, cell); //card.setOwner(isPlayer)

          card.x = offset.x;
          card.y = offset.y;
          card.cell = cell;
        }
      }, {
        key: "freeCast",
        value: function freeCast(card, cell) {
          //console.log('freeCast', card, cell)
          if (!this.players.blue) {
            return;
          }

          var idx = -1;

          for (var i = 0; i < this.players.blue.boardCards.length; i++) {
            if (this.players.blue.boardCards[i].id === card.id) {
              idx = i;
            }
          }

          if (idx >= 0) {
            this.players.blue.boardCards.splice(idx, 1);
          }

          var offset = this.getOffset(card, cell); //card.setOwner(isPlayer)

          card.x = offset.x;
          card.y = offset.y;
          card.cell = cell;
          this.players.blue.boardCards.push(card);
        }
      }, {
        key: "castFn",
        value: function castFn(player, cell) {
          var card = this.pendingCard;
          card.canBeClicked = false;
          cell.addClass('creature');
          card.cell = cell;
          var idx = -1;

          for (var i = 0; i < player.deckCards.length; i++) {
            if (player.deckCards[i].id === card.id) {
              idx = i;
            }
          }

          player.deckCards.splice(idx, 1);
          player.boardCards.push(card);
          var offset = this.getOffset(card, cell); //card.setOwner(isPlayer)

          card.x = offset.x;
          card.y = offset.y;
          card.boardStats.mov = card.mov;
          card.boardStats.btl = card.btl;
          card.boardStats.vit = card.vit;
          var cells = this.getActiveRoom().getCells();
          var keys = Object.keys(cells);

          for (var _i2 = 0; _i2 < keys.length; _i2++) {
            if (cells[keys[_i2]].hasClass('possible-cast-tile')) {
              cells[keys[_i2]].rmClass('possible-cast-tile');

              cells[keys[_i2]].canBeClicked = false;
            }
          }

          this.getActiveRoom().clearClass('possible-cast-tile'); //cell.addClass('player-tile')
          //cell.canBeClicked = false

          player.isCastPending = false;
          player.isUnfoldPending = true;
          player.unfoldCounter = 6;
          player.hasCasted = true; // player.increaseScore(card.cost * 100)

          for (var j = 0; j < player.deckCards.length; j++) {
            player.deckCards[j].canCast = false;
          }

          for (var _j = 0; _j < player.boardCards.length; _j++) {
            player.boardCards[_j].canCast = false;
          }

          this.events.emit('castFn', {
            player: player,
            card: card,
            cell: cell
          });
          this.unfold(player, cell);
        }
      }, {
        key: "clearClickAreas",
        value: function clearClickAreas() {
          this.getActiveRoom().clearClickAreas();
        }
      }, {
        key: "unfold",
        value: function unfold(player, cell) {
          if (!player.isUnfoldPending) {
            return;
          }

          if (player.unfoldCounter <= 0) {
            return;
          }

          this.clearClass('possible-unfold-tile');
          cell.addClass('floor');
          cell.rmClass('');
          /*
          let cursorClass = 'cursor-' + (player.unfoldCounter - 1)
          if (player.unfoldCounter > 8){
            cursorClass = 'cursor-plus-9'
          }
          this.cursorClass = cursorClass
          */

          player.unfoldCounter--;

          if (player.unfoldCounter === 0) {
            player.isUnfoldPending = false;
          }

          var tile = 'player-tile';

          if (this.isRival(player)) {
            tile = 'rival-tile';
          }

          this.clearClickAreas();
          cell.addClass(tile);
          var cells = this.getAvailableUnfoldNearby(cell);

          for (var i = 0; i < cells.length; i++) {
            if (player.isUnfoldPending) {
              cells[i].addClass('possible-unfold-tile');
              cells[i].canBeClicked = true;
            }
          }

          if (!player.isUnfoldPending) {
            this.clearClass('possible-unfold-tile');
            this.pendingCard.canBeClicked = true; //this.pendingCard.
            //this.pendingCard = null
          }

          this.events.emit('unfold', {
            counter: player.unfoldCounter,
            player: player,
            cell: cell
          });
        }
      }, {
        key: "getAllBoardCards",
        value: function getAllBoardCards() {
          var cards = [];
          var keys = Object.keys(this.players);

          for (var i = 0; i < keys.length; i++) {
            var boardCards = this.players[keys[i]].boardCards;

            for (var j = 0; j < boardCards.length; j++) {
              cards.push(boardCards[j]);
            }
          }

          return cards;
        }
      }, {
        key: "moveBg",
        value: function moveBg(player, card) {
          var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (card.hasMoved) {
            return;
          } // assign the number of pending move tiles just like with unfolding
          // reflect on cursor
          // highlight possible next tile
          // on click creature moves to the clicked tile.


          if (start) {
            player.isMovePending = true;
            player.moveCounter = card.mov;
            this.pendingCard = card;
            card.canBeClicked = false;
            this.events.emit('moveBg', {
              player: player,
              card: card,
              cell: card.cell
            }); // disable clicks for ya'll!

            var cards = this.getAllBoardCards();

            for (var i = 0; i < cards.length; i++) {
              cards[i].canBeClicked = false;
            } // player.edgePool.mov -= card.cost

          } else {
            card.cell.addClass('creature');
            this.events.emit('moveStep', {
              player: player,
              card: card,
              cell: card.cell
            });
          }

          if (!start && !player.isMovePending && player.moveCounter === 0) {
            card.hasMoved = true;
            card.canBeClicked = true;

            var _cards = this.getAllBoardCards();

            for (var _i3 = 0; _i3 < _cards.length; _i3++) {
              _cards[_i3].canBeClicked = true;
            }

            this.events.emit('moveFn', {
              player: player,
              card: card,
              cell: card.cell
            });
          }

          this.cursorClass = 'cursor-0';

          if (!player.isMovePending) {
            return;
          }

          if (player.moveCounter <= 0) {
            return;
          }

          this.clearClass('possible-move-tile');
          player.moveCounter--;
          this.clearClickAreas();
          var cells = this.getAvailableMovNearby(card.cell.x, card.cell.y);
          console.log('available for mov::', cells);

          for (var _i4 = 0; _i4 < cells.length; _i4++) {
            if (player.isMovePending) {
              cells[_i4].addClass('possible-move-tile');

              cells[_i4].canBeClicked = true;
            }
          }
        }
      }, {
        key: "moveFn",
        value: function moveFn(player, cell) {
          if (!player.isMovePending) {
            return;
          }

          if (player.moveCounter === 0) {
            player.isMovePending = false;
          }

          var card = this.pendingCard;
          var offset = this.getOffset(card, cell);
          card.cell.rmClass('creature');
          card.cell = cell;
          card.x = offset.x;
          card.y = offset.y;
          this.clearClass('possible-move-tile'); //this.events.emit('moveFn', {player, card, cell})

          this.moveBg(player, card); // check if the moved-to tile is a tower.
          // in case it is, check if own or enemy.
          // if own, the monster loses (delete) their MOV attribute
          // VIT gets +10
          // if opponent, monster's vitality is taken to 0.
          // opponent's tower is destroyed and it's path, on a cross, destroyed.
          // reflect somehow these changes on the overall counters.
          // score is good for cumulative but info on how many
          // towers are taken and by whom is important
          // also trigger the board's self-collector for conquered tower.
          // from left to right, they provide the monster's cost every turn
          // in MOV, BTL and HEX
        }
      }, {
        key: "battleBg",
        value: function battleBg(player, card) {
          // if (player.edgePool.btl < card.cost){return}
          console.log('battleBg', player, card);
          player.isBattlePending = true;
          card.canBeClicked = false;
          var cells = this.getAvailableBtlNearby(card.cell.x, card.cell.y);

          for (var i = 0; i < cells.length; i++) {
            if (player.isBattlePending) {
              cells[i].addClass('possible-battle-tile');
              cells[i].canBeClicked = true;
            }
          }

          var boardCards = this.getAllBoardCards();

          for (var _i5 = 0; _i5 < boardCards.length; _i5++) {
            var currentCard = boardCards[_i5];
            currentCard.canBeClicked = true;
          }

          this.pendingCard = card;
        }
      }, {
        key: "cancelMove",
        value: function cancelMove(player, card) {
          player.isMovePending = false;
          card.hasMoved = true;
          card.canBeClicked = true;
          this.clearClass('possible-move-tile');
          this.clearClickAreas();
          var cards = this.getAllBoardCards();

          for (var i = 0; i < cards.length; i++) {
            cards[i].canBeClicked = true;
          }
        }
      }, {
        key: "cancelBattle",
        value: function cancelBattle(player, card) {
          player.isBattlePending = false;
          card.hasBattled = true;
          card.canBeClicked = true;
          this.clearClass('possible-battle-tile');
          this.clearClickAreas();
        }
      }, {
        key: "battleFn",
        value: function battleFn(player, targetCard) {
          console.log('battleFn', player, targetCard);

          if (!player.isBattlePending) {
            return;
          }

          var sourceCard = this.pendingCard;
          sourceCard.canBeClicked = true;
          targetCard.boardStats.vit -= sourceCard.boardStats.btl;

          if (targetCard.boardStats.vit <= 0) {
            // died!
            var idx;

            for (var i = 0; i < this.players.blue.boardCards.length; i++) {
              if (this.players.blue.boardCards[i].id === targetCard.id) {
                idx = i;
              }
            }

            targetCard.cell.rmClass('creature');
            this.getActiveRoom().getCell(targetCard.cell.x, targetCard.cell.y).rmClass('creature');
            this.players.red.deckCards.push(targetCard);
            this.players.blue.boardCards.splice(idx, 1);
          }

          sourceCard.hasBattled = true;
          player.isBattlePending = false;
          this.clearClass('possible-battle-tile');
          this.clearClickAreas(); //player.edgePool.btl -= card.cost
          // need to grab the opponent monster, somehow
          // cell cannot contain card since that's circular
          // make fn to extract cells of all creatures in opponent's board
          // check cell coordinates with given creature's locations.
          // need to implement opponent cast for this!
          // fml. hammer(ed) time
        }
      }, {
        key: "hexBg",
        value: function hexBg() {}
      }, {
        key: "hexFn",
        value: function hexFn() {}
      }, {
        key: "endTurn",
        value: function endTurn(player) {
          var self = this;
          this.cursorClass = 'cursor-0';
          this.clearClass('possible-cast-tile');
          this.clearClass('possible-unfold-tile');
          this.clearClass('possible-move-tile');

          if (this.isRival(player)) {
            this.players.blue.endTurn();
            this.players.red.startTurn();
          } else {
            // user finishes turn, automate stuff
            this.players.red.endTurn();
            this.events.on('endCpuTurn', function (stc) {
              self.endTurn(self.players.blue);
              console.log('event dispatched for cpu turn end');
            });
            this.players.blue.startTurn();
          } // check if a closed area has been created. If that's the case, color it

        }
      }, {
        key: "getActiveRoom",
        value: function getActiveRoom() {
          if (this.roomNonce !== this.lastRoomNonce) {
            this.lastRoomNonce = this.roomNonce;
            this.activeRoom = this.rooms[this.roomNonce];
            this.activeRoom.paintMap();
          }

          return this.activeRoom;
        }
      }, {
        key: "listeners",
        value: function listeners() {
          var self = this;
          this.events.on('castBg', function (payload) {
            var card = payload.card;
            var player = payload.player;
            var costs = {};

            for (var i = 0; i < card.cost.length; i++) {
              var cost = card.cost[i];

              if (!costs[cost]) {
                costs[cost] = 0;
              }

              costs[cost] += 1;
            }

            var keys = Object.keys(costs);

            for (var _i6 = 0; _i6 < keys.length; _i6++) {
              var attr = keys[_i6];
              var _cost = costs[attr];
              player.energyPool.burn(attr, _cost);
            }
          });
          this.events.on('roomFinished', function () {
            self.nextRoom();
          });
        }
      }, {
        key: "nextRoom",
        value: function nextRoom() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var card, cell;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.visitedRoomNonces.indexOf(this.roomNonce) >= 0)) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return");

                  case 2:
                    this.splashDisplay = 'flex';
                    _context.next = 5;
                    return this.sleep(100);

                  case 5:
                    console.log('nextRoom', this.roomNonce, this.rooms);

                    if (this.roomNonce < this.rooms.length) {
                      this.roomNonce++;
                    } else {
                      this.roomNonce = 0;
                    }

                    this.visitedRoomNonces.push(this.roomNonce);
                    this.getActiveRoom();
                    _context.next = 11;
                    return this.sleep(100);

                  case 11:
                    //for (let i = 0; i < this.players.red.boardCards.length){
                    card = this.players.red.boardCards[0]; //i]

                    cell = this.getActiveRoom().getCell(this.getActiveRoom().initialTile.x, this.getActiveRoom().initialTile.y);
                    this.teleport(card, cell);
                    _context.next = 16;
                    return this.sleep(100);

                  case 16:
                    this.getActiveRoom().paintMap();
                    this.endTurn(this.players.red);
                    _context.next = 20;
                    return this.sleep(300);

                  case 20:
                    this.splashDisplay = 'hidden';

                  case 21:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "toggleDeckView",
        value: function toggleDeckView() {
          var sound = new audio_1.DGAudio('assets/audio/deck-view.mp3');
          sound.play();
          console.log('toggleDeckView');

          if (this.deckContainerClass === 'full') {
            this.deckContainerClass = 'minimized';
          } else {
            this.deckContainerClass = 'full';
          }
        }
      }]);

      return Board;
    }();

    exports.Board = Board;
    /***/
  },

  /***/
  "./dice-guardians-module/dist/lib/card.js":
  /*!************************************************!*\
    !*** ./dice-guardians-module/dist/lib/card.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function diceGuardiansModuleDistLibCardJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Card = exports.costToCircles = exports.attributesToBackgrounds = void 0;

    var board_1 = __webpack_require__(
    /*! ./board */
    "./dice-guardians-module/dist/lib/board.js");

    var player_1 = __webpack_require__(
    /*! ./player */
    "./dice-guardians-module/dist/lib/player.js");

    var uuid_1 = __webpack_require__(
    /*! uuid */
    "./dice-guardians-module/node_modules/uuid/dist/esm-browser/index.js");

    var js_sha3_1 = __webpack_require__(
    /*! js-sha3 */
    "./dice-guardians-module/node_modules/js-sha3/src/sha3.js");

    exports.attributesToBackgrounds = {
      light: 'assets/backgrounds/light.jpg',
      dark: 'assets/backgrounds/dark.jpg',
      aether: 'assets/backgrounds/aether.jpg',
      "void": 'assets/backgrounds/void.jpg',
      earth: 'assets/backgrounds/earth.jpg',
      air: 'assets/backgrounds/air.jpg',
      water: 'assets/backgrounds/water.jpg',
      fire: 'assets/backgrounds/fire.jpg',
      wood: 'assets/backgrounds/wood.jpg',
      metal: 'assets/backgrounds/metal.jpg',
      electric: 'assets/backgrounds/electric.jpg',
      ice: 'assets/backgroungs/ice.jpg'
    };
    exports.costToCircles = ['assets/circles/00.png', 'assets/circles/01.png', 'assets/circles/04.png', 'assets/circles/02.png', 'assets/circles/07.png', 'assets/circles/00.png', 'assets/circles/05.png'];

    var Card = /*#__PURE__*/function () {
      function Card(title, //backgroundUrl: string,
      //battlerUrl: string,
      //circleUrl: string,
      attribute, mov, btl, vit, cost, abilities, clans, offset) {
        _classCallCheck(this, Card);

        this.owner = player_1.EMPTY_PLAYER;
        this.offset = {
          x: 0,
          y: 0
        };
        this.boardStats = {
          btl: 0,
          mov: 0,
          vit: 0,
          rng: 1
        };
        this.canCast = false;
        this.canMove = false;
        this.canBattle = false;
        this.cell = new board_1.Cell({});
        this.activeAbility = {};
        this.showAbility = false;
        this.hasMoved = false;
        this.hasBattled = false;
        this.canBeClicked = true;
        this.showMenu = false;
        this.title = title;
        this.backgroundUrl = exports.attributesToBackgrounds[attribute];
        this.battlerUrl = this.getBattlerUrl(); //battlerUrl

        this.circleUrl = this.getCircleUrl();
        this.attribute = attribute;

        if (offset) {
          this.offset = offset;
        }

        this.btl = btl;
        this.cost = cost;
        this.mov = mov;
        this.vit = vit;
        this.boardStats.btl = btl;
        this.boardStats.mov = mov;
        this.boardStats.vit = vit;
        this.id = js_sha3_1.keccak256(uuid_1.v4());
        this.coordinates = [];
        this.x = 0;
        this.y = 0; // this.cell = new Cell(this.ctx)
        // this.owner = new Player(this.ctx)

        this.classes = ['_card'];
        this.abilities = [];

        for (var i = 0; i < abilities.length; i++) {
          var ability = abilities[i];
          ability['hidden'] = 'hidden';
          ability['id'] = this.id + '-' + ability['name'];
          this.abilities.push(ability);
        }

        this.clans = clans;
      }

      _createClass(Card, [{
        key: "getAttributeFromCost",
        value: function getAttributeFromCost(cost) {
          var parts = cost.split('-');
          return parts[0];
        }
      }, {
        key: "getValueFromCost",
        value: function getValueFromCost(cost) {
          var parts = cost.split('-');
          return Number(parts[1]);
        }
      }, {
        key: "getNumericTotalCost",
        value: function getNumericTotalCost(costs) {
          return costs.length;
        }
      }, {
        key: "getBattlerUrl",
        value: function getBattlerUrl() {
          var title = this.title;
          var lowercase = title.toLowerCase();
          var parts = lowercase.split(' ');
          var url = 'assets/battlers/';
          url += this.attribute;
          url += '/';
          url += parts.join('-');
          url += '.png';
          return url;
        }
      }, {
        key: "getCircleUrl",
        value: function getCircleUrl() {
          if (!this.cost) {
            return '';
          }

          var totalCost = this.getNumericTotalCost(this.cost);
          return exports.costToCircles[totalCost];
        }
      }, {
        key: "setOwner",
        value: function setOwner(player) {
          this.owner = player;
        }
      }, {
        key: "canBeCasted",
        value: function canBeCasted(energyPool) {
          var out = true;
          var costs = {};

          for (var i = 0; i < this.cost.length; i++) {
            var cost = this.cost[i];

            if (!costs[cost]) {
              costs[cost] = 0;
            }

            costs[cost] += 1;
          }

          var keys = Object.keys(costs);

          for (var _i7 = 0; _i7 < keys.length; _i7++) {
            var key = keys[_i7];
            out = out && Number(energyPool.get(key)) >= costs[key];
          }

          return out;
        }
      }, {
        key: "getVitPercent",
        value: function getVitPercent() {
          return Math.round(100 * this.boardStats.vit / this.vit);
        }
      }]);

      return Card;
    }();

    exports.Card = Card;
    /***/
  },

  /***/
  "./dice-guardians-module/dist/lib/cell.js":
  /*!************************************************!*\
    !*** ./dice-guardians-module/dist/lib/cell.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function diceGuardiansModuleDistLibCellJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Cell = void 0;

    var Cell = /*#__PURE__*/function () {
      function Cell(opts) {
        _classCallCheck(this, Cell);

        // number --> x
        // letter --> y
        this.canBeClicked = false;
        this.src = '';
        this.domReadyQueue = [];
        this.domReadyQueueProcessing = false;
        this.classes = [];
        this.ctx = opts.ctx;
        this.x = opts.x;
        this.y = opts.y;
        this.domPrefix = opts.domPrefix;
        this.attachDom();
      }

      _createClass(Cell, [{
        key: "addClass",
        value: function addClass(newClass) {
          if (!this.hasClass(newClass)) {
            this.classes.push(newClass);
          }
        }
      }, {
        key: "rmClass",
        value: function rmClass(newClass) {
          if (!this.hasClass(newClass)) return;
          this.classes.splice(this.classes.indexOf(newClass), 1);

          if (!this.dom) {
            this.attachDom();
          }

          if (this.dom && this.dom.classList.contains(newClass)) {
            this.dom.classList.remove(newClass);
          }
        }
      }, {
        key: "hasClass",
        value: function hasClass(newClass) {
          return this.classes.indexOf(newClass) >= 0;
        }
      }, {
        key: "canClick",
        value: function canClick(state) {
          this.canBeClicked = state;
        }
      }, {
        key: "attachDom",
        value: function attachDom() {
          this.dom = document.querySelector('.' + this.domPrefix + 'x-' + this.x + '-y-' + this.y);
          this.processDomReadyQueue();
        }
      }, {
        key: "click",
        value: function click(player) {
          if (!this.canBeClicked) {
            return;
          }

          this.ctx.board.unfold(player, this);
          this.ctx.board.moveFn(player, this); //this.ctx.board.battleFn(player, this)

          if (player.isCastPending && this.classes.indexOf('possible-cast-tile') >= 0) {
            this.ctx.board.castFn(player, this);
          }
        }
      }, {
        key: "setBackgroundImage",
        value: function setBackgroundImage(src) {
          this.src = src;
        }
      }, {
        key: "setCtx",
        value: function setCtx(ctx) {
          this.ctx = ctx;
          this.attachDom();
        }
      }, {
        key: "processDomReadyQueue",
        value: function processDomReadyQueue() {
          if (this.domReadyQueueProcessing) {
            return;
          }

          if (this.domReadyQueue.length === 0) {
            this.domReadyQueueProcessing = false;
            return;
          }

          this.domReadyQueueProcessing = true;
          var item = this.domReadyQueue[0];
          item.fn.apply(this, item.params);
          this.domReadyQueue.unshift();
          this.processDomReadyQueue();
        }
      }, {
        key: "queueAfterDom",
        value: function queueAfterDom(fn, params) {
          if (!this.dom) {
            return this.domReadyQueue.push({
              fn: fn,
              params: params
            });
          }

          this.processDomReadyQueue();
        }
      }, {
        key: "setSprite",
        value: function setSprite(sprite) {
          this.sprite = sprite; //sprite.setSelector()
        }
      }, {
        key: "equals",
        value: function equals(cell) {
          return this.x === cell.x && this.y === cell.y && this.domPrefix === cell.domPrefix;
        }
      }]);

      return Cell;
    }();

    exports.Cell = Cell;
    /***/
  },

  /***/
  "./dice-guardians-module/dist/lib/demo.js":
  /*!************************************************!*\
    !*** ./dice-guardians-module/dist/lib/demo.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function diceGuardiansModuleDistLibDemoJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DEFAULT_BLUE = exports.DEFAULT_RED = exports.cardCollection = void 0;

    var card_1 = __webpack_require__(
    /*! ./card */
    "./dice-guardians-module/dist/lib/card.js");

    var CLANS = {
      warrior: {
        name: 'Warrior',
        iconUrl: 'assets/icons/warrior.png'
      },
      swordAdept: {
        name: 'Sword Adept',
        iconUrl: 'assets/icons/swordAdept.png'
      },
      armorAdept: {
        name: 'Armor Adept',
        iconUrl: 'assets/icons/armorAdept.png'
      },
      royalGuard: {
        name: 'Royal Guard',
        iconUrl: 'assets/icons/royalGuard.png'
      },
      archer: {
        name: 'Archer',
        iconUrl: 'assets/icons/archer.png'
      },
      forestGuard: {
        name: 'Forest Guard',
        iconUrl: 'assets/icons/forest-guard.png'
      }
    };
    var ABILITIES = {
      decast2: {
        name: 'decast2',
        iconUrl: 'assets/icons/decast.png',
        cost: 2,
        text: 'Decast: Returns the monster from the board to the deck at cost 2xHEX'
      },
      decast4: {
        name: 'decast4',
        iconUrl: 'assets/icons/decast.png',
        cost: 4,
        text: 'Decast: Returns the monster from the board to the deck at cost 4xHEX'
      },
      decast6: {
        name: 'decast6',
        iconUrl: 'assets/icons/decast.png',
        cost: 6,
        text: 'Decast: Returns the monster from the board to the deck at cost 6xHEX'
      },
      doubleStrike: {
        name: 'doubleStrike',
        iconUrl: 'assets/icons/double-strike.png',
        cost: 2,
        text: 'Double Strike: On every battle phase this creature can attack a second time'
      },
      midRange: {
        name: 'midRange',
        iconUrl: 'assets/icons/mid-range.png',
        cost: 0,
        text: 'Mid Range: This card\'s range receives +3'
      },
      fly: {
        name: 'fly',
        iconUrl: 'assets/icons/fly.png',
        cost: 1,
        text: 'Fly: The creature can move from a tile to another without stepping on dungeon path.'
      },
      mortalTouch: {
        name: 'mortalTouch',
        iconUrl: 'assets/icons/mortalTouch.png',
        cost: 3,
        text: 'Mortal Strike: An opponent battling this creature dies automatically'
      },
      mortalStrike: {
        name: 'mortalStrike',
        iconUrl: 'assets/icons/mortalStrike.png',
        cost: 5,
        text: 'Mortal Strike: An opponent battling this creature dies automatically'
      },
      forestForce: {
        name: 'forestForce',
        iconUrl: 'assets/icons/forestForce.png',
        cost: 0,
        text: 'Forest Force: As long as there is another `Wood` creature under your control this card gains BTL +3'
      },
      cannotBattle: {
        name: 'cannotBattle',
        iconUrl: 'assets/icons/cannotBattle.png',
        cost: 0,
        text: 'Cannot Battle: This creature cannot attack an opponent'
      },
      cannotMove: {
        name: 'cannotMove',
        iconUrl: 'assets/icons/cannotBattle.png',
        cost: 0,
        text: 'Cannot Move: This creature cannot move'
      },
      doubleMove: {
        name: 'doubleMove',
        iconUrl: 'assets/icons/doubleMove.png',
        cost: 3,
        text: 'Double Move: This creature can move a second time every turn'
      },
      defender: {
        name: 'defender',
        iconUrl: 'assets/icons/defender.png',
        cost: 5,
        text: 'Defender: This creature can intercept an attack on a fellow on the same Dungeon Path'
      },
      layEgg: {
        name: 'layEgg',
        iconUrl: 'assets/icons/layEgg.png',
        cost: 5,
        text: 'Lay Egg: The creature can sacrifice itself to be recasted'
      },
      energyEconomy: {
        name: 'energyEconomy',
        iconUrl: 'assets/icons/energyEconomy.png',
        cost: 5,
        text: 'Energy Economy: Convert all your Energy from one type into another, except CST'
      },
      reRollOne: {
        name: 'reRollOne',
        iconUrl: 'assets/icons/reRollOne.png',
        cost: 5,
        text: 'Re Roll One: You can roll again one of your dice on the Roll Stage'
      },
      creatureHealer: {
        name: 'creatureHealer',
        iconUrl: 'assets/icons/creatureHealer.png',
        cost: 7,
        text: 'Creature Healer: Restore the max VIT of a fellow in the same Dungeon Path'
      },
      woodToken: {
        name: 'woodToken',
        iconUrl: 'assets/icons/woodToken.png',
        cost: 10,
        text: 'Wood Token: Create a 1/1/1 clanless Wood Token'
      },
      farSight: {
        name: 'farSight',
        iconUrl: 'assets/icons/farSight.png',
        cost: 7,
        text: 'Far Sight: This creature\'s range becomes +10 until the end of the turn'
      },
      airToken: {
        name: 'airToken',
        iconUrl: 'assets/icons/airToken.png',
        cost: 10,
        text: 'Air Token: Create a 1/1/1 clanless Air Token'
      },
      wingUp: {
        name: 'wingUp',
        iconUrl: 'assets/icons/wingUp.png',
        cost: 15,
        text: 'Wing Up: Give the ability `Fly` to any creature in the same Dungeon Path'
      },
      lightToken: {
        name: 'lightToken',
        iconUrl: 'assets/icons/lightToken.png',
        cost: 10,
        text: 'Light Token: Create a 1/1/1 `light-worshiper` Light Token'
      },
      lightTouch: {
        name: 'lightTouch',
        iconUrl: 'assets/icons/lightTouch.png',
        cost: 5,
        text: 'Light Touch: All Light creatures gain permanent +5 on BTL'
      },
      changeOfHeart: {
        name: 'changeOfHeart',
        iconUrl: 'assets/icons/changeOfHeart.png',
        cost: 15,
        text: 'Change of Heart: Take control of an opponent creature until your next Roll Stage'
      },
      darkToken: {
        name: 'darkToken',
        iconUrl: 'assets/icons/darkToken.png',
        cost: 10,
        text: 'Dark Token: Create a 1/1/1 `dark-worshiper` Dark Token'
      },
      darkTouch: {
        name: 'darkTouch',
        iconUrl: 'assets/icons/darkTouch.png',
        cost: 5,
        text: 'Dark Touch: All Dark creatures gain permanent +5 on BTL'
      },
      poisonGas: {
        name: 'poisonGas',
        iconUrl: 'assets/icons/poisonGas.png',
        cost: 7,
        text: 'Poison Gas: All creatures on the same color Dungeon Path receive -1 VIT every Roll Stage of their controller'
      },
      voidToken: {
        name: 'voidToken',
        iconUrl: 'assets/icons/voidToken.png',
        cost: 10,
        text: 'Void Token: Create a 1/1/1 `void-worshiper` Void Token'
      },
      voidTouch: {
        name: 'voidTouch',
        iconUrl: 'assets/icons/voidTouch.png',
        cost: 5,
        text: 'Void Touch: All Void creatures gain permanent +5 on BTL'
      },
      darkHole: {
        name: 'darkHole',
        iconUrl: 'assets/icons/darkHole.png',
        cost: 7,
        text: 'Dark Hole: Create a Dark Hole on a Dungeon Path 5 tiles away or closer. All creatures 3 tiles from the Hole will be sucked in and destroyed automatically.'
      },
      aetherToken: {
        name: 'aetherToken',
        iconUrl: 'assets/icons/aetherToken.png',
        cost: 10,
        text: 'Aether Token: Create a 1/1/1 `aether-worshiper` Aether Token'
      },
      aetherTouch: {
        name: 'aetherTouch',
        iconUrl: 'assets/icons/aetherTouch.png',
        cost: 5,
        text: 'Aether Touch: All Aether creatures gain permanent +5 on BTL'
      },
      fluidDivision: {
        name: 'fluidDivision',
        iconUrl: 'assets/icons/fluidDivision.png',
        cost: 7,
        text: 'Fluid Division: While this card\'s MOV is greater than 1; you can split this creature on neighbour Dungeon Paths into 2 clones of this card, each holding half it\'s MOV, BTL and VIT. Abilities cost 2x the HEX to activate on the clones'
      },
      infestation: {
        name: 'infestation',
        iconUrl: 'assets/icons/infestation.png',
        cost: 5,
        text: 'Infestation: Sacrifice a creature in the same Dungeon Path; Cast 2 `Plague Termite` in the available nearby tiles.'
      }
    };
    exports.cardCollection = {
      'thunder-warlord': new card_1.Card('Thunder Warlord', 'electric', 0, 0, 0, ['electric'], // cost
      [], // abilities
      [] // clans
      ),
      'reeya-mermaid-of-chaos': new card_1.Card('Reeya Mermaid of Chaos', 'water', 1, 1, 3, ['water'], // cost
      [], // abilities
      [] // clans
      ),
      'sea-wolf-lobstroslly': new card_1.Card('Sea Wolf Lobstroslly', 'water', 4, 4, 12, ['water', 'water'], // cost
      [], // abilities
      [], // clans
      {
        x: 12,
        y: 0
      }),
      'swamp-nix': new card_1.Card('Swamp Nix', 'water', 12, 12, 36, ['water', 'water', 'water'], // cost
      [], // abilities
      [], // clans,
      {
        x: 7,
        y: 0
      }),
      'fluid-elemental': new card_1.Card('Fluid Elemental', 'water', 3, 3, 10, ['water', 'water'], // cost
      [ABILITIES.defender], // abilities
      [] // clans
      ),
      'doffet-the-war-platypus': new card_1.Card('Doffet The War Platypus', 'water', 7, 6, 13, ['water', 'water', 'water'], // cost
      [], [], {
        x: -2,
        y: 0
      }),
      'war-moose': new card_1.Card('War Moose', 'wood', 7, 8, 15, ['wood', 'wood', 'wood'], // 263
      [], [], {
        x: 18,
        y: 0
      } // offset
      ),
      'plague-termite': new card_1.Card('Plague Termite', 'wood', 3, 3, 5, ['wood', 'wood'], [ABILITIES.infestation], []),
      'rainray-arrow': new card_1.Card('Rainray Arrow', 'wood', 8, 3, 12, ['wood', 'wood'], [ABILITIES.forestForce, ABILITIES.midRange], []),
      'leech-elemental': new card_1.Card('Leech Elemental', 'wood', 10, 10, 10, ['wood', 'wood', 'wood'], [ABILITIES.infestation, ABILITIES.midRange], []),
      'nuada-supreme-ruler-of-darkness': new card_1.Card('Nuada Supreme Ruler Of Darkness', 'dark', 8, 40, 55, ['dark', 'dark', 'dark', 'dark', 'dark', 'dark'], [ABILITIES.darkToken, ABILITIES.darkTouch, ABILITIES.poisonGas, ABILITIES.fly, ABILITIES.changeOfHeart], []),
      'sionnan-supreme-ruler-of-light': new card_1.Card('Sionnan Supreme Ruler Of Light', 'light', 8, 40, 55, ['light', 'light', 'light', 'light', 'light', 'light'], [ABILITIES.lightToken, ABILITIES.lightTouch, ABILITIES.creatureHealer, ABILITIES.fly, ABILITIES.changeOfHeart], []),
      'hoji-supreme-ruler-of-the-void': new card_1.Card('Hoji Supreme Ruler Of The Void', 'void', 8, 40, 55, ['neutral'], [ABILITIES.voidToken, ABILITIES.voidTouch, ABILITIES.darkHole, ABILITIES.fly, ABILITIES.changeOfHeart], []),
      'yamuna-supreme-ruler-of-aether': new card_1.Card('Yamuna Supreme Ruler Of Aether', 'aether', 8, 40, 55, ['neutral'], [ABILITIES.voidToken, ABILITIES.voidTouch, ABILITIES.fluidDivision, ABILITIES.fly, ABILITIES.changeOfHeart], []),
      'doffet-the-platypus': new card_1.Card('Doffet The Platypus', 'water', 2, 3, 3, ['neutral'], [], []),
      'doffet-the-egglaying-platypus': new card_1.Card('Doffet The Egglaying Platypus', 'water', 2, 1, 3, ['neutral'], [ABILITIES.layEgg], []),
      'doffet-the-deadly-platypus': new card_1.Card('Doffet The Deadly Platypus', 'water', 2, 1, 3, ['neutral'], [ABILITIES.mortalStrike], []),
      'doffet-the-friendly-platypus': new card_1.Card('Doffet The Friendly Platypus', 'water', 2, 1, 3, ['neutral'], [ABILITIES.defender], []),
      'doffet-the-wallflower': new card_1.Card('Doffet The Wallflower', 'water', 4, 5, 9, ['neutral', 'neutral'], [], []),
      'doffet-the-deadly-defender': new card_1.Card('Doffet The Deadly Defender', 'water', 5, 7, 7, ['neutral', 'neutral'], [ABILITIES.mortalStrike, ABILITIES.defender], []),
      'doffet-propagator-of-death': new card_1.Card('Doffet Propagator of Death', 'water', 5, 7, 7, ['neutral', 'neutral'], [ABILITIES.mortalStrike, ABILITIES.layEgg], []),
      'doffet-eternal-defender': new card_1.Card('Doffet Eternal Defender', 'water', 5, 7, 7, ['neutral', 'neutral'], [ABILITIES.defender, ABILITIES.layEgg], []),
      'swordsmaster-abalyne': new card_1.Card('Swordsmaster Abalyne', 'metal', 1, 3, 3, ['metal'], [ABILITIES.doubleStrike], [CLANS.warrior, CLANS.swordAdept, CLANS.armorAdept, CLANS.royalGuard]),
      'chickenmera': new card_1.Card('Chickenmera', 'air', 3, 1, 3, ['air'], [ABILITIES.fly], []),
      'armored-ninja': new card_1.Card('Armored Ninja', 'earth', 3, 1, 1, ['earth', 'earth'], [ABILITIES.mortalTouch, ABILITIES.doubleMove], []),
      'gogmatel-the-owlbear': new card_1.Card('Gogmatel The Owlbear', 'air', 2, 5, 7, ['air', 'air'], [ABILITIES.forestForce, ABILITIES.defender], []),
      'jester': new card_1.Card('Jester', 'fire', 5, 0, 10, ['fire', 'fire', 'fire'], [ABILITIES.cannotBattle, ABILITIES.energyEconomy, ABILITIES.reRollOne], []),
      'druid-nicholsrita': new card_1.Card('Druid Nicholsrita', 'wood', 3, 0, 15, ['wood', 'wood', 'wood'], [ABILITIES.cannotBattle, ABILITIES.creatureHealer, ABILITIES.woodToken], []),
      'the-eye-in-the-sky': new card_1.Card('The Eye In The Sky', 'air', 5, 10, 15, ['air', 'air', 'air'], [ABILITIES.farSight, ABILITIES.airToken, ABILITIES.wingUp], [])
    };
    exports.DEFAULT_RED = {
      name: 'RED',
      color: 'red',
      deck: [exports.cardCollection['doffet-the-war-platypus'], exports.cardCollection['war-moose']]
    };
    exports.DEFAULT_BLUE = {
      name: 'BLUE',
      color: 'blue',
      deck: []
    };
    /***/
  },

  /***/
  "./dice-guardians-module/dist/lib/dice.js":
  /*!************************************************!*\
    !*** ./dice-guardians-module/dist/lib/dice.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function diceGuardiansModuleDistLibDiceJs(module, exports, __webpack_require__) {
    "use strict";

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Dice = void 0;

    var random_1 = __importDefault(__webpack_require__(
    /*! random */
    "./dice-guardians-module/node_modules/random/index.js"));

    var Dice = /*#__PURE__*/function () {
      function Dice(rank) {
        var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#000000";

        _classCallCheck(this, Dice);

        this.rolls = [];
        this.classes = ['dice-front', 'dice-back', 'dice-right', 'dice-left', 'dice-top', 'dice-bottom'];
        this.rankedInfo = ['assets/dice/rank-0-info.png', '/assets/dice/rank-1-info.png', '/assets/dice/rank-2-info.png', '/assets/dice/rank-3-info.png'];
        this.rank = rank;
        this.faces = Dice.ranks[this.rank];
        this.ctx = {};
        this.rolledFaceClass = 'dice-front';
        this.color = color;
      }

      _createClass(Dice, [{
        key: "getAttrImage",
        value: function getAttrImage(attr) {
          return '/assets/dice/' + attr + '.png';
        }
      }, {
        key: "roll",
        value: function roll() {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            var self = _this2;
            var limit = 3;
            var count = 0;
            var id = setInterval(function () {
              if (count >= limit) {
                clearInterval(id);

                var roll = _this2.faces[_this2.classes.indexOf(_this2.rolledFaceClass)];

                self.rolls.push(roll);
                resolve(roll);
                return;
              }

              count++;
              var idx = random_1["default"]["int"](0, _this2.classes.length - 1);
              _this2.rolledFaceClass = _this2.classes[idx];
            }, 550);
          });
        }
      }, {
        key: "setCtx",
        value: function setCtx(ctx) {
          this.ctx = ctx;
        }
      }, {
        key: "getEnergy",
        value: function getEnergy(face) {
          if (face.indexOf('-') >= 0) {
            var parts = face.split('-');
            return parts[0];
          }

          return face;
        }
      }, {
        key: "getEdge",
        value: function getEdge(face) {
          var multiplier;
          var crest;

          if (face.length === 3) {
            // pure crest
            multiplier = 1;
            crest = face;
          } else {
            crest = face.substr(0, 3);
            multiplier = parseInt(face.substr(3, 4));
          }

          return crest.toLowerCase();
        }
      }, {
        key: "getValue",
        value: function getValue(face) {
          if (face.indexOf('-') >= 0) {
            var parts = face.split('-');
            return parseInt(parts[1]);
          } else {
            return 1;
          }
        }
      }, {
        key: "getCrestImage",
        value: function getCrestImage(face) {
          //let face = this.rolls[this.rolls.length - 1]
          return this.faces[this.faces.indexOf(face)];
          /*
          let multiplier
          let crest
          if (face.length === 3){
          // pure crest
          multiplier = 1
          crest = face
          } else {
          crest = face.substr(0,3)
          multiplier = parseInt(face.substr(3,4))
          }
          if (this.rank >= 3){
          return crestImages[crest]['white']
          }
          return crestImages[crest]['black']*/
        }
      }]);

      return Dice;
    }();

    exports.Dice = Dice;
    Dice.ranks = [['water', 'water', 'water', 'wood', 'wood', 'neutral'], ['wood', 'wood', 'wood', 'water', 'water', 'neutral'], ['water-2', 'water', 'wood-2', 'wood', 'dark', 'neutral'], ['dark', 'neutral', 'wood', 'neutral', 'water', 'dark-2']];
    Dice.colors = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'];
    /***/
  },

  /***/
  "./dice-guardians-module/dist/lib/energy-pool.js":
  /*!*******************************************************!*\
    !*** ./dice-guardians-module/dist/lib/energy-pool.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function diceGuardiansModuleDistLibEnergyPoolJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EnergyPool = void 0;

    var events_1 = __webpack_require__(
    /*! ./events */
    "./dice-guardians-module/dist/lib/events.js");

    var EnergyPool = /*#__PURE__*/function () {
      function EnergyPool() {
        _classCallCheck(this, EnergyPool);

        this.light = 0;
        this.dark = 0;
        this.aether = 0;
        this["void"] = 0;
        this.earth = 0;
        this.air = 0;
        this.water = 0;
        this.fire = 0;
        this.wood = 0;
        this.metal = 0;
        this.electric = 0;
        this.ice = 0;
        this.neutral = 0;
        this.types = new Set();
        this.events = events_1.EVENTS;
        this.types.add('light');
        this.types.add('dark');
        this.types.add('aether');
        this.types.add('void');
        this.types.add('earth');
        this.types.add('air');
        this.types.add('water');
        this.types.add('fire');
        this.types.add('wood');
        this.types.add('metal');
        this.types.add('electric');
        this.types.add('ice');
        this.types.add('neutral');
      }

      _createClass(EnergyPool, [{
        key: "isInteger",
        value: function isInteger(amount) {
          return !isNaN(amount) && function (x) {
            return (x | 0) === x;
          }(parseFloat(amount.toString()));
        }
      }, {
        key: "isPositiveInt",
        value: function isPositiveInt(amount) {
          return this.isInteger(amount) && amount > 0;
        }
      }, {
        key: "isNegativeInt",
        value: function isNegativeInt(amount) {
          return this.isInteger(amount) && amount < 0;
        }
      }, {
        key: "mint",
        value: function mint(type, amount) {
          if (!this.types.has(type)) {
            throw new Error('Unrecognized Energy type `' + type + '`');
          }

          if (!this.isPositiveInt(amount)) {
            throw new Error('Invalid value for fn `mint`: ' + amount);
          }

          this.events.emit('mint', {
            type: type,
            amount: amount
          });

          switch (type) {
            case 'light':
              this.light += amount;
              break;

            case 'dark':
              this.dark += amount;
              break;

            case 'aether':
              this.aether += amount;
              break;

            case 'void':
              this["void"] += amount;
              break;

            case 'earth':
              this.earth += amount;
              break;

            case 'air':
              this.air += amount;
              break;

            case 'water':
              this.water += amount;
              break;

            case 'fire':
              this.fire += amount;
              break;

            case 'wood':
              this.wood += amount;
              break;

            case 'metal':
              this.metal += amount;
              break;

            case 'electric':
              this.electric += amount;
              break;

            case 'ice':
              this.ice += amount;
              break;

            case 'neutral':
              this.neutral += amount;
              break;
          }
        }
      }, {
        key: "burn",
        value: function burn(type, amount) {
          if (!this.types.has(type)) {
            throw new Error('Unrecognized Energy type `' + type + '`');
          }

          if (!this.isPositiveInt(amount)) {
            throw new Error('Invalid value for fn `burn`: ' + amount);
          }

          this.events.emit('burn', {
            type: type,
            amount: amount
          });

          switch (type) {
            case 'light':
              this.light -= amount;
              break;

            case 'dark':
              this.dark -= amount;
              break;

            case 'aether':
              this.aether -= amount;
              break;

            case 'void':
              this["void"] -= amount;
              break;

            case 'earth':
              this.earth -= amount;
              break;

            case 'air':
              this.air -= amount;
              break;

            case 'water':
              this.water -= amount;
              break;

            case 'fire':
              this.fire -= amount;
              break;

            case 'wood':
              this.wood -= amount;
              break;

            case 'metal':
              this.metal -= amount;
              break;

            case 'electric':
              this.electric -= amount;
              break;

            case 'ice':
              this.ice -= amount;
              break;

            case 'neutral':
              this.neutral -= amount;
              break;
          }
        }
      }, {
        key: "reset",
        value: function reset(type) {
          if (!this.types.has(type)) {
            throw new Error('Unrecognized Energy type `' + type + '`');
          }

          this.events.emit('reset', {
            type: type
          });

          switch (type) {
            case 'light':
              this.light = 0;
              break;

            case 'dark':
              this.dark = 0;
              break;

            case 'aether':
              this.aether = 0;
              break;

            case 'void':
              this["void"] = 0;
              break;

            case 'earth':
              this.earth = 0;
              break;

            case 'air':
              this.air = 0;
              break;

            case 'water':
              this.water = 0;
              break;

            case 'fire':
              this.fire = 0;
              break;

            case 'wood':
              this.wood = 0;
              break;

            case 'metal':
              this.metal = 0;
              break;

            case 'electric':
              this.electric = 0;
              break;

            case 'ice':
              this.ice = 0;
              break;

            case 'neutral':
              this.neutral = 0;
              break;
          }
        }
      }, {
        key: "get",
        value: function get(type) {
          if (!this.types.has(type)) {
            throw new Error('Unrecognized Energy type `' + type + '`');
          }

          switch (type) {
            case 'light':
              return this.pad(this.light);
              break;

            case 'dark':
              return this.pad(this.dark);
              break;

            case 'aether':
              return this.pad(this.aether);
              break;

            case 'void':
              return this.pad(this["void"]);
              break;

            case 'earth':
              return this.pad(this.earth);
              break;

            case 'air':
              return this.pad(this.air);
              break;

            case 'water':
              return this.pad(this.water);
              break;

            case 'fire':
              return this.pad(this.fire);
              break;

            case 'wood':
              return this.pad(this.wood);
              break;

            case 'metal':
              return this.pad(this.metal);
              break;

            case 'electric':
              return this.pad(this.electric);
              break;

            case 'ice':
              return this.pad(this.ice);
              break;

            case 'neutral':
              return this.pad(this.neutral);
              break;
          }

          return this.pad(0);
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

      return EnergyPool;
    }();

    exports.EnergyPool = EnergyPool;
    /***/
  },

  /***/
  "./dice-guardians-module/dist/lib/events.js":
  /*!**************************************************!*\
    !*** ./dice-guardians-module/dist/lib/events.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function diceGuardiansModuleDistLibEventsJs(module, exports, __webpack_require__) {
    "use strict";

    var __importDefault = this && this.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EVENTS = exports.EventDispatcher = void 0;

    var events_1 = __importDefault(__webpack_require__(
    /*! events */
    "./dice-guardians-module/node_modules/events/events.js"));

    var EventDispatcher = /*#__PURE__*/function () {
      function EventDispatcher() {
        _classCallCheck(this, EventDispatcher);

        this.events = new events_1["default"].EventEmitter();
        this.keys = [];
      }

      _createClass(EventDispatcher, [{
        key: "keyExists",
        value: function keyExists(key) {
          return this.keys.indexOf(key) >= 0;
        }
      }, {
        key: "emit",
        value: function emit(key, value) {
          if (!this.keyExists(key)) {
            this.keys.push(key);
          }

          this.events.emit(key, value);
        }
      }, {
        key: "on",
        value: function on(key, fn) {
          this.events.on(key, function (value) {
            console.log('EVENT::', key, value, fn);
            fn(value);
          });
        }
      }]);

      return EventDispatcher;
    }();

    exports.EventDispatcher = EventDispatcher;
    var EVENTS = new EventDispatcher();
    exports.EVENTS = EVENTS;
    /***/
  },

  /***/
  "./dice-guardians-module/dist/lib/map.js":
  /*!***********************************************!*\
    !*** ./dice-guardians-module/dist/lib/map.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function diceGuardiansModuleDistLibMapJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Map = void 0;

    var Map = function Map(ctx, rooms) {
      _classCallCheck(this, Map);

      this.tiles = {
        RIVAL_TILE: ['0:8', '0:10', '1:9'],
        RIVAL_TOWER: ['5:4', '5:14', '11:9', '0:9'],
        PLAYER_TOWER: ['21:9', '27:4', '27:14', '32:9'],
        PLAYER_TILE: ['32:8', '32:10', '31:9'],
        WALL: ['16:3', '16:4', '16:5', '16:6', '16:12', '16:13', '16:14', '16:15', '18:7', '18:8', '18:9', '18:10', '18:11', '14:7', '14:8', '14:9', '14:10', '14:11'],
        NEUTRAL_TILE: ['15:7', '15:8', '15:9', '15:10',, '15:11', '16:7', '16:8', '16:9', '16:10',, '16:11', '17:7', '17:8', '17:9', '17:10',, '17:11']
      };
      this.ctx = ctx;
      this.cols = 33;
      this.rows = 19;
      this.rooms = rooms;
    };

    exports.Map = Map;
    /***/
  },

  /***/
  "./dice-guardians-module/dist/lib/player.js":
  /*!**************************************************!*\
    !*** ./dice-guardians-module/dist/lib/player.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function diceGuardiansModuleDistLibPlayerJs(module, exports, __webpack_require__) {
    "use strict";

    var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EMPTY_PLAYER = exports.Player = void 0;

    var dice_1 = __webpack_require__(
    /*! ./dice */
    "./dice-guardians-module/dist/lib/dice.js");

    var energy_pool_1 = __webpack_require__(
    /*! ./energy-pool */
    "./dice-guardians-module/dist/lib/energy-pool.js");

    var events_1 = __webpack_require__(
    /*! ./events */
    "./dice-guardians-module/dist/lib/events.js");

    var audio_1 = __webpack_require__(
    /*! ./audio */
    "./dice-guardians-module/dist/lib/audio.js");

    var Player = /*#__PURE__*/function () {
      function Player(opts, ctx) {
        _classCallCheck(this, Player);

        this.boardCards = [];
        this.deckCards = [];
        this.dice = [];
        this.dicePool = [];
        this.score = 0;
        this.isCastPending = false;
        this.hasCasted = false;
        this.isUnfoldPending = false;
        this.unfoldCounter = 6;
        this.isMovePending = false;
        this.moveCounter = 0;
        this.isBattlePending = false;
        this.canRoll = true;
        this.canEndTurn = true;
        this.events = events_1.EVENTS;
        this.avatar = {};
        this.activeMessage = '';
        this.ctx = ctx;
        this.deckCards = opts.deck;

        if (this['deckCards']) {
          for (var i = 0; i < this.deckCards.length; i++) {
            this.deckCards[i].setOwner(this);
          }
        }

        this.name = opts.name;
        this.color = opts.color;

        if (this.color === 'red') {
          this.avatar = {
            src: 'assets/facesets/gary.png',
            position: '0 0'
          };
        }

        if (this.color === 'blue') {
          this.avatar = {
            src: 'assets/facesets/marcia.png',
            position: '0 0'
          };
        }

        if (this.color === 'green') {
          this.avatar = {
            src: 'assets/facesets/anne.png',
            position: '0 0'
          };
        }

        if (this.color === 'grey') {
          this.avatar = {
            src: 'assets/facesets/clyde.png',
            position: '0 0'
          };
        }

        this.energyPool = new energy_pool_1.EnergyPool();
        this.dicePool.push(new dice_1.Dice(0));
        this.dicePool.push(new dice_1.Dice(0));
        this.dicePool.push(new dice_1.Dice(1));
        this.dicePool.push(new dice_1.Dice(1));
        this.dicePool.push(new dice_1.Dice(2));
        this.dicePool.push(new dice_1.Dice(2));
        this.dicePool.push(new dice_1.Dice(3));
      }

      _createClass(Player, [{
        key: "sleep",
        value: function sleep() {
          var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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
        key: "increaseScore",
        value: function increaseScore(amount) {
          this.score += Math.abs(amount);
        }
      }, {
        key: "pickDice",
        value: function pickDice(pooledDice) {
          console.log('pooledDice', pooledDice);
          console.log(this.dicePool);

          if (this.dice.length >= 3) {
            return;
          }

          var audio = new audio_1.DGAudio('assets/audio/pickDice.mp3');
          audio.play();
          var idx = -1;

          for (var i = 0; i < this.dicePool.length; i++) {
            if (this.dicePool[i].rank === pooledDice.rank) {
              idx = i;
            }
          } //const dice = new Dice(pooledDice.rank)


          this.dice.push(pooledDice);
          this.dicePool.splice(idx, 1);
        }
      }, {
        key: "unpickDice",
        value: function unpickDice(idx) {
          var dice = this.dice.splice(idx, 1);
          this.dicePool.push(dice[0]);
        }
      }, {
        key: "rollDice",
        value: function rollDice() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var audio, promises, i, dice, res, message, typeToEmoji, _i8, _dice, face, energy, value, image, j, _j2;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (this.canRoll) {
                      _context3.next = 2;
                      break;
                    }

                    return _context3.abrupt("return", this.toast('I cannot roll right now!'));

                  case 2:
                    if (!(this.dice.length < 3)) {
                      _context3.next = 4;
                      break;
                    }

                    return _context3.abrupt("return", this.toast('I must select 3 dice to roll!'));

                  case 4:
                    this.canRoll = false;
                    audio = new audio_1.DGAudio('assets/audio/diceroll.mp3');
                    audio.play();
                    promises = [];

                    for (i = 0; i < this.dice.length; i++) {
                      dice = this.dice[i];
                      promises.push(dice.roll());
                    }

                    _context3.next = 11;
                    return Promise.all(promises);

                  case 11:
                    res = _context3.sent;
                    console.log('rolled', res);
                    message = 'Great! Rolled ';
                    typeToEmoji = {
                      'water': '💧',
                      'wood': '🌳',
                      'dark': '🌘',
                      'neutral': '🃏'
                    };
                    _i8 = 0;

                  case 16:
                    if (!(_i8 < res.length)) {
                      _context3.next = 33;
                      break;
                    }

                    _dice = this.dice[_i8];
                    face = res[_i8];
                    energy = _dice.getEnergy(face);
                    value = _dice.getValue(face);
                    image = _dice.getCrestImage(face);
                    _context3.next = 24;
                    return this.sleep(750);

                  case 24:
                    console.log(energy, value);
                    this.energyPool.mint(energy, value);
                    message += 'x' + value + typeToEmoji[energy] + ', ';

                    for (j = 0; j < this.deckCards.length; j++) {
                      /*
                      if (this.deckCards[j].cost <= this.energyPool.cst){
                        this.deckCards[j].canCast = true
                      }*/
                    }

                    for (_j2 = 0; _j2 < this.boardCards.length; _j2++) {
                      /*
                      if (this.boardCards[j].cost <= this.energyPool.mov){
                        this.boardCards[j].canMove = true
                      }
                                   if (this.boardCards[j].cost <= this.energyPool.btl){
                        this.boardCards[j].canBattle = true
                      }*/
                    }

                    console.log({
                      face: face,
                      energy: energy,
                      value: value,
                      image: image
                    });

                  case 30:
                    _i8++;
                    _context3.next = 16;
                    break;

                  case 33:
                    this.toast(message); //await this.sleep()
                    //this.dice = []

                    /*
                      const face:string = await dice.roll()
                      const energy = dice.getEnergy(face)
                      const value = dice.getValue(face)
                      const image = dice.getCrestImage(face)
                               console.log({
                        face, energy, value, image
                      })
                    }*/

                  case 34:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "endTurn",
        value: function endTurn() {
          // set all flags so nothing is clickeable
          for (var i = 0; i < this.dice.length; i++) {
            this.dicePool.push(this.dice[i]);
          }

          this.dice = [];
          this.canRoll = false;
          this.canEndTurn = false;
          this.hasCasted = false;

          for (var _i9 = 0; _i9 < this.boardCards.length; _i9++) {
            this.boardCards[_i9].canCast = false;
            this.boardCards[_i9].canMove = false;
            this.boardCards[_i9].canBattle = false;
            this.boardCards[_i9].hasMoved = false;
            this.boardCards[_i9].hasBattled = false;
            this.boardCards[_i9].canBeClicked = true;
            this.boardCards[_i9].showMenu = false;
          }
        }
      }, {
        key: "startTurn",
        value: function startTurn() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    // start a beautiful turn!
                    this.isCastPending = false;
                    this.isMovePending = false;
                    this.isUnfoldPending = false;
                    this.unfoldCounter = 6;
                    this.canRoll = true;
                    this.canEndTurn = true;

                    if (!(this.color === 'blue')) {
                      _context4.next = 9;
                      break;
                    }

                    _context4.next = 9;
                    return this.cpuTurn();

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "cpuTurn",
        value: function cpuTurn() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var dice;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    dice = new dice_1.Dice(1);
                    this.pickDice(dice);
                    console.log('this.pickDice(dice)');
                    _context5.next = 5;
                    return this.sleep();

                  case 5:
                    this.pickDice(dice);
                    console.log('this.pickDice(dice)');
                    _context5.next = 9;
                    return this.sleep();

                  case 9:
                    this.pickDice(dice);
                    console.log('this.pickDice(dice)');
                    _context5.next = 13;
                    return this.sleep();

                  case 13:
                    _context5.next = 15;
                    return this.rollDice();

                  case 15:
                    console.log('rolled dice');
                    _context5.next = 18;
                    return this.sleep();

                  case 18:
                    this.events.emit('endCpuTurn', true);
                    console.log('emit called');
                    this.endTurn();

                  case 21:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "toast",
        value: function toast(message) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var audio;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    console.log('message', message); //this.ctx.

                    audio = new audio_1.DGAudio('assets/audio/toast.wav');
                    audio.play();
                    this.activeMessage = message;
                    /*
                             await this.sleep(100)
                             const domMessage:any = document.querySelector('.spoken-words:not([open])')
                             domMessage.classList.add('open')
                    const animation = this.ctx.animationCtrl.create()
                    .addElement(domMessage)
                    .duration(500)
                    //.easing('ease-in')
                    //.fromTo('transform', 'translateY(0px)', 'translateY(100vh)')
                    .fromTo('opacity', '0', '1')
                    await animation.play()
                    */

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return Player;
    }();

    exports.Player = Player;
    exports.EMPTY_PLAYER = new Player({
      name: 'null',
      color: 'null',
      deck: []
    }, {});
    /***/
  },

  /***/
  "./dice-guardians-module/dist/lib/room-collection.js":
  /*!***********************************************************!*\
    !*** ./dice-guardians-module/dist/lib/room-collection.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function diceGuardiansModuleDistLibRoomCollectionJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Room1 = exports.Room0 = void 0;

    var room_1 = __webpack_require__(
    /*! ./room */
    "./dice-guardians-module/dist/lib/room.js");

    var demo_1 = __webpack_require__(
    /*! ./demo */
    "./dice-guardians-module/dist/lib/demo.js");

    exports.Room0 = new room_1.Room('room-zero', 9, 9, null, 'assets/rooms/room-0.png', [// player start
    {
      classes: ['player-tile', 'floor'],
      x: 7,
      y: 4
    }, {
      classes: ['victory-tile', 'floor'],
      x: 0,
      y: 4
    }, {
      classes: [''],
      x: 6,
      y: 4
    }, {
      classes: [''],
      x: 5,
      y: 4
    }, {
      classes: [''],
      x: 4,
      y: 4
    }, {
      classes: [''],
      x: 3,
      y: 4
    }, {
      classes: [''],
      x: 2,
      y: 4
    }, {
      classes: [''],
      x: 1,
      y: 4
    }]);
    exports.Room1 = new room_1.Room('room-one', 9, 11, {
      x: 10,
      y: 4
    }, 'assets/rooms/room-1.png', [// player start
    {
      classes: ['player-tile', 'floor'],
      x: 10,
      y: 4
    }, {
      classes: ['victory-tile', 'floor'],
      x: 0,
      y: 4
    }, {
      classes: [''],
      x: 6,
      y: 4
    }, {
      classes: ['vit-restore', 'floor'],
      x: 4,
      y: 4
    }, // creature-guarded user tiles
    {
      classes: ['player-tile', 'creature', 'floor'],
      x: 9,
      y: 1,
      creature: demo_1.cardCollection['sea-wolf-lobstroslly']
    }, {
      classes: ['player-tile', 'creature', 'floor'],
      x: 9,
      y: 7,
      creature: demo_1.cardCollection['plague-termite']
    }, {
      classes: ['player-tile', 'creature', 'floor'],
      x: 2,
      y: 0,
      creature: demo_1.cardCollection['druid-nicholsrita']
    }, {
      classes: ['player-tile', 'creature', 'floor'],
      x: 2,
      y: 8,
      creature: demo_1.cardCollection['swamp-nix']
    }, // walkeable tiles
    {
      classes: ['floor'],
      x: 9,
      y: 0
    }, {
      classes: ['floor'],
      x: 10,
      y: 0
    }, {
      classes: ['floor'],
      x: 10,
      y: 1
    }, {
      classes: ['floor'],
      x: 9,
      y: 2
    }, {
      classes: ['floor'],
      x: 10,
      y: 2
    }, {
      classes: ['floor'],
      x: 9,
      y: 3
    }, {
      classes: ['floor'],
      x: 10,
      y: 3
    }, {
      classes: ['floor'],
      x: 9,
      y: 4
    }, {
      classes: ['floor'],
      x: 9,
      y: 5
    }, {
      classes: ['floor'],
      x: 10,
      y: 5
    }, {
      classes: ['floor'],
      x: 9,
      y: 6
    }, {
      classes: ['floor'],
      x: 10,
      y: 6
    }, {
      classes: ['floor'],
      x: 10,
      y: 7
    }, {
      classes: ['floor'],
      x: 9,
      y: 8
    }, {
      classes: ['floor'],
      x: 10,
      y: 8
    }, {
      classes: ['floor'],
      x: 3,
      y: 0
    }, {
      classes: ['floor'],
      x: 4,
      y: 0
    }, {
      classes: ['floor'],
      x: 3,
      y: 1
    }, {
      classes: ['floor'],
      x: 4,
      y: 1
    }, {
      classes: ['floor'],
      x: 3,
      y: 2
    }, {
      classes: ['floor'],
      x: 4,
      y: 2
    }, {
      classes: ['floor'],
      x: 3,
      y: 6
    }, {
      classes: ['floor'],
      x: 4,
      y: 6
    }, {
      classes: ['floor'],
      x: 3,
      y: 7
    }, {
      classes: ['floor'],
      x: 4,
      y: 7
    }, {
      classes: ['floor'],
      x: 3,
      y: 8
    }, {
      classes: ['floor'],
      x: 4,
      y: 8
    }, // all empty tiles
    {
      classes: [''],
      x: 8,
      y: 4
    }, {
      classes: [''],
      x: 7,
      y: 4
    }, {
      classes: [''],
      x: 6,
      y: 4
    }, {
      classes: [''],
      x: 5,
      y: 4
    }, {
      classes: [''],
      x: 4,
      y: 4
    }, {
      classes: [''],
      x: 3,
      y: 4
    }, {
      classes: [''],
      x: 2,
      y: 4
    }, {
      classes: [''],
      x: 1,
      y: 4
    }, {
      classes: [''],
      x: 0,
      y: 0
    }, {
      classes: [''],
      x: 1,
      y: 0
    }, {
      classes: [''],
      x: 5,
      y: 0
    }, {
      classes: [''],
      x: 6,
      y: 0
    }, {
      classes: [''],
      x: 7,
      y: 0
    }, {
      classes: [''],
      x: 8,
      y: 0
    }, {
      classes: [''],
      x: 0,
      y: 8
    }, {
      classes: [''],
      x: 1,
      y: 8
    }, {
      classes: [''],
      x: 5,
      y: 8
    }, {
      classes: [''],
      x: 6,
      y: 8
    }, {
      classes: [''],
      x: 7,
      y: 8
    }, {
      classes: [''],
      x: 8,
      y: 8
    }, {
      classes: [''],
      x: 0,
      y: 1
    }, {
      classes: [''],
      x: 1,
      y: 1
    }, {
      classes: [''],
      x: 2,
      y: 1
    }, {
      classes: [''],
      x: 5,
      y: 1
    }, {
      classes: [''],
      x: 6,
      y: 1
    }, {
      classes: [''],
      x: 7,
      y: 1
    }, {
      classes: [''],
      x: 8,
      y: 1
    }, {
      classes: [''],
      x: 0,
      y: 2
    }, {
      classes: [''],
      x: 1,
      y: 2
    }, {
      classes: [''],
      x: 2,
      y: 2
    }, {
      classes: [''],
      x: 6,
      y: 2
    }, {
      classes: [''],
      x: 7,
      y: 2
    }, {
      classes: [''],
      x: 8,
      y: 2
    }, {
      classes: [''],
      x: 0,
      y: 3
    }, {
      classes: [''],
      x: 1,
      y: 3
    }, {
      classes: [''],
      x: 2,
      y: 3
    }, {
      classes: [''],
      x: 3,
      y: 3
    }, {
      classes: [''],
      x: 4,
      y: 3
    }, {
      classes: [''],
      x: 5,
      y: 3
    }, {
      classes: [''],
      x: 6,
      y: 3
    }, {
      classes: [''],
      x: 7,
      y: 3
    }, {
      classes: [''],
      x: 8,
      y: 3
    }, {
      classes: [''],
      x: 0,
      y: 7
    }, {
      classes: [''],
      x: 1,
      y: 7
    }, {
      classes: [''],
      x: 2,
      y: 7
    }, {
      classes: [''],
      x: 5,
      y: 7
    }, {
      classes: [''],
      x: 6,
      y: 7
    }, {
      classes: [''],
      x: 7,
      y: 7
    }, {
      classes: [''],
      x: 8,
      y: 7
    }, {
      classes: [''],
      x: 0,
      y: 6
    }, {
      classes: [''],
      x: 1,
      y: 6
    }, {
      classes: [''],
      x: 2,
      y: 6
    }, {
      classes: [''],
      x: 6,
      y: 6
    }, {
      classes: [''],
      x: 7,
      y: 6
    }, {
      classes: [''],
      x: 8,
      y: 6
    }, {
      classes: [''],
      x: 0,
      y: 5
    }, {
      classes: [''],
      x: 1,
      y: 5
    }, {
      classes: [''],
      x: 2,
      y: 5
    }, {
      classes: [''],
      x: 3,
      y: 5
    }, {
      classes: [''],
      x: 4,
      y: 5
    }, {
      classes: [''],
      x: 5,
      y: 5
    }, {
      classes: [''],
      x: 6,
      y: 5
    }, {
      classes: [''],
      x: 7,
      y: 5
    }, {
      classes: [''],
      x: 8,
      y: 5
    }]);
    /***/
  },

  /***/
  "./dice-guardians-module/dist/lib/room.js":
  /*!************************************************!*\
    !*** ./dice-guardians-module/dist/lib/room.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function diceGuardiansModuleDistLibRoomJs(module, exports, __webpack_require__) {
    "use strict";

    var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Room = void 0;

    var cell_1 = __webpack_require__(
    /*! ./cell */
    "./dice-guardians-module/dist/lib/cell.js");

    var events_1 = __webpack_require__(
    /*! ./events */
    "./dice-guardians-module/dist/lib/events.js");

    var Room = /*#__PURE__*/function () {
      function Room(name, width, height) {
        var initialTile = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
          x: 0,
          y: 0
        };
        var backgroundUrl = arguments.length > 4 ? arguments[4] : undefined;
        var tileSet = arguments.length > 5 ? arguments[5] : undefined;

        _classCallCheck(this, Room);

        this.rows = [];
        this.cols = [];
        this.events = events_1.EVENTS;
        this.name = name;
        this.width = width;
        this.height = height;
        this.initialTile = initialTile;
        this.backgroundUrl = backgroundUrl;
        this.tileSet = tileSet;
        this.createRows();
        this.createColumns();
        this.createCells();
        this.setCellsDoms();
      }

      _createClass(Room, [{
        key: "createRows",
        value: function createRows() {
          this.rows = [];

          for (var i = 0; i < this.width; i++) {
            this.rows.push(i);
          }
        }
      }, {
        key: "createColumns",
        value: function createColumns() {
          this.cols = [];

          for (var i = 0; i < this.height; i++) {
            this.cols.push(i);
          }
        }
      }, {
        key: "createCells",
        value: function createCells() {
          this.cells = {};

          for (var i = 0; i < this.rows.length; i++) {
            for (var j = 0; j < this.cols.length; j++) {
              var cell = new cell_1.Cell({
                ctx: this.ctx,
                x: j,
                y: i,
                domPrefix: this.name + '-'
              });
              this.cells[j + ':' + i] = cell;
            }
          }
        }
      }, {
        key: "getCell",
        value: function getCell(x, y) {
          return this.cells[x + ':' + y];
        }
      }, {
        key: "setCellsDoms",
        value: function setCellsDoms() {
          /*
          setTimeout(() => {
            const keys = Object.keys(this.cells)
            for (let i = 0; i < keys.length; i++) {
              this.cells[keys[i]].attachDom()
            }
          }, 500)*/
        }
      }, {
        key: "setTile",
        value: function setTile(cell, _class) {
          if (_class.indexOf('tile') >= 0) {
            cell.addClass('floor');
          }
          /*
              if (!cell.hasClass('floor')){
                cell.addClass('wall')
              }*/


          cell.addClass(_class);
          return cell;
        }
      }, {
        key: "sleep",
        value: function sleep() {
          var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    return _context7.abrupt("return", new Promise(function (resolve, reject) {
                      setTimeout(function () {
                        resolve();
                      }, ms);
                    }));

                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));
        }
      }, {
        key: "paintMap",
        value: function paintMap() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var tiles, visited, i, tile, cell, j, _i10, _j3, _cell, found, m, seen;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    console.log('room paint map event', this.width, this.height);
                    tiles = this.tileSet;
                    visited = [];

                    for (i = 0; i < tiles.length; i++) {
                      tile = tiles[i];
                      cell = this.getCell(tile.x, tile.y);
                      visited.push(cell);

                      for (j = 0; j < tile.classes.length; j++) {
                        this.setTile(cell, tile.classes[j]);
                      }

                      if (tile['creature'] && this.ctx) {
                        this.events.emit('freeCast', {
                          card: tile.creature,
                          cell: cell
                        }); //this.ctx.lib.board.freeCast(tile.creature, cell)
                      }
                    }

                    for (_i10 = 0; _i10 < this.rows.length; _i10++) {
                      for (_j3 = 0; _j3 < this.cols.length; _j3++) {
                        _cell = this.getCell(_j3, _i10);
                        found = false;

                        for (m = 0; m < visited.length; m++) {
                          seen = visited[m];

                          if (seen.x === _cell.x && seen.y === _cell.y) {
                            // been visited, skip
                            found = true;
                          }
                        }

                        if (!found) {
                          _cell.addClass('wall'); //cell.addClass('tile')

                        }
                      }
                    }
                    /*
                    const keys = Object.keys(this.map.tiles)
                    for (let i = 0; i < keys.length; i++) {
                      let type = keys[i]
                      let cells = this.map.tiles[type]
                               for (let j = 0; j < cells.length; j++) {
                        //this.setTile(i + ':' + j, 'tile')
                        //this.setTile(i + ':' + j, this.classes[type])
                         // this.setTile(j + ':' + i, 'tile')
                         // this.setTile(j + ':' + i, this.classes[type])
                         this.setTile(cells[j], 'tile')
                         this.setTile(cells[j], this.classes[type])
                      }
                    }*/


                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "setCtx",
        value: function setCtx(ctx) {
          this.ctx = ctx;

          for (var i = 0; i < this.rows.length; i++) {
            for (var j = 0; j < this.cols.length; j++) {
              var cell = this.getCell(j, i);
              cell.setCtx(ctx);
            }
          }
        }
      }, {
        key: "getCells",
        value: function getCells() {
          return this.cells;
        }
      }, {
        key: "clearClass",
        value: function clearClass(_class) {
          console.log('clearClass called for', _class);
          var keys = Object.keys(this.cells);

          for (var i = 0; i < keys.length; i++) {
            var cell = this.cells[keys[i]];
            cell.rmClass(_class);
          }

          var items = document.querySelectorAll('.' + _class);

          for (var _i11 = 0; _i11 < items.length; _i11++) {
            items[_i11].classList.remove(_class);
          }
        }
      }, {
        key: "clearClickAreas",
        value: function clearClickAreas() {
          var keys = Object.keys(this.cells);

          for (var i = 0; i < keys.length; i++) {
            this.cells[keys[i]].canBeClicked = false;
          }
        }
      }]);

      return Room;
    }();

    exports.Room = Room;
    /***/
  },

  /***/
  "./dice-guardians-module/dist/lib/storage.js":
  /*!***************************************************!*\
    !*** ./dice-guardians-module/dist/lib/storage.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function diceGuardiansModuleDistLibStorageJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Storage = void 0;

    var Storage = /*#__PURE__*/function () {
      function Storage(localStorage, namespaces) {
        _classCallCheck(this, Storage);

        this.keys = {};
        this.data = {};
        this.ls = localStorage;
        this.namespaces = namespaces;

        for (var i = 0; i < this.namespaces.length; i++) {
          this.read(namespaces[i]);
        }
      } // for later use in hashed tables. for now returns as capitalized


      _createClass(Storage, [{
        key: "parseKey",
        value: function parseKey(key) {
          return key.toUpperCase();
        } // writes data on every `set` down to localStorage

      }, {
        key: "write",
        value: function write(namespace) {
          var key = this.parseKey(namespace);
          var data = JSON.stringify(this.data[key]);
          return this.ls.setItem(key, data);
        } // fetches and populates the object from localStorage

      }, {
        key: "read",
        value: function read(namespace) {
          var key = this.parseKey(namespace);
          var json = this.ls.getItem(key);

          if (!json) {
            return {};
          }

          var data = JSON.parse(json);
          this.keys = Object.keys(data);
          this.data = data;
          return data;
        }
      }, {
        key: "has",
        value: function has(namespace, key) {
          return this.keys[namespace].indexOf(key) >= 0;
        }
      }, {
        key: "set",
        value: function set(namespace, key, value) {
          if (!this.has(namespace, key)) {
            this.keys[namespace].push(key);
            this.data[namespace][key] = value;
            this.write(namespace);
          }
        }
      }, {
        key: "get",
        value: function get(namespace, key) {
          return this.data[namespace][key];
        }
      }]);

      return Storage;
    }();

    exports.Storage = Storage;
    /***/
  },

  /***/
  "./dice-guardians-module/dist/lib/tutorial.js":
  /*!****************************************************!*\
    !*** ./dice-guardians-module/dist/lib/tutorial.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function diceGuardiansModuleDistLibTutorialJs(module, exports, __webpack_require__) {
    "use strict";

    var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Tutorial = void 0;

    var events_1 = __webpack_require__(
    /*! ./events */
    "./dice-guardians-module/dist/lib/events.js");

    var audio_1 = __webpack_require__(
    /*! ./audio */
    "./dice-guardians-module/dist/lib/audio.js");

    var Tutorial = /*#__PURE__*/function () {
      function Tutorial(red, blue) {
        _classCallCheck(this, Tutorial);

        this.events = events_1.EVENTS;
        this.emitNonce = 0;
        this.emits = [{
          text: 'Hello! My name is Marla. Welcome to Dice Guardians. Click the "Got it" button to advance in the tutorial'
        }, {
          text: 'Let\'s start with the basics! I will point out parts of the screen with a white aura like the one around my Player Card',
          target: '.user-card-blue'
        }, {
          text: 'You can see your stats and avatar in the Player Card at the bottom right corner',
          target: '.user-card-red'
        }, {
          text: 'Your name and score. As you advance through the dungeon it will increase',
          target: '.user-card-red .user-chips'
        }, {
          text: 'This is your energy pool. It fills by rolling your dice.',
          target: '.user-card-red app-energy-pool'
        }, {
          text: 'Your dice pool acts as a deck of dice. You can see each of their 6 faces by placing your mouse over them. Click on them to add them to the rolling area.',
          target: '.user-card-red .player-dice-pool'
        }, {
          text: 'Each player rolls 3 dice at the start of their turn. The collected energy will serve to summon creatures and activate their abilities',
          target: '.user-card-red .selected-dice'
        }, {
          text: 'Now click on "ROLL DICE" to test your luck and collect the energy.',
          target: '.user-card-red .rollDiceButton'
        }, {
          text: 'Amazing! Your energy pool has increased!',
          target: '.user-card-red app-energy-pool'
        }, {
          text: 'Get a clear view of your deck using the "Toggle Deck View" button underneath',
          target: '.viewDeckButton'
        }, {
          text: 'Now it\'s time to play some cards. Place your mouse over any to open their menu. Use the "View" option to open the fullscreen card inspector. If you have enough energy of their type a "Cast" button will appear as well',
          target: '.bottom-drawer'
        }, {
          text: 'Click on an empty dungeon tile to summon your creature',
          target: 'app-board'
        }, {
          text: 'Creatures emerge from a cube-like egg. Select 5 more tiles where to place each face of the egg and extend your dungeon path',
          target: 'app-board'
        }, {
          text: 'After all 6 faces are unfolded your turn continues. Every creature can attack once and move once every turn. Let\'s start with the latter. Click on your creature to open it\'s menu. Then, select [Move]',
          target: 'app-board-battler'
        }, {
          text: 'The objective of this first dungeon is to conquest the blue tile in front of the door. Go!',
          target: '.rival-tile'
        }];
        this.displayButton = "block";
        this.red = red;
        this.blue = blue;
        this.listeners();
      }

      _createClass(Tutorial, [{
        key: "listeners",
        value: function listeners() {
          var _this3 = this;

          var self = this;
          /*
              self.events.emit('tutorial', {
                text : 'Hello and welcome to Dice Guardians!',
              })
          
              self.events.emit('tutorial', {
                text: 'My name is Marcia and I\'ll guide you on your first game',
              })
          
              self.events.emit('tutorial', {
                text: 'This is a very early demo so Beware of Dragons! 🐉🐉🐉'
          
              })*/

          this.events.on('splashHidden', function (payload) {
            return __awaiter(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      //await self.sleep(1000)
                      self.forward();

                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            }));
          });
          this.events.on('castBg', function (payload) {
            console.log('tutorial castBg', payload);
          });
          this.events.on('castFn', function (payload) {
            console.log('tutorial castFn', payload);
          });
          this.events.on('moveBg', function (payload) {
            console.log('tutorial moveBg', payload);
          });
          this.events.on('moveStep', function (payload) {
            console.log('tutorial moveFn', payload);

            if (payload.cell.x === 0 && payload.cell.y === 4) {
              console.log('first');
              self.emits.unshift({
                text: 'Congratulations! You have conquered the first of the 3 rooms in the Demo. Let\'s advance your creature to the next room'
              });
              self.events.emit('roomFinished', {});
              self.forward();
            }
          });
          this.events.on('unfold', function (payload) {
            console.log('tutorial unfold', payload);
          });
        }
      }, {
        key: "sleep",
        value: function sleep() {
          var ts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    return _context10.abrupt("return", new Promise(function (resolve, reject) {
                      setTimeout(function () {
                        resolve();
                      }, ts);
                    }));

                  case 1:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10);
          }));
        }
      }, {
        key: "forward",
        value: function forward() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var item, audio, el, prev, i;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    if (!(this.emits.length < this.emitNonce)) {
                      _context11.next = 3;
                      break;
                    }

                    this.displayButton = "none";
                    return _context11.abrupt("return");

                  case 3:
                    this.displayButton = "block";
                    item = this.emits[this.emitNonce];
                    this.emitNonce += 1;
                    audio = new audio_1.DGAudio('assets/audio/Decision2.wav');
                    audio.play();

                    if (!item['target']) {
                      _context11.next = 15;
                      break;
                    }

                    el = document.querySelector(item.target);

                    if (el) {
                      _context11.next = 12;
                      break;
                    }

                    throw new Error('target not found');

                  case 12:
                    prev = document.querySelectorAll('.tutorialActive');

                    for (i = 0; i < prev.length; i++) {
                      prev[i].classList.remove('tutorialActive');
                    }

                    el.classList.add('tutorialActive');

                  case 15:
                    this.events.emit('tutorial', item);
                    /*
                    self.events.emit('tutorial', {
                      text: 'This is your energy pool. At the start of every turn each player rolls 3 dice to collect energy'
                    })
                             self.events.emit('tutorial', {
                      text: 'This is your dice pool. Select up to three dice by clicking on them'
                    })
                             self.events.emit('tutorial', {
                      text: 'Click the "ROLL DICE" button to go for a spin and collect some energy'
                    })*/

                  case 16:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "backward",
        value: function backward() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var item, audio, el, prev, i;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    if (!(this.emitNonce <= 0)) {
                      _context12.next = 2;
                      break;
                    }

                    return _context12.abrupt("return");

                  case 2:
                    this.displayButton = "block";
                    item = this.emits[this.emitNonce];
                    this.emitNonce -= 1;
                    audio = new audio_1.DGAudio('assets/audio/Decision2.wav');
                    audio.play();

                    if (!item['target']) {
                      _context12.next = 14;
                      break;
                    }

                    el = document.querySelector(item.target);

                    if (el) {
                      _context12.next = 11;
                      break;
                    }

                    throw new Error('target not found');

                  case 11:
                    prev = document.querySelectorAll('.tutorialActive');

                    for (i = 0; i < prev.length; i++) {
                      prev[i].classList.remove('tutorialActive');
                    }

                    el.classList.add('tutorialActive');

                  case 14:
                    this.events.emit('tutorial', item);

                  case 15:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }]);

      return Tutorial;
    }();

    exports.Tutorial = Tutorial;
    /***/
  },

  /***/
  "./dice-guardians-module/dist/lib/user.js":
  /*!************************************************!*\
    !*** ./dice-guardians-module/dist/lib/user.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function diceGuardiansModuleDistLibUserJs(module, exports, __webpack_require__) {
    "use strict";

    var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.User = void 0;

    var User = /*#__PURE__*/function () {
      function User(ctx) {
        _classCallCheck(this, User);

        this.ctx = ctx;
      }

      _createClass(User, [{
        key: "register",
        value: function register(username, email, password, voucher) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var res;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    console.log('register init');
                    _context13.next = 3;
                    return this.ctx.http.post('register', {
                      username: username,
                      email: email,
                      password: password,
                      voucher: voucher
                    });

                  case 3:
                    res = _context13.sent;
                    console.log('register', res);

                  case 5:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }]);

      return User;
    }();

    exports.User = User;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | home-home-module */
        [__webpack_require__.e("default~home-home-module~pages-battlefield-battlefield-module~pages-card-viewer-card-viewer-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'lounge',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-lounge-lounge-module */
        "pages-lounge-lounge-module").then(__webpack_require__.bind(null,
        /*! ./pages/lounge/lounge.module */
        "./src/app/pages/lounge/lounge.module.ts")).then(function (m) {
          return m.LoungePageModule;
        });
      }
    }, {
      path: 'battlefield',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-battlefield-battlefield-module */
        [__webpack_require__.e("default~home-home-module~pages-battlefield-battlefield-module~pages-card-viewer-card-viewer-module"), __webpack_require__.e("pages-battlefield-battlefield-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/battlefield/battlefield.module */
        "./src/app/pages/battlefield/battlefield.module.ts")).then(function (m) {
          return m.BattlefieldPageModule;
        });
      }
    }, {
      path: 'card-viewer',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-card-viewer-card-viewer-module */
        [__webpack_require__.e("default~home-home-module~pages-battlefield-battlefield-module~pages-card-viewer-card-viewer-module"), __webpack_require__.e("pages-card-viewer-card-viewer-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/card-viewer/card-viewer.module */
        "./src/app/pages/card-viewer/card-viewer.module.ts")).then(function (m) {
          return m.CardViewerPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this4 = this;

          this.platform.ready().then(function () {
            _this4.statusBar.styleDefault();

            _this4.splashScreen.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_dice_guardians_module_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/dice-guardians-module.service */
    "./src/app/services/dice-guardians-module.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, _services_dice_guardians_module_service__WEBPACK_IMPORTED_MODULE_10__["DiceGuardiansModuleService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/services/dice-guardians-module.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/services/dice-guardians-module.service.ts ***!
    \***********************************************************/

  /*! exports provided: DiceGuardiansModuleService */

  /***/
  function srcAppServicesDiceGuardiansModuleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiceGuardiansModuleService", function () {
      return DiceGuardiansModuleService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var dice_guardians_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! dice-guardians-module */
    "./dice-guardians-module/dist/index.js");
    /* harmony import */


    var dice_guardians_module__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dice_guardians_module__WEBPACK_IMPORTED_MODULE_4__);

    var DiceGuardiansModuleService = function DiceGuardiansModuleService(httpClient, animationCtrl, platform) {
      var _this5 = this;

      _classCallCheck(this, DiceGuardiansModuleService);

      var self = this;
      this.platform = platform;
      this.animationCtrl = animationCtrl;
      this.map = new dice_guardians_module__WEBPACK_IMPORTED_MODULE_4__["Map"](this, [//Room0
      dice_guardians_module__WEBPACK_IMPORTED_MODULE_4__["Room1"]]);
      this.board = new dice_guardians_module__WEBPACK_IMPORTED_MODULE_4__["Board"](this, [dice_guardians_module__WEBPACK_IMPORTED_MODULE_4__["Room0"], dice_guardians_module__WEBPACK_IMPORTED_MODULE_4__["Room1"]], {
        red: new dice_guardians_module__WEBPACK_IMPORTED_MODULE_4__["Player"](dice_guardians_module__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_RED"], this),
        blue: new dice_guardians_module__WEBPACK_IMPORTED_MODULE_4__["Player"](dice_guardians_module__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_BLUE"], this)
      }, true);
      this.board.players.red.energyPool.mint('water', 3);
      this.board.players.red.energyPool.mint('wood', 3);
      this.board.players.red.energyPool.mint('neutral', 1);
      this.board.players.blue.energyPool.mint('fire', 3);
      this.board.players.blue.energyPool.mint('metal', 1);
      this.board.players.blue.energyPool.mint('light', 2);
      this.platform.ready().then(function () {
        _this5.board.events.emit('ready', {});
      });
      /*
      this.httpClient = httpClient
           this.baseUrl = 'http://' + window.location.hostname + ':3000/'
           this.http = Http(this)
      // instantiate the goddamn user
      this.user = new User(this)*/
    };

    DiceGuardiansModuleService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    DiceGuardiansModuleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], DiceGuardiansModuleService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /mnt/d/Projects/dice-guardians/app/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map