// req ko route pe pahuchne se pehle middleware se pass hona hota hai
const express = require('express');
const app = express();
const port = 3000;




/*                  MIDDLE WARES (see its result in terminal)
                    (can be mulitple middlewares)
*/
app.use('/', (req, res, next) => {
    console.log('hello from middlewares that runs before EVERY routes');
    next();// next function tells the pc to go to the next thing which is / route
});
// har route ke chalne se pehle middleware chalega




//                       ROUTES
app.get('/', (req, res) => {
    res.send('<h1>Slash Route</h1>');
});

app.get('/profile', (req, res) => {
    res.send('<h1>Profile Route</h1>');
});

app.listen(port, () => {
    console.log(`app listening on port http://127.0.0.1:${port}`);
});
