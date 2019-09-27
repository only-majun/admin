const mongoose=require('mongoose')
const useSchema=mongoose.Schema({
    us:{type:String},
    ps:{type:String},
    username:{type:String},
    userimg:{type:String}
})
let userModle=mongoose.model('adminusers',useSchema)
module.exports=userModle