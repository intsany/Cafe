const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

const userRoute = require('./routes/user.route')

app.use(cors())
app.use('/user',userRoute)

app.listen(PORT, () => {
    console.log(`Server of Cafe runs on port ${PORT}`)
})