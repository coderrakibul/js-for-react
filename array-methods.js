// array er vetor object thakle take array of object bole
// array of object er property guloke access korar method
const products = [
    {name: "laptop", price: 3200, brand: "hp", color: "silver"},
    {name: "phone", price: 7000, brand: "iphone", color: "blue"},
    {name: "watch", price: 3000, brand: "casio", color: "yellow"},
    {name: "sunglass", price: 300, brand: "ray", color: "black"},
    {name: "camera", price: 9000, brand: "canon", color: "blue"},
];

// 1. map (sob gulor opor loop chaliye kicu akta return korbe)
// akhane return kora hoice tai man ta ke variable a rakha hoice
const names = products.map(product => product.name);
const brands = products.map(product => product.brand);
const prices = products.map(product => product.price);
// console.log(names);
// console.log(brands);
// console.log(prices);

// 2. for each (sob gulor opor loop chalabe kintu return korbe na)
// jodi return kora na lage tahole for each loop use korte hobe
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));
products.forEach(product => {
    // multi line er khetre
});

// 3. filter (filter holo condition dile shudhu condition er gulo nebe)
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);
const blue = products.filter(product => product.color == "blue");
console.log(blue);
const specialName = products.filter(product => product.name.includes("n"));
console.log(specialName);


// 4. find (find holo prothom jeta match korbe shudhu setakei nebe)
const special = products.find(product => product.name.includes("n"));
console.log(special);