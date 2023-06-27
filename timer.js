class Timer {
    constructor (durationInput, startButton, pauseButton, callBacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if (callBacks) {
            this.onStart = callBacks.onStart;
            this.onTick = callBacks.onTick;
            this.onStop = callBacks.onStop;
        }
        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click', this.pause)
    }

start = () => {
    if (this.onStart) {
        this.onStart(this.timeRemaining);
    }
    this.tick();
    this.interval = setInterval(this.tick, 20)  
}

tick = () => {
    
    if (this.timeRemaining <= 0) {
        this.pause()
        if (this.onStop){
            this.onStop();
        }
    }  else {
        this.timeRemaining = this.timeRemaining - .02;
        if (this.onTick) {
            this.onTick(this.timeRemaining);
        }
    }
     
}

get timeRemaining () {
        return parseFloat(this.durationInput.value);
}

set timeRemaining (time) {
    this.durationInput.value = time.toFixed(2);
}

pause = () => {
    
    clearInterval(this.interval);
}


};
