const express = require('express')
const app = express()

// EJS SETUP
app.set('view engine', 'ejs')

// STATIC FILES SETUP
app.use(express.static('./public'))








// DYNAMIC ROUTING (iska kuch hissa baar baar change hota hai)(req.params.username)
app.get('/profile/:username', (req, res) => {
  res.send(`hello form ${req.params.username}`);
});


//    EJS SETUP (or you can also use pug and hbs)
app.get('/ejs', (req, res) => {
  res.render('index')
})
app.get('/contact', (req, res) => {
  res.render('contact')
})







/*
app.get('/error',(req,res,err)=>{
  throw new Error('Something went Wrong');
})


//    ERROR HANDLER
app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})
*/




//      LISTENING

app.listen(3000, () => {
  console.log(`Example app listening on port http://127.0.0.1:${3000}`)
});