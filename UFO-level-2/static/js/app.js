// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function tableBuild(ufoSightData){

    tbody.html("");

    // Step 1: Loop Through `data` and console.log each UFO report object
    ufoSightData.forEach(function(ufoData){
        
        // Step 2:  Use d3 to append one table row `tr` for each UFO report object
        var row = tbody.append("tr");
    
        // Step 3:  Use `Object.entries` to console.log each UFO report value
        Object.entries(ufoData).forEach(function([key, value]){   

            // Step 4: Use d3 to append 1 cell per UFO report value (datetime, city, state, country, shape, durationMinutes, comments)
            var cell = row.append("td");

            // Step 5: Use d3 to update each cell's text with UFO report values (datetime, city, state, country, shape, durationMinutes, comments)
            cell.text(value);
        })

    })

};


var filterButton = d3.selectAll("#filter-btn");
var form = d3.selectAll("#form");


function runEnter() {

    d3.event.preventDefault();

    var dates = d3.select("#datetime").property("value");
    var cities = d3.select("#ufo-city").property("value");
    // var state = d3.select("#ufo-state").property("value");
    // var country = d3.select("#ufo-country").property("value");
    // var shape = d3.select("#ufo-shape").property("value");

    var filteredData = tableData;

    if (dates){

        filteredData = filteredData.filter((sightDate => sightDate.datetime === dates));
        console.log(filteredData);
    }

    tableBuild(filteredData);
    console.log(filteredData);

};

filterButton.on("click", runEnter);
form.on("submit", runEnter);

tableBuild(tableData);

