const express = require('express');
const router = express.Router();
import * as controller from './controller';



router.post('/', async (req, res, next)=> {
  let friend = req.body;
  let newFriend = await controller.saveFriend(friend)
  res.send(newFriend);
});

router.get('/getAllFriends', async (req, res, next) =>{
  let friends = await controller.getAllFriends()
  res.send(friends);
})

router.delete('/deleteFriend/:id', async (req, res, next)=> {
  let id = req.params.id;
  await controller.deleteFriendById(id)
  res.send();
});






module.exports = router;
