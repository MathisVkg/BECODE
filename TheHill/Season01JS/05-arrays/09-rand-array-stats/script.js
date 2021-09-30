// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        var a = 1;
        var array = [];
        while (a < 11) {
            var randomNUmber = Math.ceil(Math.random() * 100);
            document.getElementById("n-"+a).innerHTML = randomNUmber;
            array.push(randomNUmber);
            a++;
        }
        var min = Math.min(...array);
        var max = Math.max(...array);
        var a = 0;
        var sum = 0;
        while (a < array.length) {
            sum += array[a];
            a++;
        }
        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = sum / array.length;
    });
})();
