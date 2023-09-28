// Declare the button const to grab button from DOM
const button = document.getElementById('button');
// Global declaration of character set consts
const upperCharSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCharSet = 'abcdefghijklmnopqrstuvwxyz';
const specCharSet = '0123456789';
const numericCharSet = '!@#$%^&*';

// function that takes a character string and selects a random character
const randomChar = (string) => {
    return string.charAt(Math.floor(Math.random() * string.length));
}

// Event listener that waits for button click and starts chain of prompts. Prompt inputs are stored as individual const to be used later
button.addEventListener('click', e => {
    
    const pwordLengthInput = prompt("Select password length", 20);
    if(pwordLengthInput < 8 || pwordLengthInput > 128 || isNaN(pwordLengthInput)) {
        alert("please select a number between 8 and 128");
        return;
    } 
    const uppercase = confirm("Inlcude uppercase letters? OK for yes, cancel for no");
    const lowercase = confirm("Include lowercase letters? OK for yes, cancel for no");
    const numeric = confirm("Include numbers? OK for yes, cancel for no");
    const specChars = confirm("Include special characters? OK for yes,cancel for no");

    // verifies that at least one character type was selected and if not, returns alert to user
    if(!uppercase && !lowercase && !numeric && !specChars){
        alert("You must select at least one character type");
        return;
    } 

    // uses ternary operators to determine if prompts were answered "true or false" and pushes respective character set into charSet variable to create master character list to be iterated through later
    const charSet = `${uppercase? upperCharSet : ''}${lowercase? lowerCharSet : ''}${numeric? numericCharSet : '' }${specChars? specCharSet : ''}`;

    // blank variable to store final password
    let password = '';

    // for loop that loops through selected character sets, calls the randomChar function and pushes each character to the password variable
    for (let i = 0; i < pwordLengthInput; i++){
        password += randomChar(charSet);
    }

    // alerts the user to check the screen for generated password
    alert("Password Generated, see page for password");

    // identifies generated password HTML element and replaces it's text with the password variable
    document.getElementById('generated-password').innerHTML=password;

})



