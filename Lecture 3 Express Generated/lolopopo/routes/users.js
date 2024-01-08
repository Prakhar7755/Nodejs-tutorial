const mongoose = require('mongoose');


//    CONNECTING TO MONGODB         CREATE A DATABASE
mongoose.connect('mongodb://127.0.0.1:27017/practiceKaro');









// SCHEMA MEANS telling  banne waala har document ki tarah ka hoga and kya kya hoga

//      DOCUMENT KA DATA
const userSchema = mongoose.Schema({
    username: String,
    name: String,
    age: Number,
});







//              MODEL           OR          COLLECTION('name','type/schema/document')
// mongoose.model('name','Schema')
// and exporting

module.exports = mongoose.model("user", userSchema);

