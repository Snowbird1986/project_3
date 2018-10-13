var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var BillsSchema = new Schema({
  // `title` is of type String
  title: {type:String},
  category: {type:String},
  // `body` is of type String
  description: {type:String},
  amount: {
    type:Number,
  },
  dueDate: {
    type: Date, 
    // validate: [
    //     function(dueDate) {
    //         return dueDate>Date.now
    //     },
    //     "Due Date Must be a future date"
    // ]
  },
  paid: {
    type:Boolean,
    default: false,
  },
  assignee: {
    type:String
  },
  dateAdded: { type: Date, default: Date.now }
});

// This creates our model from the above schema, using mongoose's model method
var Bills = mongoose.model("Bill", BillsSchema);

// Export the Note model
module.exports = Bills;