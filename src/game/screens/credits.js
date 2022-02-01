let exitCreditsBtn = new Button(570, 380, 100, 50, () => {
  showCredits = false;
}, "exit", [buttons], 'black', 'white', null, 'click'
);


function credits() {
  image(images['menuBG'],0,0,l,w);

  fill('pink');
  stroke('white');
  strokeWeight(5);
  rect(540, 15, 155, 50, 1);
  stroke('gray');
  strokeWeight(2);
  rect(400, 100, 440, 245, 1);

  textFont("georgia");
  fill("black");
  textSize(35);
  textAlign('center');
  noStroke();
  text("Credits", 615, 50);

  stroke("black");
  textAlign(RIGHT);
  strokeWeight(2);
  line(565, 55, 670, 55);

  noStroke();
  textSize(25);
  fill("black");
  text("Designer: \nArtist: \nProgramers: ", 600, 150);
  text("Sound Design: ", 600, 305);
  textAlign(LEFT);
  text("Lani F. \nAlan Z. \nTitus N.\nDanica V.A.\nNicholas L. \nAlan Z.", 660, 150);
  exitCreditsBtn.draw();
  startBtn.drawn = false;
}