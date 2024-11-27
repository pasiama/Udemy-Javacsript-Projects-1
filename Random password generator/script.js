const passwordBox = document.getElementById('password');
const button = document.getElementById('generate-btn');

const generatePassword = () =>{
      // Define the characters that can be used in the password
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-{}[]|:;<>,.?/~`';
      
      // Generate a random password of length 12 characters
      let password = '';
      for (let i = 0; i < 12; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      
      // Update the password field with the generated password
      passwordBox.value = password;
}

// Add event listener to the generate button to generate a new password
button.addEventListener('click', generatePassword);