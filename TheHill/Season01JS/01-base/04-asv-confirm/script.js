
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
    while (confirm != "yes") {
        var Age = prompt("What's your age ?");
        var Gender = prompt("What's your gender ?");
        var Town = prompt("What's your Town ?");
        var confirm = prompt("confirm ? yes or no");
    }
    alert("Your age is " + Age + ", " + "Your Gender is " + ", " + Gender + ", " + "Your Town is " + Town);
})();
