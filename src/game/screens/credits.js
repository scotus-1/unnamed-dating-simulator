let exitCreditsBtn = new Button(590, 360, 100, 50, () => {
  showCredits = false;
}, "exit", [buttons], 'black', 'white', null, 'click'
);


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