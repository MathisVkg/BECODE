
let quote = document.getElementById("quote");
let img = document.getElementById("img");
let author = document.getElementById("author");
let gender = document.getElementById("gender");
let totalQuotes = document.getElementById("totalQuote");
let id = document.getElementById("id");

function getData() {
    fetch('https://thatsthespir.it/api')
    .then((res) => res.json())
    .then((data) => {
      quote.innerText = '"' + data.quote + '"';
      author.innerText = data.author;
      id.innerText = "#" + data.id;
      totalQuotes.innerText = data.total_quotes + " quotes";
      if(data.gender === "m"){
        gender.innerText = "M. ";
      }
      else {
        gender.innerText = "Ms. ";
      }
      if(data.photo === "") {
        img.setAttribute("style", "display: none");
      }
      else {
        img.src = data.photo;
      }
      console.log(data);
    });
}
getData();

// let xhr = new XMLHttpRequest;
 
// xhr.open('GET', 'https://thatsthespir.it/api', true)
// xhr.onload = function() {
//     if (this.status !== 200) {
//         alert("error")
//     } else {
//         var rep  = JSON.parse(this.responseText);
//         document.getElementById("quote").innerHTML = rep.quote
//         document.getElementById("autor").innerHTML = rep.author
//         document.getElementById("img").setAttribute("src", rep.photo)
//     }
// }
// xhr.send();
//Common Types of HTTP Statuses
// 200: OK
// 404: ERROR
// 403: FORBIDDEN

// WITH ASYNC/AWAIT

// window.onload = function () {
//   async function getData() {
//     const response = await fetch("https://thatsthespir.it/api%22);

//     if (!response.ok) {
//       const message = An error has occured: ${response.status};
//       throw new Error(message);
//     }

//     const data = await response.json();
//     return data;
//   }

//   getData()
//     .then((data) => {
//       document.getElementById("quote").innerHTML = data.quote;
//       document.getElementById("author").innerHTML = data.author;
//       if (data.photo) {
//         document.getElementById(
//           "img"
//         ).innerHTML = <img src='${data.photo}' alt='image'>;
//       }

//       console.log(data);
//     })
//     .catch((error) => {
//       error.message; // 'An error has occurred: 404'
//     });
// };