'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


var allLocations = [];
// var totalTotal = 0;
// var totalCookiesPerHour = 0;

function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookiesPerSale) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.totalCookies = 0;
  this.randCustPerHour = [];
  this.cookiesSoldPerHour = [];
  allLocations.push(this);
  this.calcRandCustPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random()* (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustPerHour[i]);
    }
  };
  this.calcCookiesSoldPerHour = function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldPerHour.push(Math.round(this.avgCookiesPerSale * this.randCustPerHour[j]));
      this.totalCookies += this.cookiesSoldPerHour[j];
      console.log(this.cookiesSoldPerHour[j]);
    }
    console.log(this.totalCookies + ' cookies total.');
  };
  this.calcRandCustPerHour();
  this.calcCookiesSoldPerHour();
}
//call constructors
function makeStore() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('Seatac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capitol Hill', 20, 38, 2.3);
  new MakeLocation('Alki', 2, 16, 4.6);
}
makeStore();

console.log(makeStore());


// create a table header function
// more dom manipulation
// notrender function. use a new function for the header
// pick it apart piece by peice.
// first solve the problem and then tell the computer how to doit
// organize the locations on the left
// break the table down into pieces . you could even do one function per row
// 

var tableEl = document.getElementById('cookiestands');

function makeTableHeader() {
  var thEl = document.createElement('th');
  thEl.textContent = '';
  tableEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = hours[i];
    tableEl.appendChild(tdEl);
  }
}
makeTableHeader();

function makeDailyTotal() {
  var thEl = document.createElement('th');
  thEl.textContent = 'Daily Totals';
  tableEl.appendChild(thEl);
}
makeDailyTotal();


function makeTableRow() {
  for (var i = 0; i < allLocations.length; i++) {
    var cookieTable = document.getElementById('cookiestands');
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = allLocations[i].name;
    cookieTable.appendChild(tdEl);

    for (var j = 0; j < hours.length; j++) {
      tdEl = document.createElement('td');
      tdEl.textContent = allLocations[i].cookiesSoldPerHour[j];
      cookieTable.appendChild(tdEl);
    }
    // tdEl = document.createElement('td');
    // tdEl.textContent = allLocations[j].totalCookies;
    // trEl.appendChild(tdEl);
    // tableEl.appendChild(trEl);
  }
}
makeTableRow();



// function makeTableRow() {
//   for (var j = 0; j < allLocations.length;j++) {
//     var cookiestands = document.getelementbyid('cookiestands');
//     var trEl = document.createElement('tr');
//     var tdEl = document.createElement('td');
//     tdEl.textcontent = allLocations[j].name;
//     trEl.appendchild(tdEl);

//     for (var i = 0; i < hours.lenth; i++) {
//       tdEl =document.createlement('td');
//       tdEl.textcontent = allLocations[j].cookiessoldbyhour[i];
//       trEl.appendchild(tdEl);
//     }
//     tdEl = document.createelement('td');
//     tdEl.textcontent = allLocations[j].totalcookies;
//     trEl.appendchild(tdEl);
//     cookiestands.appendchild(trEl);
//   }
// }
// makeTableRow();

