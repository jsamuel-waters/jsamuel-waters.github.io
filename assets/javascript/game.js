var objScoreKeeper = {
    playerScore: 0,
    targetScore:  0,
    ruby: 0,
    emerald: 0,
    sapphire: 0,
    diamond: 0,
    keepPlaying: true,
    startGame: function() {
        //playerScore and playerWin are reset at game start
        objScoreKeeper.playerScore = 0;
        objScoreKeeper.keepPlaying = true;
        
        //set target score to a randomly selected value between 50 - 99
        objScoreKeeper.targetScore = Math.floor(Math.random() * 50 + 50);
        
        //each crystal will have a specific pattern of points
        objScoreKeeper.ruby = Math.ceil(Math.random() * 5);        //   1-5
        objScoreKeeper.sapphire = Math.ceil(Math.random() * 4 + 3);//   4-7
        objScoreKeeper.emerald = Math.ceil(Math.random() * 3 + 4); //   5-7
        objScoreKeeper.diamond = Math.ceil(Math.random() * 6 + 2); //   3-8
        console.log(objScoreKeeper.ruby);
        console.log(objScoreKeeper.sapphire);
        console.log(objScoreKeeper.emerald);
        console.log(objScoreKeeper.diamond);
        
        //!!! gameHTML needs to be declared after the crystals have had thier values randomized so that the buttons generated take the correct values
        var gameHTML = `
            <div class="justify-content-md-center">
                <button id="ruby" class="btn btn-outline-danger gem" value="`+ objScoreKeeper.ruby +`">
                    <i class="fas fa-gem fa-2x"></i>
                </button>
                
                <button id="sapphire" class="btn btn-outline-primary gem" value="`+ objScoreKeeper.sapphire +`">
                    <i class="fas fa-gem fa-2x"></i>
                </button>
                
                <button id="emerald" class="btn btn-outline-success gem" value="`+ objScoreKeeper.emerald +`">
                    <i class="fas fa-gem fa-2x"></i>
                </button>
                
                <button id="diamond" class="btn btn-outline-light gem" value="`+ objScoreKeeper.diamond +`">
                    <i class="fas fa-gem fa-2x"></i>
                </button>
            </div>`;

        //!!! 
        var scoreHTML = `
            <div id="player-score" class="score-card">
                <h2>Your Score: `+ objScoreKeeper.playerScore +`</h2>
            </div>
            <div id="target-score" class="score-card">
                <h2>Target Score: `+ objScoreKeeper.targetScore +`</h2>
            </div>`;
        
        //display game content
        $("#game").html(gameHTML);
        $("#score").html(scoreHTML);
        $("#end").html('<br><br><div id="end"></div>')
        
        //!!! The html to which a listener applies must already exist before you try to assign it
        //set event listener for gem clicks
        
        $(".btn").on("click", objScoreKeeper.addPoints);
    
        
    },
    
    addPoints: function(){

        var restartHTML = `
            <button id="restart" class="btn btn-outline-info">
                <h2>Play Again</h2>
            </button>
        `;
        console.log(objScoreKeeper.ruby);
        if (objScoreKeeper.keepPlaying == true) {
            
            objScoreKeeper.playerScore += parseInt($(this).val());
            
            if (objScoreKeeper.playerScore == objScoreKeeper.targetScore) {
                
                // player wins
                objScoreKeeper.keepPlaying = false;
                $("#end").html(`
                    <div class="score-card">
                        <h2>You Win!!</h2>
                    </div>` + restartHTML
                );

            } else if (objScoreKeeper.playerScore > objScoreKeeper.targetScore){
                
                // player loses
                objScoreKeeper.keepPlaying = false;
                $("#end").html(`
                    <div class="score-card">
                        <h2>You Lose...</h2>
                    </div>` + restartHTML
                );

            } else {
                
                // player score is low enough to continue play
                $("#end").html(`
                    <div class="score-card">
                        <h2>keep going</h2>
                    </div>
                `);
            }


            //update player score
            $("#player-score").html(`
                <div id="player-score">
                    <h2>Your Score: `+ objScoreKeeper.playerScore +`</h2>
                </div>
            `);
        };

        $("#restart").on("click", objScoreKeeper.startGame);

    },
    
};

$(document).ready(objScoreKeeper.startGame);