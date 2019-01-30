const db = require('../models');

// Defining methods for the POSController
module.exports = {
  find: function (req, res) {
    db.Restaurant
      .find({})
      .then(restaurant => {
        res.json(restaurant)
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then(restaurant => res.json(restaurant))
      .catch(err => res.status(422).json(err));
  },
  findByName: function (req, res) {
    console.log(req.body);
    db.Restaurant
      .findOne({ name: req.body.restaurantName })
      .then(restaurant => res.json(restaurant))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    //add validation for creation
    db.Restaurant
      .create(req.body)
      .then(restaurant => res.json(restaurant))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Restaurant
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(restaurant => res.json(restaurant))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Restaurant
      .findById({ _id: req.params.id })
      .then(restaurant => restaurant.remove())
      .then(restaurant => res.json(restaurant))
      .catch(err => res.status(422).json(err));
  }
};
