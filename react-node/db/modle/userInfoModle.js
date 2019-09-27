const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    _id:{type:String},
    user_id:{type:String},
    indent:{type:Array},
    youhui:{type:Array},
    yuyue:{type:Array},
    yougouma:{type:Array},
    address:{type:Array},
})
let userModle=mongoose.model('userinfos',userSchema)
module.exports=userModle
