NUMBER_OF_PO = 2;//9;
NUMBER_OF_PO_VISIBLE = 1;
NUMBER_OF_DEV_TESTER = 8;//40; 
FINDPO_MAIN_CONTAINER_WIDTH = 1200;//vedi findpo-main-container css
FINDPO_MAIN_CONTAINER_HEIGHT = 800;//vedi findpo-main-container css
IMG_DIM = 100;
PO_FOLDER = "Utilities/PODummy/"; // "PO/"; 
DEV_TESTERS_FOLDER = "Utilities/DevTestersDummy/"; //"DevTesters/"
BACKGROUNDS_PATH = "Backgrounds/";



function init(level){
    cleanMainBoard()
    var mainContainer = document.getElementById("findpo");
    let mainContainerPath = BACKGROUNDS_PATH + randomIntFromInterval(1,3) + ".png";
    mainContainer.style  = "background-image: url(" + mainContainerPath + "); background-size: cover;";
    let devImages = getDevTesterImages();
    let poImages = getPoImages();
    devImages?.forEach((imgagePo)=>{
        mainContainer.appendChild(imgagePo);
    })
    poImages?.forEach((imgagePo)=>{
        mainContainer.appendChild(imgagePo);
    })
    var menuContainer = document.getElementById("menu");
    menuContainer.style = "visibility: visible;"
}

function cleanMainBoard(){
    var mainContainer = document.getElementById("findpo");
    mainContainer.innerHTML = "";
    // mainContainer.style = ""
    setVisibilityStickMan(false);
    let headContainer = document.getElementById("head");
    headContainer.innerHTML = "";
    var poToSearchContainer = document.getElementById("potosearch");
    poToSearchContainer.innerHTML = ""
}
function hideStarWarsTitles(){
    var fadeStarWarsContainer = document.getElementById("fadestarwars");
    var mainContainerStarWars = document.getElementById("maincontainerstarwars");
    fadeStarWarsContainer.remove();
    mainContainerStarWars.remove();


}
function getPoImages(){
    let arrayOfPos = []
    var poToSearchContainer = document.getElementById("potosearch");

    for (poIndex = 1 ; poIndex < NUMBER_OF_PO_VISIBLE+1; poIndex++){

        var img = document.createElement("img");
        let randomPoIndex = getPoIndexRandomly();
        let poImageUrl = PO_FOLDER + randomPoIndex + ".png";
        img.src = poImageUrl;
        img.style.height = IMG_DIM + 'px';
        img.style.width  = IMG_DIM + 'px';
        img.style.position ="absolute";
        let top = randomIntFromInterval(0,FINDPO_MAIN_CONTAINER_HEIGHT - IMG_DIM - 30);
        img.style.top = top + "px";
        let left = randomIntFromInterval(0,FINDPO_MAIN_CONTAINER_WIDTH - IMG_DIM - 30 );
        img.style.left = left + "px";
        img.onclick  = ()=>{
            foundPo(poImageUrl);
        }
        arrayOfPos.push(img);
        let poToSearchImage = getPoImage(randomPoIndex);
        poToSearchContainer.appendChild(poToSearchImage);
        
    }
    
    return arrayOfPos;
}

function getPoImage(poIndex){
    var img = document.createElement("img");
    let poImageUrl = PO_FOLDER + poIndex + ".png";
    img.src = poImageUrl;
    img.style.height = IMG_DIM + 'px';
    img.style.width  = IMG_DIM + 'px';
    return img;
}
function getPoIndexRandomly(){
    let index = 1;
    index = randomIntFromInterval(1,NUMBER_OF_PO);
    return index
}
function getDevTesterImages(){
    let arrayOfPos = []
    for (poIndex = 1 ; poIndex < NUMBER_OF_DEV_TESTER+1; poIndex++){
        var img = document.createElement("img");
        img.src = DEV_TESTERS_FOLDER + poIndex + ".png";
        img.style.height = IMG_DIM + 'px';
        img.style.width  = IMG_DIM +'px';
        img.style.position ="absolute";
        let top = randomIntFromInterval(0,FINDPO_MAIN_CONTAINER_HEIGHT - IMG_DIM);
        img.style.top = top + "px";
        let left = randomIntFromInterval(0,FINDPO_MAIN_CONTAINER_WIDTH - IMG_DIM);
        img.style.left = left + "px";

        arrayOfPos.push(img);
    }
    return arrayOfPos;
}

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function foundPo(po){
    let mainContainer = document.getElementById("findpo");
    mainContainer.innerHTML = "";
    mainContainer.style = "";
    setVisibilityStickMan(true);
    let headContainer = document.getElementById("head");
    headImg = document.createElement("img");
    headImg.style.height = '60px';
    headImg.style.width  = '60px';
    headImg.src = po;
    // headImg.style.top = 0 + "px";
    // headImg.style.left = 0 + "px";
    headContainer.appendChild(headImg);
    poPhrases();
    
}

function setVisibilityStickMan(visible){
    let stickMan = document.getElementById("stick-man");

    if(visible){
        stickMan.style = "visibility: visible;"
    }
    else {
        stickMan.style = "visibility: hidden;"

    }  
}

function terminalPrefazione2(){
    let terminalTitlesContainer = document.getElementById("terminaltitles");
    terminalTitlesContainer.style = "visibility: visible;"
    const text = "\n Hello, recluta ribelle! \n La guerra con i manager non è ancora terminata.\n Ho bisogno del tuo aiuto per poterli sconfiggere.\n" + 
                    " La tua missione non sarà affatto facile.\n Dovrai rintracciare per me i servi più fedeli dei manager, gli introvabili, massimi esperti di "+
                    "escapologia e di fuffologia applica, laureati in arrampicata sugli specchi e call inutili 'I TEMIBILI PO'...";

    const terminalElement = document.getElementById("terminal");

    function typeWriter(text, i) {
      if (i < text.length) {
        terminalElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(text, i), Math.floor(Math.random() * 100) + 50);
      }
    }

    typeWriter(text, 0);
}

function hideTerminalTitle(){
    let terminalTitlesContainer = document.getElementById("terminaltitles");
    terminalTitlesContainer.innerHTML = ""
    
}

// function typeWriter(text, i,terminalElement) {
//     if (i < text.length) {
//       terminalElement.innerHTML += text.charAt(i);
//       i++;
//       setTimeout(() => typeWriter(text, i), Math.floor(Math.random() * 100) + 50);
//     }
//   }

function poPhrases(){
    let listOfPhrases = ["frase1","frase2","frase3","frase4"];
    let indexPhrase = randomIntFromInterval(0,4);

    const poPhraseElement = document.getElementById("pophrase");
    const text = listOfPhrases[indexPhrase];

    function typeWriter(text, i) {
      if (i < text?.length) {
        poPhraseElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(text, i), Math.floor(Math.random() * 100) + 50);
      }
    }

    typeWriter(text, 0);
}