let cards = document.querySelectorAll(".minCard");
let dayNight = document.getElementById("ld");
let logo = document.querySelector("#logo");
let body = document.querySelector("body");
let resetBtn = document.querySelector("#reset");

let curMode = "light";
let algo = 0;

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

let chance = 1;

cards.forEach((card)=>{
    card.addEventListener("click",()=>{
        if(chance = 1 && chance <=10){
            card.style.backgroundImage = "url('greenDiamond.png')";
            card.style.backgroundSize = "cover";
        }
        else if(chance = 11 && chance <=16){
            card.style.backgroundImage = "url('redDiamond.png')";
            card.style.backgroundSize = "cover";
            disableBox();
        }
       card.disabled = true;
    });
    chance++;
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
    chance =1;
}

resetBtn.addEventListener("click",reset);