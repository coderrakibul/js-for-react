// prothome onclick function add kore then id gulo ke niye local storage a input value gulo set kora hoyece
const addToLocalStorage = () => {
    // get the input fields
    const storageName = document.getElementById("storage-name");
    const name = storageName.value;
    const storageValue = document.getElementById("storage-value");
    const value = storageValue.value;

    // add to local storage and check condition
    // akhane empty string hole add hobe na
    // value true hole if er vetor kaj korbe
    // localStorage.setItem(name, value);
    if(name && value){
        localStorage.setItem(name, value);
    }
    storageName.value = "";
    storageValue.value = "";
}


// jodi local storage a array rakhte chai
localStorage.setItem("friends", JSON.stringify([10, 20, 30]));

// jodi local storage a object rakhte chai
const pen = {
    price: 10,
    color: "black"
}
localStorage.setItem("pen", JSON.stringify(pen));
// note: local storage a kicu rakhte hole sorasori object ba array rakha jayna setake json string kore rakhte hoy and use korte hole json parse kore use korte hoy


