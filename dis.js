class dis{
    constructor(){
        this.foodstock=20
        this.lastfed=0
        this.x=0
        this.image=loadImage("Milk.png")
    }
    updatefoodstock(food){
        this.foodstock=food
        database.ref('/').update({
          Food:food
        })
    }
    getfoodstock(){
        this.foodstock=foodStock
    }
    deductfood(){
       this.foodstock--;
      updatefoodstock(this.foodstock)
    }
   
    display(){
        var x=80, y=100
        imageMode(CENTER);
        //image(this.image,420,220,70,70);
        //dog.addAnimation(happydog)
        if(this.foodstock!=0){
          for(var i=0;i<this.foodstock;i++){
            if(i%10==0){
              x=80;
              y=y+70;
            }
            image(this.image,x,y,80,80);
            x=x+30;
          }
        }
      }
    
}