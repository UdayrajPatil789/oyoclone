//const {username,password}= process.env
import mongoose from "mongoose";
export const connectionstr = "mongodb+srv://udayraj:admin@cluster0.ffow7ym.mongodb.net/oyo";
//mongodb+srv://udayraj:<password>@cluster0.ffow7ym.mongodb.net/?retryWrites=true&w=majority
const connectDB = async ()=>{
        await mongoose.connect(connectionstr);

}

export default connectDB;


