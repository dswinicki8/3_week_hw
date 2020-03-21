//Set variables//
var getLength = 0;
var charNumber = false;
var charUpper = false;
var charLower = false;
var charSpecial = false;
var newPassword = [];
var generateButton = document.getElementById("generate");
var displayPassword = document.getElementById("password");

var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', ':', '"', '<', '>', '?', '"'];



//user input data//
function getUserInput() {
    getLength = prompt("Select Length of 8-128 characters: ");
    charNumber = confirm("Do you want to include NUMBERS? ");
    charUpper = confirm("Do you want to include UPPERCASE CHARACTERS? ");
    charLower = confirm("Do you want to include LOWERCASE CHARACTERS? ");
    charSpecial = confirm("Do you want to include SPECIAL CHARACTERS? ");
};

//choosing criteria for password//
var choicesArray = [];

function generateChoicesArray() {
    if (charUpper == true)
        choicesArray = choicesArray.concat(upperCaseLetters);
    if (charLower == true)
        choicesArray = choicesArray.concat(lowerCaseLetters);
    if (charNumber == true)
        choicesArray = choicesArray.concat(numbers);
    if (charSpecial == true)
        choicesArray = choicesArray.concat(specialChar);
};

//generating passowrd//
function generateNewPassword() {
    
    newPassword = [];
    
    if ( getLength < 8 || getLength > 128) {
        alert("You did not meet the requirements necessary! Characters must be between 8-128! ")
    } 
    
    else {
        for (i = 0; i < getLength; i++) {
            newPassword += choicesArray[Math.floor(Math.random() * (choicesArray.length - 1))];
        }
        displayPassword.textContent = newPassword;
    };
}


//Clicking button and starting all the following functions//
generateButton.addEventListener("click", function () {
    event.preventDefault();
    getUserInput();
    generateChoicesArray();
    generateNewPassword();
    choicesArray = [];
});

