function runChapter(chapter) {
    if (username) {
        let currentScene = chapter[chapter.length - 1];
        showChapterScreen = false;
        drawInject.func = currentScene.draw;
    } else {
        drawInject.func = () => {text('Enter a username', 400, 200);};
    }
    
    for (let btn of chapterButtons) {
        btn.drawn = false;
    }

}

let chapterButtons = [];
let chapter1Btn = new Button(100, 100, 250, 100, () => {
    runChapter(ch1);
}, "Chapter One", [buttons, chapterButtons], '#FDFD96', 'gray');

let chapter2Btn = new Button(400, 100, 250, 100, () => {
    runChapter(ch2);
}, "Chapter Two", [buttons, chapterButtons], '#FDFD96', 'gray');

let chapter3Btn = new Button(700, 100, 250, 100, () => {
    runChapter(ch3);
}, "Chapter Three", [buttons, chapterButtons], '#FDFD96', 'gray');
  


function chapters() {
    setBackground('pink');
    textSize(20);
    textAlign('center');
    noStroke();
    chapter1Btn.draw();
    chapter2Btn.draw();
    chapter3Btn.draw();
    
}

