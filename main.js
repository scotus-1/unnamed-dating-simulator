let showCredits = false;
let showChapterScreen = false;
let showMenu = true;
let background = 'schoolimage';



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


function Inject(func='none') {
  this.func = func;
}

let drawInject = new Inject(() => {console.log('hi');});

function draw() {
  setup();
  if (showMenu) {menu();}
  if (showChapterScreen) {chapters();}
  if (showCredits) {credits();}
  drawInject.func();
}