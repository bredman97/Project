let mongoose = require('mongoose');

// create a model class
let MangaModel = mongoose.Schema({
    
   Title:String,
   Author:String,
   Genre:String,
   Published_year:Number,
   Rating:Number,
   Status:String,
   Volumes:String,
   MainCharacter:String,
   Price:Number,

},
{
    collection:"Manga"
});
module.exports = mongoose.model('Manga',MangaModel);
