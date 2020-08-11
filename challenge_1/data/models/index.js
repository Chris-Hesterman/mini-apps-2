const Events = require('../mongodb.js');

const getRecords = (page, limit, query) => {
  let newQuery = { 'event.description': { $regex: query } };
  if (!isNaN(query)) {
    newQuery = { 'event.date': query };
  }

  return Events.paginate(newQuery, {
    page: page,
    limit: limit,
    sort: { date: 1 }
  });
};

const updateRecord = (id, doc) => {
  return Events.findOneAndReplace({ _id: id }, doc, { new: true });
};

module.exports.getRecords = getRecords;
module.exports.updateRecord = updateRecord;
