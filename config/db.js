const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb://storybookuser:DHQTyI77H4ulbnYH@cluster0-shard-00-00.dtdnj.mongodb.net:27017,cluster0-shard-00-01.dtdnj.mongodb.net:27017,cluster0-shard-00-02.dtdnj.mongodb.net:27017/Tank?ssl=true&replicaSet=atlas-qn3dku-shard-0&authSource=admin&retryWrites=true&w=majority", {
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