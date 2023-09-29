// Declare the button const to grab button from DOM
const button = document.getElementById('gen-button');

// Global declaration of character set consts
const letters = 'abcdefghijklmnopqrstuvwxyz'
const numericCharSet = '0123456789';
const specCharSet = '!@#$%^&*';

// function that takes a character string and selects a random character
// charAt uses the value of Math random, rounded down via Math floor, to determine which index of passed string to return as new string
const randomChar = (string) => {
    return string.charAt(Math.floor(Math.random() * string.length));
}

/* alternatively, this function could be written as:
function randomChar(string) {
    return string.charAt(Math.floor(Math.random() * string.length));
} */

// Event listener that waits for button click and starts chain of prompts. Prompt inputs are stored as individual const to be used later
button.addEventListener('click', e => {
    
    const pwordLengthInput = prompt('Select password length', 20);
    
    if(pwordLengthInput < 8 || pwordLengthInput > 128 || isNaN(pwordLengthInput)) {
        alert('please select a number between 8 and 128');
        return;
    } 
    
    const uppercase = confirm('Inlcude uppercase letters? OK for yes, cancel for no');
    const lowercase = confirm('Include lowercase letters? OK for yes, cancel for no');
    const numeric = confirm('Include numbers? OK for yes, cancel for no');
    const specChars = confirm('Include special characters? OK for yes, cancel for no');

    // verifies that at least one character type was selected and if not, returns alert to user
    if(!uppercase && !lowercase && !numeric && !specChars){
        alert('You must select at least one character type');
        return;
    }
    
    /* My first choice was to use ternary operators to evaluate character selection to show validation of user selection after all selections were made.
       At the request of my instructor, I used nested if statements to evaluate user input to return a validation message to the user after their selections were made.
    
    const validation = `${uppercase ? 'uppercase' : ''} ${lowercase ? 'lowercase' : ''} ${numeric ? 'numeric' : ''} ${specChars ? 'special characters' : ''}`; */

    let validation = '';

    if(uppercase){
        validation += 'uppercase \n';
    } if(lowercase){
        validation += 'lowercase \n';
    } if(numeric){
        validation += 'numeric \n';
    } if(specChars){
        validation += 'special characters ';
    }

    /* used template literal to inject validation variable into alert message
    this alert could also have been written using concatenation: alert('Characters selected' + validation); */
    alert(`Characters selected:\n${validation}`);


     /* My first choice here was to use ternary operators to determine if prompts were answered 'true or false' and pushes respective character set into charSet variable to create master character list to be iterated through later.
        At the request of my instructor, I used nested if statements to evaluate user choices and push a charSet to the master charSet based on the user choices.
    
    const charSet = `${uppercase? upperCharSet : ''}${lowercase? lowerCharSet : ''}${numeric? numericCharSet : '' }${specChars? specCharSet : ''}`;  */
    
    let charSet = '';

    if(uppercase){
        charSet += letters.toUpperCase();
    } if(lowercase){
        charSet += letters;
    } if(numeric){
        charSet += numericCharSet;
    } if(specChars){
        charSet += specCharSet
    }

    // blank variable to store final password
    let password = '';

    // for loop that loops for the duration of the user input character count, calling the randomChar function on the charSet for the entire length and pushing it to the password
    for (let i = 0; i < pwordLengthInput; i++){
        password += randomChar(charSet);
    }

    // alerts the user to check the screen for generated password
    alert('Password Generated, see page for password');

    // identifies generated password HTML element and replaces it's text with the password variable
    document.getElementById('generated-password').innerHTML = password;

})

// allows user to copy text to clipboard for use in different application
const copyButton = document.getElementById('copy-button');

copyButton.addEventListener('click', e => {
    
    let copiedText = document.getElementById('generated-password');

    copiedText.select();
    copiedText.setSelectionRange(0, 9999); // allows for selection on mobile devices

    navigator.clipboard.writeText(copiedText.value);

    alert('Text copied to clipboard')
})