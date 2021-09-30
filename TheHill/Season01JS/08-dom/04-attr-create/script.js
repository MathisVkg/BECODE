// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    // your code here 
    // var source = document.getElementById("source");
    // var image = source.getAttribute("data-image");
    // const imgKitten = document.createElement("imgKitten");
    // imgKitten.src = image;
    // document.body.appendChild(imgKitten);

    var idSource = document.getElementById("source");
    var image = idSource.getAttribute("data-image");
    var target = document.getElementById("target");

    target.innerHTML = ` <img src=${image}></img> `;
    let span = (document.querySelector("#source"));
    var body = document.body.childNodes[1];
    var section = body.childNodes[3];
    var main = section.childNodes[3];
    main.removeChild(span);
})();
