var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var UsersSchema = new Schema({
  // `title` is of type String
  firstName: {
    type: String,
    required: [true, "First Name Required"],
    default: 'Mike'
  },
  lastName: {
    type: String,
    default: 'Wazowski'
  },
  phoneNumber: {
    type: String,
    // isNumeric: true,
    minlength: 7,
    maxlength: 10,
    required: [true, 'Phone Number required'],
    default: '816-666-1234'
  },
  // password: {
  //   type: String,
  //   trim: true,
  //   required: [true, "Password Required"],
  //   validate: [
  //     function(input) {
  //       return input.length >= 6;
  //     },
  //     "Password should be longer."
  //   ]
  // },
  birthday: {
    type: Date
  },
  email: {
    type: String,
    unique: [true, "This email has already been used."],
    // match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: [true, 'Email required']
  },
  // `body` is of type String
  introduction: { type: String },
  imgUrl: { type: String },
  city: {
    type: String,
    required: [true, "City required"]
  },
  state: {
    type: String,
    required: [true, "State required"]
  },
  zip: {
    type: String,
    required: [true, "Zip required"]
  },
  budget: { type: String },
  gender: { type: String },
  moveInDate: {
    type: Date,
    // validate: [
    //     function(moveInDate) {
    //         return moveInDate>Date.now
    //     },
    //     "Move In Date Must be a future date"
    // ]
  },
  facebookId: String,
  // facebookToken: String,


  dateAdded: { type: Date, default: Date.now }
});

// This creates our model from the above schema, using mongoose's model method
var Users = mongoose.model("User", UsersSchema);

// Export the Note model
module.exports = Users;