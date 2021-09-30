// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        var a = 0;
        while (a < fruits.length) {
            if (fruits[a] == "apple") {
                console.log("Yes");
                break;
            }
            else {
                console.log("No");
                break;
            }
            a++;
        }
    });
})();
