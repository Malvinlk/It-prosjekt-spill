function lightmode() {
    document.body.classList.remove("darkmode")
    var header = document.querySelector("header"); 
    if (header) { 
        header.classList.remove("darkmode"); 
    }
}

function darkmode() {
    document.body.classList.add("darkmode")
    var header = document.querySelector("header"); 
    if (header) { 
        header.classList.add("darkmode");
    }
}
