const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb://localhost/sharkTank", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB connected : ${connect.connection.host}`)
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;