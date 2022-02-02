let showCredits = false;
let showChapterScreen = false;
let showMenu = true;
let background = 'schoolimage';
let nameInput;
let username;
let l = 1280;
let w = 720;


function setBackground(color) {
  fill(color);
  rect(0,0,l,w);
}

let buttons = [];


function setup() {
  document.getElementById('loading').remove();
  createCanvas(l, w);
  nameInput = createInput('');
  nameInput.position(400, 100);
  nameInput.size(400);
  nameInput.input(() => {
    username = nameInput.value();
    if (nameInput.value().length > 15) {
      nameInput.value(nameInput.value().slice(0, -1));
    }
  });
  
  audio['chbgm'].loop();
  audio['chbgm'].setVolume(0.1);
  audio['chbgm'].stop();
  audio['menubgm'].loop();
  audio['menubgm'].setVolume(0.1);
  audio['menubgm'].play();
  

}


function mouseClicked() {
  for (let button of buttons) {
    if (((mouseX >= button.x) && (mouseX <= (button.x + button.length))) && ((mouseY >= button.y) && (mouseY <= (button.y + button.width))) && button.drawn) {
      button.onClick();
      if (button.audio != null || button.audio != undefined){
        audio[button.audio].play(); 
      }
    }
  }
}


class Inject {
  constructor(func = 'none') {
    this.func = func;
  }
}


let drawInject = new Inject(() => {});

function draw() {
  if (showMenu) {menu();}
  if (showChapterScreen == true) {
    chapters();
    nameInput.show();
  } else {
    nameInput.hide();
  }
  if (showCredits) {credits();}
  drawInject.func();
}