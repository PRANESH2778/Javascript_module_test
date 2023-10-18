//rulesdisplay 
const showrules = () =>{
    var v = document.querySelector(".rulessection");
    if(v.style.display === "none"){
        v.style.display = "block";
    }
    else{
        v.style.display = "none";
    }
};

//Initial Score Set
let PLAYER = 0;
let COMPUTER = 0;

//user selection
const playerpick = (playerselect) => {
    let hide = document.querySelector('.gameicons');
    hide.style.display = "none";
    let showres = document.querySelector('.result');
    showres.style.display = "flex";
    showres.style.marginTop = "80px";
    showres.style.marginLeft = "350px";
    if(playerselect == "rock"){
        document.getElementById("p-img").src = "Rock.png";
        let bordcol = document.querySelector('.pselect-image');
        bordcol.style.borderColor = "#0074B6";
    }
    else if(playerselect == "paper"){
        document.getElementById("p-img").src = "Paper.png";
        let bordcol = document.querySelector('.pselect-image');
        bordcol.style.borderColor = "#FFA943";
    }
    else{
        document.getElementById("p-img").src = "Scissor.png";
        let bordcol = document.querySelector('.pselect-image');
        bordcol.style.borderColor = "#BD00FF";
    }
    pcselect(playerselect);    
};

//Pc selection
const pcselect = (playerselect) =>{
    let options = ["rock","paper","scissor"];
    let pcfinal = options[Math.floor(Math.random() * 3)]
    if(pcfinal == "rock")
    {
        document.getElementById("c-img").src = "Rock.png";
        let bordcol = document.querySelector('.cselect-image');
        bordcol.style.borderColor = "#0074B6";
    }
    else if(pcfinal == "paper"){
        document.getElementById("c-img").src = "Paper.png";
        let bordcol = document.querySelector('.cselect-image');
        bordcol.style.borderColor = "#FFA943";
    }
    else{
        document.getElementById("c-img").src = "Scissor.png";
        let bordcol = document.querySelector('.cselect-image');
        bordcol.style.borderColor = "#BD00FF";
    }
    winner(playerselect, pcfinal)

};

//calculating the winner
const winner = (playerselect,pcfinal)=>{
    if(playerselect == "rock" && pcfinal == "paper"){
        result("YOU LOST\n AGAINST PC")
        computerscore(COMPUTER + 1)
    } 
    if(playerselect == "rock" && pcfinal == "scissor"){
        result("YOU WIN\n AGAINST PC")
        playerscore(PLAYER + 1)
    } 
    if (playerselect == "rock" && pcfinal == "rock") {
        result("TIE UP");
      }
      if (playerselect == "scissor" && pcfinal == "paper") {
        result("YOU WIN\n AGAINST PC");
        playerscore(PLAYER + 1);
      }
      if (playerselect == "scissor" && pcfinal == "rock") {
        result("YOU LOST\n AGAINST PC");
        computerscore(COMPUTER + 1)
      }
      if (playerselect == "scissor" && pcfinal == "scissor") {
        result("TIE UP");
      }
      if (playerselect == "paper" && pcfinal == "scissor") {
        result("YOU LOST\n AGAINST PC");
        computerscore(COMPUTER + 1)
      }
      if (playerselect == "paper" && pcfinal == "rock") {
        result("YOU WIN\n AGAINST PC");
        playerscore(PLAYER + 1);
        
      }
      if (playerselect == "paper" && pcfinal == "paper") {
        result("TIE UP");
        
      }
};

//Showing Decision
const result = (resultvalue)=>{
    document.getElementById("decision").innerText = resultvalue 
    showwinner(resultvalue);
    animation(resultvalue);
};

//Play Again
const playagain = ()=>{
    let hide = document.querySelector('.gameicons');
    hide.style.display = "grid";
    let showres = document.querySelector('.result');
    showres.style.display = "none";
    let shownext1 = document.querySelector('.next-btn')
    shownext1.style.display = "none"
    let blockscore = document.querySelector('.sboard')
    blockscore.style.display = "flex"
    let blockwin = document.querySelector('.winnerpage')
    blockwin.style.display = "none"
    let rulesdis = document.querySelector('.rules')
    rulesdis.style.marginTop = "0px"
};

//Animation on Winner image
const animation = (resultvalue)=> {
    let useranimation = document.querySelector('.pselect-image');
    let pcanimation = document.querySelector('.cselect-image');
    useranimation.style.animation = "userimage 5s infinite";
    pcanimation.style.animation = "mymove 5s infinite";
    if(resultvalue == "YOU WIN\n AGAINST PC")
    {
        pcanimation.style.animation = "none";
        useranimation.style.animation = "userimage 5s infinite";
    }
    else if(resultvalue == "YOU LOST\n AGAINST PC")
    {
        useranimation.style.animation = "none";
        pcanimation.style.animation = "mymove 5s infinite";
    }
    else{
        useranimation.style.animation = "none"
        pcanimation.style.animation = "none"
    }
    
};

//Setting User Score
const playerscore = (playerscoreset) =>{
    PLAYER = playerscoreset;
    document.getElementById("plscore").innerText = playerscoreset
};

//Setting Pc Score
const computerscore = (computerscoreset) =>{
    COMPUTER = computerscoreset;
    document.getElementById("pcscore").innerText = computerscoreset
};

//Display Next Button
const showwinner = (resultvalue)=>{
    let shownext = document.querySelector('.next-btn')
    if(resultvalue == "YOU WIN\n AGAINST PC"){
        shownext.style.display = "block"
    }
    else{
        shownext.style.display = "none"
    }
};

//Next Page Display
const nextshow = ()=>{
    let showfull = document.querySelector('.winnerpage')
    showfull.style.display = "block"
    showfull.style.marginTop = "90px"
    showfull.style.marginLeft = "500px"
    showfull.style.alignitems = "center"
    let blockres = document.querySelector('.result')
    blockres.style.display = "none"
    let blockscore = document.querySelector('.sboard')
    blockscore.style.display = "none"
    let rulesdis = document.querySelector('.rules')
    rulesdis.style.marginTop = "220px"
    let shownext1 = document.querySelector('.next-btn')
    shownext1.style.display = "none"
}