const togglePassword = document.getElementById("togglePassword");
let password = document.getElementById("password");

togglePassword.onclick = function(){
    if(password.type === "password"){
        password.type = "text";
        togglePassword.classList.remove("fa-eye-slash")
        togglePassword.classList.add("fa-eye")

    }else{
        password.type = "password";
        togglePassword.classList.remove("fa-eye")
        togglePassword.classList.add("fa-eye-slash")

    }
}