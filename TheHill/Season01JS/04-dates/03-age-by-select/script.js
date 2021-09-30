// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    // console.log(date);
    // console.log(month);
    // console.log(year);
    // console.log(day);

    document.getElementById("run").addEventListener("click", () => {

        var stockYear = year - document.getElementById("dob-year").value;
        var stockMonth = document.getElementById("dob-month").value;
        var stockDay = document.getElementById("dob-day").value;

        if (stockMonth > (month+1)) {
            alert("Your age is " + (stockYear - 1));
            console.log(1);
        } else if (stockMonth == (month+1) && stockDay <= day) {
            alert("Your age is " + (stockYear));
            console.log(2);
        } else if (stockMonth == (month+1) && stockDay > day){
            alert("Your age is " + (stockYear - 1));
            console.log(3);
        } else {
            alert("Your age is " + stockYear);
            console.log(4);
        }

    })

})();