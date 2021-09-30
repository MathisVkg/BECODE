
(() => {

const word = [
        "sheets",
        "measure",
        "bright",
        "glasses",
        "silk",
        "noodles",
        "foam",
        "spoon",
        "darts",
        "flag",
        "uprising",
        "love",
        "division",
        "joke",
        "rifle",
        "duck",
        "capsule",
        "hunchback",
        "graduates",
        "projectile",
        "floating",
        "freckle",
        "gymnastics",
        "ban",
        "performing",
        "patient",
        "buniness",
        "sacrifice",
        "sheep",
        "greenland",
        "indications",
        "tweezers",
        "bread",
        "refrigerator",
        "photography",
    ];

    var randomNumber = Math.floor(Math.random() * 35);
    var takeWord = word[randomNumber];
    var wordLenght = takeWord.length;
    var stockWinner = 0;
    var stockAttempt = 15;
    document.getElementById("attempt").innerHTML = "Attempt left: " + stockAttempt;
    document.getElementById("score").innerHTML = "Your word is " + wordLenght + " letters long";
    const buttons =  document.querySelectorAll(".letter")
    buttons.forEach((btn) => {
        btn.addEventListener("click", letterApproval)
    });

    for(var a = 0; a < wordLenght; a++) {
        let para = document.createElement("p");
        para.setAttribute("class", "margin");
        para.setAttribute("id", "underScore" + a);
        para.innerHTML= "___";
        document.getElementById("underFlex").appendChild(para);
    }


    function letterApproval(event) {
        var b = 0;
        let letter = event.target.innerText.toLowerCase()
        while (b < wordLenght) {
            if (takeWord[b] === letter) {
                document.getElementById("underScore" + b).innerHTML = letter;
                event.target.disabled = "true";
                stockWinner++;
            }
            b++;
        }
        stockAttempt--;
        document.getElementById("attempt").innerHTML = "Attempt left: " + stockAttempt;

        if (stockAttempt == 0) {
            document.getElementById("attempt").innerHTML = "GAME OVER";
            let giffy = document.createElement("img");
            giffy.src = "https://github.com/MathisVkg/Hangman/blob/main/assets/giphy2.gif?raw=true";
            document.getElementById("gif").appendChild(giffy);
            for(var i = 1; i < 27; i++) {
                document.getElementById("bouton" + i).disabled = true;
            }
        }
        if (stockWinner == wordLenght && stockAttempt != 0) {
            document.getElementById("winner").innerHTML = "You find the word, you WIN";
            let giffy = document.createElement("img");
            giffy.src = "https://github.com/MathisVkg/Hangman/blob/main/assets/giphy.gif?raw=true";
            document.getElementById("gif").appendChild(giffy);
            for(var i = 1; i < 27; i++) {
                document.getElementById("bouton" + i).disabled = true;
            }
        }
    }


    console.log(randomNumber);
    console.log(takeWord);
    //alert(takeWord);
})();