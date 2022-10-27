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
    if(isAllDataValid){
        let game = getVideoGame;
        //displayGame(game);
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

function displayGame(myGame:VideoGame):void{

}

function isAllDataValid(){

}