var express = require('express');
var router = express.Router();
const userModel = require('./users')

router.get('/', (req, res) => {
  // res.send('<h1>Hello from Index Router</h1>')
  res.render('index');
})





/* 1    CREATE (here userModel.create() is asynchronus in nature and we need to change that using await-async)*/

router.get('/create', async (req, res) => {

  let createdUser = await userModel.create({

    username: 'harsh1234',
    name: 'harsh',
    age: '25',

  });

  res.send(createdUser);
  console.log("created", createdUser);

});





//    READ

router.get('/allusers', async (req, res) => {
  // let allusers = await userModel.find();

  let allusers = await userModel.findOne({ age: 25 });

  res.send(allusers);
})




//    DELETE

router.get('/delete', async function (req, res) {
  let deletedUser = await userModel.findOneAndDelete({
    age:25
  })
  res.send(deletedUser);
})































module.exports = router;
