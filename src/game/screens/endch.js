class endOfchapter {
    constructor(endtext, nextCh = null) {
        this.text = endtext;
        this.nextCh = nextCh;

        

        this.endNextBtn = new Button(600, 400, 200, 100, () => {
            runChapter(this.nextCh);
            this.endhomeBtn.drawn = false;
            this.endNextBtn.drawn = false;
        }, 'Next Chapter >', [buttons], 'black', 'white', null, 'click');
        

        this.endhomeBtn = new Button(600, 600, 200, 100, () => {
            drawInject.func = () => {};
            this.endhomeBtn.drawn = false;
            this.endNextBtn.drawn = false;
            showMenu = true;
        }, 'Back to Home', [buttons], 'black', 'white', null, 'click');

        this.draw = () => {
            fill('black');
            rect(0,0,l,w);
            fill('red');
            textAlign(CENTER);
            text(this.text, 600, 300);
            textAlign();
            this.endhomeBtn.draw();
            
            if (this.nextCh != null) {
                this.endNextBtn.draw();
            }
            
        }
    }
}