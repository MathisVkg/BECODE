// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        console.log("They are: " + people.size + " people in the set");
        if (people.has("Alexandre") == 1) {
            console.log("Alexandre is part of the set!")
        }
        else {
            console.log("Alexandre run away!");
        }
    });
})();
