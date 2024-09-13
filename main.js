const express = require('express')
const app = express()
const connectToDB = require('./db/db')
const userRouter = require('./users/main')
const movieRouter = require('./movies/main')
const userMiddleware = require('./middlewares/user.middleware')
const ageCheckMiddleware = require('./middlewares/movie.middleware')

app.use(express.json())
connectToDB()

app.use('/api/users',
    //  userMiddleware,
      userRouter)
app.use('/api/movies',
    // ageCheckMiddleware,
    movieRouter)



app.get('/', (req, res) => {
    res.send('Hello')
})


app.listen(3003, () => {
    console.log('Server is running on port http://localhost:3003')
})