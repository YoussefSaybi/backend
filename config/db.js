const mongoose = require('mongoose');
module.exports.connectToMongoDb = async () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MongoDb_Url)
    .then(
        ()=> {console.log("connect to the database");}

    )
    .catch((err)=>{
        console.log(err);
    });
};