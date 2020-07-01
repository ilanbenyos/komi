const express = require('express');
const router = express.Router();
import * as controller from './controller';



router.post('/', async (req, res, next)=> {
  let friend = req.body;
  let newFriend = await controller.saveFriend(friend)
  res.send(newFriend);
});

router.get('/getAll', async (req, res, next)=> {
  let friends = await controller.getAll()
  res.send(friends);
});



module.exports = router;
