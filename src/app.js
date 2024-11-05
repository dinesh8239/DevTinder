const express = require('express')
const app = express()
const connectDB = require('./config/database')
const User = require('./models/user')

app.post('/signup', async (req, res) => {
    const user = new User({
        firstName: "Sachin",
        lastName: "Dutt",
        emailId: "sachin855@gmail.com",
        password: "sachin123@"
    })
try {
    await user.save()
    res.send('Data sent successfully')
}catch {
    res.status(400).send('something went wrong')
}
}
)

connectDB().then(() => {
    console.log('connect to DB');
    app.listen(3001, () => {
        console.log("server is running at port 3001");

    })

})
    .catch((err) => {
        console.error('DB can not connect');

    })



