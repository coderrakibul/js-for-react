// 1. destructuring array (serial onujayi kaj kore)
const numbers = [42, 65];

// old system
// const x = numbers[0];
// const y = numbers[1];
// console.log(x)


// new way
const [x, y] = [42, 65];
console.log(x,y);

// another way
const [a, b] = numbers;
console.log(x,y);


// make array and destructuring
function boxify(num1, num2){
    const nums = [num1, num2];
    return nums;
}
 const [first, second] = boxify(12, 45);
// const result = boxify(12, 45);
console.log(first, second);

 // destructuring
const student = {
    name: "Rakibul Islam",
    age: 20,
    job: "Study",
    hobby: ["gardening", "programming"],
    subject: "psychology"
}
const [firstHobby, secondHobby] = student.hobby;
console.log(firstHobby)



// destructuring object (akhhane serial matter kore na)
const {name, age} = {name: "Rakibul", age:21};
console.log(name, age)
const {person, id, salary} = {id: 12, person: "Rakibul", salary: 12000, job: "No"};
console.log(person, salary)

// another example
const employee = {
    ide: "VS Code",
    designation: "developer",
    machine: "mac",
    language: ["html", "css", "js"],
    specification: {
        height: 66,
        weight: 67,
        address: "kumarkhali",
        drink: "water",
        watch: {
            color: "black",
            price: 450,
        }
    }
}
// access im employee
const {machine, ide} = employee;
console.log(machine);
// access in specification of employee
const {weight, address} = employee.specification;
console.log(weight, address);
// access in watch of specification of employee
const {color, price} = employee.specification.watch;
console.log(color, price);