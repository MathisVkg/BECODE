
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


    (() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        var a = Math.floor(Math.random() * 999);
        document.body.style.backgroundColor = "#" + a;
    });

})();
