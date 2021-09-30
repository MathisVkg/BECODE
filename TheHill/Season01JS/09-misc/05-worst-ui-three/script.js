// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here
    let Defil = setInterval(() => {
        document.getElementById("part-one").value = Number(document.getElementById("part-one").value) + 1;
        if (document.getElementById("part-one").value > 499) {
            document.getElementById("part-one").value = 460;
        }
    }, 100);
    let Defil2 = setInterval(() => {
        document.getElementById("part-two").value = Number(document.getElementById("part-two").value) + 1;
        if (document.getElementById("part-two").value > 99) {
            document.getElementById("part-two").value = "00";
        }
    }, 100);
    let Defil3 = setInterval(() => {
        document.getElementById("part-three").value = Number(document.getElementById("part-three").value) + 1;
        if (document.getElementById("part-three").value > 99) {
            document.getElementById("part-three").value = "00";
        }
    }, 100);
    let Defil4 = setInterval(() => {
        document.getElementById("part-four").value = Number(document.getElementById("part-four").value) + 1;
        if (document.getElementById("part-four").value > 99) {
            document.getElementById("part-four").value = "00";
        }
    }, 100);
    document.getElementById("fix-part-one").addEventListener("click", () => {
        clearInterval(Defil);
        document.getElementById("target").innerHTML = "0" + document.getElementById("part-one").value + "000000";
    })
    document.getElementById("fix-part-two").addEventListener("click", () => {
        var stockNumber = Number(document.getElementById("target").innerText);
        var two = document.getElementById("part-two").value;
        clearInterval(Defil2);
        document.getElementById("target").innerHTML = "0" + Number(stockNumber + Number(two + "0000"));
    })
    document.getElementById("fix-part-three").addEventListener("click", () => {
        var stockNumber = Number(document.getElementById("target").innerText);
        var three = document.getElementById("part-three").value;
        clearInterval(Defil3);
        document.getElementById("target").innerHTML = "0" + Number(stockNumber + Number(three + "00"));
    })
    document.getElementById("fix-part-four").addEventListener("click", () => {
        var stockNumber = Number(document.getElementById("target").innerText);
        var four = document.getElementById("part-four").value;
        clearInterval(Defil4);
        document.getElementById("target").innerHTML = "0" + Number(stockNumber + Number(four));
    })
})();
