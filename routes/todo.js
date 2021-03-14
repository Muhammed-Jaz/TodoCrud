const express = require("express")
const router= express.Router()
const {createTodo,getAllTodo,updateTodo,deleteTodo}=require('../helpers/db')

router.get('/todo',async(req,res)=>{
let result=await getAllTodo()
if (result) {
    res.json({status:200,message:result})
} else {
 res.json({status:403,message:"Cant get the activituies"}) 
}
   
})

router.post('/todo',async(req,res)=>{
    console.log(req.body);
   let result=await createTodo(req.body)
   if (result) {
       res.json({status:200,message:"data submitted"})
   } else {
    res.json({status:403,message:"insertion failed"}) 
   }
})

router.put("/todo",async(req,res)=>{
  let result=await updateTodo(req.body)
  if (result) {
    res.json({status:200,message:"data updated"})
} else {
 res.json({status:403,message:"updation failed"}) 
}
})

router.delete("/todo",async(req,res)=>{
    let result=await deleteTodo(req.query.id)
    if (result>0) {
        res.json({status:200,message:"data deleted"})
    } else {
     res.json({status:403,message:"deletion failed"}) 
    }
})
module.exports = router;