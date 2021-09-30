(() => {
  // your code here

  let pass = document.getElementById("pass-one");
  let validity = document.getElementById("validity");

  function checknums(value) {
    let reg = /\d.*\d/g;
    return reg.test(value);
  }

  pass.addEventListener("input", () => {
    if (pass.value.length >= 8 && checknums(pass.value)) {
      validity.innerHTML = "Ok";
    } else {
      validity.innerHTML = "Not ok";
    }
  });
})();
