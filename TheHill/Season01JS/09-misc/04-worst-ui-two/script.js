// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker

(() => {

    // your code here
    var two = 0;
    var three = 0;
    var four = 0;
    document.getElementById("part-one").addEventListener("click", () => {
        document.getElementById("target").innerHTML = "0" + (Number(document.getElementById("target").innerHTML) + 1000000)
        if (document.getElementById("target").innerHTML == "0500000000") {
            document.getElementById("target").innerHTML = "0460000000"
        }
    })
    document.getElementById("part-two").addEventListener("click", () => {
        document.getElementById("target").innerHTML = "0" + (Number(document.getElementById("target").innerHTML) + 10000)
        two++
        if (two > 99) {
            document.getElementById("target").innerHTML = "0" + (Number(document.getElementById("target").innerHTML) - 1000000);
            two = 0
        }
    })
    document.getElementById("part-three").addEventListener("click", () => {
        document.getElementById("target").innerHTML = "0" + (Number(document.getElementById("target").innerHTML) + 100)
        three++
        if (three > 99) {
            document.getElementById("target").innerHTML = "0" + (Number(document.getElementById("target").innerHTML) - 10000);
            three = 0
        }
    })
    document.getElementById("part-four").addEventListener("click", () => {
        document.getElementById("target").innerHTML = "0" + (Number(document.getElementById("target").innerHTML) + 1)
        four++
        if (four > 99) {
            document.getElementById("target").innerHTML = "0" + (Number(document.getElementById("target").innerHTML) - 100);
            four = 0
        }
    })
})();
