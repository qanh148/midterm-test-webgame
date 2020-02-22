"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.rollResult = [0, 0];
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Play.prototype.roll = function () {
            this.removeChild(this.dice0);
            this.removeChild(this.dice1);
            this.removeChild(this.label0);
            this.removeChild(this.label1);
            //sound
            createjs.Sound.play("rollSound");
            //rand
            this.rollResult = [Math.floor(util.Mathf.RandomRange(1, 6)), Math.floor(util.Mathf.RandomRange(1, 6))];
            console.log(this.rollResult[0].toString());
            this.label0 = new objects.Label(this.rollResult[0].toString(), "24px", "Consolas", "#000000", 200, 300, true);
            this.label1 = new objects.Label(this.rollResult[1].toString(), "24px", "Consolas", "#000000", 420, 300, true);
            this.dice0 = new objects.Button(config.Game.ASSETS.getResult(this.rollResult[0]), 200, 180, true);
            this.dice1 = new objects.Button(config.Game.ASSETS.getResult(this.rollResult[1]), 420, 180, true);
            //
            this.addChild(this.dice0);
            this.addChild(this.dice1);
            this.addChild(this.label0);
            this.addChild(this.label1);
        };
        //initialize and instatiate
        Play.prototype.Start = function () {
            var _this = this;
            //sound
            createjs.Sound.registerSound("./Assets/audio/bulletFire.wav", "rollSound");
            //objects
            this.dice0 = new objects.Button(config.Game.ASSETS.getResult("1"), 200, 180, true);
            this.dice1 = new objects.Button(config.Game.ASSETS.getResult("1"), 420, 180, true);
            this.label0 = new objects.Label("1", "24px", "Consolas", "#000000", 200, 300, true);
            this.label1 = new objects.Label("1", "24px", "Consolas", "#000000", 420, 300, true);
            this.rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.rollButton.on("click", function () {
                _this.roll();
                console.log("roll!!!");
            });
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        Play.prototype.Main = function () {
            this.addChild(this.dice0);
            this.addChild(this.dice1);
            this.addChild(this.label0);
            this.addChild(this.label1);
            this.addChild(this.rollButton);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map