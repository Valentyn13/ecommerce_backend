import { connect } from "mongoose";
const CONNECT_URL = "mongodb+srv://valentyn13git:XpHNJ7qpnOQKFFYL@laptopcluster.gcuouxe.mongodb.net/auth";

const connectToDB = async() => {
    
    try {
        await connect(CONNECT_URL);
        console.log('MongoDB connected ...');
    } catch (error:any) {
        console.error(error.message);
    }
}

export default connectToDB;