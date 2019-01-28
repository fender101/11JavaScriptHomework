// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

tableData.forEach(function(ufoReport) {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    var cell = tbody.append("td");
    cell.text(value);
  });
});

// BONUS: Refactor to use Arrow Functions!
data.forEach((weatherReport) => {
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});
