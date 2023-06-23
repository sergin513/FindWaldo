NUMBER_OF_PO = 9;
NUMBER_OF_PO_VISIBLE = 1;
NUMBER_OF_DEV_TESTER = 40;
FINDPO_MAIN_CONTAINER_WIDTH = 800;//vedi findpo-main-container css
FINDPO_MAIN_CONTAINER_HEIGHT = 800;//vedi findpo-main-container css
IMG_DIM = 100;

function init(level){
    cleanMainBoard()
    var mainContainer = document.getElementById("findpo");
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
        let poImageUrl = "PO/" + randomPoIndex + ".png";
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
    let poImageUrl = "PO/" + poIndex + ".png";
    img.src = poImageUrl;
    img.style.height = IMG_DIM + 'px';
    img.style.width  = IMG_DIM + 'px';
    return img;
}
function getPoIndexRandomly(){
    let index = 1;
    index = randomIntFromInterval(1,9);
    return index
}
function getDevTesterImages(){
    let arrayOfPos = []
    for (poIndex = 1 ; poIndex < NUMBER_OF_DEV_TESTER+1; poIndex++){
        var img = document.createElement("img");
        img.src = "DevTesters/" + poIndex + ".png";
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
    setVisibilityStickMan(true);
    let headContainer = document.getElementById("head");
    headImg = document.createElement("img");
    headImg.style.height = '60px';
    headImg.style.width  = '60px';
    headImg.src = po;
    // headImg.style.top = 0 + "px";
    // headImg.style.left = 0 + "px";
    headContainer.appendChild(headImg);
    
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
  