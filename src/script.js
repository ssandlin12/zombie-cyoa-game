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
        this.renderStory(this.currentArea);
    }

    renderStory(area) {
        let story = this.story[area];
        document.getElementById('description').innerHTML = story.storyPrompt;
        for (let i = 1; i <= 4; i++) {
            let button = document.getElementById('button' + i);
            if (story.choices[i-1]) {
                button.style.display = 'block';
                button.innerHTML = story.choices[i-1].text;
                button.onclick = () => this.renderStory(story.choices[i-1].destination);
            } else {
                button.style.display = 'none';
            }
        }
    }
}

const game = new Game(zombiesAtWalmart);

document.getElementById("start-button").addEventListener("click", () => game.startGame());
