var dropList = document.getElementById("drop-li");
var down = document.querySelectorAll(".down-li");
var menuIcon = document.getElementById("menu-icon");
var sideBar = document.getElementById("side-bar");
var ulHead = document.querySelectorAll(".nav-h2");
var spans = document.querySelectorAll(".angle");
var bg = document.querySelectorAll(".bg-color");
var darkTheme = document.querySelectorAll(".dark");
var fields = document.querySelectorAll(".field");
var stat = document.querySelectorAll(".status");
var mydata = JSON.parse(data);
var count = 0,x = 0,y=0,f=0;
var temp = [];
var texts = [];

dropList.addEventListener("click", function() {
    if(down[0].classList.contains("li-drop")) {
        for(var i=0;i<3;i++){
            down[i].classList.remove("li-drop");
        }
    }
    else {
        for(var i=0;i<3;i++){
            down[i].classList.add("li-drop");
        }
    }     
});

menuIcon.addEventListener("click", side);

function side() {
    if(sideBar.classList.contains("hidden")) {
        document.getElementsByClassName("header-icon")[0].style.width = "18%";        
        document.getElementsByClassName("d-board")[0].style.width = "82%";        
        document.getElementById("nifty").style.display = "inline-block";
        document.getElementById("side-head").style.display = "block";
        document.getElementsByClassName("empty-two")[0].style.display = "block";
        document.getElementById("details").style.display = "inline-block";
        sideBar.style.width = "18%";
        document.querySelectorAll(".li-text").forEach(function() {            
            document.querySelectorAll(".li-text")[count].innerHTML = texts[count];
            count++;
        });
        count = 0;
        ulHead.forEach(function() {
            ulHead[count].style.display = "block";
            count++;
        });
        count = 0;
        spans.forEach(function() {
            spans[count].style.display = "inline-block";
            count++;
        });
        count = 0;
        document.querySelectorAll(".side-list").forEach(function() {
            document.querySelectorAll(".side-list")[count].classList.add("border-b");
            count++;
        });
        count = 0;
        document.querySelectorAll(".last-li").forEach(function() {
            document.querySelectorAll(".last-li")[count].style.margin = "0px 0px 20px 0px";
            count++;
        });
        count = 0;
        sideBar.classList.remove("hidden");
    }
    else {
        document.getElementsByClassName("header-icon")[0].style.width = "4%";        
        document.getElementsByClassName("d-board")[0].style.width = "96%";        
        document.getElementById("nifty").style.display = "none";
        document.getElementById("side-head").style.display = "none";
        document.getElementsByClassName("empty-two")[0].style.display = "none";
        document.getElementById("details").style.display = "none";
        ulHead.forEach(function() {
            ulHead[count].style.display = "none";
            count++;
        });
        count = 0;
        spans.forEach(function() {
            spans[count].style.display = "none";
            count++;
        });
        count = 0;
        document.querySelectorAll(".side-list").forEach(function() {
            document.querySelectorAll(".side-list")[count].classList.remove("border-b");
            count++;
        });
        count = 0;
        document.querySelectorAll(".last-li").forEach(function() {
            document.querySelectorAll(".last-li")[count].style.margin = "0px";
            count++;
        });
        count = 0;
        document.querySelectorAll(".li-text").forEach(function() {
            texts[count] = document.querySelectorAll(".li-text")[count].innerHTML;
            document.querySelectorAll(".li-text")[count].innerHTML = "";
            count++;
        });
        count = 0;
        sideBar.style.width = "4%";
        sideBar.classList.add("hidden");
    }
}

