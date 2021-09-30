// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    // your code here
    var body = document.body.childNodes[1];
    var section = body.childNodes[3];
    var main = section.childNodes[3];
    var Text1 = main.childNodes[1];
    var Text2 = main.childNodes[3];
    var Text3 = main.childNodes[5];
    var Text4 = main.childNodes[7];
    var Text5 = main.childNodes[9];
    
    Text1.innerHTML= "Owned";
    Text2.innerHTML= "Owned";
    Text3.innerHTML= "Owned";
    Text4.innerHTML= "Owned";
    Text5.innerHTML= "Owned";
})();
