const express = require('express')
const app = express()
const connectToDB = require('./db/db')
const userMiddleware = require('./middlewares/user.middleware')
const ageCheckMiddleware = require('./middlewares/movie.middleware')
const apiRouter = require('./api/index')

app.use(express.json())
connectToDB()

app.use('/api', apiRouter)


app.get('/', (req, res) => {
    res.send('Hello')
})


app.listen(3003, () => {
    console.log('Server is running on port http://localhost:3003')
})