
const express = require('express')
const route = express()
const bodyParser = require('body-parser');
const port = 3000
//sub se pehle mongoose ko install krogo gye apne project mai
//npm  i mongodb


//phir mongodb ko import kro gye aise

const { MongoClient } = require("mongodb");



//mongoDb ko conncet krne kay liye uri le kr ana hoga 


//Phir mongodb jo humne  import kia hay connect kro gye  connect function do chhezay le raha hay pheli uri dosri options



route.get('/data', async(req,res)=>{
      const uri = 'mongodb+srv://bilal23:bilal23@cluster0.xrltfh2.mongodb.net/insta?retryWrites=true&w=majority'
      const client = new MongoClient(uri);
      try {
        let db = client.db("insta");
        let collection = await db.collection("post_info");
  
        let results = await collection.find({}).toArray()
        res.send(results);
      } catch(e) {
        console.error(e);
      }
     

      
    }) 
    









route.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//npm i nodmon
