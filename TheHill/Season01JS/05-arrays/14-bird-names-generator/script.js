// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        var randomNumber = Math.ceil(Math.random() * birds.length);
        var randomAdjec = Math.ceil(Math.random() * adjectives.size);
        var arrayStock = Array.from(adjectives);
        //console.log(birds[randomNumber].name);
        //console.log(arrayStock[randomAdjec]);

        if (birds[randomNumber].fem == 1) {
            //console.log("La " + birds[randomNumber].name + " " + arrayStock[randomAdjec])
            document.getElementById("target").innerHTML = "La " + birds[randomNumber].name + " " + arrayStock[randomAdjec];
        }
        else {
            //console.log("Le " + birds[randomNumber].name + " " + arrayStock[randomAdjec])
            document.getElementById("target").innerHTML = "Le " + birds[randomNumber].name + " " + arrayStock[randomAdjec];
        }
    });
})();
