// 05-arrays/01-get-element/script.js - 5.1: item in array

(() => {

    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        console.log(fruits[3]);
        alert(fruits[3])
    });
    //document.getElementById("target").innerHTML = fruits[3];
})();
