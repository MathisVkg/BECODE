
var bonus = 0;
var sushiStock = 0;
var actifBonus = 0;
var highScore = 0;
var autoClicker = 0;
document.getElementById("upgrade1").addEventListener("click", () => {
    if(sushiStock >= 5000) {
        autoClicker = setInterval(autoOne, 1000);
        function autoOne() {
            sushiStock++;
            if(highScore <= sushiStock) {
                highScore = sushiStock;
            }
            document.getElementById("score").innerHTML = sushiStock + " sushi points";
            document.getElementById("upgrade1").disabled = true;
            document.getElementById("upgrade1").setAttribute("style", "background-color: grey");
            document.getElementById("bonusActif1").innerHTML = "Sweet Soy Sauce";
            document.getElementById("highScore").innerHTML = "highScore: " + highScore + " sushi points";
        }
        sushiStock = sushiStock - 5000;
    }
})
document.getElementById("upgrade2").addEventListener("click", () => {
    if(sushiStock >= 10000) {
        clearInterval(autoClicker);
        autoClicker = setInterval(autoTwo, 1000);
        function autoTwo() {
            sushiStock += 5;
            if(highScore <= sushiStock) {
                highScore = sushiStock;
            }
            document.getElementById("score").innerHTML = sushiStock + " sushi points";
            document.getElementById("upgrade2").disabled = true;
            document.getElementById("upgrade2").setAttribute("style", "background-color: grey");
            document.getElementById("bonusActif2").innerHTML = "Salty Soy Sauce";
            document.getElementById("highScore").innerHTML = "highScore: " + highScore + " sushi points";
        }    
        sushiStock = sushiStock - 10000;
    }
})
document.getElementById("upgrade3").addEventListener("click", () => {
    if(sushiStock >= 50000) {
        clearInterval(autoClicker);
        autoClicker = setInterval(autoTree, 1000);
        function autoTree() {
            sushiStock += 10;
            if(highScore <= sushiStock) {
                highScore = sushiStock;
            }
            document.getElementById("score").innerHTML = sushiStock + " sushi points";
            document.getElementById("upgrade3").disabled = true;
            document.getElementById("upgrade3").setAttribute("style", "background-color: grey");
            document.getElementById("bonusActif3").innerHTML = "Rice Master";
            document.getElementById("highScore").innerHTML = "highScore: " + highScore + " sushi points";
        }    
        sushiStock = sushiStock - 50000;
    }
})
document.getElementById("upgrade4").addEventListener("click", () => {
    if(sushiStock >= 100000) {
        clearInterval(autoClicker);
        autoClicker = setInterval(autoFour, 1000);
        function autoFour() {
            sushiStock += 25;
            if(highScore <= sushiStock) {
                highScore = sushiStock;
            }
            document.getElementById("score").innerHTML = sushiStock + " sushi points";
            document.getElementById("upgrade4").disabled = true;
            document.getElementById("upgrade4").setAttribute("style", "background-color: grey");
            document.getElementById("bonusActif4").innerHTML = "Shushi Shop";
            document.getElementById("highScore").innerHTML = "highScore: " + highScore + " sushi points";
        }    
        sushiStock = sushiStock - 100000;
    }
})
document.getElementById("upgrade5").addEventListener("click", () => {
    if(sushiStock >= 250000) {
        clearInterval(autoClicker);
        autoClicker = setInterval(autoFive, 1000);
        function autoFive() {
            sushiStock += 50;
            if(highScore <= sushiStock) {
                highScore = sushiStock;
            }
            document.getElementById("score").innerHTML = sushiStock + " sushi points";
            document.getElementById("upgrade5").disabled = true;
            document.getElementById("upgrade5").setAttribute("style", "background-color: grey");
            document.getElementById("bonusActif5").innerHTML = "Saumon Factory";
            document.getElementById("highScore").innerHTML = "highScore: " + highScore + " sushi points";
        }    
        sushiStock = sushiStock - 250000;
    }
})
document.getElementById("upgrade6").addEventListener("click", () => {
    if(sushiStock >= 500000) {
        clearInterval(autoClicker);
        autoClicker = setInterval(autoSix, 1000);
        function autoSix() {
            sushiStock += 100;
            if(highScore <= sushiStock) {
                highScore = sushiStock;
            }
            document.getElementById("score").innerHTML = sushiStock + " sushi points";
            document.getElementById("upgrade6").disabled = true;
            document.getElementById("upgrade6").setAttribute("style", "background-color: grey");
            document.getElementById("bonusActif6").innerHTML = "Chef Sushi";
            document.getElementById("highScore").innerHTML = "highScore: " + highScore + " sushi points";
        }    
        sushiStock = sushiStock - 500000;
    }
})
document.getElementById("imageScore").addEventListener("click", () => {
    document.getElementById("score").innerHTML = sushiStock + " sushi points";
    document.getElementById("highScore").innerHTML = "High Score: " + highScore + " sushi points";
    if(bonus === 1) {
        if(highScore <= sushiStock) {
            highScore += 2;
        }
        sushiStock += 2;
    }
    if(bonus === 2){
        if(highScore <= sushiStock) {
            highScore += 3;
        }
        sushiStock += 3;
    }
    if(bonus === 3){
        if(highScore <= sushiStock) {
            highScore += 5;
        }
        sushiStock += 5;
    }
    if(bonus === 4){
        if(highScore <= sushiStock) {
            highScore += 10;
        }
        sushiStock += 10;
    }
    else if (bonus === 0){
        if(highScore <= sushiStock) {
            highScore++;
        }
        sushiStock++;
    }
})


