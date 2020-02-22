module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        dice0: objects.Button;
        dice1: objects.Button;
        label0:objects.Label;
        label1:objects.Label;
        rollButton: objects.Button;
        rollResult: number[] =[0,0] ;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public roll(): void
        {
            this.removeChild(this.dice0);
            this.removeChild(this.dice1);
            this.removeChild(this.label0);
            this.removeChild(this.label1);
            //sound
            createjs.Sound.play("rollSound");
            //rand
            this.rollResult= [Math.floor(util.Mathf.RandomRange(1,6)),Math.floor(util.Mathf.RandomRange(1,6))];
            console.log(this.rollResult[0].toString());
            this.label0 = new objects.Label(this.rollResult[0].toString(), "24px", "Consolas", "#000000", 200, 300, true);
            this.label1 = new objects.Label(this.rollResult[1].toString(), "24px", "Consolas", "#000000", 420, 300, true);
            this.dice0 = new objects.Button(config.Game.ASSETS.getResult(this.rollResult[0]),200,180,true);
            this.dice1 = new objects.Button(config.Game.ASSETS.getResult(this.rollResult[1]),420,180,true);
            //
            this.addChild(this.dice0);
            this.addChild(this.dice1);
            this.addChild(this.label0);
            this.addChild(this.label1);
        }
        //initialize and instatiate
        public Start(): void 
        {
            //sound
            createjs.Sound.registerSound("./Assets/audio/bulletFire.wav", "rollSound");
            //objects
            this.dice0 = new objects.Button(config.Game.ASSETS.getResult("1"),200,180,true);
            this.dice1 = new objects.Button(config.Game.ASSETS.getResult("1"),420,180,true);
            this.label0 = new objects.Label("1", "24px", "Consolas", "#000000", 200, 300, true);
            this.label1 = new objects.Label("1", "24px", "Consolas", "#000000", 420, 300, true);
            this.rollButton = new objects.Button(config.Game.ASSETS.getResult("button"),320,430,true);
            
            this.rollButton.on("click", ()=>{
                this.roll();
                console.log("roll!!!")
            });
             this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {
            this.addChild(this.dice0);
            this.addChild(this.dice1);
            this.addChild(this.label0);
            this.addChild(this.label1);
            this.addChild(this.rollButton);
        }

        
    }
}