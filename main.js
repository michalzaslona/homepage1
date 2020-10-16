

/*FUNKCJE TYDZIEŃ 5
let first= 'hejka';
let second = 'komputerowy światku'


function helloWorld (firstWord, secondWord) {
    return (`Mówię Wam ${firstWord} mój cały ${secondWord}`);
}

console.log (helloWorld (first, second));

first = "Witajcie";
second = "kolorowy Świecie"
console.log (helloWorld (first, second));

let firstInf = 'miłe';
let secondInf = 'płonie';

function badInformation (firstInfo, secondInfo) {
    return(helloWorld (first, second) + ` mam dla Ciebie niezbyt${firstInf} informacje, Twój świat ${secondInf}`);
}

console.log (badInformation (firstInf, secondInf));

const element = document.querySelector('.content__description--js');
element.innerHTML= badInformation (firstInf, secondInf) ;

//Więc opamiętaj się mój cały kolorowy świecie, a ogień zgaśnie!

firstInf = 'opamiętaj się';
secondInf= 'zgaśnie';

function goodInformation (firstInfo, secondInfo){
return (`Więc ${firstInf} mój cały kolorowy świecie, a ogień ${secondInf}!`);
}
const element1 = document.querySelector('.content__description--js1');
element1.innerHTML =goodInformation('dupka', 'głłówka');

//(fat) arrow function

let number = 3;
let number1 =7
console.log (`podane cyfry to: ${number} i ${number1}`);
const calculate = (myNumber, myNumber1) => {
    return myNumber*myNumber1
}
const myResult =calculate(number, number1);
console.log (`Wynik mnożenia to: ${myResult}`);

const calculate1 = (myNumber, myNumber1) => {
    return myNumber+myNumber1
}
const myResult1 =calculate1(number, number1);
console.log (`Wynik dodawania to: ${myResult1}`);

const calculate2 = (myNumber, myNumber1) => {
    return myNumber-myNumber1
}
const myResult2 =calculate2(number, number1);
console.log (`Wynik odejmowania to: ${myResult2}`);

const calculate3 = (myNumber, myNumber1) => {
    return myNumber/myNumber1
}
const myResult3 =calculate3(number, number1);
console.log (`Wynik dzielenia to: ${myResult3}`);

MOŻNA ZAPISYWAĆ Fat arrow w taki sposób:

Ten zapis:
function calculate (myNumber) {
    return myNmber*5;
}
jest równoważny z tym zapisem:
const calculate = (myNumber) => myNumber*5;
*/
//LEKCJA OBJECTS
const firstObject = {
    age:33,
    sex: 'man',
    isOperatig:true,
    levels: 357,
    name: 'Mr Curtain',
    target: (firstTarget) => {
console.log (`${firstTarget} destroyed :-)`)
    }
}
console.log (firstObject);



