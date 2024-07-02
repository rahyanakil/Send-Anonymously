import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?:number;
}

const connection : ConnectionObject = {} 

async function  dbConnect():Promise<void>{
    if(connection.isConnected){
        console.log("Already data base is connected")
        return;
    }
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || "",{})
        connection.isConnected= db.connections[0].readyState


        console.log("Db Connected Successfully")
    }
    catch(error){
process.exit(1)
console.log("Database Connection Failed")
    }
}
export default dbConnect;