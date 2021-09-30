// INSERT CANVAS & VAR INIT

let firstHeading = document.getElementById("firstHeading");
firstHeading.insertAdjacentHTML(
  "afterend",
  '<canvas id="myChart" width="400" height="400"></canvas>'
);
let xhr = new XMLHttpRequest();
let labels = [];
let datas = [];

// DRAWING GRAPH

function draw(labels, datas) {
  const ctx = document.getElementById("myChart").getContext("2d");

  let myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Crime Statistics",
          backgroundColor: "rgb(155, 59, 230)",

          data: datas,
        },
      ],
    },
  });
}

// API CALL

function getData(xhr) {
  xhr.open(
    "GET",
    `https://canvasjs.com/services/data/datapoints.php?nocache=${new Date().getTime()}`,
    true
  );
  xhr.onload = function () {
    if (xhr.status === 200) {
      result = JSON.parse(xhr.responseText);
      result.forEach((element) => {
        labels.push(element[0]);
        datas.push(element[1]);
      });

      draw(labels, datas);
    } else {
      document.getElementById("chart").innerHTML = "Error 404";
    }
  };
  xhr.send();

  labels = [];
  datas = [];
}
getData(xhr);
setInterval(function () {
  getData(xhr);
}, 10000);

getData();
draw();

console.log(datas);

// Table 1

let table1 = document.getElementById("table1");
table1.insertAdjacentHTML(
  "beforebegin",
  '<canvas id="canvas2" width="400" height="400"></canvas>'
);

// let canvas2 = document.getElementById("canvas2");
// let y2Rows = tab2.rows;
