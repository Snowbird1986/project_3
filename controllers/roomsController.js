const db = require("../models");

// Defining methods for the RoomsController
module.exports = {
  findAll: function (req, res) {
    db.Room
      .find({
        openSpots:{$gt:0}
      })
      .populate("pendinguser")
      .populate("user")
      .populate("bill")
      .populate("todo")
      .populate("message")
      .populate("contract")
      .sort({ dateAdded: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Room
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUserId: function (req, res) {
    db.Room
      .find({ user: req.params.id })
      .populate("pendinguser")
      .populate("user")
      .populate("bill")
      .populate("todo")
      .populate("message")
      .populate("contract")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Room
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Room
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Room
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
