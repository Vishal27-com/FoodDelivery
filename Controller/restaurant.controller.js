const Restaurant=require("../Model/restaurant.model");
const getAllRestaurant=async(req,res)=>{
    try {
        const restaurant=await Restaurant.find({});
        res.status(200).send({message:restaurant,error:false});
    } catch (error) {
        res.status(500).send({message:error.message,error:true});
    }
}
const getRestaurant=async(req,res)=>{
    try {
        const {id}=req.params;
        const restaurant=await Restaurant.findById(id);
        res.status(200).send({message:restaurant,error:false});
    } catch (error) {
        res.status(500).send({message:error.message,error:true}); 
    }
}
const getMenu=async(req,res)=>{
    try {
        const {id}=req.params;
        const {menu}=await Restaurant.findById(id);
        res.status(200).send({message:menu,error:false});
    } catch (error) {
        res.status(500).send({message:error.message,error:true}); 
    }
}
const addMenu=async(req,res)=>{
    try {
        const {id}=req.params;
        const item=req.body;
        await Restaurant.updateOne({_id:id},{$push:{menu:item}});
        res.status(201).send({message:menu,error:false});
    } catch (error) {
        res.status(500).send({message:error.message,error:true}); 
    }
}
const deleteMenu=async(req,res)=>{
    try {
        const {id,menuId}=req.params;
        await Restaurant.findByIdAndRemove(id)
        res.status(202).send({message:"Deleted",error:false});
    } catch (error) {
        res.status(500).send({message:error.message,error:true});
    }
}


module.exports={getAllRestaurant,getRestaurant,getMenu,addMenu,deleteMenu}