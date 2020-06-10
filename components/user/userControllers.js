const User = require('./userModel');

module.exports = {
  async postRegister(someContextObj){
    // Make operation with the contextObj
    // return the operation result
    console.log('registering user');
    try {
      User.register(new User({username: someContextObj.username}), someContextObj.pass, (err) => {
        if (err) {
          console.log('error while user register!', err);
          return false;
        }
        console.log('user registered!');
        // res.redirect('/');
        return true;
      });
    } catch (error) {
      console.log("Error in the try cath ", error);
    }
    


  }
}