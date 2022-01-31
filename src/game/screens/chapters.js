function runChapter(chapter) {
    if (username) {
        let currentScene = chapter[chapter.length - 1];
        drawInject.func = currentScene.draw;
        showChapterScreen = false;
        if (currentScene.audio != null) {
        audio[currentScene.audio].play();
        }
    } else {
        drawInject.func = () => {text('Enter a username', 400, 400);};
    }
    
    for (let btn of chapterButtons) {
        console.log(btn);
        btn.drawn = false;
    }
    startBtn.drawn = false;
    creditBtn.drawn = false;
}

let chapterButtons = [];
let chapter1Btn = new Button(100, 100, 300, 200, () => {
    runChapter(ch1);
}, "Chapter One", [buttons, chapterButtons], 'white', 'black', 'hallway', 'click');
let chapter2Btn = new Button(500, 100, 300, 200, () => {
    runChapter(ch2);
}, "Chapter Two", [buttons, chapterButtons], 'white', 'black', 'script', 'click');
let chapter3Btn = new Button(900, 100, 300, 200, () => {
    runChapter(ch3);
}, "Chapter Three", [buttons, chapterButtons], 'white', 'black', 'backstage', 'click');  
let chapter4Btn = new Button(100, 500, 300, 200, () => {
    runChapter(ch4);
}, "Chapter Four", [buttons, chapterButtons], 'white', 'black', 'stage', 'click');  
let chapter5Btn = new Button(500, 500, 300, 200, () => {
    runChapter(ch5);
}, "Chapter Five", [buttons, chapterButtons], 'white', 'black', 'clapping', 'click');  



function chapters() {
    setBackground('pink');
    textSize(20);
    textAlign('center');
    noStroke();
    chapter1Btn.draw();
    chapter2Btn.draw();
    chapter3Btn.draw();
    chapter4Btn.draw();
    chapter5Btn.draw();
}

