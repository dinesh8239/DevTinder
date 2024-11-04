const express = require('express')
const app = express()

// app.use('/route', rh1, rh2, [rh3, rh4, rh5,])

app.use('/user', (req, res, next) => {
    //Route handler
    console.log('your api is working 1');
    next()
    // res.send('Route handler 1')

}, 
(req, res, next) => {
    console.log('your api is working 2');
    // res.send('Route handler 2')
    next()
},
[(req, res, next) => {
    console.log('your api is working 3');
    // res.send('Route handler 3')
    next()
},
(req, res, next) => {
    console.log('your api is working 4');
    // res.send('Route handler 4')
    next()
}],
(req, res, next) => {
    console.log('your api is working 5');
    res.send('Route handler 5')
    next()
}
)
app.listen(3000, () => {
    console.log("server is running");

})

























