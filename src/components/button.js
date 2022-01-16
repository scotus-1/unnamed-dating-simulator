function Button(x,y,l,w,onClick,t='', appendTo=[], background='black',textColor='white', bgimage=null) {
  this.x = x;
  this.y = y;
  this.length = l;
  this.width = w;
  this.text = t;
  this.drawn = false;
  this.background = background;
  this.bgimage = bgimage;
  
  for (let list of appendTo) {
    list.push(this);
  }
  
  
  this.onClick = onClick;
  
  this.draw = function() {
    this.drawn = true; 
    fill(this.background);
    rect(this.x, this.y, this.length, this.width);
    fill(textColor);
    textAlign(LEFT);
    offset = this.text.length;
    text(this.text, this.x + (this.length/offset), (this.y + this.width/2 + 2));
  }
}