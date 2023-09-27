const button = document.getElementById('button');
const upperCharSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCharSet = 'abcdefghijklmnopqrstuvwxyz';
const specCharSet = '0123456789';
const numericCharSet = '!@#$%^&*';

const randomChar = (string) => {
    return string.charAt(Math.floor(Math.random() * string.length));
}

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

    if(!uppercase && !lowercase && !numeric && !specChars){
        alert("You must select at least one character type");
        return;
    } 

    const charSet = `${uppercase? upperCharSet : ''}${lowercase? lowerCharSet : ''}${numeric? numericCharSet : '' }${specChars? specCharSet : ''}`;

    let password = '';

    for (let i = 0; i < pwordLengthInput; i++){
        password += randomChar(charSet);
    }

    alert("Password Generated, see page for password");

    
    document.getElementById('generated-password').innerHTML=password;

   
})



