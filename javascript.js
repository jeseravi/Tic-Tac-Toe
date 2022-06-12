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
//change the text/class of the button?
//when p1 presses a button the value changes to 1
//when p2 presses a button the value changes to -1
//need to make sure that the button can't be pressed more than once?
//when the sum of a 3 in a row combination is 3 or -3 the winner has been decided
//if there is no 3 or -3 by the time all the buttons have been pressed then it's a stalemate
        document.getElementById(key).addEventListener("click",function(event){

            //create X's and O's on click
            //switch turns
            if(player.turn=="player" && this.innerHTML==""){
                //check if game status is over or not
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
