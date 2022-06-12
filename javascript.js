//going off of a coordinate x/y system
let gameBoard={    
    oneThree:"Empty",
    twoThree:"Empty",
    threeThree:"Empty", 
    oneTwo:"Empty",
    twoTwo:"Empty",
    threeTwo:"Empty",
    oneOne:"Empty",
    twoOne:"Empty",
    threeOne:"Empty",    
    
};

let oneOne, oneTwo, oneThree, twoOne,twoTWo,twoThree,threeOne,threeTwo,threeThree;

let player = {
    turn:"player",
    gameStatus:""
};

(function () {
    for(const[key,value]of Object.entries(gameBoard)){

        generateElement("button",key,"","boardContainer",key,"boardButton")

//make some indication that the button has been pressed
        document.getElementById(key).addEventListener("click",function(event){

            //create X's and O's on click
            //switch turns
            if(player.turn=="player" && this.innerHTML==""){
                //check if game status is over or not
                //if it is over stop other buttons from working
                if(player.gameStatus=="over"){
                    return;
                }
                this.innerHTML="X"                
                player.turn="computer";
                document.getElementById(key).removeEventListener("click",function(event){})
                checkWinner();
                return player.turn;
            }
            if(player.turn=="computer" && this.innerHTML==""){
                //check if game status is over or not
                if(player.gameStatus=="over"){
                    return;
                }
                this.innerHTML="O";
                player.turn="player";
                document.getElementById(key).removeEventListener("click",function(event){})
                checkWinner();
                return player.turn;
            }

            
            

        })
    }
})();

