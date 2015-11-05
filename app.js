function cookieStand(storeName,minCustomers,maxCustomers,avgCustomers){
  this.storeName = storeName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCustomers = avgCustomers;
  this.hourlyTotals = [];
  this.dailyTotals = 0;
  locations.push(this);

  this.calcRandom = function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  this.calcTotals = function () {
    for (var i = 0; i < numHours.length; i++) {
      this.hourlyTotals[i] = Math.floor(this.avgCustomers * this.calcRandom());
      this.dailyTotals += this.hourlyTotals[i];
    }
  }
}

function makeList() {
  var tbl = document.createElement('table');
  var trElement = document.createElement('tr');
  tbl.appendChild(trElement);
  var thElement = document.createElement('th');

  // Populate the first row with header names
  thElement.textContent = '';
  trElement.appendChild(thElement);
  for (i = 0; i < numHours.length; i++) {
    var thElement = document.createElement('th');
    thElement.textContent = numHours[i];
    trElement.appendChild(thElement);
  }
  var thElement = document.createElement('th');
  thElement.textContent = 'Totals';
  trElement.appendChild(thElement);
  tbl.appendChild(trElement);

  // Now, populate the rest of the table
  for (var i = 0; i < locations.length; i++) {
    var trElement = document.createElement('tr');
    var thElement = document.createElement('th');
    thElement.textContent = locations[i].storeName;
    trElement.appendChild(thElement);
    for (var j = 0; j < numHours.length; j++) {
      var tdElement = document.createElement('td');
      tdElement.textContent = locations[i].hourlyTotals[j];
      trElement.appendChild(tdElement);
    }
    var tdElement = document.createElement('td');
    tdElement.textContent = locations[i].dailyTotals;
    trElement.appendChild(tdElement);
    tbl.appendChild(trElement);
  }
  document.body.appendChild(tbl);
}

var numHours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var locations = [];

// Create New Stores
var pikePlace = new cookieStand('Pike Place Market',17,88,5.2);
var SeaTac = new cookieStand('SeaTac Airport',6,44,1.2);
var Southcenter = new cookieStand('Southcenter Mall',11,38,1.9);
var Bellevue = new cookieStand('Bellevue Square',20,48,3.3);
var Alki = new cookieStand('Alki',3,24,2.6);

// Calculate Totals for each store
pikePlace.calcTotals();
SeaTac.calcTotals();
Southcenter.calcTotals();
Bellevue.calcTotals();
Alki.calcTotals();

makeList();
