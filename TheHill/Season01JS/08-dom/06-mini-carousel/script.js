// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    var a = 1;
    var img = document.querySelector("img");
    document.getElementById("next").addEventListener("click", () => {
        if (a == gallery.length) {
            a = 0;
        }
        img.src = gallery[a];
        a++;
    })
})();
