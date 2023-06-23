const mongoose = require('mongoose');
const dbURL = 'mongodb://127.0.0.1/Pagination_api'
mongoose.connect(dbURL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 

});
const Schema = mongoose.Schema;
const item = new Schema({
    username : String , 
    url : String , 
},{
    collection: 'items'
})

const modelitem = mongoose.model('itemsModel',item)


module.exports = modelitem

