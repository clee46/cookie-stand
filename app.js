function cookieStand(numHours,minCustomers,maxCustomers,avgCustomers){
  this.numHours=numHours;
  this.minCustomers=minCustomers;
  this.maxCustomers=maxCustomers;
  this.avgCustomers=avgCustomers;
  this.hourlyTotals= [];
  this.dailyTotals= 0;
  this.calcRandom= function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  this.calcTotals= function () {
    for (var i = 0; i < this.numHours.length; i++) {
      this.hourlyTotals[i] = Math.floor(this.avgCustomers * this.calcRandom());
    }
  },
  this.calcDaily= function () {
    for (var i = 0; i < this.numHours.length; i++) {
      this.dailyTotals += this.hourlyTotals[i];
    }
  },
  // this.render= function () {
  //   var nextHour = document.createElement('p');
  //   nextHour.innerHTML = '<strong>Pike Place Market Sales Estimate</strong>';
  //   document.body.appendChild(nextHour);
  //   for (var i = 0; i < this.numHours.length; i++) {
  //     nextHour = document.createElement('li');
  //     nextHour.innerHTML = '<strong>' + this.numHours[i] + ':</strong> ' + this.hourlyTotals[i] + ' cookies';
  //     document.body.appendChild(nextHour);
  //   }
  //   nextHour = document.createElement('li');
  //   nextHour.innerHTML = "<span><strong>Total:</strong> " + this.dailyTotals + ' cookies</span>';
  //   document.body.appendChild(nextHour);
  // }
  this.makelist = function (){
    // var tbl= document.createElement('table');
    var trElement=document.createElement('tr');
    for (i=0; i<numHours.length; i++) {
      var tdElement= document.createElement('td');
      tdElement.textContent= this.hourlyTotals[i];
      trElement.appendChild(tdElement);
    }
    var tdElement= document.createElement('td');
      tdElement.textContent= this.dailyTotals;
      trElement.appendChild(tdElement);
    tbl.appendChild(trElement);
  //   document.body.appendChild(tbl);
  }
}
var numHours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var pikePlace = new cookieStand(numHours,17,88,5.2);
var tbl= document.createElement('table');
pikePlace.calcRandom();
pikePlace.calcTotals();
pikePlace.calcDaily();
// pikePlace.render();
pikePlace.makelist();

var SeaTac = new cookieStand(numHours,6,44,1.2);
SeaTac.calcRandom();
SeaTac.calcTotals();
SeaTac.calcDaily();
SeaTac.makelist();
// SeaTac.render();

var Southcenter = new cookieStand(numHours,11,38,1.9);
Southcenter.calcRandom();
Southcenter.calcTotals();
Southcenter.calcDaily();
Southcenter.makelist();
// Southcenter.render();

var Bellevue = new cookieStand(numHours,20,48,3.3);
Bellevue.calcRandom();
Bellevue.calcTotals();
Bellevue.calcDaily();
Bellevue.makelist();
// Bellevue.render();

var Alki = new cookieStand(numHours,3,24,2.6);
Alki.calcRandom();
Alki.calcTotals();
Alki.calcDaily();
Alki.makelist();
// Alki.render();
document.body.appendChild(tbl);
// var PikePlace = {
//   numHours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
//   minCustomers: 17,
//   maxCustomers: 88,
//   avgCustomers: 5.2,
//   hourlyTotals: [],
//   dailyTotals: 0,
//   calcRandom: function () {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//   },
//   calcTotals: function () {
//     for (var i = 0; i < this.numHours.length; i++) {
//       this.hourlyTotals[i] = Math.floor(this.avgCustomers * this.calcRandom());
//     }
//   },
//   calcDaily: function () {
//     for (var i = 0; i < this.numHours.length; i++) {
//       this.dailyTotals += this.hourlyTotals[i];
//     }
//   },
//   display: function () {
//     var nextHour = document.createElement('p');
//     nextHour.innerHTML = '<strong>Pike Place Market Sales Estimate</strong>';
//     document.body.appendChild(nextHour);
//     for (var i = 0; i < this.numHours.length; i++) {
//       nextHour = document.createElement('li');
//       nextHour.innerHTML = '<strong>' + this.numHours[i] + ':</strong> ' + this.hourlyTotals[i] + ' cookies';
//       document.body.appendChild(nextHour);
//     }
//     nextHour = document.createElement('li');
//     nextHour.innerHTML = "<span><strong>Total:</strong> " + this.dailyTotals + ' cookies</span>';
//     document.body.appendChild(nextHour);
//   }
// };

