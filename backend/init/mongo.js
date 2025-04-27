import mongoose from "mongoose";
import env from "dotenv";
// const MONGO_URL='mongodb://127.0.0.1:27017/WasteManagement';

env.config();

async function main() {
    await mongoose.connect(`${process.env.MONGO_URL}/WasteManagement`);
}

export default main;
