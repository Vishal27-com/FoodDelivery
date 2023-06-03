const mongoose=require("mongoose");
const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("DB Connected");
    } catch (error) {
        console.log(error.message);
    }
}
module.exports=dbConnect