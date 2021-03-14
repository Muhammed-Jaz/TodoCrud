const { Db } = require("mongodb")
const db =require('../config/connection')
const {TODO_COLLECTION}=require('../config/collection');
var objectId = require('mongodb').ObjectID


module.exports.createTodo=(data)=>{
    try {
 return new Promise ((resolve,reject)=>{
     db.get().collection(TODO_COLLECTION).insertOne(data).then((response)=>{
        console.log(response.ops[0]);
        resolve(response.ops[0])
     })    
 })
} catch (error) {
       console.log(error); 
}
};
module.exports.getAllTodo=()=>{
    try {
        return new Promise((resolve,reject)=>{
            db.get().collection(TODO_COLLECTION).find().toArray().then((response)=>{
                resolve(response)
            })
        })

        
    } catch (error) {
        console.log(error);
    }
};
module.exports.updateTodo=(data)=>{
    try {
        return new Promise((resolve,reject)=>{
            db.get().collection(TODO_COLLECTION).findOneAndUpdate({heading:data.heading},{$set:data},{upsert:true}).then((response)=>{
                resolve(response.value)
            })
        })
        
    } catch (error) {
        console.log(error);
    }
};
module.exports.deleteTodo=(id)=>{
    try {
      return new Promise((resolve,reject)=>{
          db.get().collection(TODO_COLLECTION).removeOne({_id:objectId(id)}).then((response)=>{
resolve(response.deletedCount);
          })
      })  
    } catch (error) {
        console.log(error);
    }
}