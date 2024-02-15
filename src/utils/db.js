import mongoose from "mongoose";
const URI ="mongodb+srv://udayrajpatil:UdayFer@007@atlascluster.p9qcyzl.mongodb.net/oyo"

const connectDB = async ()=>{
        await mongoose.connect(URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("DB Connected..");
}

export default connectDB;