document.getElementsByClassName("coll")[0].addEventListener("click", function() {
    if(document.getElementById("body").classList.contains("collaps")) {
        document.getElementById("body").classList.remove("collaps");
        var dq = document.getElementsByClassName("d-items")[0].childNodes;
        document.getElementsByClassName("d-items")[0].insertBefore(dq[3], dq[1]);
        document.getElementsByClassName("d-items")[0].insertBefore(dq[2], dq[4]);
        dq[1].classList.remove("m-r");
        dq[3].classList.add("m-r");
        var us = document.getElementsByClassName("usage")[0].childNodes;
        document.getElementsByClassName("usage")[0].insertBefore(us[3], us[1]);
        document.getElementsByClassName("usage")[0].insertBefore(us[2], us[4]);
        document.getElementsByClassName("usage")[0].insertBefore(us[7], us[5]);
        document.getElementsByClassName("usage")[0].insertBefore(us[6], us[8]);
        us[1].classList.remove("m-r");
        us[3].classList.add("m-r");
        us[5].classList.remove("m-r");
        us[7].classList.add("m-r");        
    }
    else {           
        document.getElementById("body").classList.add("collaps");                            
        var dc = document.getElementsByClassName("d-items")[0].childNodes;       
        document.getElementsByClassName("d-items")[0].insertBefore(dc[3], dc[1]);
        document.getElementsByClassName("d-items")[0].insertBefore(dc[2], dc[4]);
        dc[1].classList.remove("m-r");
        dc[3].classList.add("m-r");
        var us = document.getElementsByClassName("usage")[0].childNodes;        
        document.getElementsByClassName("usage")[0].insertBefore(us[3], us[1]);
        document.getElementsByClassName("usage")[0].insertBefore(us[2], us[4]);
        document.getElementsByClassName("usage")[0].insertBefore(us[7], us[5]);
        document.getElementsByClassName("usage")[0].insertBefore(us[6], us[8]);
        us[1].classList.remove("m-r");
        us[3].classList.add("m-r");
        us[5].classList.remove("m-r");
        us[7].classList.add("m-r");
    }
});

document.getElementsByClassName("box-l")[0].addEventListener("click", function() {
    if(document.getElementById("body").classList.contains("boxed")) {
        document.getElementById("body").classList.remove("boxed");        
    }
    else {
        document.getElementById("body").classList.add("boxed");        
    }
});

document.getElementsByClassName("backg")[0].addEventListener("click", function() {
    if(document.getElementById("body").classList.contains("back-g")) {
        document.getElementById("body").classList.remove("back-g");        
    }
    else {
        document.getElementById("body").classList.add("back-g");        
    }
});

document.getElementsByClassName("check-fix")[0].addEventListener("click", function() {
    if(document.getElementsByClassName("header")[0].classList.contains("fixed")) {
        document.getElementsByClassName("header")[0].classList.remove("fixed");
        document.getElementsByClassName("main")[0].style.padding = "0px";
        document.getElementsByClassName("customize")[0].style.top = "3%";
        document.getElementsByClassName("customize")[0].classList.remove("z-2");
    }
    else {
        document.getElementsByClassName("header")[0].classList.add("fixed");
        document.getElementsByClassName("main")[0].style.padding = "67px 0px 0px 0px";
        document.getElementsByClassName("customize")[0].style.top = "10%";
        document.getElementsByClassName("customize")[0].classList.add("z-2");
    }
});

document.getElementsByClassName("check-fix")[1].addEventListener("click", function() {
    if(document.getElementsByClassName("footer")[0].classList.contains("f-fixed")) {
        document.getElementsByClassName("footer")[0].classList.remove("f-fixed");        
    }
    else {
        document.getElementsByClassName("footer")[0].classList.add("f-fixed");        
    }
});

document.getElementsByClassName("check-fix")[2].addEventListener("click", function() {
    if(document.getElementsByClassName("side-bar")[0].classList.contains("side-fixed")) {
        document.getElementsByClassName("side-bar")[0].classList.remove("side-fixed");
        document.getElementsByClassName("header-icon")[0].style.position = "inherit";
        document.getElementsByClassName("header-search")[0].style.margin = "0px";
        document.getElementsByClassName("d-board ")[0].style.margin = "0px";
    }
    else {
        document.getElementsByClassName("side-bar")[0].classList.add("side-fixed");
        document.getElementsByClassName("header-icon")[0].style.position = "fixed";
        document.getElementsByClassName("header-search")[0].style.margin = "0px 0px 0px 18%";
        document.getElementsByClassName("d-board")[0].style.margin = "0px 0px 0px 18%";        
    }
});

