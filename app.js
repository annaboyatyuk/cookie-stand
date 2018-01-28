'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


var allLocations = [];
// var totalTotal = 0;

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
  this.render = function() {
    var makeTable = document.getElementById('cookiestands');
    this.calcRandCustPerHour();
    this.calcCookiesSoldPerHour();
    var trEl = document.createElement('tr');
    trEl.textContent = this.name;
    makeTable.appendChild(trEl);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldPerHour[k] + ' cookies';
      console.log(liEl);
      firstAndPike.appendChild(liEl);
    }
    liEl.textContent = 'Total: ' + this.totalCookies;
  };
  // this.makeTable.render();
}

console.log(allLocations + 'all locations');


// function storeList() {
//   var storeName = [];
//   this.firstAndPike = new MakeLocation('First and Pike', 23, 65, 6.3);
//   this.seaTac = new MakeLocation('Seatac Airport', 3, 24, 1.2);
//   this.seattleCenter = new MakeLocation('Seattle Center', 11, 38, 3.7);
//   this.capitolHill = new MakeLocation('Capitol Hill', 20, 38, 2.3);
//   this.alki = new MakeLocation('Alki', 2, 16, 4.6);
//   return storeName;
// }


var firstAndPike = new MakeLocation('First and Pike', 23, 65, 6.3);
var seaTac = new MakeLocation('Seatac Airport', 3, 24, 1.2);
var seattleCenter = new MakeLocation('Seattle Center', 11, 38, 3.7);
var capitolHill = new MakeLocation('Capitol Hill', 20, 38, 2.3);
var alki = new MakeLocation('Alki', 2, 16, 4.6);

console.log(firstAndPike.calcRandCustPerHour());
console.log(firstAndPike.calcCookiesSoldPerHour());

console.log(seaTac.calcRandCustPerHour());
console.log(seaTac.calcCookiesSoldPerHour());

console.log(seattleCenter.calcRandCustPerHour());
console.log(seattleCenter.calcCookiesSoldPerHour());

console.log(capitolHill.calcRandCustPerHour());
console.log(capitolHill.calcCookiesSoldPerHour());

console.log(alki.calcRandCustPerHour());
console.log(alki.calcCookiesSoldPerHour());



var tableEl = document.getElementById('cookiestands');

function makeTableRow() {
  var trEl = document.createElement('tr');
  for (var m = 0; m < allLocations.length; m++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = allLocations[m];
    trEl.appendChild(tdEl);
  }
  tableEl.appendChild(trEl);
}

makeTableRow(firstAndPike);
makeTableRow(seaTac);
makeTableRow(seattleCenter);
makeTableRow(capitolHill);
makeTableRow(alki);

// function makeHeaderRow() {
//   var cookiestand = document.getElementById('cookiestand');
//   var trEl = document.createElement('tr');
//   var thEl = document.createElement('thEl');
//   trEl.appendChild(thEl);
//   cookiestand.appendChild();
//   return makeHeaderRow;
// }

// makeHeaderRow(hours.length);














// var firstAndPike = {
//   name: 'First and Pike',
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiesPerSale: 6.3,
//   totalCookies: 0,
//   randCustPerHour: [],
//   cookiesSoldPerHour: [],
//   calcRandCustPerHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustPerHour.push(Math.floor(Math.random()* (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
//       console.log(this.randCustPerHour[i]);
//     }
//   },
//   calcCookiesSoldPerHour: function() {
//     for (var j = 0; j < hours.length; j++) {
//       this.cookiesSoldPerHour.push(Math.round(this.avgCookiesPerSale * this.randCustPerHour[j]));
//       this.totalCookies += this.cookiesSoldPerHour[j];
//       console.log(this.cookiesSoldPerHour[j]);
//     }
//     console.log(this.totalCookies + ' cookies total.');
//   },
//   render: function() {
//     var firstAndPike = document.getElementById('firstandpike');
//     var fandp = document.getElementById('fandp');
//     this.calcRandCustPerHour();
//     this.calcCookiesSoldPerHour();
//     var h3El = document.createElement('h3');
//     h3El.textContent = this.name;
//     fandp.appendChild(h3El);
//     for (var k = 0; k < hours.length; k++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[k] + ': ' + this.cookiesSoldPerHour[k] + ' cookies';
//       console.log(liEl);
//       firstAndPike.appendChild(liEl);
//     }
//     liEl.textContent = 'Total: ' + this.totalCookies;
//   }
// };
// firstAndPike.render();



// var seaTacAirport = {
//   name: 'Seatac Airport',
//   minCustPerHour: 3,
//   maxCustPerHour: 24,
//   avgCookiesPerSale: 1.2,
//   totalCookies: 0,
//   randCustPerHour: [],
//   cookiesSoldPerHour: [],
//   calcRandCustPerHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustPerHour.push(Math.floor(Math.random()* (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
//       console.log(this.randCustPerHour[i]);
//     }
//   },
//   calcCookiesSoldPerHour: function() {
//     for (var j = 0; j < hours.length; j++){
//       this.cookiesSoldPerHour.push(Math.round(this.avgCookiesPerSale * this.randCustPerHour[j]));
//       this.totalCookies += this.cookiesSoldPerHour[j];
//       console.log(this.cookiesSoldPerHour[j]);
//     }
//     console.log(this.totalCookies + ' cookies total.');
//   },
//   render: function() {
//     var seaTacAirport = document.getElementById('seatacair');
//     var seatac = document.getElementById('seatac');
//     this.calcRandCustPerHour();
//     this.calcCookiesSoldPerHour();
//     var h3El = document.createElement('h3');
//     h3El.textContent = this.name;
//     seatac.appendChild(h3El);
//     for (var k = 0; k < hours.length; k++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[k] + ': ' + this.cookiesSoldPerHour[k] + ' cookies';
//       console.log(liEl);
//       seaTacAirport.appendChild(liEl);
//     }
//     liEl.textContent = 'Total: ' + this.totalCookies;
//   }
// };
// seaTacAirport.render();


