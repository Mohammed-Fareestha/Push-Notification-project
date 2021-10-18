const express = require('express')
const webpush = require('web-push')
const bodyParser = require('body-parser')
const path = require('path')
const { json } = require('body-parser')

const app = express()

//set Static path
app.use(express.static(path.join(__dirname, 'client')))

app.use(bodyParser.json);

const publicVapiKeys = 'BHrTfeWFURuOYk2ymBLxYihqlnZKMASHm7sGZeS4nETFOG6No1cGMbbPPpgC68UBwLZtMY-WPsezirY_KFdgFGw'
const privateVapiKeys = 'pq48RxGlsH0NIoVSMAW0cID_m2q9Q4eV4pTTWamjppc'

webpush.setVapidDetails('mailto:test@test.com', publicVapiKeys, privateVapiKeys)

//Subscribe Route
app.post('/subscribe', (req, res) => {
    //Get PUshSubscribe object
    const subscription = req.body;
    //send 201-resource created
    res.status(201).json({});
    //create payLoad
    const payLoad = json.stringify({ title: 'push Test' })
        //pass object into sendNotification
    webpush.sendNotification(subscription, payLoad).catch(err => console.error(err));
})
const port = 5000;
app.listen(port, () => console.log(`server Started at ${port}`))