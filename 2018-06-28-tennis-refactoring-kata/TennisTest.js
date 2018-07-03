var { TennisGame, Player } = require("./TennisGame.js");

var allScores = [
    [0, 0, "Love-All"],
    [1, 1, "Fifteen-All"],
    [2, 2, "Thirty-All"],
    [3, 3, "Deuce"],
    [4, 4, "Deuce"],

    [1, 0, "Fifteen-Love"],
    [0, 1, "Love-Fifteen"],
    [2, 0, "Thirty-Love"],
    [0, 2, "Love-Thirty"],
    [3, 0, "Forty-Love"],
    [0, 3, "Love-Forty"],
    [4, 0, "Win for player1"],
    [0, 4, "Win for player2"],

    [2, 1, "Thirty-Fifteen"],
    [1, 2, "Fifteen-Thirty"],
    [3, 1, "Forty-Fifteen"],
    [1, 3, "Fifteen-Forty"],
    [4, 1, "Win for player1"],
    [1, 4, "Win for player2"],

    [3, 2, "Forty-Thirty"],
    [2, 3, "Thirty-Forty"],
    [4, 2, "Win for player1"],
    [2, 4, "Win for player2"],

    [4, 3, "Advantage player1"],
    [3, 4, "Advantage player2"],
    [5, 4, "Advantage player1"],
    [4, 5, "Advantage player2"],
    [15, 14, "Advantage player1"],
    [14, 15, "Advantage player2"],

    [6, 4, "Win for player1"],
    [4, 6, "Win for player2"],
    [16, 14, "Win for player1"],
    [14, 16, "Win for player2"],
    [4, 2, "Win for foo", "foo", "bar"]
];

var checkScore = function(reporter, TennisGame, player1Name, player2Name, player1Score, player2Score, expectedScore) {
    var highestScore = Math.max(player1Score, player2Score);
    var game;
    var result;
    var message = "";
    var ok = false;
    var i;

    try {
        player1 = new Player(player1Name, 0)
        player2 = new Player(player2Name, 0)
        game = new TennisGame(player1, player2);
        for (i = 0; i < highestScore; i++) {
            if (i < player1Score) {
              game = game.wonPoint(player1Name);
            }
            if (i < player2Score) {
              game = game.wonPoint(player2Name);
            }
        }
        result = game.getScore();

        if (result === expectedScore) {
            ok = true;
        } else {
            message = "Result = '" + result + "'";
        }
    } catch (ex) {
        message = "Exception: " + ex;
    }

    reporter.addCase(expectedScore, ok, message);
};

var runSuiteOnGame = function(reporter, TennisGame, title) {
    reporter.addSuite(title);
    allScores.forEach(function(score) {
      const player1Name = score[3] || "player1";
      const player2Name = score[4] || "player2";
        checkScore(reporter, TennisGame, player1Name, player2Name, score[0], score[1], score[2]);
    });
};

var getConsoleReporter = function() {
    var reporter = {
        errors: 0,
        addSuite: function(title) {
            console.log("Running suite '" + title + "'...");
        },
        addCase: function(title, ok, message) {
            if (!ok) {
                console.log("Case '" + title + "': " + message);
                this.errors++;
            }
        },
        done: function() {
            if (this.errors > 0) {
                console.log("Got " + this.errors + " failure(s)!");
            } else {
                console.log("Done, all OK ");
            }
        }
    };

    return reporter;
};

var reporter = getConsoleReporter();
runSuiteOnGame(reporter, TennisGame, "TennisGame");
reporter.done();
