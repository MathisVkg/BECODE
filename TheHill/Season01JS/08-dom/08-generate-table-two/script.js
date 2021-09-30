// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    // your code here
    var target = document.getElementById("target");
    var table = document.createElement("table");

    target.appendChild(table);
    for (let a = 0; a < 10; a++) {
        let row = table.insertRow(a);
        for (let b = 0; b < 10; b++) {
            row.insertCell(b).innerText = (a + 1) * (b + 1);
        }
    }
})();
