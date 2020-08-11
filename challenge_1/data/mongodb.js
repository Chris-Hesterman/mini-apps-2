const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

mongoose.connect('mongodb://localhost:27017/Events', {useNewUrlParser: true, useUnifiedTopology: true});

const eventsSchema = new mongoose.Schema({
  event: Object,
  _id: Number
});
eventsSchema.plugin(mongoosePaginate);


const Events = mongoose.model('Events', eventsSchema);

module.exports = Events;

