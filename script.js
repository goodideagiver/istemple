var nav = document.getElementById('navbar');
var promo = document.getElementById('promotion');

function loadStorage() {
    if ((window.localStorage.getItem('topMessage'))==1) {
        promo.style.display = "none";
    } else {
        promo.style.display = "block";
    }
}

 function navShift() {
    let height = promo.offsetHeight;
    if ((window.scrollY==0) && ((window.localStorage.getItem('topMessage'))!=1) && (window.innerWidth<1600)) {
        nav.style.top = height + "px";
    } else {
        nav.style.top = "0";
    }
}

loadStorage();
navShift();

window.onresize = navShift;
window.onscroll = function() {
    navShift();
    mobileArrow();
}

function mobileArrow() {
    var arrow = document.getElementById('mobarr');
    if (window.scrollY>200) {
        arrow.style.opacity = "100%";
        arrow.style.transform = "translate(0,0)";
    } else {
        arrow.style.opacity = "0";
        arrow.style.transform = "translate(0,150%)";
    }
}

function disableMessage() {
    window.localStorage.setItem('topMessage','1');
    loadStorage();
    navShift();
}

setTimeout('$("#intro").hide()',0);