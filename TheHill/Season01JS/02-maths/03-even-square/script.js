
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {
        var a = 1;
        var array = [];
        while (a <= 22) {
            array.push(Math.sqrt(a));
            a++;
        }
        alert(array);
    });
})();
