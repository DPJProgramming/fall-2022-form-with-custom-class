//create class
class VideoGame{
    title:string;
    price:number;
    genre:string;
    rating:string;
    onlineOnly:boolean;
}

function fromId(id:string){
    return document.getElementById(id);
}

window.onload = function(){
    let addButton = <HTMLElement>document.querySelector("input[type=button]");
    addButton.onclick = addVideoGame;
}

/**
 * calls the get VideoGame function, then isDataValid, 
 * clears the error field with clearErrors, then displayGame.
 */
function addVideoGame(){
    let game = getVideoGame();

    //will clear errors if they exist. If they were 
    //fixed, they will not reappear
    clearErrors();

    if(isDataValid(game)){
        displayGame(game);
    }
}

/**
 * retrieves data from form about the game to be added to list.
 * @returns VideoGame
 */
function getVideoGame():VideoGame{
    let game = new VideoGame();
    game.title = (<HTMLInputElement>fromId("title")).value;
    game.price = parseFloat((<HTMLInputElement>fromId("price")).value);
    game.rating = (<HTMLSelectElement>fromId("MaRating")).value;
    game.genre = (<HTMLSelectElement>fromId("genre")).value;


    let onlineOnly = <HTMLInputElement>fromId("online");
    if(onlineOnly.checked){
        game.onlineOnly = true;
    }
    else{
        game.onlineOnly = false;
    }
    return game;
}

/**
 * displays game information from form into the space below the form
 * @param game 
 */
function displayGame(game:VideoGame):void{
    let gameList = fromId("gameList");

    //create h2 with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = game.title;

    //create paragraph with game details
    let gameInfo = document.createElement("p");

    //add h2 to gameList div
    gameList.appendChild(gameHeading);
    gameList.appendChild(gameInfo);

    let isOnlineOnly = "";
    if(!game.onlineOnly){
        isOnlineOnly = "Come to the store for your physical copy.";
    }
    else{
        isOnlineOnly = "It is Online Only.";
    }

    gameInfo.innerText = `${game.title} has a rating of ${game.rating} and costs $${game.price.toFixed(2)}. ${isOnlineOnly}.`;
}

/**
 * determines if all of the data in the form is valid or not
 * @param game 
 * @returns boolean
 */
function isDataValid(game:VideoGame):boolean{

    let errorList = fromId("validation-summary");
    let valid = true;

    //if title is empty
    if(game.title == ""){
        if(fromId("title-error") == null){
            let noTitle = document.createElement("p");
            noTitle.id = "title-error";
            noTitle.innerText = "Game title required";
            errorList.appendChild(noTitle);
        }
        valid = false;
    }

    //if price is empty or not a number
    if((<HTMLInputElement>fromId("price")).value == "" || isNaN(game.price)){
       
        if(fromId("price-error") == null){
            let noPrice = document.createElement("p");
            noPrice.id = "price-error";
            noPrice.innerText = "Please enter a price as a number";
            errorList.appendChild(noPrice);
        }
        valid = false;
    }

    //if no genre is selected
    if(game.genre == "What genre is this game"){

        if(fromId("genre-error") == null){
            let noGenre = document.createElement("p");
            noGenre.id = "genre-error";
            noGenre.innerText = "Please choose a genre for this game";
            errorList.appendChild(noGenre);
        }
        valid = false;
    }

    //if no rating is selected
    if(game.rating == "Please choose a rating"){

        if(fromId("rating-error") == null){
            let noRating = document.createElement("p");
            noRating.id = "rating-error";
            noRating.innerText = "Please choose a rating for this game";
            errorList.appendChild(noRating);
        }
        valid = false;
    }
    return valid;
}

/**
 * will clear errors if they exist and are fixed in the form.
 */
function clearErrors():void {
    if(fromId("title-error") != null){
        fromId("title-error").remove();
    }

    if(fromId("price-error") != null){
        fromId("price-error").remove();
    }

    if(fromId("genre-error") != null){
        fromId("genre-error").remove();
    }

    if(fromId("rating-error") != null){
        fromId("rating-error").remove();
    }
}

