//CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient , ObjectID, Binary} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{ useNewUrlParser:true,useUnifiedTopology: true },(error,client)=>{
    if(error){
        return console.log(error)
    }
    const db = client.db(databaseName)
    //Create using Promises
    db.collection('tasks').insertMany([
        {
            description : "reading",
            completed : true
        },
        {
            description : 'Study',
            completed : false
        }
    ]).then((result)=>{
        console.log("Data Inserted Sucessfully : " + result.ops)        
    }).catch((error)=>{
        console.log("Error Occured : "+ error)

    })

    //Read using Callbacks 
    db.collection('tasks').findOne({_id : new ObjectID("6012917ab223943114e75d70")},(error,result)=>{
        if(error){
            return console.log(error)
        }
        console.log(result)
    })
    db.collection('tasks').find({completed : false}).toArray((error,result)=>{
        if(error){
            return console.log(error)
        }
        console.log(result)
    })

   // Update using Promises
    db.collection('tasks').updateMany({completed : true},{
        $set : {
            completed : false
        }
    }).then((result)=>{
        console.log("Data Modified Successfully : Total modified documents are : "+ result.modifiedCount)
    }).catch((error)=>{
        console.log('Error Occured : '+ error)
    })      

    db.collection('tasks').deleteMany({completed : true}).then((result)=>{
        console.log("Operation Completed : "+ result)
    }).catch((error)=>{
        console.log("Error occured : "+error)
    })
})  