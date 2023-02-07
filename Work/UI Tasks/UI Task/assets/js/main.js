var showPass = document.getElementById("show-p");
var password = document.getElementById("password");
var password = document.getElementById("password");
showPass.addEventListener("click", function() {
    if(password.classList.contains("show")) {
        password.classList.remove("show");
        password.type = "password";
    }
    else {
        password.classList.add("show");
        password.type = "text";
    }
});

// function leftArrow(x) {
//     x.src = "assets/images/welcome/left-arrow_hover.png";
// }
// $(document).ready(function(){
//     $("#left-arrow").hover(function(){
//     //   $(this).src = "assets/images/welcome/left-arrow_hover.png";
//     alert("Ss");
//       }, function(){
//         $(this).src = "assets/images/welcome/left-arrow_hover.png";
//     });
//   });
// document.getElementsByClassName("left-arrow")[0].addEventListener("mouseover", function() {
//     alert("SS");
// });