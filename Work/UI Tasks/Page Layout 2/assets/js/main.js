function nav() {
    var x = document.getElementById("ul");
    if (x.className === "ul"){
        x.className += " responsive";
        document.getElementById("nav-title").style.float = "none";
        document.getElementById("nav-title").style.display = "block";
        document.getElementById("icon").innerHTML = "&#10006;";
    }
    else {
        x.className = "ul"; 
        document.getElementById("nav-title").style.float = "left";
        document.getElementById("icon").innerHTML = "&#9776;";
    }
    }