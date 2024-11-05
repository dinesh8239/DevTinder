const express = require('express')
const app = express()

const {adminAuth, userAuth} = require('../middlewares/auth')

app.use("/admin", adminAuth, userAuth)

app.use('/user', userAuth,  (req, res) => {
    res.send('User Data send ')
})

app.get('/admin/getallData',(req, res) => {
res.send('All data sent')
})

app.get('/admin/deleteUser',(req, res) => {
    res.send('Deleted user data')
})

app.listen(3001, () => {
    console.log("server is running");

})
