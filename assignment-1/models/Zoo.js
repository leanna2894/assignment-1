var mongoose = require('mongoose');
var ZooSchema = new mongoose.Schema({
  _id: String,
  value: Number,
},
{
    collection: 'zoo_collection'
});

mongoose.model('Zoo', ZooSchema);