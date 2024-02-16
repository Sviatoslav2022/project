/*  'use strict'

let num = 10;
let num1 = 5;


if(num === num1) {
    console.log('Результат неверен!')
} else if (num != num1) {
    console.log('Результат верен!')
} else {
    console.log(null)
}


let person = {
    name:"Igor",
    age: 54,
    isMarried: false,
    dog: "bob"
}
console.log(person["dog"])
 */

/* alert("Hello world");  */

/* let answer = confirm('Are you here?') */



/* let answer = prompt('Вам уже есть 18 лет?' ," Да")


console.log(typeof(answer)) */


/* let arr = ['House', 'Car', 'Dog']

console.log(arr[1]) */


/* alert("Привет мир!") */

/* let answer = confirm("Do you have children?")

console.log(answer)

let answerTwo = prompt("Тебе есть 18?", "Да")

console.log(typeof(answerTwo)) */


/* let num = 25
let numTwo = 32

if(num === numTwo ||  numTwo === num) {
    console.log('Значение неверно!')
} else if (num >= numTwo) {
    console.log("Значение все еще неверно!") 
} else {
    console.log("Правильное значение")
}

let person = {
    name: "Tomas",
    surname: "Addison",
    age: 55,
    car: "Ferrari"
}

console.log(typeof(person)) */

/* alert("Привет мир!") */

/* let answer = confirm("Are you here?")

console.log(answer) */


/* let answer = prompt("Вам есть 18 лет?", "Да")

console.log(answer) */


/* 
console.log("arr" + " - object")

let incr =10,
    decr =10;


console.log(++incr)
console.log(--decr) */

/* console.log(5% 2)

console.log(5 * 2 + 3)bg

let isMarried = false
let notMarried = true

console.log(isMarried === notMarried) */

/* let num = 50;

switch (num) {
    case num < 49:
        console.log('Неверно!');
        break;
    case num > 100:
        console.log('Слишком большое значение!');
        break;
    case num = 50:
        console.log("Значение верное!")
        break;


}
 */
/* let num = 50; */

/* while (num < 55) {
    console.log(num);
    num++;
}
 */
/* do {
    console.log(num);
    num++;
}
while(num <55); */


/* 
for(i =1; i <8; i++) {
    if(i == 6) {
         break;  continue;
    }
    console.log(i)
} */
/* let money, time
function start() {
    money = +prompt("Ваш бюджет на месяц" , "");
    time = prompt("Введите дату в формате YYYY-MM-DD" , "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц" , "");
    }
}
start()
 


let appDate = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};
 
 let a1 =prompt('Введите обязательную статью расходов в этом месяце' , ''),
    a2 =prompt('Во сколько обойдется' , ''),
    a3 =prompt('Введите обязательную статью расходов в этом месяце' , ''),
    a4 =prompt('Во сколько обойдется' , '');

appDate.expenses.a1 = a2;
appDate.expenses.a3 = a4; 


function clooseExpenses() {
    for(i = 0; i <2; i++) {
    a =prompt('Введите обязательную статью расходов в этом месяце' , ''),
    b =prompt('Во сколько обойдется' , '');

   if((typeof(a)) === 'string' && (typeof(a) != null)  && (typeof(b)) != null
   && a != '' && b != '' && a.length <50) {
    console.log("done");
   appDate.expenses[a] = b;
}else {
    i= i -1;
}
    
}
}
clooseExpenses();
 

appDate.moneyPerDay = (appDate.budget / 30).toFixed(1);

alert("Ежидневный бюджет: " + appDate.moneyPerDay );

if(appDate.moneyPerDay < 100) {
    console.log("Минисальный достаток")
} else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
    console.log("Средний уровень достатка")
} else if (appDate.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка")
}else {
    console.log('Ошибка')
} 

function checkSavings() {
    if(appDate.savings == true) {
          let save = +prompt("Какова сумма накоплений?");
        percent = prompt("Под какой процент?");
    
    appDate.monthIncome = save/100/12*percent;
    alert("Доход  в месяц с ващего депозита:" + appDate.monthIncome);
    }
    
  

}
checkSavings(); */



/* let numOne = 30;

function showFirstMassage(text) {
    alert(text);
    num = 10;
    console.log(num)
}

showFirstMassage("Hello world");
console.log(numOne); */

/* function calc (a ,b) {
    return(a + b);
}
console.log(calc(3,4))

console.log(calc(6,5))

let calc =(a,b) => a+b


function letVar() {
    let num = 50;
    return(num);
}
let another = letVar();
console.log(another);
 */
/* let str = "text";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = 12.4; */

