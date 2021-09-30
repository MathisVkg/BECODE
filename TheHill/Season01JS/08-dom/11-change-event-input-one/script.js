// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)

(() => {
  // your code here
  document.getElementById("pass-one").setAttribute("maxlength", "10");

  var a = document.getElementById("pass-one");
  var b = document.getElementById("counter");
  a.addEventListener("input", () => {
    b.innerHTML = a.value.length + "/10";
  });
})();
