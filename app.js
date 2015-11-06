var numHours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var locations = [];
var tbl = document.getElementById('tableData');

function CookieStand(storeName,minCustomers,maxCustomers,avgCustomers) {
  this.storeName = storeName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCustomers = avgCustomers;
  this.hourlyTotals = [];
  this.dailyTotals = 0;
  locations.push(this);

  this.calcRandom = function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  }
  this.calcTotals = function () {
    for (var i = 0; i < numHours.length; i++) {
      this.hourlyTotals[i] = Math.floor(this.avgCustomers * this.calcRandom());
      this.dailyTotals += this.hourlyTotals[i];
    }
  }
  this.makeRow = function () {
    var trElement = document.createElement('tr');
    var thElement = document.createElement('th');
    thElement.textContent = this.storeName;
    trElement.appendChild(thElement);
    for (var j = 0; j < numHours.length; j++) {
      var tdElement = document.createElement('td');
      tdElement.textContent = this.hourlyTotals[j];
      trElement.appendChild(tdElement);
    }
    tdElement = document.createElement('td');
    tdElement.textContent = this.dailyTotals;
    trElement.appendChild(tdElement);
    tbl.appendChild(trElement);
    //document.body.appendChild(tbl);
  }
  this.calcTotals();
}

function makeHeaders() {
  var trElement = document.createElement('tr');
  tbl.appendChild(trElement);
  thElement = document.createElement('th');
  thElement.textContent = '';
  trElement.appendChild(thElement);
  for (i = 0; i < numHours.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = numHours[i];
    trElement.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Totals';
  trElement.appendChild(thElement);
  tbl.appendChild(trElement);
}

function renderAll() {
  makeHeaders();
  for (var i = 0; i < locations.length; i++) {
    locations[i].makeRow();
  }
}

function updateLocation(event) {
  event.preventDefault();
  var storeName = event.target.myName.value;
  var storeMin = parseInt(event.target.min.value);
  var storeMax = parseInt(event.target.max.value);
  var storeAvg = parseInt(event.target.avg.value);
  var newStore = new CookieStand(storeName,storeMin,storeMax,storeAvg);
  newStore.makeRow();
}

function showHours() {
  var ulElement = document.getElementById('hours');
  for (var i = 0; i < locations.length; i++) {
    var liElement = document.createElement('li');
    liElement.textContent = locations[i].storeName + ': ' + numHours[0] + '-' + numHours[numHours.length - 1];
    ulElement.appendChild(liElement);
  }
}

var pikePlace = new CookieStand('Pike Place Market',17,88,5.2);
var SeaTac = new CookieStand('SeaTac Airport',6,44,1.2);
var Southcenter = new CookieStand('Southcenter Mall',11,38,1.9);
var Bellevue = new CookieStand('Bellevue Square',20,48,3.3);
var Alki = new CookieStand('Alki',3,24,2.6);

var updateStores = document.getElementById('update');
updateStores.addEventListener('submit', updateLocation);

showHours();
renderAll();


