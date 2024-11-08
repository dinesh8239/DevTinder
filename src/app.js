const express = require('express')
const app = express()
const connectDB = require('./config/database')
const User = require('./models/user')
const user = require('./models/user')
app.use(express.json())



app.post('/signup', async (req, res) => {

    const user = new User(req.body)
    try {
        await user.save()
        res.send('Data sent successfully')
    } catch {
        res.status(400).send('signup failed')
    }
}
)
app.get('/user', async (req, res) => {

    const userId = (req.body._id)

    const users = await user.findById({ _id: userId })
    if (!users) {
        res.status(404).send('user not found')
    } else {

        res.send(users)
    }

    // try {
    //     const users = await User.find({ emailId: userEmail })
    //     if (users.length === 0) {
    //         res.status(404).send('user not found')
    //     } else {
    //         res.send(users)
    //     }
    // } catch (err) {
    //     res.status(400).send('something went wrong')
    // }

})


app.get('/allUser', async (req, res) => {

    try {
        const users = await user.find({})
        res.send(users)
    } catch (err) {
        res.status(400).send('something went wrong')
    }
})

app.delete("/user", async (req, res) => {
    const userId = req.body.userId

    try {
        const user = await User.findByIdAndDelete({ _id: userId })

        // const user = await User.findByIdAndDelete(userId)

        res.send(" User deleted successfully")

    } catch (err) {
        res.status(400).send('something went wrong')
    }
}
)

app.put("/user", async (req, res) => {
    const userId = req.body.userId

    const user = await User.findByIdAndUpdate(userId, { $set: { emailId: 'ronalldo55@gmail.com' } })

    try {
        res.send("data update successfully")
    } catch (err) {
        res.status(400).send('something went wrong')
    }

})


app.patch("/user/:userId", async (req, res) => {
    const userId = req.params?.userId
    const data = req.body

    try {
        const ALLOWED_UPDATES = [
            "photoUrl",
            "about",
            "gender",
            "age", 
            "skills"
        ]

        // {
        //     "userId": "672dfcb6a08cf51dd2bbfa97",
        //     "firstName": "sharddha",
        //     "gender": "female",
        //     "skills": ["Acting", "Javascript", "Dancer", "Singing"]
        //  }

        const isUpdateAllowed = Object.keys(data).every((key) =>
            ALLOWED_UPDATES.includes(key)
        )
        if (!isUpdateAllowed) {
            throw new Error('updated not allowed')
        }

        if(data?.skills.length > 10) {
            throw new Error('skills cannot be add more 10')
        }

        const user = await User.findByIdAndUpdate({ _id: userId }, data, { returnDocument: 'after' })
        console.log(user);

        res.send('data updated successfully')

    } catch (err) {
        res.status(400).send('update failed:' + err.message)
    }

})

connectDB().then(() => {
    console.log('connect to DB');
    app.listen(3001, () => {
        console.log("server is running at port 3001");

    })

})
    .catch((err) => {
        console.error('DB can not connect');

    })



