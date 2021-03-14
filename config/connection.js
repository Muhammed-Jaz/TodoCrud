const mongoClient=require('mongodb').MongoClient
const state={
    db:null
}

module.exports.connect=(done)=>{
    const url = "mongodb://jazrivin:Jazap%40123@cluster0-shard-00-00.8fbhh.mongodb.net:27017,cluster0-shard-00-01.8fbhh.mongodb.net:27017,cluster0-shard-00-02.8fbhh.mongodb.net:27017/tododb?ssl=true&replicaSet=atlas-qw99ia-shard-0&authSource=admin&retryWrites=true&w=majority";
    const dbname='tododb'

    mongoClient.connect(url, { useUnifiedTopology: true }, (err,data)=>{
        if(err) return done(err)
        state.db=data.db(dbname)
        done()
    })


}
module.exports.get=()=>{
    return state.db
}