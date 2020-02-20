const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    intervalID: 0,
    startTimer() {
        this.intervalID = setInterval(() => {
            this.secondsPassed += 5;
            if (this.secondsPassed === 60) {
                this.minsPassed++;
                this.secondsPassed = 0;
            }
        }, 5000)
        
    },
    getTime() {
        let seconds = 0;
        if (this.secondsPassed < 10) {
            seconds = `0${this.secondsPassed}`
        } else {
            seconds = `${this.secondsPassed}`
        }
        return `${this.minsPassed}:${seconds}`
    },
    stopTimer() {
        clearInterval(this.intervalID)
    },
    resetTimer() {
        this.secondsPassed = 0;
        this.minsPassed = 0;
    }
}

export { timer }
