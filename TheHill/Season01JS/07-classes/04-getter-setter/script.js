// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    class Person {
        constructor(lastname, firstname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get name() {
            return this.firstname + " " + this.lastname;
        }
        set name(val) {
            this.firstname = val.split(" ")[0];
            this.lastname = val.split(" ")[1];
        }
    }
    document.getElementById("run").addEventListener("click", () => {
        personne = new Person ()
        personne.name = "Jean Du-Jardin";
        console.log(personne);
    })
})();
