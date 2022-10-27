//create class
class VideoGame{
    title:string;
    price:number;
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

function addVideoGame(){

    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}

function getVideoGame():VideoGame{
    let game = new VideoGame();
    game.title = (<HTMLInputElement>fromId("title")).value;
    game.price = parseFloat((<HTMLInputElement>fromId("price")).value);
    game.rating = (<HTMLSelectElement>fromId("MaRating")).value;

    let onlineOnly = <HTMLInputElement>fromId("online");
    if(onlineOnly.checked){
        game.onlineOnly = true;
    }
    else{
        game.onlineOnly = false;
    }
    return game;
}

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

function isAllDataValid(){
    return true;
}