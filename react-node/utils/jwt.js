const jsonwebtoken=require('jsonwebtoken')
let payload={us:'wangyi',uid:'1322123'}
let screact='asd546as5d4as65d4a6sd4a5s64d5as4d56as4654'
// let token=jsonwebtoken.sign(payload,screact,{expiresIn:60*60})
// console.log(token)
let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cyI6Indhbmd5aSIsInVpZCI6IjEzMjIxMjMiLCJpYXQiOjE1NjUzNDkxODYsImV4cCI6MTU2NTM1Mjc4Nn0.PCv76-HkAJyQofRYeoZErc8D4T2N-qT2fkLGzqwvb2A'
jsonwebtoken.verify(token,screact,(err,data)=>{
    console.log(err)
    console.log(data)
})