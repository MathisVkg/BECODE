// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        const myObject = {
            lastname : "Vankoekelberg",
            firstname : "Mathis",
            age : 22,
            city : "Waterloo",
            country : "Belgium",
        };
        console.log(myObject);
        console.log("My lastname is " + myObject.lastname + " and my firstname is " + myObject.firstname
        + " ,I have " + myObject.age + " year old, I live in " + myObject.city + " and my country is " + myObject.country);
    });
})();
