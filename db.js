const mongoose = require("mongoose");
require('dotenv').config();
module.exports = connection = async () => {
    try {
        const response =
            await mongoose.connect(process.env.DB , {
                useNewUrlParser: true, //current url depricated and use new url
                useUnifiedTopology: true, //Current server discovery is deprecated
            });
        console.log("connection successful");
    }
    catch (err) {
        console.log("connect to mongodb is failure due to:", err);
    }
}

//process.env.DB 