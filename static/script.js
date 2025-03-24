var x = 5;
var y = 7;
var z = x+y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C)

function SumNPrint(x1, x2) {
    x3 = x1+x2;
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B)

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!")
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(fruitArray) {
    for (let i = 0; i < fruitArray.length; i++) {
        if (fruitArray[i] === 'Banana') {
            alert('found the Banana in ' + i);
            return;
        }
    };
}

// findTheBanana(L1)
// findTheBanana(L2)

function findTheBananaUsingForEach(fruitArray, arrayName) {
    fruitArray.forEach(function(fruit, index) {
        if (fruit === 'Banana') {
            alert('We found a banana in the ' + arrayName);
            return;
        }
    });
}

// findTheBananaUsingForEach(L1, 'first array')
// findTheBananaUsingForEach(L2, 'second array')

function greetingFunc() {
    var d = new Date();
    var h = d.getHours();
    var greeting = '';
    if (h < 12) {
        greeting = "Good morning";
    } else if (h >= 12 && h < 18) {
        greeting = "Good afternoon";
    } else if (h >= 18 && h < 20) {
        greeting = "Good evening";
    } else if ((h>= 20 && h < 24) || (h >= 0 && h < 5)) {
        greeting = "Good night";
    }
    document.getElementById("greeting").innerHTML = greeting + ", my name is Rebecca!"
}

greetingFunc();

function addYear() {
    var year = new Date();
    var fullYear = year.getFullYear();
    var message = document.getElementById("copyYear")
    message.innerHTML += fullYear
}

// // function showList() {
//     document.getElementById("funList").style.display = "block";
//     document.getElementById("clickToSeeButton").style.display = "none";
// }

$("#readLess").click(function(){
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
});

$("#readMore").click(function(){
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
});

function validate() {
    var userName = document.getElementById("UserName");
    var userEmail = document.getElementById("UserEmail");
    var userText = document.getElementById("UserText");
    var msg = document.getElementById("ValidateMsg");
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
        msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
 }

 function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const advice = data.slip.advice;
            document.getElementById("adviceText").innerText = advice;
        })
        .catch(error => {
            console.error('Error fetching advice:', error);
            document.getElementById("adviceText").innerText = "Failed to load advice. Please try again!";
        });
 }