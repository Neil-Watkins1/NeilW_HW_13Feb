const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
return this.journeys.map((journey) => {
  return journey.startLocation;
});
};


Traveller.prototype.getJourneyEndLocations = function () {
return this.journeys.map((journey) =>{
  return journey.endLocation;
})
};

Traveller.prototype.getJourneysByTransport = function (transport) {
return this.journeys.filter((journey) => {
  return journey.transport === transport;
})
};



Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
return this.journeys.filter((journey) => {
  return journey.distance > 1000;
})
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
return this.journeys.reduce((tally, journey) => {
  return tally += journey.distance;
  }, 0)
};

// Cinema.prototype.totalRunningTime = function () {
//   return this.films.reduce((total, film) => {
//     return total += film.length;
//   }, 0);
// };
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
//
// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));


Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
