import mongoose from 'mongoose';

const dbConnect =()=>{
    if(mongoose.Connection.readystate >=1){
        return
    }
    console.log("dbconnect")

    mongoose.connect(process.env.DB_URL)
}

export default dbConnect