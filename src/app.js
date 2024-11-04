const express = require('express')
const app = express()


app.get('/user/:userId/:name/:password/:email', (req, res) => {
    console.log(req.params);
    res.send({ firstName: 'Dinesh', lastName: 'kumar' })
})

app.post('/user', (req, res) => {

    res.send('data successfully get')
})

app.delete("/delete", (req, res) => {

    res.send('data delete successfully')
})



app.use('/test', (req, res) => {
    res.send('api is working')
})

app.listen(3000)









//'^' this sign is tilda this work is Auto updated to 4.x.x. for.
















