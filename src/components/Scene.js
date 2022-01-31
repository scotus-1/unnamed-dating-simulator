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


class Scene {
  constructor(text, img, background, chapter, choices = [], audioS, textBoxColor = "pink", textColor = '#444444', btnsTextColor = 'black') {
    this.text = text;
    this.img = img;
    this.background = background;
    this.choices = choices;
    this.textBoxColor = textBoxColor;
    this.textColor = textColor;
    this.imgXoffset = 0;
    this.btnsTextColor = btnsTextColor;
    this.audio = audioS;

    
    if (this.choices.length > 1) {
      this.choiceButtons = [];
      this.choiceBtn1 = new Button(l/2, 50, 500, 100, () => {}, "", [buttons, this.choiceButtons], "pink",'#444444');
      this.choiceBtn2 = new Button(l/2, 200, 500, 100, () => {}, "", [buttons, this.choiceButtons], "pink", '#444444');
      this.choiceBtn3 = new Button(l/2, 350, 500, 100, () => {}, "", [buttons, this.choiceButtons], "pink", '#444444');

      let index = 0;
      for (let choice of this.choices) {
        this.choiceButtons[index].text = choice['text'];
        this.choiceButtons[index].onClick = () => {
          drawInject.func = choice['nextScene'].draw;
          if (choice['nextScene'].audio != null) {
            audio[choice['nextScene'].audio].play();
            audio[this.audio].stop();
          }
          
          for (let btn of this.choiceButtons) {
            btn.drawn = false;
          }
        }
        index++;
      }
  }
    chapter.push(this);


     
    let nextBtn = new Button(1075, 685, 60, 20, () => {
      console.log(this.choices.length);
      if (this.choices.length == 0) {
        nextBtn.drawn = false;
        homeBtn.drawn = false;
        let endchapter = new endOfchapter('End of Chapter', ch2);
        drawInject.func = endchapter.draw;
        
      } else {
        drawInject.func = this.choices[0].draw;
        nextBtn.drawn = false;
        homeBtn.drawn = false;
        if (this.audio != null && this.choices[0].audio != null){
        audio[this.choices[0].audio].play();
        audio[this.audio].stop();
      }
      }
      
    }, 'Next >', [buttons], textBoxColor, btnsTextColor, null, 'click'); 
    let homeBtn = new Button(120, 685, 60, 20, () => {
      drawInject.func = () => {};
      nextBtn.drawn = false;
      if (this.choices.length > 1){
      for (let btn of this.choiceButtons) {
        btn.drawn = false;
      }
    }
      showMenu = true;
    }, 'Home', [buttons], textBoxColor, btnsTextColor, null, 'click');

    this.draw = () => {
      image(images[this.background], 0, 0, l, w);
      image(images[this.img], 400 + this.imgXoffset, 200, 400, 400);
      
      textBox(this.text.split('$n').join(username), this.textBoxColor, this.textColor);
      homeBtn.draw();
      if (this.choices.length > 1) {
        this.showChoices();
        nextBtn.drawn = false;
      }
      else {nextBtn.draw();}
    }
      

    this.showChoices = () => {
      this.imgXoffset = -375;
      let index = 0;
      for (let choice of this.choices) {
        stroke('white'); 
        strokeWeight(3);
        this.choiceButtons[index].draw();
        index++;
      }
    }
  }
}