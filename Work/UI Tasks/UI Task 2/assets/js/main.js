$(".l-ar").hover(function(){    
    $(this).attr("src","assets/images/arrow_left.png");  
    $(this).css("width","26px");
    $(".left-ar").css("margin-right","5px");
    }, function(){
    $(this).attr("src","assets/images/home_left_icon.png");    
    $(this).css("width","14px");
    $(".left-ar").css("margin-right","0px");
  });
  $(".r-ar").hover(function(){    
    $(this).attr("src","assets/images/right_arrow.png");  
    $(this).css("width","25px");
    $(".right-ar").css("margin-right","15px");
    
    }, function(){
    $(this).attr("src","assets/images/home_right_icon.png");    
    $(this).css("width","14px");
    $(".right-ar").css("margin-right","0px");
  });
  $(".pj-left").click(function(){    
      var x = document.getElementsByClassName("pj-active")[0];
      if(x.classList.contains("pj-women")) {          
          x.style.opacity = "0";
          setTimeout(function(){  
            x.classList.remove("pj-active");
              document.getElementsByClassName("pj-education")[0].classList.add("pj-active"); 
              document.getElementsByClassName("pj-education")[0].style.opacity="1";
            }, 300);                     
      }
      else if(x.classList.contains("pj-education")) {        
        x.style.opacity = "0";
        setTimeout(function(){  
            x.classList.remove("pj-active");
            document.getElementsByClassName("pj-action")[0].classList.add("pj-active"); 
            document.getElementsByClassName("pj-action")[0].style.opacity="1";
        }, 300);        
    }
  });
  $(".pj-right").click(function(){    
    var x = document.getElementsByClassName("pj-active")[0];
    if(x.classList.contains("pj-action")) {          
        x.style.opacity = "0";
        setTimeout(function(){  
          x.classList.remove("pj-active");
            document.getElementsByClassName("pj-education")[0].classList.add("pj-active");             
            document.getElementsByClassName("pj-education")[0].style.opacity="1"; 
          }, 300);                        
    }
    else if(x.classList.contains("pj-education")) {        
      x.style.opacity = "0";
      setTimeout(function(){  
          x.classList.remove("pj-active");
          document.getElementsByClassName("pj-women")[0].classList.add("pj-active");           
          document.getElementsByClassName("pj-women")[0].style.opacity="1";
      }, 300);            
  }
});
$(".st-right").click(function(){    
    var x = document.getElementsByClassName("st-active")[0];   
    if(!(x.classList.contains("blood"))) {
        x.style.opacity = "0";        
        setTimeout(function(){                        
            x.nextElementSibling.classList.add("st-active");             
            x.classList.remove("st-active");
            x.nextElementSibling.style.opacity="1"; 
          }, 300);                        
        }    
});
$(".st-left").click(function(){    
    var x = document.getElementsByClassName("st-active")[0];   
    if(!(x.classList.contains("water"))) {
        x.style.opacity = "0";        
        setTimeout(function(){                        
            x.previousElementSibling.classList.add("st-active");             
            x.classList.remove("st-active");
            x.previousElementSibling.style.opacity="1"; 
          }, 300);                        
        }    
});