document.getElementById("multiX2").addEventListener("click", () => {
    if(sushiStock >= 100) {
        bonus += 1;
        actifBonus += 1;
        document.getElementById("multiX2").disabled = true;
        document.getElementById("multiX3").removeAttribute("style");
        document.getElementById("multiX2").setAttribute("style", "display: none");
        document.getElementById("multitext").innerHTML = "800 sushi points";
        document.getElementById("bonusActif").innerHTML = "mutliplier x2";
        document.getElementById("bonusActif").setAttribute("title", "Click is double");
        sushiStock = sushiStock - 100;
    }
})
document.getElementById("multiX3").addEventListener("click", () => {
    if(actifBonus === 1 && sushiStock >= 800) {
        actifBonus += 1;
        bonus += 1;
        document.getElementById("multiX3").disabled = true;
        document.getElementById("multiX5").removeAttribute("style");
        document.getElementById("multiX3").setAttribute("style", "display: none");
        document.getElementById("multitext").innerHTML = "5000 sushi points";
        document.getElementById("bonusActif").innerHTML = "mutliplier x3";
        document.getElementById("bonusActif").setAttribute("title", "Click is triple");
        sushiStock = sushiStock - 800;
    }
})
document.getElementById("multiX5").addEventListener("click", () => {
    if(actifBonus === 2 && sushiStock >= 5000) {
        actifBonus += 1;
        bonus += 1;
        document.getElementById("multiX5").disabled = true;
        document.getElementById("multiX10").removeAttribute("style");
        document.getElementById("multiX5").setAttribute("style", "display: none");
        document.getElementById("multitext").innerHTML = "15000 sushi points";
        document.getElementById("bonusActif").innerHTML = "mutliplier x5";
        document.getElementById("bonusActif").setAttribute("title", "Click is x5");
        sushiStock = sushiStock - 5000;
    }
})
document.getElementById("multiX10").addEventListener("click", () => {
    if(actifBonus === 3 && sushiStock >= 15000) {
        actifBonus += 1;
        bonus += 1;
        document.getElementById("multiX10").disabled = true;
        document.getElementById("multiX10").setAttribute("style", "display: none");
        document.getElementById("bonusActif").innerHTML = "mutliplier x10";
        document.getElementById("bonusActif").setAttribute("title", "Click is x10");
        sushiStock = sushiStock - 15000;
    }
})