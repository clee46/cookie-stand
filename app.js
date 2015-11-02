var PikePlace = {
  numHours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  minCustomers: 17,
  maxCustomers: 88,
  avgCustomers: 5.2,
  hourlyTotals: [],
  dailyTotals: 0,
  calcRandom: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  calcTotals: function () {
    for (var i = 0; i < this.numHours.length; i++) {
      this.hourlyTotals[i] = Math.floor(this.avgCustomers * this.calcRandom());
    }
  },
  calcDaily: function () {
    for (var i = 0; i < this.numHours.length; i++) {
      this.dailyTotals += this.hourlyTotals[i];
    }
  },
  display: function () {
    var nextHour = document.createElement('h1');
    nextHour.innerHTML = '<strong>Pike Place Sales Estimate</strong>';
    document.body.appendChild(nextHour);
    for (var i = 0; i < this.numHours.length; i++) {
      nextHour = document.createElement('p');
      nextHour.innerHTML = '<strong>' + this.numHours[i] + ':</strong> ' + this.hourlyTotals[i] + ' cookies';
      document.body.appendChild(nextHour);
    }
    nextHour = document.createElement('p');
    nextHour.innerHTML = "<strong>Total:</strong> " + this.dailyTotals + ' cookies';
    document.body.appendChild(nextHour);
  }
};

var SeaTac = {
  numHours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  minCustomers: 17,
  maxCustomers: 88,
  avgCustomers: 5.2,
  hourlyTotals: [],
  dailyTotals: 0,
  calcRandom: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  calcTotals: function () {
    for (var i = 0; i < this.numHours.length; i++) {
      this.hourlyTotals[i] = Math.floor(this.avgCustomers * this.calcRandom());
    }
  },
  calcDaily: function () {
    for (var i = 0; i < this.numHours.length; i++) {
      this.dailyTotals += this.hourlyTotals[i];
    }
  },
  display: function () {
    var nextHour = document.createElement('h1');
    nextHour.innerHTML = '<strong>SeaTac Airport Sales Estimate</strong>';
    document.body.appendChild(nextHour);
    for (var i = 0; i < this.numHours.length; i++) {
      nextHour = document.createElement('p');
      nextHour.innerHTML = '<strong>' + this.numHours[i] + ':</strong> ' + this.hourlyTotals[i] + ' cookies';
      document.body.appendChild(nextHour);
    }
    nextHour = document.createElement('p');
    nextHour.innerHTML = "<strong>Total:</strong> " + this.dailyTotals + ' cookies';
    document.body.appendChild(nextHour);
  }
};

var Southcenter = {
  numHours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  minCustomers: 17,
  maxCustomers: 88,
  avgCustomers: 5.2,
  hourlyTotals: [],
  dailyTotals: 0,
  calcRandom: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  calcTotals: function () {
    for (var i = 0; i < this.numHours.length; i++) {
      this.hourlyTotals[i] = Math.floor(this.avgCustomers * this.calcRandom());
    }
  },
  calcDaily: function () {
    for (var i = 0; i < this.numHours.length; i++) {
      this.dailyTotals += this.hourlyTotals[i];
    }
  },
  display: function () {
    var nextHour = document.createElement('h1');
    nextHour.innerHTML = '<strong>Southcenter Mall Sales Estimate</strong>';
    document.body.appendChild(nextHour);
    for (var i = 0; i < this.numHours.length; i++) {
      nextHour = document.createElement('p');
      nextHour.innerHTML = '<strong>' + this.numHours[i] + ':</strong> ' + this.hourlyTotals[i] + ' cookies';
      document.body.appendChild(nextHour);
    }
    nextHour = document.createElement('p');
    nextHour.innerHTML = "<strong>Total:</strong> " + this.dailyTotals + ' cookies';
    document.body.appendChild(nextHour);
  }
};

var Bellevue = {
  numHours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  minCustomers: 17,
  maxCustomers: 88,
  avgCustomers: 5.2,
  hourlyTotals: [],
  dailyTotals: 0,
  calcRandom: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  calcTotals: function () {
    for (var i = 0; i < this.numHours.length; i++) {
      this.hourlyTotals[i] = Math.floor(this.avgCustomers * this.calcRandom());
    }
  },
  calcDaily: function () {
    for (var i = 0; i < this.numHours.length; i++) {
      this.dailyTotals += this.hourlyTotals[i];
    }
  },
  display: function () {
    var nextHour = document.createElement('h1');
    nextHour.innerHTML = '<strong>Bellevue Square Sales Estimate</strong>';
    document.body.appendChild(nextHour);
    for (var i = 0; i < this.numHours.length; i++) {
      nextHour = document.createElement('p');
      nextHour.innerHTML = '<strong>' + this.numHours[i] + ':</strong> ' + this.hourlyTotals[i] + ' cookies';
      document.body.appendChild(nextHour);
    }
    nextHour = document.createElement('p');
    nextHour.innerHTML = "<strong>Total:</strong> " + this.dailyTotals + ' cookies';
    document.body.appendChild(nextHour);
  }
};

var Alki = {
  numHours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  minCustomers: 17,
  maxCustomers: 88,
  avgCustomers: 5.2,
  hourlyTotals: [],
  dailyTotals: 0,
  calcRandom: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  calcTotals: function () {
    for (var i = 0; i < this.numHours.length; i++) {
      this.hourlyTotals[i] = Math.floor(this.avgCustomers * this.calcRandom());
    }
  },
  calcDaily: function () {
    for (var i = 0; i < this.numHours.length; i++) {
      this.dailyTotals += this.hourlyTotals[i];
    }
  },
  display: function () {
    var nextHour = document.createElement('h1');
    nextHour.innerHTML = '<strong>Alki Sales Estimate</strong>';
    document.body.appendChild(nextHour);
    for (var i = 0; i < this.numHours.length; i++) {
      nextHour = document.createElement('p');
      nextHour.innerHTML = '<strong>' + this.numHours[i] + ':</strong> ' + this.hourlyTotals[i] + ' cookies';
      document.body.appendChild(nextHour);
    }
    nextHour = document.createElement('p');
    nextHour.innerHTML = "<strong>Total:</strong> " + this.dailyTotals + ' cookies';
    document.body.appendChild(nextHour);
  }
};
PikePlace.calcTotals();
// alert('Hourly Totals: ' + PikePlace.hourlyTotals);
PikePlace.calcDaily();
// alert('Daily Totals: ' + PikePlace.dailyTotals);
PikePlace.display();

SeaTac.calcTotals();
// alert('Hourly Totals: ' + SeaTac.hourlyTotals);
SeaTac.calcDaily();
// alert('Daily Totals: ' + SeaTac.dailyTotals);
SeaTac.display();

Southcenter.calcTotals();
// alert('Hourly Totals: ' + Southcenter.hourlyTotals);
Southcenter.calcDaily();
// alert('Daily Totals: ' + Southcenter.dailyTotals);
Southcenter.display();

Bellevue.calcTotals();
// alert('Hourly Totals: ' + Bellevue.hourlyTotals);
Bellevue.calcDaily();
// alert('Daily Totals: ' + Bellevue.dailyTotals);
Bellevue.display();

Alki.calcTotals();
// alert('Hourly Totals: ' + Alki.hourlyTotals);
Alki.calcDaily();
// alert('Daily Totals: ' + Alki.dailyTotals);
Alki.display();
