
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var date = new Date();
    var heures = date.getHours();
    var minutes = date.getMinutes();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDay();
    var date = date.getDate();

    switch (month) {
        case 0:
        var month = "Juanuary";
            break;
        case 1:
        var month = "February";
            break;
        case 2:
        var month = "March";
            break;
        case 3:
        var month = "April";
            break;
        case 4:
        var month = "Mei";
            break;
        case 5:
        var month = "Jun";
            break;
        case 6:
        var month = "Jully";
            break;
        case 7:
        var month = "August";
            break;
        case 8:
        var month = "September";
            break;
        case 9:
        var month = "October";
            break;
        case 10:
        var month = "November";
            break;
        case 11:
        var month = "December";
            break;
    }
    switch (day) {
        case 1:
        var day = "Monday";
            break;
        case 2:
        var day = "Tuesday";
        
            break;
        case 3:
        var day = "Wednesday";
            break;
        case 4:
        var day = "Thursday";
            break;
        case 5:
        var day = "Friday";
            break;
        case 6:
        var day = "Saturday";
            break;
        case 6:
        var day = "Sunday";
            break;

    }
    document.getElementById("target").innerHTML = day + " " + date + " " + month + " " + year + ", " + heures + "h" + minutes;
})();
