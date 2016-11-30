// TODO: add your solutions here!
function combineWords(word1, word2) {
    return word1 + word2;
}

function repeatPhrase(phrase, n) {
    for (var i=0; i<n; i++) {
        console.log(phrase);
    }
}

function toTheNthPower(number, power) {
    var newNum = 1;
    for (var i=0; i<power; i++) {
        newNum = newNum * number;
    }
    return newNum;
}

function areaOfACircle(radius) {
    return (Math.PI*radius*radius);
}

function pythagoreanTheorem(a,b) {
    return Math.sqrt((a*a)+(b*b));
}

function isXEvenlyDivisibleByY(x,y) {
    return (x%y===0);
}

function countVowels(word) {
    word = word.toLowerCase();
    var count = 0;
    for (var i=0; i<word.length; i++) {
        if ((word[i]==='a') || (word[i]==='e') || (word[i]==='i') || (word[i]==='o') || (word[i]==='u') || (word[i]==='y')) {
            count ++;
        }
    }
    return count;
}

function findWdi(arr) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i]==='wdi') {
            result = 'true';
        }
    }
    if (result === 'true') {
        return result;
    } else {
        return 'false';
    }
}

function printTriangle(length) {
    var numAsterisk = '*';
    for (var i = 1; i<=length; i++) {
        console.log(numAsterisk);
        numAsterisk = numAsterisk+numAsterisk;
    }
}

function printPyramid(length) {
    var numAsterisk = '*';
    var numSpaces = length;
    for (var j = 1; j<=length; j++) {
        var space = ' ';
        for (var i=1; i<=numSpaces; i++) {
            space = space + ' ';
        }
        console.log(space + numAsterisk + space);
        numAsterisk = numAsterisk + ' ' + '*';
        numSpaces = numSpaces - 1;
    }
}
