// get first number of digits regex
let reFirst = /(\d+)(?:\-)/;

// get second number of digits regex
let reSecond = /(?:\d+\-)(\d+)(?:\s\w\:\s\w+)/;

// get expected char with regex
let expectedChar = /(?:\d+\-\d+\s)(\w)(?:\:\s\w+)/;

// get password regex
let rePassword = /(?:\d+\-\d+\s\w\:\s)(\w+)/;

function findValidPasswordsOTCAS() {

    var fs = require('fs');
    var array = fs.readFileSync('./passwords.txt').toString().split("\n");

    let validPasswords = 0;

    array.forEach(function(entry) {
        let firstNum = entry.match(reFirst)[1];
        let secondNum = entry.match(reSecond)[1];
        let charInStr = entry.match(expectedChar)[1];
        let passwordBody = entry.match(rePassword)[1];
        let passwordS = passwordBody.split("");
        let passwordS1 = passwordBody.substring(firstNum-1, firstNum).split("");
        let passwordS2 = passwordBody.substring(secondNum-1, secondNum).split("");
        numOfOcc = passwordS.filter((char) => (char === charInStr)).length;
        if ((passwordS1.includes(charInStr) && !passwordS2.includes(charInStr)) || (!passwordS1.includes(charInStr) && passwordS2.includes(charInStr))) {
            validPasswords++;
        }
    })

    return validPasswords;
}

// test case
let validPwd = findValidPasswordsOTCAS();
console.log(validPwd);