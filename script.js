var nav = document.getElementById('navbar');
var promo = document.getElementById('promotion');
let height = promo.offsetHeight;

function loadStorage() {
    if ((window.localStorage.getItem('topMessage'))==1) {
        document.getElementById('promotion').style.display = "none";
    } else {
        document.getElementById('promotion').style.display = "block";
    }
}

 function navShift() {
    if ((window.scrollY==0) && ((window.localStorage.getItem('topMessage'))!=1) && (window.innerWidth<1600)) {
        document.getElementById('navbar').style.top = height + 7 + "px";
    } else {
        nav.style.top = "0";
    }
}

loadStorage();
navShift();

window.onresize = navShift;
window.onscroll = navShift;




function disableMessage() {
    window.localStorage.setItem('topMessage','1');
    loadStorage();
    navShift();
}

setTimeout('$("#intro").hide()',0);