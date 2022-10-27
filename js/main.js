var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
function fromId(id) {
    return document.getElementById(id);
}
window.onload = function () {
    var addButton = document.querySelector("input[type=button]");
    addButton.onclick = addVideoGame;
};
function addVideoGame() {
    if (isAllDataValid) {
        var game = getVideoGame;
    }
}
function getVideoGame() {
    var game = new VideoGame();
    game.title = fromId("title").value;
    game.price = parseFloat(fromId("price").value);
    game.rating = fromId("MaRating").value;
    var onlineOnly = fromId("online");
    if (onlineOnly.checked) {
        game.onlineOnly = true;
    }
    else {
        game.onlineOnly = false;
    }
    return game;
}
function displayGame(myGame) {
}
function isAllDataValid() {
}