/* console.log(Math.round(twelve)); */

/* console.log(parseInt(twelve));
console.log(parseFloat(twelve)); */



/* 'use strict'

let i =5; */









/*  function first() {
    setTimeout( function() {
        console.log(1);
    },  500) ;
}

function second() {
    console.log(2);
}

first();
second(); 

function learnJS(lang, callback) {
    console.log( " Я учу" + lang);
    callback();
}

function done() {
    console.log("Я выучил JS!");
}

learnJS("Javascript", done);
 */

/* let options = {
    width: 1024,
    height: 1024,
    name: "test"
}

console.log(options.name);
options.bool = false;
console.log(options);
options.colors = {
    border: "black",
    background:"red"
};

delete options.bool;
console.log(options);

for(let key in options) {
    console.log("Свойство" + key + "имеет значение" + options[key])
}

console.log(Object.keys(options).length); */


/* let family = {
    city: "Krasnodar",
    street: "Semenova",
    house: 10
}
family.Married = true;
family.info = {
    children: "Rob",
    dog: "Bob",
    cate: "Tom",
}
console.log(family);

let header = "text"

console.log(header.length);
console.log(header.toUpperCase());
console.log(header.toLowerCase());


function num() {
    setTimeout(function() {
        console.log('Первый вывод информации')
    });
}


function second() {
    setTimeout(function() {
        console.log('Второй вывод информации')
    }, 500);
}
num();
second();

function familys(home,dog,callback) {
    console.log("мой дом" + home)
    console.log("моя собака" + dog)
    callback();
}
function done() {
    console.log("Я выучил JS");
}
familys(" - в Краснодаре", " - лучшая на свете!",done); */
/* 
let arr =["first", 2, 3, "four", 5]; */

/* arr.pop();
arr.push("5");
arr.shift();
arr.unshift("1"); */

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
 */

/* arr.forEach(function(item,i,mass) {
    console.log(i + ':' + item + " ( массив " + mass + ')')
});

let mass = [1,3,4,6,7];
 */
/* for(let key in mass) {
    console.log(key)
} */

/* for(let key of mass) {
    console.log(key)
}
 */
/* let ans = prompt("" ,""),
    array =[];

array = ans.split(',');
console.log(array); */


/* let array = ["aaa", "fgfgf", "fgfgrrtdd"],
    i = array.join(", ");
console.log(i) */


/* let array = [1,15,4],
    i = array.sort(conpareNew);

    function conpareNew(a,b) {
        return a-b;
    }

console.log(array) */

/*  let soldier = {
    health: 400,
    armor:100
}
let john = {
    health: 100
}

john.__proto__ = soldier;

console.log(john);
console.log(john.armor); 


 */
///////////////////////////////////////////////////////////////////Урок 1 типы данных///////////////////////////////////////////////////////
/* 'use srtict' */


/* const num = 5;
const string = "Hello";
const boolean = true;
const sym = Symbol();
null; // несуществует
undefined;// существует, но не найден
const obj ={};

console.log(4 / 0);
console.log('string'* 9);

 let person = {
    name: "John",
    age: 25,
    isMarried: false
 };

 console.log(person.name)
 console.log(person["name"]);



 let arr =['apple.png', 'street.jpg','tv.png'];

 console.log(arr); */




///////////////////////////////////////////////////////////////////Урок 2 работа с браузером///////////////////////////////////////////////////////


/* alert("Hello world");

let answer = confirm("Are you here?");

console.log(answer);

let answers = prompt("Есть ли вам 18?" , "");

console.log(typeof(answers)); */


//////////////////////////////////////////////////////////////////Урок 3 конкетанация строк///////////////////////////////////////////////////////

/* console.log("arr" + " - object");

console.log(4 + " - object");

let incr = 10;
    decr = 10;

    incr++;
    decr--;

console.log(incr);
console.log(decr);

console.log(5*2);
console.log('2' === 2); */

let isChecked = true,
    isClose = true;

console.log(isChecked || !isClose)

console.log(isChecked && isClose)

/////////////////////////////////////////////////////////////////Урок 4 конкетанация строк///////////////////////////////////////////////////////


let money =  "Ваш бюджет на месяц?",
    time = "Введите дату в формате YYYY-MM-DD";

let appDate = {
    budjet: 3000,
    timeData: "02.02.2014",
    expenses: {},
    optianalExpenses: {},
    income:[],
    savings: false
};

let answer = confirm('Введите обязательную статью расходов?');

let answerTwo = prompt('Во сколько обойдется?');

/////////////////////////////////////////////////////////////////Урок 4 условия///////////////////////////////////////////////////////