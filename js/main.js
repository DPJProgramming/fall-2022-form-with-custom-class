var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
var myGame = new VideoGame();
myGame.title = "Dark Souls";
myGame.rating = "M";
myGame.onlineOnly = false;
window.onload = function () {
    var addButton = document.querySelector("input[type=button]");
    addButton.onclick = addVideoGame;
};
function addVideoGame() {
    if (isAllDataValid) {
        var game = getVideoGame;
        displayGame(game);
    }
}
function getVideoGame() {
}
function displayGame(myGame) {
}
function isAllDataValid() {
}
