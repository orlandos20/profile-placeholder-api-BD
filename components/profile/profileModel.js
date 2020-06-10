const mongoose = require('mongoose');
// const passportLocalMongoose = require('passport-local-mongoose');

const ProfileSchema = new UserSchema({
  id: String,
  name : String,
  lastname: String,
  nickname: String,
  profession: String,
  company: String,
  age: { type: Number, min: 18, max: 65 },
  email: String,
  address: {
    type: Schema.Types.ObjectId,
    residence: String,
    billing: String,

  },
  addresses: [{
    type: Schema.Types.ObjectId,
    residence: String,
    billing: String,
  }],
  profileImg: String,
  SexOrGenre: String,
});

module.exports = mongoose.model('Profile', ProfileSchema);