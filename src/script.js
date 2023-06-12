class Game {
    constructor(story) {
        this.story = story;
        this.currentArea = "aisle1";
        this.opener = story.opener.openerText;
        document.getElementById("opener").innerHTML = this.opener;
    }

    startGame() {
        document.getElementById("new-game").style.display = "none";
        document.getElementById("game-active").style.display = "flex";
        document.getElementById("game-over").style.display = "none"; // Hide the game-over section.
        this.renderStory(this.currentArea);
    }

    renderStory(area) {
        let story = this.story[area];
        document.getElementById('description').innerHTML = story.storyPrompt;
        document.querySelector('#game-active #preview-image img').src = story.image; // Update the image source
        for (let i = 1; i <= 3; i++) {
            let button = document.getElementById('button' + i);
            if (story.choices[i-1]) {
                button.style.display = 'block';
                button.innerHTML = story.choices[i-1].text;
                button.onclick = () => {
                    if(story.choices[i-1].outcome === 'gameOver') {
                        this.gameOver(story.choices[i-1].destination, this.story[story.choices[i-1].destination].image);
                    } else {
                        this.renderStory(story.choices[i-1].destination);
                    }
                };

            } else {
                button.style.display = 'none';
            }
        }
    }

    gameOver(destination, gameOverImage) {
        document.getElementById("game-active").style.display = "none";
        document.getElementById("game-over").style.display = "flex";
        document.getElementById("game-over-text").innerHTML = this.story[destination].storyPrompt; // Update the game over reason with the corresponding story prompt.
        document.querySelector('#game-over img').src = gameOverImage; // Update the game over image.
    }
}

const game = new Game(zombiesAtWalmart);

document.getElementById("start-button").addEventListener("click", () => game.startGame());
document.getElementById("try-again").addEventListener("click", () => location.reload()); // Add event listener to 'try-again' button.
