console.log("online ni boss")

class Start {
    constructor(){
        this.playerName = "Kamu"
        this.botName = "Bot Gabut"
        this.playerOption;
        this.winner = ""
    }

    get getBotOption () {
        return this.botOption;
    }

    set setBotOption (option) {
        this.botOption = option;
    }

    get getPlayerOption () {
        return this.playerOption;
    }

    set setPlayerOption (option) {
        this.playerOption = option;
    }

    botBrain() {
        const option = ["✋", "✌", "✊"];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }

    winCalculation() {
        if (this.botOption == "✋" && this.playerOption == "✌"){ //player win
            return this.winner = this.playerName
        }else if(this.botOption == "✌" && this.playerOption == "✊"){
            return this.winner = this.playerName
        }else if(this.botOption == "✊" && this.playerOption == "✋"){
            return this.winner = this.playerName
        }else if(this.playerOption == "✋" && this.botOption == "✌"){ //bot win
            return this.winner = this.botName
        }else if(this.playerOption == "✌" && this.botOption == "✊"){
            return this.winner = this.botName
        }else if(this.playerOption == "✊" && this.botOption == "✋"){
            return this.winner = this.botName
        } else {
            return this.winner = "SERI" //tie
        }
    }

    matchResult() {
        if (this.winner !== "SERI"){
            return `GG! ${this.winner} MENANG`
        }else {
            return `GG ${this.winner}!`
        }
    }

}

function pickOption(params) {
    const start = new Start();
    start.setPlayerOption = params;
    start.setBotOption = start.botBrain()

    console.log("Bot memilih:",start.getBotOption)
    console.log("Kamu memilih:",start.getPlayerOption);

    start.winCalculation();
    console.log("Winner =",start.winner);
    console.log("Hasil Akhir:",start.matchResult());

    const inGame = document.getElementById("inGame")
    const result = document.getElementById("result")

    inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOption}`
    result.textContent = start.matchResult();
}