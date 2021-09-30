// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here
    var target = document.getElementById("target");
    var table = document.createElement("table");

    target.appendChild(table);
    for (let a = 0; a < 10; a++) {
        let row = table.insertRow(a);
        row.insertCell(0).innerText = a + 1;
    }
})();
