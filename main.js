const firstName = "Michała";
const age = 36;
console.log(`Witam na stronie ${firstName}, który ma ${age}`);

const heading = document.querySelector (".header__title--main");
console.log (heading);

heading.innerHTML = ("michał michał");

const myNumber = 1050;
const mySecondNumber=500
function calculate (myNumber, mySecondNumber) {
    return myNumber+mySecondNumber;
} 

    console.log(`Podałem pierwszą cyfrę ${myNumber} i drugą cyfrę ${mySecondNumber}`);
    console.log (`W wyniku sumy dostałem ${calculate(myNumber, mySecondNumber)}`);

    let age= prompt ("Ile masz lat Kotku")
    if(age >= 18) {
        console.log ("Wypijesz")
    } 
    else {
        console.log("Nie wypijesz")
    }

