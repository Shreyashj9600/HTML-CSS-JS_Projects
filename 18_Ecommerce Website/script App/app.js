let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let abouts = document.querySelector(".about");
let contactus = document.querySelector(".contact");
let mainPage = document.querySelector(".main");
let blog = document.querySelector(".trends");

function homes() {
    mainPage.style.display = "flex";
    card.style.display = "block";
    card2.style.display = "block";
    blog.style.display = "block";
    abouts.style.display = "none";
    contactus.style.display = "none"

    document.getElementById("blogs").style.color = "black";
    document.getElementById("home").style.color = "rgb(2,173,173)";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.querySelector(".cart").style.display = "none";


}
function shop() {
    mainPage.style.display = "none";
    blog.style.display = "none";
    abouts.style.display = "none";
    card.style.display = "block";
    card2.style.display = "block";
    contactus.style.display = "none"

    document.getElementById("blogs").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "rgb(2,173,173)";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.querySelector(".cart").style.display = "none";


}
function blogs() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    abouts.style.display = "none";
    blog.style.display = "block";
    contactus.style.display = "none"
    document.querySelector(".cart").style.display = "none";

    document.getElementById("blogs").style.color = "rgb(2,173,173)";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black)";

}
function about() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    abouts.style.display = "block";
    blog.style.display = "none";
    contactus.style.display = "none"
    document.querySelector(".cart").style.display = "none";

    document.getElementById("blogs").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "rgb(2,173,173)";
}
function contact() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    abouts.style.display = "none";
    blog.style.display = "none";
    contactus.style.display = "block"
    document.querySelector(".cart").style.display = "none";
    document.getElementById("blogs").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "rgb(2,173,173)";
    document.getElementById("about").style.color = "black";
}

// cart 

function show(img) {
    let newImg = document.getElementById("newImg");
    console.log(img);
    newImg.src = img.src;

    document.querySelector(".cart").style.display = "flex";

    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    abouts.style.display = "none";
    blog.style.display = "none";
    contactus.style.display = "none";
}

function addCart() {
    alert("Added To Cart");
    location.reload();
}

function byNow() {
    alert("Order Confirmed");
}

function backBtn() {
    mainPage.style.display = "none";
    blog.style.display = "none";
    abouts.style.display = "none";
    card.style.display = "block";
    card2.style.display = "block";
    contactus.style.display = "none"
    // location.reload();
}
function goHome() {
    location.reload();
}