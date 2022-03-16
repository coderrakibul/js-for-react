// truthy
/*  (" " string white space is true), ("Rakibul" string er vetor kicu thakle seta true), ({} empty object is true), ([] empty array is true), (1 is true), (-1 is true)

// falsy
("" empty string false), (0 is false),  (null is false), (undefined is false)
*/

// check truthy
let myVar = 5;
if(myVar){
    myVar = myVar * 100;
}
else{
    myVar = 0;
}
console.log(myVar)

// check falsy
let myMoney = 50;
if(!myMoney){
    console.log("this is true")
}
else{
    console.log("make it false")
}



// larger version
const money = 80;
const time = true;
let food;
if(money > 100){
    food = "biriani";
}
else{
    food = "cha biscuit";
}
console.log(food);

// ternary operator
// shortcut version called ternary operator
// condition sotto hole colon er ager ta te jabe ar mittha hole collon er porer ta te jabe
let food2 = money > 100 ? "biriany" : "cha biscuit";
console.log(food2)

// multiple condition
let drink = (money > 50 && time == true) ? "let's eat" : "not now";
console.log(drink);



// number to string conversion
const num1 = 52;
console.log(num1);

//make it string
const makeStr = num1 + "";
console.log(makeStr);

// string to number conversion
const input = "50";
console.log(input);

// make it number
const makeNum = +input;
console.log(makeNum);

// note: parse float ba parse int diyeo string ke number kora jay



// ternary operator and shortcut function
let isActive = true;
const showUser = () => console.log("display user");
const hideUser = () => console.log("hide user");

// akhane isActive ta sotto hole prothom function ke call korbe
// ar jodi mittha hoy tahole porer function ke call korbe
isActive ? showUser() : hideUser();


// use && if the left side is true then right side will be executed
// isActive && showUser();


// use || if the left side is false then right side will be executed
// isActive || hideUser();


// make toggle boolean (true thakle false hobe)
// isActive = !isActive;