// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here
    var i = localStorage.getItem("target");

    document.getElementById("target").innerHTML = localStorage.getItem("target");
    
    document.getElementById("increment").addEventListener("click", () => {
        document.getElementById("target").innerHTML = i++;
        localStorage.setItem("target", i);
    })
})();
