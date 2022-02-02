function runChapter(chapter) {
    if (username) {
        let currentScene = chapter.scenes[chapter.scenes.length - 1];
        drawInject.func = currentScene.draw;
        showChapterScreen = false;
        if (currentScene.audioS != null && currentScene.audioS != undefined) {
        audio[currentScene.audioS].play();
        }
    } else {
        drawInject.func = () => {text('Please enter a username before starting:', 400, 75);};
    }
    
    for (let btn of chapterButtons) {
        btn.drawn = false;
    }




    startBtn.drawn = false;
    creditBtn.drawn = false;
    audio['menubgm'].stop();
    audio['chbgm'].play();
    if (chapter.beforefunc != undefined) {
        chapter.beforefunc();
    }
    
}


let chapterButtons = [];
let chapter1Btn = new Button(100, 200, 300, 200, () => {
    runChapter(ch1);
}, "Chapter One", [buttons, chapterButtons], 'white', 'black', 'hallway', 2);
let chapter2Btn = new Button(500, 200, 300, 200, () => {
    runChapter(ch2);
}, "Chapter Two", [buttons, chapterButtons], 'white', 'black', 'script', 2);
let chapter3Btn = new Button(900, 200, 300, 200, () => {
    runChapter(ch3);
}, "Chapter Three", [buttons, chapterButtons], 'white', 'black', 'backstage', 'click', 2);  
let chapter4Btn = new Button(100, 500, 300, 200, () => {
    runChapter(ch4);
}, "Chapter Four", [buttons, chapterButtons], 'white', 'black', 'stage', 'click', 2);  
let chapter5Btn = new Button(500, 500, 300, 200, () => {
    runChapter(ch5);
}, "Chapter Five", [buttons, chapterButtons], 'white', 'black', 'clapping', 'click', 2);  



function chapters() {
    image(images['menuBG'],0,0,l,w);
    stroke('pink');
    strokeWeight(3);
    fill('gray');
    rect(375, 30, 460, 120, 2);
    drawInject.func = () => {text('Please enter a username before starting:', 400, 75);};
    textAlign('right');
    textSize(20);
    textAlign('center');
    noStroke();
    strokeWeight(5);
    stroke('pink');
    chapter1Btn.draw();
    strokeWeight(5);
    stroke('pink');
    chapter2Btn.draw();
    strokeWeight(5);
    stroke('pink');
    chapter3Btn.draw();
    strokeWeight(5);
    stroke('pink');
    chapter4Btn.draw();
    strokeWeight(5);
    stroke('pink');
    chapter5Btn.draw();
}

