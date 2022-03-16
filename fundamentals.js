// 1. variables (let and const)
const myName = "Rakibul";
let season = "Rainy";
let age = 20;

// const diye declare korle setar man change kora jabe na
// let diye declare korle setar man change kora jabe


// 2. conditions (===, <, >, <=, >=, !==, &&, ||)
if(myName === "Rakibul" && age === 20){
    console.log("My Name is Rakibul")
}
else if(myName === "Others" || age <= 20){
    console.log("You are younger")
}
else{
    console.log("Too Small")
}

// 3. Array (indexOf, length, puah, pop, shift, unshift)
const numbers = [12, 45, 21, 42, 35]; // the array
const newNumbers = numbers[0] = 56; // change the first index
const length = numbers.length; // check the array length
const position = numbers.indexOf(45); // check the position
const insert = numbers.push(100); // add a new element to last
const remove = numbers.pop(); //remove element from last
const addFirst = numbers.unshift(10); // add elemest to first
const removeFirst = numbers.shift(); // remove first element


// 4. loop (while loop, for loop, for of loop, for each loop, for in loop)
for(let i = 0; i < 10; i++){
    console.log(i);
}

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}


// 5. function (simple function, arrow function)
// simple function
function addNumbers(num1, num2) {
    const result = num1 + num2;
    return result;
}
const add = addNumbers(10, 20)
console.log(add);

// arrow function
const multiply = (num3, num4) => {
    const result = num3 * num4;
    return result;
}
const output = multiply(10, 10);
console.log(output);

//shortcut arrow function
const division = (num5, num6) => num5 / num6;
const displayResult = division(50, 10);
console.log(displayResult);


// 6. object (access property)
const student = {
    name: "Rakibul Islam",
    age: 20,
    job: "Study",
    hobby: ["gardening", "programming"],
    subject: "psychology"
}
const studentName = "name";
console.log(student.name); // access via property name
console.log(student["name"]); // access via property string
console.log(student[studentName]); //access via variable