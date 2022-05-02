const eye = document.querySelector("#eye");
const userPassword = document.querySelector("#passwordInput");
userPassword.type = "text";

eye.addEventListener("click", function(){
    if(eye.src.match("./eye-visible.svg")){
        eye.src = "./eye-hidden.svg";
        userPassword.type = "password";
        userPassword.classList.add("hidePassword");
    } else {
        eye.src ="./eye-visible.svg";
        userPassword.type = "text";
        userPassword.classList.remove("hidePassword");
    }
    
})