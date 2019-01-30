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

// // Filter Try #2
function funcFilterDate() {
  d3.event.preventDefault();

  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchdate");
  filter = input.value.toUpperCase();
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

function funcFilterState() {
  d3.event.preventDefault();

  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchstate");
  filter = input.value.toUpperCase();
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}



// // Filter Try #1: Assign the data from `data.js` to a descriptive variable
// var sightings = data;

// // Select the submit button
// var submit = d3.select("#filter-btn");

// submit.on("click", function() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();

//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   var filteredData = sightings.filter(sightings1 => sightings1.datetime === inputValue);
  
// });





// // // Filter Try #3

// function funcFilterDate() {
//   var value, date, tr, i;

//   value = document.getElementById("value").value.toUpperCase();
//   tr = document.getElementsByTagName("tr");

//   for (i=0, i<tr.length; i++) {
//     date = tr[i].getElementsByTagName("date");
//     if (date[0].innerHTML.toUpperCase().indexOf(value) > -1) {
//       tr[i].style.display = "flex";
//     }
//     else {
//       tr[i].style.display = "none";
//     }
//   }
// }