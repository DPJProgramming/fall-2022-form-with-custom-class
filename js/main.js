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
    var game = getVideoGame();
    clearErrors();
    if (isDataValid(game)) {
        displayGame(game);
    }
}
function getVideoGame() {
    var game = new VideoGame();
    game.title = fromId("title").value;
    game.price = parseFloat(fromId("price").value);
    game.rating = fromId("MaRating").value;
    game.genre = fromId("genre").value;
    var onlineOnly = fromId("online");
    if (onlineOnly.checked) {
        game.onlineOnly = true;
    }
    else {
        game.onlineOnly = false;
    }
    return game;
}
function displayGame(game) {
    var gameList = fromId("gameList");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = game.title;
    var gameInfo = document.createElement("p");
    gameList.appendChild(gameHeading);
    gameList.appendChild(gameInfo);
    var isOnlineOnly = "";
    if (!game.onlineOnly) {
        isOnlineOnly = "Come to the store for your physical copy.";
    }
    else {
        isOnlineOnly = "It is Online Only.";
    }
    gameInfo.innerText = "".concat(game.title, " has a rating of ").concat(game.rating, " and costs $").concat(game.price.toFixed(2), ". ").concat(isOnlineOnly, ".");
}
function isDataValid(game) {
    var errorList = fromId("validation-summary");
    var valid = true;
    if (game.title == "") {
        if (fromId("title-error") == null) {
            var noTitle = document.createElement("p");
            noTitle.id = "title-error";
            noTitle.innerText = "Game title required";
            errorList.appendChild(noTitle);
        }
        valid = false;
    }
    if (fromId("price").value == "" || isNaN(game.price)) {
        if (fromId("price-error") == null) {
            var noPrice = document.createElement("p");
            noPrice.id = "price-error";
            noPrice.innerText = "Please enter a price as a number";
            errorList.appendChild(noPrice);
        }
        valid = false;
    }
    if (game.genre == "What genre is this game") {
        if (fromId("genre-error") == null) {
            var noGenre = document.createElement("p");
            noGenre.id = "genre-error";
            noGenre.innerText = "Please choose a genre for this game";
            errorList.appendChild(noGenre);
        }
        valid = false;
    }
    if (game.rating == "Please choose a rating") {
        if (fromId("rating-error") == null) {
            var noRating = document.createElement("p");
            noRating.id = "rating-error";
            noRating.innerText = "Please choose a rating for this game";
            errorList.appendChild(noRating);
        }
        valid = false;
    }
    return valid;
}
function clearErrors() {
    if (fromId("title-error") != null) {
        fromId("title-error").remove();
    }
    if (fromId("price-error") != null) {
        fromId("price-error").remove();
    }
    if (fromId("genre-error") != null) {
        fromId("genre-error").remove();
    }
    if (fromId("rating-error") != null) {
        fromId("rating-error").remove();
    }
}
