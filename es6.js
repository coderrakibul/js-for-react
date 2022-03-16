const numbers = [12, 45, 21, 42, 35];
const student = {
    name: "Rakibul Islam",
    age: 20,
    job: "Study",
    hobby: ["gardening", "programming", "playing"],
    subject: "psychology"
}


// 1. template string
const aboutMe = `My Name is ${student.name} and Age is ${student.age}. Next year my age will be ${numbers[2]}. My hobby is ${student.hobby[1]}`;
console.log(aboutMe);

// 2. arrow function
const getFiftyFive = () => 55; // no parameter
const addSixtyFive = num => num + 65; // single parameter
const isEven = n => n % 2 == 0; // with condition
const addThree = (x, y, z) => x + y + z; // multi parameter

// multi line arrow function
const doMath = (num1, num2, num3) => {
    const sum = num1 + num2;
    const result = sum / num3;
    return result;
}
console.log(doMath(10, 20, 10))


// 3 spread operator (akhane porer gulo dakhabe na)
const newNumbers = [...numbers];
numbers.push(420);
numbers.push(520);
numbers.push(620);
console.log(numbers) // akhane sob gulo add kore sob e dakhabe
console.log(newNumbers) // akhane shudhu ager gulo thakbe

// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];
console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);

