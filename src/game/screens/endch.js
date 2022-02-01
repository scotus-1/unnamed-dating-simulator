class endOfchapter {
    constructor(endtext, nextCh = null) {
        this.text = endtext;
        this.nextCh = nextCh;

        

        this.endNextBtn = new Button(500, 200, 200, 100, () => {
            runChapter(this.nextCh);
            this.endhomeBtn.drawn = false;
            this.endNextBtn.drawn = false;
        }, 'Next Chapter >', [buttons], 'gray', 'wh', null, 'click', 2);
        

        this.endhomeBtn = new Button(500, 400, 200, 100, () => {
            drawInject.func = () => {};
            this.endhomeBtn.drawn = false;
            this.endNextBtn.drawn = false;
            showMenu = true;
            audio['menubgm'].play();
        }, 'Back to Home', [buttons], 'gray', 'white', null, 'click', 2);

        this.draw = () => {
            image(images['menuBG'],0,0,l,w);

            fill('pink');
            strokeWeight(5);
            stroke('white');
            rect(400, 40, 400, 100, 4);

            fill('black');
            textSize(35);
            textAlign(CENTER);
            noStroke();
            text(this.text, 600, 100);
            textAlign();

            stroke('pink');
            strokeWeight(2);
            textSize(15);
            this.endhomeBtn.draw();
            
            if (this.nextCh != null) {
                stroke('pink');
                textSize(15);
                strokeWeight(2);
                this.endNextBtn.draw();
                
            } else {
                this.endhomeBtn.y = 200;
            }
            
        }
    }
}