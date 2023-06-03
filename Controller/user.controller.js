const User = require("../Model/user.model")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const registration=async(req,res)=>{
try {
    const {password,...other}=req.body;
    const salt=5
    bcrypt.hash(password,salt,async (err,hashed)=>{
        if(err)res.status(500).send({message:err.message,error:true});
        else {
            await User.create({...other,password:hashed});
            res.status(201).send({message:"Account Created",error:false});
        }
    })
} catch (error) {
    res.status(500).send({message:error.message,error:true});
}
}
const login=async(req,res)=>{
try {
    const {email,password}=req.body;
    const user=await User.find({email})
    if(user){
        bcrypt.compare(password,user.password,(err,result)=>{
            if(result){
                const token=jwt.sign(user,process.env.SECRET_KEY,{expiresIn:"7d"})
                res.status(201).send({message:"Login Success",token,error:false});
            }
            else res.status(401).send({message:'Login Failed',error:true});
        })
    }else res.status(404).send({message:"User Not Found",error:true});
} catch (error) {
    res.status(500).send({message:error.message,error:true}); 
}
}
const resetPassword=async(req,res)=>{
try {
    const {currentPassword,newPassword}=req.body;
    const {id}=req.params;
    const user=await User.findById(id);
    if(user){
        bcrypt.compare(currentPassword,user.password,(err,result)=>{
            // if current password matches then set new hashed password
            if(result){
                const salt=5
                bcrypt.hash(newPassword,salt,async (err,hashed)=>{
                    if(err)res.status(500).send({message:err.message,error:true});
                    else {
                        await User.updateOne({_id:id},{$set:{password:hashed}})
                        res.status(204).send({message:"Account Created",error:false});
                    }
                })
            }
            // if password do not match
            else res.status(401).send({message:"Invalid Credentials",error:true});
        })
    }else res.status(500).send({message:"User Not Found",error:true});
} catch (error) {
    res.status(500).send({message:error.message,error:true});
}
}
module.exports={registration,login,resetPassword}