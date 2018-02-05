'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allLocations = [];

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

new MakeLocation('First and Pike', 23, 65, 6.3);
new MakeLocation('Seatac Airport', 3, 24, 1.2);
new MakeLocation('Seattle Center', 11, 38, 3.7);
new MakeLocation('Capitol Hill', 20, 38, 2.3);
new MakeLocation('Alki', 2, 16, 4.6);

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
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Totals';
  tableEl.appendChild(thEl);
}

makeTableHeader();


function makeTableRow() {
  for (var i = 0; i < allLocations.length; i++) {
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    var tdEl = document.createElement('td');
    tdEl.textContent = allLocations[i].name;
    trEl.appendChild(tdEl);

    console.log(allLocations);

    for (var j = 0; j < hours.length; j++) {
      tdEl = document.createElement('td');
      tdEl.textContent = allLocations[i].cookiesSoldPerHour[j];
      trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tableEl.appendChild(trEl);
    tdEl.textContent = allLocations[i].totalCookies;
    trEl.appendChild(tdEl);
  }
}
makeTableRow();


var makeHourlyTotals = function() {
  var tableFoot = document.createElement('tfoot');
  tableEl.appendChild(tableFoot);

  var hourTotalTRow = document.createElement('tr');
  tableFoot.appendChild(hourTotalTRow);

  var hourTotalTH = document.createElement('th');
  hourTotalTH.textContent = 'Totals';
  hourTotalTRow.appendChild(hourTotalTH);
  
  var hourTotalTD;
  var hourlyTotal = 0;
  var dailyTotalFoot = 0;
  
  for (var i = 0; i < hours.length; i++) {
    hourTotalTD = document.createElement ('td');
    hourlyTotal = 0;

    for(var j = 0; j < allLocations.length; j++) {
      hourlyTotal += allLocations[j].cookiesSoldPerHour[i];
    }
    dailyTotalFoot += hourlyTotal;
    hourTotalTD.textContent = hourlyTotal;
    hourTotalTRow.appendChild(hourTotalTD);
  }
  hourTotalTD = document.createElement ('td');
  hourTotalTD.textContent = dailyTotalFoot;
  hourTotalTRow.appendChild(hourTotalTD);
};
makeHourlyTotals();


var storeForm = document.getElementById('addstore');

function createNewLocation(event) {
  event.preventDefault();
  
  var storeName = event.target.storename.value;
  var minCust = parseInt(event.target.mincust.value);
  var maxCust = parseInt(event.target.maxcust.value);
  var avgCookies = parseFloat(event.target.avgcookies.value);
  
  if(!storeName || !minCust || !maxCust || !avgCookies)
    return alert('All Fields Required');
  
  var addStore = new MakeLocation(storeName, minCust, maxCust, avgCookies);
  addStore.calcCookiesSoldPerHour();
  console.log(addStore);
  makeOneRow();
  
  function makeOneRow() {
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    var tdEl = document.createElement('td');
    tdEl.textContent = storeName;
    trEl.appendChild(tdEl);
    console.log(tdEl);
  
    for (var i = 0; i < hours.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = addStore.cookiesSoldPerHour[i];
      trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tableEl.appendChild(trEl);
    tdEl.textContent = addStore.totalCookies;
    trEl.appendChild(tdEl);
  }
  
  event.target.storename.value = null;
  event.target.mincust.value = null;
  event.target.maxcust.value = null;
  event.target.avgcookies.value = null;
}
storeForm.addEventListener('submit',(createNewLocation));


