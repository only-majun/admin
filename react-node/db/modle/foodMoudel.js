const _mongoose=require('mongoose')
const _foodSchema=_mongoose.Schema({
    name:{type:String,required:true},
    slogan:{type:String,required:true},
    img:{type:String,required:true},
    price:{type:Number,required:true},
    type:{type:String,required:true},
})
const _foodModel= _mongoose.model('goods',_foodSchema)

module.exports=_foodModel