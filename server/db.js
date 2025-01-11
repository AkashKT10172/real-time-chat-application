const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const URI = process.env.URI;

const connectToMongo = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connected to DB!");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToMongo;
