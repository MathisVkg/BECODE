const readlineSync = require("readline-sync");



console.log("Once upon a time there was a place to retreat in this world, where no one was on my feet. He was called ");
   
let placename = readlineSync.question("What's the name of the place ? ");
    console.log("Questions remain to be asked : 3");
    console.log("He was called " + placename + " !" + " But one day a group of adventurers decided to conquer these lands");

    let walkingNumber = new Number(readlineSync.question("Days of walking? "));
    console.log("Questions remain to be asked : 2");
    console.log("After " + walkingNumber + " days of walking they finally arrived at a cursed castle, cursed since ancient times");
    console.log("The group was made up of experienced adventurers, all of them had many feats behind them and this cursed castle did not frighten them in the least. After a long corridor a choice faces him");

    let choicename = readlineSync.question("A passage with several choices is offered to them, where are they going ? 1 is left, 2 is right or 3 is straight ? ");
    console.log("Questions remain to be asked : 1");

if (choicename == 1) {
    console.log("You choice to go left. Good choice ! Your adventurers can continue the adventures in the castle and explore the other rooms.");
    console.log("Your adventurers finally arrive at the last room of the castle, will they succeed in winning the treasure?");
    console.log("They enter the room and the boss gets up, then prepares a merciless fight, each one fights for the victory.");
    console.log("Your adventurers defeat the boss and advance towards the treasure");
    let takename = readlineSync.question("Take the treasure ? 1 is yes or 2 is no ? ");
    console.log("Questions remain to be asked : 0");
        if (takename == 1) {
        console.log("You took the treasure! But unfortunately a trap is activated and the room collapses!"); }
        else if (takename == 2) {
        console.log("You don't take the treasure! You missed an opportunity to get rich"); }}

else if (choicename == 2) {
    console.log("You choice to go right. Bad choice ! After several meters a trap is activated and kills all the adventurers"); }
else if (choicename == 3) {
    console.log("You choice to go straight. Bad choice ! After several meters a trap is activated and kills all the adventurers"); }