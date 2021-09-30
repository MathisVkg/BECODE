// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        var arrayStock = fruits;
        function removeDuplicate(data) {
            return data.filter((value, index) => data.indexOf(value) === index);
        }
        console.log(removeDuplicate(arrayStock));
    });
})();
