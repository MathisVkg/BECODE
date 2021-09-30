// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here

    var img = document.querySelector("img");
    var out = document.querySelector("img").getAttribute("src");
    var kiss = document.querySelector("img").getAttribute("data-hover");
    document.querySelector("img").addEventListener("mouseover", () => {
        img.src = kiss;
    })
    document.querySelector("img").addEventListener("mouseleave", () => {
        img.src = out;
    })
})();
