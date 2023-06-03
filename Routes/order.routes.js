const express=require("express");
const { makeOrder, getOrder, UpdateOrder } = require("../Controller/order.controller");
const orderRouter=express.Router();
// to create order
orderRouter.post('/',makeOrder)
// to get specific order
orderRouter.get('/:id',getOrder)
// to update order status
orderRouter.patch('/:id',UpdateOrder)

module.exports=orderRouter