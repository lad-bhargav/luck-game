let cards = document.querySelectorAll(".minCard");
let dayNight = document.getElementById("ld");
let logo = document.querySelector("#logo");
let body = document.querySelector("body");
let resetBtn = document.querySelector("#reset");

let chance = true;
let curMode = "light";
dayNight.addEventListener("click",()=>{
    if(curMode == "light"){
        dayNight.innerText = "Night";
        body.style.backgroundColor = "#252526";
        curMode = "dark";
        /*logo.style.backgroundImage = "url('logowhite.png')";
        logo.style.backgroundRepeat = "no-repeat";*/
    }
    else{
        dayNight.innerText = "Day";
        body.style.backgroundColor = "silver";
        curMode = "light";
        /*logo.style.backgroundImage = "url('logo.png')";
        logo.style.backgroundRepeat = "no-repeat";*/
    }
})

const random = () => {
    const availableCards = Array.from(cards).filter(card => !card.disabled);
    if (availableCards.length === 0) return;

    const randomCard = availableCards[Math.floor(Math.random() * availableCards.length)];
    randomCard.click();
};


cards.forEach((card)=>{
    card.addEventListener("click",()=>{
        if(chance){
            card.style.backgroundImage = "url('greenDiamond.png')";
            card.style.backgroundSize = "cover";
            chance = false;
        }
        else {
            card.style.backgroundImage = "url('redDiamond.png')";
            card.style.backgroundSize = "cover";
            chance = true;
            //disableBox();
        }
       card.disabled = true;
    });
});

const disableBox =()=>{
    for(let card of cards){
        card.disabled = true;
    }     
}

const reset = ()=>{
    for(let card of cards){
        card.disabled = false;
        card.style.backgroundColor = "#B3C8CF";
        card.style.backgroundImage = "";
        card.style.backgroundSize = "";
    }
    chance = true;
}

resetBtn.addEventListener("click",reset);