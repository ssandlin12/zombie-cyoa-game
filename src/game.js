/* create a class for a text based game that allows you to choose different text button options and then based on what you pick, your character lives or dies and you get new button prompts */
class Game {
    constructor() {
        this.gameOver = false;
        this.gameWon = false;
        this.gameLost = false;
        this.gameStarted = false;
        this.gamePaused = false;
        this.gameRestarted = false;
        this.gameQuit = false;
        this.gameSaved = false;
        this.gameLoaded = false;
        this.gameName = "Choose Your Own Adventure: Zombie Edition";
        this.gameAuthor = "Stephen Sandlin";
        this.gameVersion = "0.0.1";
        this.gameReleaseDate = "2023-09-22";
        this.gameLastUpdated = "2017-09-22";
        this.gameCredits = "Stephen Sandlin";
        this.gameLicense = "MIT";
        this.gameWebsite = "";
    }
}
