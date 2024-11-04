const express = require('express')
const app = express()


app.get('/user', (req, res) => {

    res.send({firstName: 'Dinesh', lastName: 'kumar'})
})

app.post('/user', (req, res) => {

    res.send('data successfully get')
})

app.delete("/delete", (req, res) => {

    res.send('data delete successfully')
})



app.use('/test',(req, res) => {
    res.send('api is working')
})

app.listen(3000)









 //'^' this sign is tilda this work is Auto updated to 4.x.x. for.
















