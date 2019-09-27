const mongoose=require('mongoose')
const FoodSchema=mongoose.Schema({
    user_id:{type:String,required:true},
    carts:{type:Array,required:true},
    goods_id:{type:String,required:true},
    img:{type:String,required:true},
    name:{type:String,required:true},
    slogan:{type:String,required:true},
    price:{type:String,required:true},
    type:{type:String,required:true},
    number:{type:Number,required:true}
})
const usersMoldel=mongoose.model('carts',FoodSchema)
module.exports=usersMoldel