function checkWinner(){

    console.log(document.getElementById("oneOne").innerHTML)

        //check for stalemate
        if(document.getElementById("oneOne").innerHTML!=""&&document.getElementById("oneTwo").innerHTML!=""&&
        document.getElementById("oneThree").innerHTML!=""&&document.getElementById("twoOne").innerHTML!=""&&
        document.getElementById("twoTwo").innerHTML!=""&&document.getElementById("twoThree").innerHTML!=""&&
        document.getElementById("threeOne").innerHTML!=""&&document.getElementById("threeTwo").innerHTML!=""&&
        document.getElementById("threeThree").innerHTML!=""){
            generateElement("div","winnerMessage","Stalemate!","instructions","winnerMessage","")
            player.gameStatus="over";
        }




        if(document.getElementById("oneOne").innerHTML==document.getElementById("oneTwo").innerHTML && document.getElementById("oneTwo").innerHTML==
        document.getElementById("oneThree").innerHTML) {
            if(document.getElementById("oneOne").innerHTML=="X"){
                generateElement("div","winnerMessage","Player 1 Won!","instructions","winnerMessage","")
                player.gameStatus="over";
            }
            if(document.getElementById("oneOne").innerHTML=="O"){
                generateElement("div","winnerMessage","Player 2 Won!","instructions","winnerMessage","")
                player.gameStatus="over";
            }
        }

        if(document.getElementById("twoOne").innerHTML==document.getElementById("twoTwo").innerHTML && document.getElementById("twoTwo").innerHTML==
        document.getElementById("twoThree").innerHTML) {
            if(document.getElementById("twoOne").innerHTML=="X"){
                generateElement("div","winnerMessage","Player 1 Won!","instructions","winnerMessage","")
                player.gameStatus="over";
            }
            if(document.getElementById("twoOne").innerHTML=="O"){
                generateElement("div","winnerMessage","Player 2 Won!","instructions","winnerMessage","")
                player.gameStatus="over";
            }
        }

        if(document.getElementById("threeOne").innerHTML==document.getElementById("threeTwo").innerHTML && document.getElementById("threeTwo").innerHTML==
        document.getElementById("threeThree").innerHTML) {
            if(document.getElementById("threeOne").innerHTML=="X"){
                generateElement("div","winnerMessage","Player 1 Won!","instructions","winnerMessage","")
                player.gameStatus="over";
            }
            if(document.getElementById("threeOne").innerHTML=="O"){
                generateElement("div","winnerMessage","Player 2 Won!","instructions","winnerMessage","")
                player.gameStatus="over";
            }
        }

        if(document.getElementById("oneThree").innerHTML==document.getElementById("twoThree").innerHTML && document.getElementById("oneThree").innerHTML==
        document.getElementById("threeThree").innerHTML) {
            if(document.getElementById("oneThree").innerHTML=="X"){
                generateElement("div","winnerMessage","Player 1 Won!","instructions","winnerMessage","")
                player.gameStatus="over";
            }
            if(document.getElementById("oneThree").innerHTML=="O"){
                generateElement("div","winnerMessage","Player 2 Won!","instructions","winnerMessage","")
                player.gameStatus="over";
            }
        }

        if(document.getElementById("oneTwo").innerHTML==document.getElementById("twoTwo").innerHTML && document.getElementById("threeTwo").innerHTML==
        document.getElementById("oneTwo").innerHTML) {
            if(document.getElementById("oneTwo").innerHTML=="X"){
                generateElement("div","winnerMessage","Player 1 Won!","instructions","winnerMessage","")
                player.gameStatus="over";
            }
            if(document.getElementById("oneTwo").innerHTML=="O"){
                generateElement("div","winnerMessage","Player 2 Won!","instructions","winnerMessage","")
                player.gameStatus="over";
            }
        }

        if(document.getElementById("oneOne").innerHTML==document.getElementById("twoOne").innerHTML && document.getElementById("threeOne").innerHTML==
        document.getElementById("oneOne").innerHTML) {
            if(document.getElementById("oneOne").innerHTML=="X"){
                generateElement("div","winnerMessage","Player 1 Won!","instructions","winnerMessage","")
                player.gameStatus="over";
            }
            if(document.getElementById("oneOne").innerHTML=="O"){
                generateElement("div","winnerMessage","Player 2 Won!","instructions","winnerMessage","")
                player.gameStatus="over";
            }
        }
        
        if(document.getElementById("oneOne").innerHTML==document.getElementById("twoTwo").innerHTML && document.getElementById("twoTwo").innerHTML==
        document.getElementById("threeThree").innerHTML) {
            if(document.getElementById("oneOne").innerHTML=="X"){
                generateElement("div","winnerMessage","Player 1 Won!","instructions","winnerMessage","")
                player.gameStatus="over";
            }
            if(document.getElementById("oneOne").innerHTML=="O"){
                generateElement("div","winnerMessage","Player 2 Won!","instructions","winnerMessage","")
                player.gameStatus="over";
            }
        }
        
        if(document.getElementById("oneThree").innerHTML==document.getElementById("twoTwo").innerHTML && document.getElementById("threeOne").innerHTML==
        document.getElementById("oneThree").innerHTML) {
            if(document.getElementById("oneThree").innerHTML=="X"){
                generateElement("div","winnerMessage","Player 1 Won!","instructions","winnerMessage","")
                player.gameStatus="over";
            }
            if(document.getElementById("oneThree").innerHTML=="O"){
                generateElement("div","winnerMessage","Player 2 Won!","instructions","winnerMessage","")
                player.gameStatus="over";
            }
        }
}



function generateElement(whatIsIt,entryName,innerHTML,whereToPut,id,chosenClass){

    let generateWhat = whatIsIt;
    let generateEntry = entryName;
    let generateWhere = whereToPut;
    let generateHTML = innerHTML;
    let generateId=id;
    let generateClass=chosenClass;

    generateEntry = document.createElement(generateWhat);
    generateEntry.setAttribute("id",generateId);
    generateEntry.setAttribute("class",generateClass);
    generateEntry.innerHTML=generateHTML;
    document.getElementById(generateWhere).appendChild(generateEntry);
}
