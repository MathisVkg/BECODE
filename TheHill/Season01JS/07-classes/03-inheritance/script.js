// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        class Cat extends Animal {
            constructor(name) {
                super(name);
                this.name = name
            }
            static greeting = "Miaou"
        }
        class Dog extends Animal {
            constructor(name) {
                super(name);
                this.name = name
            }
            static greeting = "Waf Waf"
        }
        cat = new Cat (
            "Mistigri"
        )
        dog = new Dog (
            "Poualu"
            
        )
        console.log(cat.sayHello());
        console.log(dog.sayHello());
    })
})();
