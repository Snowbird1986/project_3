var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var TodosSchema = new Schema({
  // `title` is of type String
  title: String,
  // `body` is of type String
  body: String,
  dueDate: {
    type: Date,
  },
  dateAdded: { type: Date, default: Date.now },
  category: {type:String},
  completed: {
    type: Boolean,
    default: false
  },
  recurring: {
    type: Boolean,
  },
  frequency: {
    type:String
  },
  assignee: {
    type:String
  }
});

// This creates our model from the above schema, using mongoose's model method
var Todos = mongoose.model("Todo", TodosSchema);

// Export the Note model
module.exports = Todos;