//Inserindo um documento

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


const pegarDados = require('./pegarDados')
const saltOn = pegarDados.salt
const userName = pegarDados.username

const passWords = pegarDados.password

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("cryptohoby");
  var myobj = { salt: saltOn, username: userName, password: passWords };
  dbo.collection("login").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted. Salt: "+ saltOn + ". Login: "+ userName+ ". Senha: "+ passWords);
    db.close();
  });
}); 

