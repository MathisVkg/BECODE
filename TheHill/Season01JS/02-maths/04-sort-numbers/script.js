// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        var array = document.getElementById("numbers").value;
        var arrNumCopy = array.split(", ");
        var arrNumCopy2=[];

        for (let i = 0; i < arrNumCopy.length; i++) {
            arrNumCopy2.push(Number(arrNumCopy[i]))
        };
        arrNumCopy2.sort(function(a, b){
            return a - b;
        });
        alert(arrNumCopy2);
    });

})();