document.getElementsByClassName("app-icon")[0].addEventListener("click", function() {
    if(document.getElementsByClassName("menu-drop")[0].classList.contains("show")) {   
        document.getElementsByClassName("menu-drop")[0].classList.remove("show");        
    }
    else {
        document.getElementsByClassName("menu-drop")[0].classList.add("show");
        document.getElementsByClassName("bell-drop")[0].classList.remove("show");
        document.getElementsByClassName("settings")[0].classList.remove("show");
        document.getElementsByClassName("people")[0].classList.remove("show");
        document.getElementsByClassName("customize")[0].classList.remove("show");
    }
});

document.getElementsByClassName("bell")[0].addEventListener("click", function() {
    if(document.getElementsByClassName("bell-drop")[0].classList.contains("show")) {
        document.getElementsByClassName("bell-drop")[0].classList.remove("show");           
    }
    else {
        document.getElementsByClassName("bell-drop")[0].classList.add("show");
        document.getElementsByClassName("menu-drop")[0].classList.remove("show");        
        document.getElementsByClassName("settings")[0].classList.remove("show");
        document.getElementsByClassName("people")[0].classList.remove("show");
        document.getElementsByClassName("customize")[0].classList.remove("show");
    }
});

document.getElementsByClassName("account")[0].addEventListener("click", function() {
    if(document.getElementsByClassName("settings")[0].classList.contains("show")) {   
        document.getElementsByClassName("settings")[0].classList.remove("show");        
    }
    else {
        document.getElementsByClassName("settings")[0].classList.add("show");
        document.getElementsByClassName("menu-drop")[0].classList.remove("show");
        document.getElementsByClassName("bell-drop")[0].classList.remove("show");        
        document.getElementsByClassName("people")[0].classList.remove("show");
        document.getElementsByClassName("customize")[0].classList.remove("show");
    }
});
document.getElementsByClassName("person")[0].addEventListener("click", function() {
    if(document.getElementsByClassName("people")[0].classList.contains("show")) {   
        document.getElementsByClassName("people")[0].classList.remove("show");        
    }
    else {
        document.getElementsByClassName("people")[0].classList.add("show");
        document.getElementsByClassName("menu-drop")[0].classList.remove("show");
        document.getElementsByClassName("bell-drop")[0].classList.remove("show");
        document.getElementsByClassName("settings")[0].classList.remove("show");
        document.getElementsByClassName("customize")[0].classList.remove("show");
    }
});
document.getElementsByClassName("cust-icon")[0].addEventListener("click", function() {   
        document.getElementsByClassName("customize")[0].classList.add("show");
        document.getElementsByClassName("customize")[0].classList.add("t-show");
        document.getElementsByClassName("people")[0].classList.remove("show");
        document.getElementsByClassName("menu-drop")[0].classList.remove("show");
        document.getElementsByClassName("bell-drop")[0].classList.remove("show");
        document.getElementsByClassName("settings")[0].classList.remove("show");       
});
document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementsByClassName("customize")[0].classList.remove("show");
    document.getElementsByClassName("customize")[0].classList.remove("t-show");
});
document.getElementsByClassName("dark-theme")[0].addEventListener("click", function() {        
        document.body.style.backgroundColor = "#3A444E";    
        document.getElementsByClassName("side-bar")[0].style.backgroundColor = "#3A444E";
        document.body.classList.add("dark-show");
        darkTheme.forEach(function() {
            darkTheme[y].classList.add("dark-show");
            y++;
        });
        y=0;
});
document.getElementsByClassName("white-theme")[0].addEventListener("click", function() {
        document.body.style.backgroundColor = "#ECF0F5";    
        document.getElementsByClassName("side-bar")[0].style.backgroundColor = "white";
        document.body.classList.remove("dark-show");
        darkTheme.forEach(function() {
            darkTheme[y].classList.remove("dark-show");
            y++;
        });
        y=0;
    });

