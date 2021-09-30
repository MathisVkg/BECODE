
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    var date = new Date();
    var reelTime = date.getHours() * 3600000 + date.getMinutes() * 60000;
    console.log(reelTime);
    if (reelTime < 63000000) {
        document.getElementById("target").innerHTML = "Hello !"; }
    else 
        document.getElementById("target").innerHTML = "Good Evening";
})();
