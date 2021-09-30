(() => {
  // your code here
    document.getElementById("run").addEventListener("click", () => {
    window.lib.getPosts(callback);

    function callback(error, articles) {
      console.log(error, articles);
    }
  });
})();
