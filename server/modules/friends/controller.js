import axios from 'axios'
import User from '../../dataModels/user';

export async function getAll() {
  try {
    const users = await User.find({});
    return users
  } catch (error) {
    console.error('getAllUsers', error);
    ctx.body = error;
    ctx.status = 500
  }
}






export async function saveFriend(friendData) {
  const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    // friendData = parsefriendFromAppInventor(friendData)
  try {
    let newfriend;
    friendData.json = JSON.stringify(friendData)
    if(friendData._id){
      newfriend = await User.findByIdAndUpdate(friendData._id, friendData, options);
      console.log('friend edited and saved:',newfriend);

    }else {
      const preSaved = new User(friendData)
      newfriend = await preSaved.save();
      console.log('newfriend saved:',newfriend);
    }
      
    return newfriend;

  } catch (error) {
    console.error('savefriend ERROR', error);
    ctx.body = error;
    ctx.status = 500
  }
}