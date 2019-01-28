const db = require("../models");

// Defining methods for the POSController
module.exports = {
  find: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        res.json(restaurant.Tables.sort({ date: -1 }));
      })
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) =>
        res.json(restaurant.Tables.id(req.params.tableId))
      )
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        restaurant.Tables.push(req.body);
        restaurant.save((err, restaurant) => {
          if (err) res.status(422).json(err);
          res.json(restaurant.Tables);
        });
      })
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        const tables = restaurant.Tables;
        table.set(req.body);
        return restaurant.save((err, restaurant) => {
          if (err) res.status(422).json(err);
          res.json(restaurant.Tables);
        });
      })
      .catch((err) => res.status(422).json(err));
  },
  updateOne: function (req, res) {
    db.Restaurants.findById(req.params.id).then((restaurant) => {
      const table = restaurant.Tables.id(req.params.tableId)
      table.set(req.body);
      restaurant.save((err) => {
        if (err) res.status(422).json(err);
        res.json(restaurant.Tables);
      })
    })
  },
  remove: function (req, res) {
    db.Restaurant
      .findById(req.params.id)
      .then((restaurant) => {
        restaurant.Tables
          .id(req.params.tableId)
          .remove();
        restaurant.save((err) => {
          if (err) res.status(422).json(err);
          res.json(restaurant);
        });
      })
      .catch((err) => res.status(422).json(err));
  }
};
