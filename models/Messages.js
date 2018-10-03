var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var MessagesSchema = new Schema({
  // `title` is of type String
  title: String,
  // `body` is of type String
  body: String,
  read: {
    type:Boolean,
    default: false
  },

  dateAdded: { type: Date, default: Date.now }
});

// This creates our model from the above schema, using mongoose's model method
var Messages = mongoose.model("Message", MessagesSchema);

// Export the Note model
module.exports = Messages;