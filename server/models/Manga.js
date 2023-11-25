let mongoose = require('mongoose');

// create a model class
let MangaModel = mongoose.Schema({
    
   title:String,
   author:String,
   genre:String,
   published_year:Number,
   rating:Number,
   status:String,
   volumes:String,
   main_character:String,
   price:Number,

},
{
    collection:"Manga"
});
module.exports = mongoose.model('Manga',MangaModel);
