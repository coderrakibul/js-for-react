
// const student = {
//     name: "Rakibul Islam",
//     age: 20,
//     job: "Study",
//     hobby: ["gardening", "programming"],
//     subject: "psychology"
// }

// // object to string
// const makeString = JSON.stringify(student);
// console.log(student);
// console.log(makeString);

// // string to object
// const makeObject = JSON.parse(makeString);
// console.log(makeObject);


// // fetch
// // fetch("url")
// // .then(response => response.json())
// // .then(data => console.log(data));


// // get only keys
// const keys = Object.keys(student);
// console.log(keys);

// // get only values
// const values = Object.values(student);
// console.log(values);

// // get keys and values
// const entries = Object.entries(student);
// console.log(entry);




const products = [
    {name: "laptop", price: 3200, brand: "hp", color: "silver"},
    {name: "phone", price: 7000, brand: "iphone", color: "blue"},
    {name: "watch", price: 3000, brand: "casio", color: "yellow"},
    {name: "sunglass", price: 300, brand: "ray", color: "black"},
    {name: "camera", price: 9000, brand: "canon", color: "blue"},
];

const newProduct = {name: "webcam", price: 850, brand: "nicon", color: "white"};

// copy products and then add newProducts
const newProducts = [...products, newProduct];
console.log(products);
console.log(newProducts);

// create a new array without one specific item
// remove phone means create a new aray without phone
// akhane not equals to phone mane jar nam phone na take nicci
const remaining = products.filter(product => product.name !== "phone");
console.log(remaining);

// jodi not na dei tahole mane ta hobe jader nam phone tader nicci
const remaining2 = products.filter(product => product.name == "phone");
console.log(remaining2);
