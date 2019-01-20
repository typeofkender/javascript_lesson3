//Практикум
/*
function newGame() {
    function hasDublicates(numberToArray) {
        'use strict';
        var checkArray = [];
        var hasDublicates = false;

        numberToArray.forEach(x => {
            if (checkArray.indexOf(x) !== -1) {
                hasDublicates = true;
            }
            checkArray.push(x);
        })
        return hasDublicates;
    }

    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        var randString = String(rand);
        var randToArray = randString.split("");
        if (hasDublicates(randToArray) === true) {
            return randomInteger(min, max);
        } else {
            return rand;
        }
    }

    function guessTheNumber() {
        var gameNumber = prompt("Введите загаданное число");
        console.log(gameNumber);
        if (isNaN(gameNumber)) {
            alert("Некорректное значение!");
            guessTheNumber();
        } else {
            if (gameNumber == secretNumber) {
                alert("You win!");
                return startAll();
            } else {
                gameNumberArray = gameNumber.split("");
                var i = 0;
                while (i < secretNumberArray.length) {
                    if (gameNumberArray[i] == secretNumberArray[i]) {
                        console.log(i + 1 + " цифра и позиция угадана верно");
                    } else {
                        var j = 0;
                        while (j < secretNumberArray.length) {
                            if (gameNumberArray[i] == secretNumberArray[j]) {
                                console.log(i + 1 + " цифра угадана верно");
                            }
                            j++;
                        }
                    }
                    i++;
                }
                guessTheNumber();
            }
        }
    }

    var min = 1000;
    var max = 9999;
    var secretNumber = randomInteger(min, max);
    console.log(secretNumber);
    var secretNumberString = String(secretNumber);
    var secretNumberArray = secretNumberString.split("");
    guessTheNumber();
}

function startAll() {
    var userInput = prompt("Начать новую игру? Y/N").toLowerCase();;
    if (userInput === "y") {
        newGame();
    } else if (userInput === "n") {
        alert("Пока");
    } else {
        alert("Не Понимат!");
        startAll();
    }
}
startAll();
*/

// Quest 1
/*
var numbersCounter = 1;
var simpleNumbers = [];
do {
    numbersCounter++;
    var n = 1;
    var checkArray = [];
    while (n < Math.sqrt(numbersCounter) - 1) {
        n++;
        if (numbersCounter % n == 0) {
            checkArray = checkArray + n;
        }
    }
    if (checkArray.length == 0) {
        //console.log(numbersCounter + " - простое число.");
        simpleNumbers = simpleNumbers + numbersCounter + " ";
    }
}
while (numbersCounter < 100)
console.log("Простые числа: " + simpleNumbers);
*/

// Quest 2

/*

function putInCart() {
    var userInputProduct = prompt("Введите название продукта:");
    if (isNaN(userInputProduct) && userInputProduct.length != 0) {
        var userInputPrice = prompt("Введите стоимость " + userInputProduct);
        if (isNaN(userInputPrice) || userInputPrice.length == 0) {
            console.log("Некорректрая цена!")
            putInCart();
        } else {
            product.push(userInputProduct);
            productPrice.push(userInputPrice);
            var userChoice = prompt("Добавить еще 1 товар? Y/Подсчитать сумму").toLocaleLowerCase();
            if (userChoice == "y") {
                putInCart();
            } else {
                console.log("Начнем подсчет суммы.");
                countBasketPrice();
            }
        }
    } else {
        console.log("Введите название, а не цену.");
        putInCart();
    }
}

function countBasketPrice() {
    var sumCounter = 0;
    var cartPrice = 0;
    while (sumCounter < productPrice.length) {
        cartPrice += +productPrice[sumCounter++];
    }
    console.log("Стоимость товаров в корзине = " + cartPrice);
}

var productCounter = 0;
var product = [];
var productPrice = [];
putInCart();
//console.log(product);
//console.log(productPrice);
var i = 0;
var productFull = [];
while (i < product.length) {
    var check = product[i] + " цена: " + productPrice[i] + "; ";
    productFull = productFull + check;
    i++;
}
console.log(productFull);
*/

// Quest 3


//for (var count = 0; count < 10; console.log(count++)) {}


// Quest 4
/*
var array = [];
var element = "x";
var i = 0;
while (i < 20) {
    array += element;
    i++;
}

function piramid() {
    var k = 0;
    var cartPrice = "x";
    while (k < array.length) {
        console.log(cartPrice);
        cartPrice += array[k++];
    }
}
piramid();
*/
