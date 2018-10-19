var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var ContractsSchema = new Schema({
  // `title` is of type String
  rent: {type:Number},
  userID: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  roomID: {
      type: Schema.Types.ObjectId,
      ref: "Room"
  },
  length: {type:String},
  availableDate: { 
    type: Date
  },
  description: String,
  approved: {
    type: Boolean,
    default: false
  },
  dateSigned: { 
    type: Date
  },
  dateApplied: { type: Date, default: Date.now },
  dateAdded: { type: Date, default: Date.now }
});

// This creates our model from the above schema, using mongoose's model method
var Contracts = mongoose.model("Contract", ContractsSchema);

// Export the Note model
module.exports = Contracts;