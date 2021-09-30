// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect

(() => {
    // your code here
    var i = 0;
    var txt = document.getElementById("target").innerHTML;
    document.getElementById("target").innerHTML = "";

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("target").innerHTML += txt.charAt(i); // charAt() Method returns the 1st character of a string
            var alea = Math.ceil(Math.random() * 500);
            i++;
            // console.log(alea)
        }
        setTimeout(typeWriter, alea);
    }

    typeWriter();
  })();
