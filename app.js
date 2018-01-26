'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var firstAndPike = {
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerSale: 6.3,
  totalCookies: 0,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  calcRandCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random()* (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustPerHour[i]);
    }
  },
  calcCookiesSoldPerHour: function() {
    for (var j = 0; j < hours.length; j++){
      this.cookiesSoldPerHour.push(Math.round(this.avgCookiesPerSale * this.randCustPerHour[j]));
      console.log(this.cookiesSoldPerHour[j]);
    }
  },
  render: function() {
    var firstAndPike = document.getElementById('firstandpike');
    var fandp = document.getElementById('fandp');
    this.calcRandCustPerHour();
    this.calcCookiesSoldPerHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    fandp.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldPerHour[k] + ' cookies';
      console.log(liEl);
      firstAndPike.appendChild(liEl);
    }
  }
};
firstAndPike.render();



var seaTacAirport = {
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerSale: 6.3,
  totalCookies: 0,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  calcRandCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random()* (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustPerHour[i]);
    }
  },
  calcCookiesSoldPerHour: function() {
    for (var j = 0; j < hours.length; j++){
      this.cookiesSoldPerHour.push(Math.round(this.avgCookiesPerSale * this.randCustPerHour[j]));
      console.log(this.cookiesSoldPerHour[j]);
    }
  },
  render: function() {
    var seaTacAirport = document.getElementById('seatacair');
    var seatac = document.getElementById('seatac');
    this.calcRandCustPerHour();
    this.calcCookiesSoldPerHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    seatac.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldPerHour[k] + ' cookies';
      console.log(liEl);
      seaTacAirport.appendChild(liEl);
    }
  }
};
seaTacAirport.render();


var seattleCenter = {
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerSale: 6.3,
  totalCookies: 0,
  randCustPerHour: [],
  cookiesSoldPerHour: [],
  calcRandCustPerHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour.push(Math.floor(Math.random()* (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustPerHour[i]);
    }
  },
  calcCookiesSoldPerHour: function() {
    for (var j = 0; j < hours.length; j++){
      this.cookiesSoldPerHour.push(Math.round(this.avgCookiesPerSale * this.randCustPerHour[j]));
      console.log(this.cookiesSoldPerHour[j]);
    }
  },
  render: function() {
    var seattleCenter = document.getElementById('seattlecenter');
    var center = document.getElementById('center');
    this.calcRandCustPerHour();
    this.calcCookiesSoldPerHour();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    center.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldPerHour[k] + ' cookies';
      console.log(liEl);
      seattleCenter.appendChild(liEl);
    }
  }
};
seattleCenter.render();


