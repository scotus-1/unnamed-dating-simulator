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
    'black',
    'white',
    null,
    'click'
  );


let creditBtn = new Button(w / 2 + 150 ,l / 2 - 100, 200, 100, () => {
      showCredits = true;
    }, "credits", [buttons], 'black', 'white', null,  'click'
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
