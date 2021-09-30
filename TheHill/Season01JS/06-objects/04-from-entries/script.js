// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        var result = {};
        keys.forEach((key, i) => result[key] = values[i]);
        console.log(result);
    })
})();
