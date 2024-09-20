const mongoose = require("mongoose")

const userschema = new Schema({
        user_id : {type : String ,Unique : true},
        username : {type : String},
        password : {type : String},
        gmail : {type : String , require : true},
        tel : {type : String},
        birth : {type : Date},
        age : {type : String},
        sex :{type : String},
    },
    {
        timestamps: true
    }
);

const userModel = mongoose.model('userData',userschema,'userData')

module.exports = userModel