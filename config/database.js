import mongoose from "mongoose";

const connectDB = async () => {
    try {
        //try가 1순위
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connect DB");
    }catch (err){
        // err를 상수화시킴
        console.log(err.message)
    }
}

export default connectDB;



// async는 비동기임 (자바스크립트)