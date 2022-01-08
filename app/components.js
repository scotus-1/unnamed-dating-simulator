let l = 1280;
let w = 720;




function setBackground(color) {
  fill(color);
  rect(0,0,l,w);
}


let buttons = [];
let startBtn = new Button(
    w / 2 + 150,
    l / 2 - 300,
    200,
    100,
    () => {
      showChapterScreen = true;
    },
    "start",
    [buttons]
  );


let creditBtn = new Button(w / 2 + 150 ,l / 2 - 100, 200, 100, () => {
      showCredits = true;
    }, "credits", [buttons]
  );

let exitCreditsBtn = new Button(590, 360, 100, 50, () => {
  showCredits = false;
}, "exit", [buttons]
);

function menu() {
  fill("pink");
  rect(0, 0, l, w);
  textSize(50);
  fill("black");
  textFont("Georgia");
  
  textAlign("center");
  text("UNNAMED DATING SIM", l / 2, 200);
  if (showCredits == false) {
    startBtn.draw();
    creditBtn.draw();
  } else {
    startBtn.drawn = false;
    creditBtn.drawn = false;
  }
}


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


function Scene(text, img, background, chapter, choices=[], textBoxColor = "pink", textColor='#444444') {
  this.text = text;
  this.img = img;
  this.background = background;
  this.choices = choices;
  this.textBoxColor = "pink";
  this.textColor = textColor
  chapter.push(this);

  
  this.draw = () => {
    image(this.background, 0, 0, l, w);
    image(this.img, 400, 200, 400, 400);
    textBox(this.text, this.textBoxColor, this.textColor);
  };
}

function credits() {
  setBackground('pink')
  textFont("georgia");
  fill("#d69d00");
  textSize(30);
  textAlign('center');
  text("Credits", 625, 50);
  stroke("#d69d00");
  textAlign(LEFT);
  strokeWeight(2);
  line(575, 60, 680, 60);
  noStroke();
  fill("black");
  text("Author: \nCoders: ", 550, 150);
  text("Lani F. \nTitus N. \nDanica V.A.\nAlan Z.\nNicholas L.", 670, 150);
  exitCreditsBtn.draw();
  startBtn.drawn = false;
}

let chapter1Btn = new Button(100, 100, 250, 100, () => {
  runChapter(ch1);
}, "Chapter One", [buttons], '#FDFD96', 'gray')

function chapters() {
  setBackground('pink');
  textSize(20);
  textAlign('center');
  noStroke();
  chapter1Btn.draw();
}

function runChapter(chapter) {
  let currentScene = chapter[0];
  drawInject.func = currentScene.draw;
  
}