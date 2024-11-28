const numberInput = document.getElementById("number");
const result = document.getElementById("result");
const button = document.getElementById("btn");

function checkPrime(){
      let number = parseInt(numberInput.value);
      if(number == ""){
            result.style.display = "none";
            numberInput.style.border = "2px solid #3498db";
      }else if(isNaN(number)){
            result.style.color = "#333";
            result.textContent = "Please enter a valid number";
      }else if(isPrime(number)){
            result.style.display = "block";
            result.style.color = "#2ecc71";
            result.innerText = `${number} is a prime number`;
            numberInput.style.border = "2px solid #2ecc71";
      }else{
            result.style.display = "block";
            result.style.color = "#e74c3c";
            result.innerText = `${number} is not a prime number`;
            numberInput.style.border = "2px solid #e74c3c";
   
      }
}
function isPrime(number){
      if(number < 2) return false;
      for(let i = 2; i <= Math.sqrt(number); i++){
            if(number % i === 0) return false;
      }
      return true;
}
button.addEventListener("click", checkPrime);
