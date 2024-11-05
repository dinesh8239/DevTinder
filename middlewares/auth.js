 const adminAuth = ("/admin",(req, res, next) => {
    console.log('Admin auth is getting checked!!');
    
        const token = "xyz"
        const isAdminAuthorized = token == "xyz"
        if(!isAdminAuthorized) {
            res.status(401).send('unauthorized request')
        }else {
        next()
        }
    })

    const userAuth = ("/admin",(req, res, next) => {
        console.log('Admin auth is getting checked!!');
        
            const token = "xyz"
            const isAdminAuthorized = token == "xyzfd"
            if(!isAdminAuthorized) {
                res.status(401).send('unauthorized request')
            }else {
            next()
            }
        })

    module.exports = {adminAuth, userAuth}