// var seattleCenter = {
//   name: 'Seattle Center',
//   minCustPerHour: 11,
//   maxCustPerHour: 38,
//   avgCookiesPerSale: 3.7,
//   totalCookies: 0,
//   randCustPerHour: [],
//   cookiesSoldPerHour: [],
//   calcRandCustPerHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustPerHour.push(Math.floor(Math.random()* (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
//       console.log(this.randCustPerHour[i]);
//     }
//   },
//   calcCookiesSoldPerHour: function() {
//     for (var j = 0; j < hours.length; j++){
//       this.cookiesSoldPerHour.push(Math.round(this.avgCookiesPerSale * this.randCustPerHour[j]));
//       this.totalCookies += this.cookiesSoldPerHour[j];
//       console.log(this.cookiesSoldPerHour[j]);
//     }
//     console.log(this.totalCookies + ' cookies total.');
//   },
//   render: function() {
//     var seattleCenter = document.getElementById('seattlecenter');
//     var center = document.getElementById('center');
//     this.calcRandCustPerHour();
//     this.calcCookiesSoldPerHour();
//     var h3El = document.createElement('h3');
//     h3El.textContent = this.name;
//     center.appendChild(h3El);
//     for (var k = 0; k < hours.length; k++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[k] + ': ' + this.cookiesSoldPerHour[k] + ' cookies';
//       console.log(liEl);
//       seattleCenter.appendChild(liEl);
//     }
//     liEl.textContent = 'Total: ' + this.totalCookies;
//   }
// };
// seattleCenter.render();



// var capitolHill = {
//   name: 'Capitol Hill',
//   minCustPerHour: 20,
//   maxCustPerHour: 38,
//   avgCookiesPerSale: 2.3,
//   totalCookies: 0,
//   randCustPerHour: [],
//   cookiesSoldPerHour: [],
//   calcRandCustPerHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustPerHour.push(Math.floor(Math.random()* (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
//       console.log(this.randCustPerHour[i]);
//     }
//   },
//   calcCookiesSoldPerHour: function() {
//     for (var j = 0; j < hours.length; j++){
//       this.cookiesSoldPerHour.push(Math.round(this.avgCookiesPerSale * this.randCustPerHour[j]));
//       this.totalCookies += this.cookiesSoldPerHour[j];
//       console.log(this.cookiesSoldPerHour[j]);
//     }
//     console.log(this.totalCookies + ' cookies total.');
//   },
//   render: function() {
//     var capitolHill = document.getElementById('capitolhill');
//     var capHill = document.getElementById('caphill');
//     this.calcRandCustPerHour();
//     this.calcCookiesSoldPerHour();
//     var h3El = document.createElement('h3');
//     h3El.textContent = this.name;
//     capHill.appendChild(h3El);
//     for (var k = 0; k < hours.length; k++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[k] + ': ' + this.cookiesSoldPerHour[k] + ' cookies';
//       console.log(liEl);
//       capitolHill.appendChild(liEl);
//     }
//     liEl.textContent = 'Total: ' + this.totalCookies;
//   }
// };
// capitolHill.render();



// var alki = {
//   name: 'Alki',
//   minCustPerHour: 2,
//   maxCustPerHour: 16,
//   avgCookiesPerSale: 4.6,
//   totalCookies: 0,
//   randCustPerHour: [],
//   cookiesSoldPerHour: [],
//   calcRandCustPerHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustPerHour.push(Math.floor(Math.random()* (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
//       console.log(this.randCustPerHour[i]);
//     }
//   },
//   calcCookiesSoldPerHour: function() {
//     for (var j = 0; j < hours.length; j++){
//       this.cookiesSoldPerHour.push(Math.round(this.avgCookiesPerSale * this.randCustPerHour[j]));
//       this.totalCookies += this.cookiesSoldPerHour[j];
//       console.log(this.cookiesSoldPerHour[j]);
//     }
//   },
//   render: function() {
//     var alki = document.getElementById('alkilist');
//     var alkib = document.getElementById('alkib');
//     this.calcRandCustPerHour();
//     this.calcCookiesSoldPerHour();
//     var h3El = document.createElement('h3');
//     h3El.textContent = this.name;
//     alkib.appendChild(h3El);
//     for (var k = 0; k < hours.length; k++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[k] + ': ' + this.cookiesSoldPerHour[k] + ' cookies';
//       console.log(liEl);
//       alki.appendChild(liEl);
//     }
//     liEl.textContent = 'Total: ' + this.totalCookies;
//   }
// };
// alki.render();



