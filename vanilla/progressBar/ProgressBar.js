class ProgressBar {
  constructor(progressBarId) {
    this.currentProgress = 0;
    this.currentNumber = null;
    this.queue = [];
    this.intervalId = null;
    this.progressBarElement = progressBarId;
  }

  queueNumber(number) {
      this.queue.push(number);
      if (this.currentNumber === null) {
          this.start()
      }
  }
    
  start() {
    if (this.currentNumber === null && this.queue.length > 0) {
      this.currentNumber = this.queue.shift();
      var perSecondIncrease = 100 / this.currentNumber;
      this.intervalId = setInterval(() => {
        this.currentProgress += perSecondIncrease;
        var progressBar = document.querySelector(`#${this.progressBarElement}`)
        progressBar.value = this.currentProgress;
          if (this.currentProgress >= 100) {
            clearInterval(this.intervalId);
            this.currentNumber = null;
            this.currentProgress = 0;
            this.start();
          }
      }, 1000);
    }
  }
}

export default ProgressBar;
