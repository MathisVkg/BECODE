
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
document.getElementById("run").addEventListener("click", () => {
    var a = document.getElementById("year").value;
    var count = 0;
    var array = [];
    while (count < 12 ) {
        var date = new Date(a, count, 13);
        if (date.getDay() == 5) {
            switch (count) {
                case 0:
                var month = "Juanuary";
                array.push(month);
                    break;
                case 1:
                var month = "February";
                array.push(month);
                    break;
                case 2:
                var month = "March";
                array.push(month);
                    break;
                case 3:
                var month = "April";
                array.push(month);
                    break;
                case 4:
                var month = "Mei";
                array.push(month);
                    break;
                case 5:
                var month = "Jun";
                array.push(month);
                    break;
                case 6:
                var month = "Jully";
                array.push(month);
                    break;
                case 7:
                var month = "August";
                array.push(month);
                    break;
                case 8:
                var month = "September";
                array.push(month);
                    break;
                case 9:
                var month = "October";
                array.push(month);
                    break;
                case 10:
                var month = "November";
                array.push(month);
                    break;
                case 11:
                var month = "December";
                array.push(month);
                    break;
            }
        }
        count++;
    }
    alert("Is the Friday 13 " + array);
})
})();
