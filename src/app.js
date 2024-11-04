const express = require('express')
const app = express()


app.use('/hey',(req, res) => {
    res.send('All is working')
})

app.use('/hii', (req, res) => {
res.send('all set')
})

app.use('/',(req, res) => {
    res.send('api is working')
})


app.listen(3000)









 //'^' this sign is tilda this work is Auto updated to 4.x.x. for.
















