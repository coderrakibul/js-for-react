// optional chaining holo thakle dakhabe ar na thakle error debe na
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
 
const {color} = employee?.specification?.watch;
console.log(color);
