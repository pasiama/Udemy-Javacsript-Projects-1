//we need to target the elements from the html
const buttonElement = document.querySelector( 'button');
const spanText = document.getElementById('updatedContent');

buttonElement.onclick = function(){
      const yourname = prompt('What is your name?');
      spanText.textContent = yourname;
}