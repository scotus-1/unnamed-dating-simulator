let startBtn = new Button(
    w / 2 + 150,
    l / 2 - 300,
    200,
    100,
    () => {
      showChapterScreen = true;
      showMenu = false;
      creditBtn.drawn = false;
      startBtn.drawn = false;
    },
    "start",
    [buttons],
    'gray',
    'black',
    null,
    'click', 
    2
  );


let creditBtn = new Button(w / 2 + 150 ,l / 2 - 100, 200, 100, () => {
      showCredits = true;
    }, "credits", [buttons], 'gray', 'black', null, 'click', 2
  );


function menu() {
  image(images['menuBG'],0,0,l,w);
  stroke('white');
  strokeWeight(10);
  fill('pink');
  rect(325, 125, 630, 115, 1);
  textSize(50);
  fill("black");
  textFont("Georgia");
  textAlign("center");
  noStroke();
  text("UNNAMED DATING SIM", l / 2, 200);
  if (showCredits == false) {
    stroke('pink');
    strokeWeight(3);
    startBtn.draw();
    stroke('pink');
    strokeWeight(3);
    creditBtn.draw();
  } else {
   startBtn.drawn = false;
   creditBtn.drawn = false; 
 }
}
