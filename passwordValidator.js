// get first number of digits regex
let reFirst = /(\d+)(?:\-)/;

// get second number of digits regex
let reSecond = /(?:\d+\-)(\d+)(?:\s\w\:\s\w+)/;

// get expected char with regex
let expectedChar = /(?:\d+\-\d+\s)(\w)(?:\:\s\w+)/;

// get password regex
let rePassword = /(?:\d+\-\d+\s\w\:\s)(\w+)/;


function findValidPasswords() {

    var fs = require('fs');
    var array = fs.readFileSync('./passwords.txt').toString().split("\n");

    let validPasswords = 0;
    let firstNum = "";
    let secondNum = "";
    let charInStr = "";
    let passwordBody = "";
    let numOfOcc = 0;

    array.forEach(function(entry) {
        firstNum = entry.match(reFirst)[1];
        secondNum = entry.match(reSecond)[1];
        charInStr = entry.match(expectedChar)[1];
        passwordBody = entry.match(rePassword)[1];
        numOfOcc = passwordBody.split("").filter((char) => (char === charInStr)).length;
        if (numOfOcc >= firstNum && numOfOcc <= secondNum) {
            validPasswords++;
        }
        console.log(validPasswords);
    })

    return validPasswords;
}

// test case
let occ = findValidPasswords();
console.log(occ);