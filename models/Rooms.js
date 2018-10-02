var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var RoomsSchema = new Schema({
  // `title` is of type String
  name: String,
  // `body` is of type String
  description: String,
  message: [{
    type: Schema.Types.ObjectId,
    ref: "Message"
    }
  ],
  bill: [{
    type: Schema.Types.ObjectId,
    ref: "Bill"
    }
  ],
  todo: [{
    type: Schema.Types.ObjectId,
    ref: "Todo"
    }
  ],
  user: [{
    type: Schema.Types.ObjectId,
    ref: "User"
    }
  ],
  contract: [{
    type: Schema.Types.ObjectId,
    ref: "Contract"
    }
  ],

  dateAdded: { type: Date, default: Date.now }
});

// This creates our model from the above schema, using mongoose's model method
var Rooms = mongoose.model("Room", RoomsSchema);

// Export the Note model
module.exports = Rooms;