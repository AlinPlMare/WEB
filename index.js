    const body = document.querySelector("body");
const header = document.querySelector("header");
const nav = document.getElementById("nav");
const bd = document.getElementById("bd");
const footer = document.querySelector("footer");
const GO = document.getElementById("GO");
const txt = document.getElementById("txt");
const lineOne = document.getElementById("lineOne");
const lineTwo = document.getElementById("lineTwo");
const navS = document.getElementById("navS");
const inf = document.getElementById("inf");
const infp = document.getElementById("infp");
bd.style.height = "auto";
GO.addEventListener("click", ()=>{
    header.style.display = "block";
    nav.style.display = "block";
    footer.style.display = "block";
    txt.style.display = "block";
    lineOne.style.display = "block";
    lineTwo.style.display = "block";
    GO.style.display = "none";
});

//Menu


const bt3 = document.getElementById("bt3");
const bt11 = document.getElementById("bt11");
const bt21 = document.getElementById("bt21");
const ulS = document.getElementById("ulS");
let a = 0;

bt3.addEventListener("click", ()=>{
if(a==0){
    a++;
    navS.style.display = "block";
    bt11.style.display = "block";
    bt21.style.display = "block";
    navS.style.animationName = "navSOpen";
    ulS.style.animationName = "ulSOpen";
}
else if(a == 1){
    a--;
    navS.style.animationName = "navSClose";
    ulS.style.animationName = "ulSClose";
    function sleep (ms) {
        return new Promise ( resolver => setTimeout ( resolver, ms));
    };
    sleep(290).then(()=>{
    navS.style.display = "none";
    bt11.style.display = "none";
    bt21.style.display = "none";
    });
}
});


//Info

const bt1 = document.getElementById("bt1");
const bt2 = document.getElementById("bt2");
const marginLeft = [0, 305, 395];
const p = [20, 60];
bt1.addEventListener("mouseover", ()=>{
    inf.style.left = marginLeft[1] + "px";
    infp.style.left = marginLeft[1] - p[1] + "px";
    inf.style.display = "block";
    infp.style.display = "block";
});
bt1.addEventListener("mouseleave", ()=>{
    inf.style.left = marginLeft[0] + "px";
    infp.style.left = marginLeft[0] + "px";
    inf.style.display = "none";
    infp.style.display = "none";
});
bt2.addEventListener("mouseover", ()=>{
    inf.style.left = marginLeft[2] + "px";
    infp.style.left = marginLeft[2] - p[0] + "px";
    inf.style.display = "block";
    infp.style.display = "block";
});
bt2.addEventListener("mouseleave", ()=>{
    inf.style.left = marginLeft[0] + "px";
    infp.style.left = marginLeft[0] + "px";
    inf.style.display = "none";
    infp.style.display = "none";
});

