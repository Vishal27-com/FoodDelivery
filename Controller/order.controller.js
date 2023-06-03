const Order=require("../Model/order.model");
const makeOrder=async(req,res)=>{
    try {
        const data=req.body;
        await Order.create(data);
        res.status(201).send({message:"Ordered",error:false});  
    } catch (error) {
        res.status(500).send({message:error.message,error:true});
    }
}
const getOrder=async(req,res)=>{
    try {
        const {id}=req.params;
        const order=await Order.findById(id);
        res.status(200).send({message:order,error:false});
    } catch (error) {
        res.status(500).send({message:error.message,error:true});
    }
}
const UpdateOrder=async(req,res)=>{
    try {
        const {id}=req.params;
        const newStatus=req.body.status;
        await Order.updateOne({_id:id},{$set:{status:newStatus}})
        res.status(200).send({message:"Order Updated",error:false});
    } catch (error) {
        res.status(500).send({message:error.message,error:true});
    }
}
module.exports={makeOrder,getOrder,UpdateOrder}