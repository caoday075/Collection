var buttons = document.querySelector('.dr-btn-go');
var loginForm = document.querySelector('#login');
var registerForm = document.querySelector('#register');
registerForm.style.display = "none";
loginForm.style.display = "block";
 function getGoImage() {
     buttons.innerHTML = '<img src=\'assets/images/checked.png\'>';
     buttons.style.background = " #ed2553";
     buttons.style.WebkitAnimation = "buttonmove 0.5s";
     buttons.style.animation = "buttonmove 0.5s";
     setTimeout(function(){
         buttons.innerHTML = "Go";
         buttons.style.background = "#fff";
         buttons.style.animation = "buttonreturn 0.5s";
     }, 1000);
 }
function goToRegister() {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    registerForm.style.WebkitAnimation = "mynewmove 0.5s";
    registerForm.style.animation = "mynewmove 0.5s";
}
function goToLogin() {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    loginForm.style.WebkitAnimation = "mynewmove 0.5s";
    loginForm.style.animation = "mynewmove 0.5s";
}