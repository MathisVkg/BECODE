
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        var a = document.getElementById("number").value;
        var count = 1;
        while (a >= 1) {
            count = count * a;
            a--;
        }
        alert(count);
    });

})();
