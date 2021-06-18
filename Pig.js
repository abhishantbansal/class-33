class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
 //this.Visiblity=255;
    this.flag = true;
  }
display()
{
  //console.log(this.body.)
if((this.body.speed)<2.5)
{super.display();
}else
{
World.remove(world,this.body)  
if (this.flag ===true){
  score = score+50
  this.flag = false;
}

//push();
//tint(255,this.Visiblity)

//do nothing
//image(this.image,this.body.position.x,this.body.position.y,50,50)
//pop();
}}
};


