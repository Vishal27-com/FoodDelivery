require("dotenv").config();
const express = require('express')
const app = express()
const cors=requiree("cors");
const dbConnect=require("./Db/db")
const userRouter=require("./Routes/user.routes")
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors());
app.get('/', (req, res) => res.send('hello'))
app.use('/api',userRouter)
app.listen(8080, () => {
    dbConnect()
    console.log('server started on port 8080')
})