class Button {
  constructor(x, y, l, w, onClick, t = '', appendTo = [], background = 'black', textColor = 'white', bgimage = null, audio = null, edge = 0) {
    this.x = x;
    this.y = y;
    this.length = l;
    this.width = w;
    this.text = t;
    this.textColor = textColor;
    this.drawn = false;
    this.background = background;
    this.bgimage = bgimage;
    this.audio = audio;
    this.edge = edge;

    for (let list of appendTo) {
      list.push(this);
    }


    this.onClick = onClick;
  }


  draw() {
    this.drawn = true;
    fill(this.background);
    rect(this.x, this.y, this.length, this.width, this.edge);
    fill(this.textColor);
    if (this.bgimage != null) {image(images[this.bgimage], this.x, this.y, this.length, this.width);}
    textAlign(LEFT);
    let offset = this.text.length;
    noStroke();
    text(this.text, this.x + (this.length / offset), (this.y + this.width / 2 + 2));
  }
}