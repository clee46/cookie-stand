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
    var nextHour = document.createElement('p');
    nextHour.innerHTML = '<strong>Pike Place Market Sales Estimate</strong>';
    document.body.appendChild(nextHour);
    for (var i = 0; i < this.numHours.length; i++) {
      nextHour = document.createElement('li');
      nextHour.innerHTML = '<strong>' + this.numHours[i] + ':</strong> ' + this.hourlyTotals[i] + ' cookies';
      document.body.appendChild(nextHour);
    }
    nextHour = document.createElement('li');
    nextHour.innerHTML = "<span><strong>Total:</strong> " + this.dailyTotals + ' cookies</span>';
    document.body.appendChild(nextHour);
  }
};

var SeaTac = {
  numHours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  minCustomers: 6,
  maxCustomers: 44,
  avgCustomers: 1.2,
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
    var nextHour = document.createElement('p');
    nextHour.innerHTML = '<strong>SeaTac Airport Sales Estimate</strong>';
    document.body.appendChild(nextHour);
    for (var i = 0; i < this.numHours.length; i++) {
      nextHour = document.createElement('li');
      nextHour.innerHTML = '<strong>' + this.numHours[i] + ':</strong> ' + this.hourlyTotals[i] + ' cookies';
      document.body.appendChild(nextHour);
    }
    nextHour = document.createElement('li');
    nextHour.innerHTML = "<span><strong>Total:</strong> " + this.dailyTotals + ' cookies</span>';
    document.body.appendChild(nextHour);
  }
};

var Southcenter = {
  numHours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  minCustomers: 11,
  maxCustomers: 38,
  avgCustomers: 1.9,
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
    var nextHour = document.createElement('p');
    nextHour.innerHTML = '<strong>Southcenter Mall Sales Estimate</strong>';
    document.body.appendChild(nextHour);
    for (var i = 0; i < this.numHours.length; i++) {
      nextHour = document.createElement('li');
      nextHour.innerHTML = '<strong>' + this.numHours[i] + ':</strong> ' + this.hourlyTotals[i] + ' cookies';
      document.body.appendChild(nextHour);
    }
    nextHour = document.createElement('li');
    nextHour.innerHTML = "<span><strong>Total:</strong> " + this.dailyTotals + ' cookies</span>';
    document.body.appendChild(nextHour);
  }
};

var Bellevue = {
  numHours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  minCustomers: 20,
  maxCustomers: 48,
  avgCustomers: 3.3,
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
    var nextHour = document.createElement('p');
    nextHour.innerHTML = '<strong>Bellevue Square Sales Estimate</strong>';
    document.body.appendChild(nextHour);
    for (var i = 0; i < this.numHours.length; i++) {
      nextHour = document.createElement('li');
      nextHour.innerHTML = '<strong>' + this.numHours[i] + ':</strong> ' + this.hourlyTotals[i] + ' cookies';
      document.body.appendChild(nextHour);
    }
    nextHour = document.createElement('li');
    nextHour.innerHTML = "<span><strong>Total:</strong> " + this.dailyTotals + ' cookies</span>';
    document.body.appendChild(nextHour);
  }
};

var Alki = {
  numHours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  minCustomers: 3,
  maxCustomers: 24,
  avgCustomers: 2.6,
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
    var nextHour = document.createElement('p');
    nextHour.innerHTML = '<strong>Alki Sales Estimate</strong>';
    document.body.appendChild(nextHour);
    for (var i = 0; i < this.numHours.length; i++) {
      nextHour = document.createElement('li');
      nextHour.innerHTML = '<strong>' + this.numHours[i] + ':</strong> ' + this.hourlyTotals[i] + ' cookies';
      document.body.appendChild(nextHour);
    }
    nextHour = document.createElement('li');
    nextHour.innerHTML = "<span><strong>Total:</strong> " + this.dailyTotals + ' cookies</span>';
    document.body.appendChild(nextHour);
  }
};

PikePlace.calcTotals();
PikePlace.calcDaily();
PikePlace.display();

SeaTac.calcTotals();
SeaTac.calcDaily();
SeaTac.display();

Southcenter.calcTotals();
Southcenter.calcDaily();
Southcenter.display();

Bellevue.calcTotals();
Bellevue.calcDaily();
Bellevue.display();

Alki.calcTotals();
Alki.calcDaily();
Alki.display();
