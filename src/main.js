let showCredits = false;
let showChapterScreen = false;
let showMenu = true;
let background = 'schoolimage';
let l = 1280;
let w = 720;


function setBackground(color) {
  fill(color);
  rect(0,0,l,w);
}

let buttons = [];


function setup() {
  createCanvas(l, w);
}


function mouseClicked() {
  for (let button of buttons) {
    if (((mouseX >= button.x) && (mouseX <= (button.x + button.length))) && ((mouseY >= button.y) && (mouseY <= (button.y + button.width))) && button.drawn) {
      button.onClick();
    }
  }
}


class Inject {
  constructor(func = 'none') {
    this.func = func;
  }
}


let drawInject = new Inject(() => {});
let choicesInject = new Inject(() => {});

function draw() {
  setup();
  if (showMenu) {menu();}
  if (showChapterScreen) {chapters();}
  if (showCredits) {credits();}
  drawInject.func();
  choicesInject.func();
}