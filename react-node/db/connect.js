const mongoose=require('mongoose')
mongoose.connect('mongodb://10.9.22.247:27017/baiduyixia',{ useNewUrlParser: true })
var db=mongoose.connection;
db.on('error',()=>{console.log('数据库连接失败')})
db.once('open',()=>{console.log('数据库连接ok')})