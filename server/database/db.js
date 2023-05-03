// Conexão com o banco de dados
const mongodb = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

mongodb.connect('mongodb://localhost/phonebookmanagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(conn => {
  global.conn = conn.db('phonebook');
  console.log("Conect to MongoDB!");
}).catch((err) => {
  console.error('Error: Database failed to connect... ' + err);
});


// Find  'users'
async function getClients(callback) {
  return await global.conn.collection('clients').find({}).toArray(callback);
}

// Insert 'users'
async function insertClient(client, callback) {
  return await global.conn.collection('clients').insertOne(client, callback);
}

// Editing  collection 'users'
async function updateClient(id, client) {
  return await global.conn.collection('clients').updateOne({_id: new ObjectId(id)}, {$set: client});
}

// Deleta  collection 'users'
async function deleteClient(id) {
  return await global.conn.collection('clients').deleteOne({_id: new ObjectId(id)});
}




module.exports = { getClients, insertClient, deleteClient, updateClient};