
/*---------------------------PINK--------------------*/

//movement animation// PINK
const cardPink = document.querySelector(".card-pink");
const containerPink = document.querySelector(".container-pink");



//items
const title = document.querySelector(".title");
const candle = document.querySelector(".candle img");
const explore = document.querySelector(".btn");



//moving animation event//

containerPink.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    cardPink.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    
});

//Animate in

containerPink.addEventListener("mouseenter", (e) =>{
    cardPink.style.transition = "none";


    //Popout
    title.style.transform = "translateZ(150px)";
    candle.style.transform = "translateZ(90px) rotateZ(10deg)";
    explore.style.transform = "translateZ(100px)";
});
    

//Animate out
containerPink.addEventListener("mouseleave", (e) =>{
    cardPink.style.transition = "all 0.5s ease";
    cardPink.style.transform = `rotateY(0deg) rotateX(0deg)`;


     //Popback
    title.style.transform = "translateZ(0px)";
    candle.style.transform = "translateZ(0px) rotateZ(0deg)";
    explore.style.transform = "translateZ(0px)";

});

/*---------------------------YELLOW--------------------*/


//movement animation// yellow
const cardYellow = document.querySelector(".card-yellow");
const containerYellow = document.querySelector(".container-yellow");


//items
const titleYellow = document.querySelector(".card-yellow .title");
const candleYellow = document.querySelector(".card-yellow .candle img");
const exploreYellow = document.querySelector(".card-yellow .btn");



//moving animation event//

containerYellow.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    cardYellow.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    
});

//Animate in

containerYellow.addEventListener("mouseenter", (e) =>{
    cardYellow.style.transition = "none";


    //Popout
    titleYellow.style.transform = "translateZ(150px)";
    candleYellow.style.transform = "translateZ(90px) rotateZ(10deg)";
    exploreYellow.style.transform = "translateZ(100px)";
});
    

//Animate out
containerYellow.addEventListener("mouseleave", (e) =>{
    cardYellow.style.transition = "all 0.5s ease";
    cardYellow.style.transform = `rotateY(0deg) rotateX(0deg)`;


     //Popback
    titleYellow.style.transform = "translateZ(0px)";
    candleYellow.style.transform = "translateZ(0px) rotateZ(0deg)";
    exploreYellow.style.transform = "translateZ(0px)";

});

/*---------------------------GREEN--------------------*/


//movement animation// yellow
const cardGreen = document.querySelector(".card-green");
const containerGreen = document.querySelector(".container-green");


//items
const titleGreen = document.querySelector(".card-green .title");
const candleGreen = document.querySelector(".card-green .candle img");
const exploreGreen = document.querySelector(".card-green .btn");



//moving animation event//

containerGreen.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    cardGreen.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    
});

//Animate in

containerGreen.addEventListener("mouseenter", (e) =>{
    cardGreen.style.transition = "none";


    //Popout
    titleGreen.style.transform = "translateZ(150px)";
    candleGreen.style.transform = "translateZ(90px) rotateZ(10deg)";
    exploreGreen.style.transform = "translateZ(100px)";
});
    

//Animate out
containerGreen.addEventListener("mouseleave", (e) =>{
    cardGreen.style.transition = "all 0.5s ease";
    cardGreen.style.transform = `rotateY(0deg) rotateX(0deg)`;


     //Popback
    titleGreen.style.transform = "translateZ(0px)";
    candleGreen.style.transform = "translateZ(0px) rotateZ(0deg)";
    exploreGreen.style.transform = "translateZ(0px)";

});


