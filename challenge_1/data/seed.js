const data = require('./data.js');
const Events = require('./mongodb.js');
const mongoose = require('mongoose');

const seed = () => {
  for (let i = 0; i < data.events.length; i++) {
    Events.create({ _id: i + 1, event: data.events[i] })
      .then(() => {
        console.log('Database seeded!');
      })
      .catch((eer) => {
        console.log('did not work');
      });
  }
};

const testSeed = () => {
  for (let i = 0; i < 8; i++) {
    Events.create({ _id: i + 1, event: data.events[i] })
      .then(() => {
        console.log('Database seeded!');
      })
      .catch((eer) => {
        console.log('did not work');
      });
  }
};

module.exports.testSeed = testSeed;

// seed();

// To seed db, uncomment above and npm run seedDB;
