class Game{
    constructor(){}
    start(){
        if (gameState===0){
            background(bgImg1); 
            player=new Player();
            form=new Form();
            form.display();
        }
    }

    play(){
        background(bgImg2); 
        pikachu=createSprite(200,400,10,10);
        pikachu.addAnimation("running",pikachuImg);
        drawSprites();
    }
}