// var SeaTac = {
//   numHours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
//   minCustomers: 6,
//   maxCustomers: 44,
//   avgCustomers: 1.2,
//   hourlyTotals: [],
//   dailyTotals: 0,
//   calcRandom: function () {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//   },
//   calcTotals: function () {
//     for (var i = 0; i < this.numHours.length; i++) {
//       this.hourlyTotals[i] = Math.floor(this.avgCustomers * this.calcRandom());
//     }
//   },
//   calcDaily: function () {
//     for (var i = 0; i < this.numHours.length; i++) {
//       this.dailyTotals += this.hourlyTotals[i];
//     }
//   },
//   display: function () {
//     var nextHour = document.createElement('p');
//     nextHour.innerHTML = '<strong>SeaTac Airport Sales Estimate</strong>';
//     document.body.appendChild(nextHour);
//     for (var i = 0; i < this.numHours.length; i++) {
//       nextHour = document.createElement('li');
//       nextHour.innerHTML = '<strong>' + this.numHours[i] + ':</strong> ' + this.hourlyTotals[i] + ' cookies';
//       document.body.appendChild(nextHour);
//     }
//     nextHour = document.createElement('li');
//     nextHour.innerHTML = "<span><strong>Total:</strong> " + this.dailyTotals + ' cookies</span>';
//     document.body.appendChild(nextHour);
//   }
// };

// var Southcenter = {
//   numHours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCustomers: 1.9,
//   hourlyTotals: [],
//   dailyTotals: 0,
//   calcRandom: function () {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//   },
//   calcTotals: function () {
//     for (var i = 0; i < this.numHours.length; i++) {
//       this.hourlyTotals[i] = Math.floor(this.avgCustomers * this.calcRandom());
//     }
//   },
//   calcDaily: function () {
//     for (var i = 0; i < this.numHours.length; i++) {
//       this.dailyTotals += this.hourlyTotals[i];
//     }
//   },
//   display: function () {
//     var nextHour = document.createElement('p');
//     nextHour.innerHTML = '<strong>Southcenter Mall Sales Estimate</strong>';
//     document.body.appendChild(nextHour);
//     for (var i = 0; i < this.numHours.length; i++) {
//       nextHour = document.createElement('li');
//       nextHour.innerHTML = '<strong>' + this.numHours[i] + ':</strong> ' + this.hourlyTotals[i] + ' cookies';
//       document.body.appendChild(nextHour);
//     }
//     nextHour = document.createElement('li');
//     nextHour.innerHTML = "<span><strong>Total:</strong> " + this.dailyTotals + ' cookies</span>';
//     document.body.appendChild(nextHour);
//   }
// };

// var Bellevue = {
//   numHours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
//   minCustomers: 20,
//   maxCustomers: 48,
//   avgCustomers: 3.3,
//   hourlyTotals: [],
//   dailyTotals: 0,
//   calcRandom: function () {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//   },
//   calcTotals: function () {
//     for (var i = 0; i < this.numHours.length; i++) {
//       this.hourlyTotals[i] = Math.floor(this.avgCustomers * this.calcRandom());
//     }
//   },
//   calcDaily: function () {
//     for (var i = 0; i < this.numHours.length; i++) {
//       this.dailyTotals += this.hourlyTotals[i];
//     }
//   },
//   display: function () {
//     var nextHour = document.createElement('p');
//     nextHour.innerHTML = '<strong>Bellevue Square Sales Estimate</strong>';
//     document.body.appendChild(nextHour);
//     for (var i = 0; i < this.numHours.length; i++) {
//       nextHour = document.createElement('li');
//       nextHour.innerHTML = '<strong>' + this.numHours[i] + ':</strong> ' + this.hourlyTotals[i] + ' cookies';
//       document.body.appendChild(nextHour);
//     }
//     nextHour = document.createElement('li');
//     nextHour.innerHTML = "<span><strong>Total:</strong> " + this.dailyTotals + ' cookies</span>';
//     document.body.appendChild(nextHour);
//   }
// };

// var Alki = {
//   numHours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCustomers: 2.6,
//   hourlyTotals: [],
//   dailyTotals: 0,
//   calcRandom: function () {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
//   },
//   calcTotals: function () {
//     for (var i = 0; i < this.numHours.length; i++) {
//       this.hourlyTotals[i] = Math.floor(this.avgCustomers * this.calcRandom());
//     }
//   },
//   calcDaily: function () {
//     for (var i = 0; i < this.numHours.length; i++) {
//       this.dailyTotals += this.hourlyTotals[i];
//     }
//   },
//   display: function () {
//     var nextHour = document.createElement('p');
//     nextHour.innerHTML = '<strong>Alki Sales Estimate</strong>';
//     document.body.appendChild(nextHour);
//     for (var i = 0; i < this.numHours.length; i++) {
//       nextHour = document.createElement('li');
//       nextHour.innerHTML = '<strong>' + this.numHours[i] + ':</strong> ' + this.hourlyTotals[i] + ' cookies';
//       document.body.appendChild(nextHour);
//     }
//     nextHour = document.createElement('li');
//     nextHour.innerHTML = "<span><strong>Total:</strong> " + this.dailyTotals + ' cookies</span>';
//     document.body.appendChild(nextHour);
//   }
// };

// PikePlace.calcTotals();
// PikePlace.calcDaily();
// PikePlace.display();

// SeaTac.calcTotals();
// SeaTac.calcDaily();
// SeaTac.display();

// Southcenter.calcTotals();
// Southcenter.calcDaily();
// Southcenter.display();

// Bellevue.calcTotals();
// Bellevue.calcDaily();
// Bellevue.display();

// Alki.calcTotals();
// Alki.calcDaily();
// Alki.display();
