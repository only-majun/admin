const mongoose=require('mongoose')
const FoodSchema=mongoose.Schema({
    name:{type:String,required:true},
    us:{type:String,required:true},
    ps:{type:String,required:true},
    headimg:{type:String,required:true},
    phone:{type:String,required:true}
})
const usersMoldel=mongoose.model('users',FoodSchema)
module.exports=usersMoldel