function runChapter(chapter) {
    let currentScene = chapter[chapter.length - 1];
    drawInject.func = currentScene.draw;
}


let chapter1Btn = new Button(100, 100, 250, 100, () => {
    console.log('hello');
    runChapter(ch1);
  }, "Chapter One", [buttons], '#FDFD96', 'gray')
  

function chapters() {
    setBackground('pink');
    textSize(20);
    textAlign('center');
    noStroke();
    chapter1Btn.draw();
}

