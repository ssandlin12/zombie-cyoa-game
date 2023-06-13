class Game {
  constructor(story) {
    this.story = story;
    this.currentArea = "aisle1";
    this.timer = null;
    this.timeRemaining = 0;
    this.opener = story.opener.openerText;
    this.gameOverStatus = false;
    document.getElementById("opener").innerHTML = this.opener;
  }

  startTimer() {
    this.timeRemaining = 10; // set time to 10 seconds
    document.getElementById("timer-text").textContent = "You've been spotted! ";
    document.getElementById("timer-text").style.color = "red";
    document.getElementById("timer-text").classList.add("timer-alert");
    document.getElementById("timer-number").style.display = "flex";
    document.getElementById("timer-number").textContent = this.timeRemaining;

    this.timer = setInterval(() => {
      this.timeRemaining--;
      document.getElementById("timer-number").textContent = this.timeRemaining;

      if (this.timeRemaining === 0 && this.gameOverStatus === false) {
        clearInterval(this.timer);
        this.gameOver("genericZombieDeath", this.story.genericZombieDeath.image);
      }
      else if (this.timeRemaining === 0 && this.gameOverStatus === true) {
        clearInterval(this.timer);}
    }, 1000); // decrement every second
  }

  stopTimer() {
    clearInterval(this.timer);
    document.getElementById("timer-text").textContent = "Not yet noticed";
    document.getElementById("timer-text").classList.remove("timer-alert");
    document.getElementById("timer-number").style.display = "none";
  }

  startGame() {
    document.getElementById("new-game").style.display = "none";
    document.getElementById("game-active").style.display = "flex";
    document.getElementById("game-over").style.display = "none"; // Hide the game-over section.
    this.renderStory(this.currentArea);
  }

  renderStory(area) {
    let story = this.story[area];
    document.getElementById("description").innerHTML = story.storyPrompt;
    document.querySelector("#game-active #preview-image img").src = story.image; // Update the image source
    for (let i = 1; i <= 3; i++) {
        let button = document.getElementById("button" + i);
        if (story.choices[i - 1]) {
          button.style.display = "block";
          button.innerHTML = story.choices[i - 1].text;
          button.onclick = () => {
            if (story.choices[i - 1].outcome === "gameOver") {
              this.gameOver(
                story.choices[i - 1].destination,
                this.story[story.choices[i - 1].destination].image
              );
            } else if (story.choices[i - 1].outcome === "continue") {
              this.currentArea = story.choices[i - 1].destination;
              this.renderStory(story.choices[i - 1].destination);
            } else if (story.choices[i - 1].outcome === "alert") {
              this.startTimer();
              this.currentArea = story.choices[i - 1].destination;
              this.renderStory(story.choices[i - 1].destination);
            } else if (story.choices[i - 1].outcome === "interject") {
              this.stopTimer();
              this.currentArea = story.choices[i - 1].destination;
              this.renderStory(story.choices[i - 1].destination);
            } else {
              this.renderStory(story.choices[i - 1].destination);
            }
          };
        } else {
          button.style.display = "none";
        }
      }
    }


  gameOver(destination, gameOverImage) {
    document.getElementById("game-active").style.display = "none";
    document.getElementById("game-over").style.display = "flex";
    document.getElementById("game-over-text").innerHTML =
      this.story[destination].storyPrompt; // Update the game over reason with the corresponding story prompt.
    document.querySelector("#game-over img").src = gameOverImage; // Update the game over image.
  }
}

const game = new Game(zombiesAtSuperMart);

document
  .getElementById("start-button")
  .addEventListener("click", () => game.startGame());
document
  .getElementById("try-again")
  .addEventListener("click", () => location.reload()); // Add event listener to 'try-again' button.
