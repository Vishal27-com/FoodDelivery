const mongoose =require("mongoose");
const restaurantSchema=new mongoose.Schema({
 name:String,
 address:{
    street:String,
    city:String,
    state:String,
    country:String,
    zip:String,
 },
 menu:[{
    name:String,
    description:String,
    price:Number,
    image:String
 }]
},{timestamps:true});
const Restaurant=mongoose.model("restaurant",restaurantSchema);
module.exports=Restaurant;