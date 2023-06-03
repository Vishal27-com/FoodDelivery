require("dotenv").config();
const express = require('express')
const app = express()
const cors=require("cors");
const dbConnect=require("./Db/db")
const userRouter=require("./Routes/user.routes")
const orderRouter=require("./Routes/order.routes")
const restaurantRouter=require("./Routes/restaurant.routes")
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors());
app.get('/', (req, res) => res.send('hello'))
app.use('/api',userRouter)
app.use('/api/restaurant',restaurantRouter)
app.use('/api/orders',orderRouter)
app.listen(8080, () => {
    dbConnect()
    console.log('server started on port 8080')
})