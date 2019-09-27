const jwt= require('jsonwebtoken')
let screat='sfjslfjslfkjsdkfjksdhfkshjfksh'
module.exports={
  
  tokenMiddleware(req,res,next){
    //验证token的合法性的中间件
    let {token}=req.body
    console.log(req.body)
    console.log(req.file)
    if(token){
      console.log(token)
      jwt.verify(token,screat,(err,info)=>{
        if(err){
          console.log(err)
          res.send({err:-997,msg:'token失效'})
        }else{
          next()
        }
      })
    }else{
      res.send({err:-998,msg:'token缺失'})
    }  
}
}