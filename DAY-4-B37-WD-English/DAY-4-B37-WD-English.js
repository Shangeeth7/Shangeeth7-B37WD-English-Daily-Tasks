// Q.1 - How to compare two JSON have the same properties without order?

var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };
console.log(_.isEqual(obj1, obj2)); // ADD <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js"></script> in .html

// Q.2 Use the rest countries API url -> https://restcountries.eu/rest/v2/all and
// display all the country flags in console
// Q.3 Use the same rest countries and print all countries name, region, sub region and population

var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);
request.send();
request.onload = function () {
  var data = JSON.parse(request.response);
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    console.log(`
Flag : ${data[i].flag}
Country : ${data[i].name}
Region : ${data[i].region}
Sub-Region ${data[i].subregion}    
Population : ${data[i].population}
    `);
  }
};

// DAY-6-B37-WD-English
