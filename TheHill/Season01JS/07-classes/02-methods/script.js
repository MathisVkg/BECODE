//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here
    class Person {
        constructor(lastname, firstname) {
            this.lastname = lastname;
            this.firstname = firstname;
        }
        sayHello() {
            return ("hello " + this.lastname + " " + this.firstname + " !");
        }
    }
    document.getElementById("run").addEventListener("click", () => {
        personne = new Person (
            "Vankoekelberg", "Mathis"
        )
        console.log(personne.sayHello());
    })
})();
