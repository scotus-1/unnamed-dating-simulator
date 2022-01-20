function textBox(content, boxColor, textColor) {
  strokeWeight(5);
  stroke("white");
  fill(boxColor);
  rect(100, 500, 1080, 220, 20);
  
  
  noStroke();
  fill(textColor);
  textAlign("left");
  textSize(20);
  text(content, 120 , 520, 1050);
}

//make choices an array of dictionaries in the parameters
class Scene {
  constructor(text, img, background, chapter, choices = [], textBoxColor = "pink", textColor = '#444444') {
    this.text = text;
    this.img = img;
    this.background = background;
    this.choices = choices;
    this.textBoxColor = "pink";
    this.textColor = textColor;
    this.imgXoffset = 0;
    

    this.choiceButtons = [];
    this.choiceBtn1 = new Button(l/2, 50, 500, 100, () => {}, "", [buttons, this.choiceButtons], "pink", "black");
    this.choiceBtn2 = new Button(l/2, 200, 500, 100, () => {}, "", [buttons, this.choiceButtons], "pink", "black");
    this.choiceBtn3 = new Button(l/2, 350, 500, 100, () => {}, "", [buttons, this.choiceButtons], "pink", "black");

    let index = 0;
    for (let choice of choices) {
      this.choiceButtons[index].text = choice['text'];
      this.choiceButtons[index].onClick = () => {
        drawInject.func = choice.nextScene.draw;
      }
      index++;
    }

    chapter.push(this);

    this.draw = () => {
      image(this.background, 0, 0, l, w);
      image(this.img, 400 + this.imgXoffset, 200, 400, 400);
      textBox(this.text, this.textBoxColor, this.textColor);
    }
      

    this.showChoices = () => {
      this.imgXoffset = -375;
      for (let btn of this.choiceButtons) {
        stroke('black');
        strokeWeight(5);
        btn.draw();
      }
    }
  }
}