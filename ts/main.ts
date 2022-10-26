//create class
class VideoGame{
    title:string;
    price:number;
    rating:string;
    onlineOnly:boolean;
}

//create object
let myGame = new VideoGame();
myGame.title = "Dark Souls";
myGame.rating = "M";
myGame.onlineOnly = false;

window.onload = function(){
    let addButton = <HTMLElement>document.querySelector("input[type=button]");
    addButton.onclick = addVideoGame;
}

function addVideoGame(){
    if(isAllDataValid){
        let game = getVideoGame;
        displayGame(game);
    }
}

function getVideoGame():VideoGame{

}

function displayGame(myGame:VideoGame):void{

}

function isAllDataValid(){

}