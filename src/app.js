const express = require('express')
const app = express()

app.use('/', (err, req, res, next) => {
    if (err) {
        // Log your error
        res.status(500).send('something went wrong')
    }
})

app.get('/getuserData', (req, res) => {
    try {

        throw new Error("dbjfdkjf");
        res.send("User Data Sent")
    } catch (err) { 
        res.status(500).send("some error contact support team")
    }
})


app.use('/', (err, req, res, next) => {
    if (err) {
        // Log your error
        res.status(500).send('something went wrong')
    }
})


app.listen(3001, () => {
    console.log("server is running");

})
