// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        fruits.shift();
        fruits.pop();
        fruits.unshift("banana");
        fruits.push("Kiwi");
        alert(fruits)
    });
})();
