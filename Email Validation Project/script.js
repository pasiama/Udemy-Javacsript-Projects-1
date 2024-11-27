const emailId = document.getElementById("email-id");
const errorMsg = document.getElementById("error-msg");

emailId.addEventListener("input", validateEmail);

function checker(){
let email = emailId.value.trim();
if(email === ""){
    errorMsg.style.display = "none";
    emailId.style.border = "2px solid #3498db";
}else if(validateEmail(email)){
    errorMsg.style.display = "none";
    emailId.style.border = "2px solid #2ecc71";

}else{
      errorMsg.style.display = "block";
      emailId.style.border = "2px solid #e74c3c";
}
}
function validateEmail(email) {
    let atIndex = email.indexOf("@");
    let dotIndex = email.lastIndexOf(".");
    if (atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 2) return true;
    return false;
}