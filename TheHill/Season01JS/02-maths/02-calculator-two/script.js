
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    
    const performOperation = operation => {
        var a = Number(document.getElementById("op-one").value);
        var b = Number(document.getElementById("op-two").value);
        
        switch (operation) {
            case "addition":
                var result = a + b;
                alert(result);
                break;
            case "substraction":
                var result = a - b;
                alert(result);
                break;
            case "multiplie":
                var result = a * b;
                alert(result);
                break;
            case "divide":
                var result = a / b;
                alert(result);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
