import mongoose from 'mongoose'

const User = new mongoose.Schema({
  fName: { type: String },//"Hadar"
  lName: { type: String },//"popo"
  gender: { type: String },//"male"/ "female"/"other"
  email: { type: String },//"yoyo"/"popo"/"momo"
  image: { type: String },
  phone: { type: String },//4/54/800
});


export default mongoose.model('user', User)