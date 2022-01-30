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



function chapters() {
    setBackground('pink');
    textSize(20);
    textAlign('center');
    noStroke();
    chapter1Btn.draw();
    
}

