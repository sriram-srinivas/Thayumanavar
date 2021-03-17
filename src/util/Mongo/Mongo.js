const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://intrnlUsr:thayumanavar_21@cluster0.tw6fv.mongodb.net/Thayumanavar?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("Thayumanavar").collection("Book");
  alert("connection")
  client.close();
});