document.getElementsByClassName("scroll-up")[0].addEventListener("click", function() {    
    scrollToTop(200); 
});

function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}

(function () {        
    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= window.innerHeight + 100) {
            document.getElementsByClassName("scroll-up")[0].classList.add("show");
        }
        else {
            document.getElementsByClassName("scroll-up")[0].classList.remove("show");
        }
    };    
    fields.forEach(table);
    bg.forEach(myFunction);    
})()

function table() {    
    var field = fields[f].childNodes;    
    field[1].innerHTML = mydata[f].Invoice;
    field[3].innerHTML = mydata[f].User;
    field[5].innerHTML = mydata[f].Order;
    field[7].innerHTML = mydata[f].Amount;
    stat[f].innerHTML = mydata[f].Status;
    field[11].innerHTML = mydata[f].Track;
    f++;
}

function myFunction() {
    
    bg[x].addEventListener("click", theme);
    x++;
}
function theme(event) {
    var th = event.target;
    var thColor = th.style.backgroundColor;    
    if(th.classList.contains("h-color")) {
        var hColor = document.getElementsByClassName("h-color");
        for(var i = 0;i<hColor.length;i++) {
            if(hColor[i].classList.contains("colored")) {
                hColor[i].classList.remove("colored");
                hColor[i].innerHTML = "";
            }
        }  
        var hIcon = document.getElementsByClassName("header-icon")[0].style.backgroundColor;                    
        document.getElementsByClassName("header")[0].style.backgroundColor = thColor;
        document.getElementsByClassName("header-icon")[0].style.backgroundColor = hIcon;
    }
    else if(th.classList.contains("b-color")) {
        var bColor = document.getElementsByClassName("b-color");
        for(var i = 0;i<bColor.length;i++) {
            if(bColor[i].classList.contains("colored")) {
                bColor[i].classList.remove("colored");
                bColor[i].innerHTML = "";
            }
        }                                          
        document.getElementsByClassName("header-icon")[0].style.backgroundColor = thColor;        
    }
    else if(th.classList.contains("n-color")) {
        var nColor = document.getElementsByClassName("n-color");
        for(var i = 0;i<nColor.length;i++) {
            if(nColor[i].classList.contains("colored")) {
                nColor[i].classList.remove("colored");
                nColor[i].innerHTML = "";
            }
        }                                          
        document.getElementsByClassName("side-bar")[0].style.backgroundColor = thColor;
        darkTheme.forEach(function() {
            darkTheme[y].classList.add("dark-show");
            y++;
        });
        y=0;      
    }
    else if(th.classList.contains("f-color")) {
        var fColor = document.getElementsByClassName("f-color");
        for(var i = 0;i<fColor.length;i++) {
            if(fColor[i].classList.contains("colored")) {
                fColor[i].classList.remove("colored");
                fColor[i].innerHTML = "";
            }
        }                                          
        document.getElementsByClassName("header")[0].style.backgroundColor = thColor;
        document.getElementsByClassName("header-icon")[0].style.backgroundColor = thColor;        
    }
    else if(th.classList.contains("d-color")) {
        var dColor = document.getElementsByClassName("d-color");
        for(var i = 0;i<dColor.length;i++) {
            if(dColor[i].classList.contains("colored")) {
                dColor[i].classList.remove("colored");
                dColor[i].innerHTML = "";
            }
        }                                  
        document.getElementsByClassName("header")[0].style.backgroundColor = thColor;
        document.getElementsByClassName("header-icon")[0].style.backgroundColor = thColor;
        document.getElementsByClassName("welcome")[0].style.backgroundColor = thColor;
    }
    th.classList.add("colored");
        var sp = document.createElement("span");
        sp.classList.add("chec");
        th.appendChild(sp);
}



