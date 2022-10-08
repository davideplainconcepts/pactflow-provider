// const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mastrobardo:perilpoteredimongo@cluster0.vghxw.mongodb.net";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log('suca')
//   // perform actions on the collection object
//   client.close();
// });



const mongoose = require('mongoose');
try {
    // Connect to the MongoDB cluster
     mongoose.connect(
        uri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }