document.onload = loadStorage();

function loadStorage() {
    if ((window.localStorage.getItem('topMessage'))==1) {
        document.getElementById('promotion').style.display = "none";
    } else {
        document.getElementById('promotion').style.display = "block";
    }
}

function disableMessage() {
    window.localStorage.setItem('topMessage','1');
    loadStorage();
}