var cards = $(".c-cards");
var right = document.getElementsByClassName("right-arrow")[0];
var aud = document.getElementById("myAudio"); 
var count = 1;
$(document).ready(function(){
  

    $(".left-arrow").hover(function(){    
      $(this).attr("src","assets/images/welcome/left-arrow_hover.png");    
      }, function(){
        $(this).attr("src","assets/images/welcome/left-arrow_normal.png");    
    });
    $(".right-arrow").hover(function(){    
        $(this).attr("src","assets/images/welcome/right-arrow_hover.png");    
        }, function(){
        $(this).attr("src","assets/images/welcome/right-arrow_normal.png");    
    });

  $(".pdf").hover(function(){    
    $(this).attr("src","assets/images/welcome/pdf_hover.png");    
    $(this).parent().attr("href","local.pdf");  
    $(this).parent().attr("target","_blank");    
    }, function(){
      $(this).attr("src","assets/images/welcome/pdf_normal.png");    
  });
  $(".audio").hover(function(){    
      $(this).attr("src","assets/images/welcome/audio_hover.png");    
      }, function(){
      $(this).attr("src","assets/images/welcome/audio_normal.png");    
  });
  $(".video").hover(function(){    
    $(this).attr("src","assets/images/welcome/video_hover.png");    
    }, function(){
    $(this).attr("src","assets/images/welcome/video_normal.png");    
});
$(".link").hover(function(){    
  $(this).attr("src","assets/images/welcome/link_hover.png");
  $(this).parent().attr("href","#");    
  }, function(){
  $(this).attr("src","assets/images/welcome/link_normal.png");    
});
$(".l-img-1").hover(function(){    
  $(this).attr("src","assets/images/welcome/chat_orange.png");    
  }, function(){
  $(this).attr("src","assets/images/welcome/chat_white.png");    
});
$(".l-img-2").hover(function(){    
  $(this).attr("src","assets/images/welcome/notes_prange.png");    
  }, function(){
  $(this).attr("src","assets/images/welcome/notes_white.png");    
});
$(".l-img-3").hover(function(){    
  $(this).attr("src","assets/images/welcome/calendar_orange.png");    
  }, function(){
  $(this).attr("src","assets/images/welcome/calendar_white.png");    
});
$(".left-arrow").click(function(){   
var cf = cards.children().eq(0);
var cl = cards.children().eq(5);
console.log(cl);
cl.after(cf);
});
$(".right-arrow").click(function(){   
  var cf = cards.children().eq(0);
  var cl = cards.children().eq(5);
  console.log(cl);
  cf.before(cl);
  });
});
// $(".audio").click(function() {
//   $(this).attr("class","audio side-icon c-p play");  
//   aud.play();
// });

  // document.getElementsByClassName("left-arrow")[0].addEventListener("click", function() {    
  //     // var x = cards.childNodes;    
      
  //     // cards.appendChild(x[count]);   
  //     // cards.insertBefore(x[2], x[1]);
  //     // cards.insertBefore(x[4], x[3]);
  //     // cards.insertBefore(x[6], x[5]);
  //     // cards.insertBefore(x[8], x[7]);
  //     // cards.insertBefore(x[10], x[9]);
  //     // cards.insertBefore(x[12], x[11]);
  //     var cf = cards.children().eq(0);
  //     var cl = cards.children().eq(5);
  //     cl.after(cf);
  //     // cards.appendChild(right);

  // });

