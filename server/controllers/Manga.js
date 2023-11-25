var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Manga = require('../models/Manga');

module.exports.DislayMangalist = async (req,res,next)=>{ //< Mark function as async
    try{
       const MangaList = await Manga.find(); //< Use of await keyword
       res.render('Manga/list', {
          title: 'Manga List', 
          MangaList: MangaList
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('Manga/list', {
          error: 'Error on server'
       });
    }
 };

 module.exports.AddManga = async (req,res,next)=>{
    try{
        res.render('Manga/add',
        {
            title:'Add Manga'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Manga/list',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.ProcessManga = async (req,res,next)=>{
    try{
        let newManga = Manga({
            "title":req.body.title,
            "author": req.body.author,
            "genre": req.body.genre,
            "published_year": req.body.published_year,
            "rating": req.body.rating,
            "status": req.body.status,
            "volumes": req.body.volumes,
            "main_character": req.body.main_character,
            "price": req.body.price
           
        });
        Manga.create(newManga).then(() =>{
            res.redirect('/Manga')
        })
    }
    catch(error){
        console.error(err);
        res.render('Manga/list',
        {
            error: 'Error on the server'
        });
    }
};

module.exports.EditManga = async (req,res,next)=>{
    try{
    const id = req.params.id;
    const MangaToEdit = await Manga.findById(id);
    res.render('Manga/edit',
    {
        title:'Edit Manga',
        Manga:MangaToEdit
    })
}
catch(error){
    console.error(err);
    res.render('Manga/list',
    {
        error: 'Error on the server'
    });
}
}

module.exports.ProcessEditManga = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedManga = Manga({
            "_id":id,
            "title":req.body.title,
            "author": req.body.author,
            "genre": req.body.genre,
            "published_year": req.body.published_year,
            "rating": req.body.rating,
            "status": req.body.status,
            "volumes": req.body.volumes,
            "main_character": req.body.main_character,
            "price": req.body.price

            
            
        });
        Manga.findByIdAndUpdate(id,updatedManga).then(()=>{
            res.redirect('/Manga')
        });
    }
    catch(error){
        console.error(err);
        res.render('Manga/list',
        {
            error: 'Error on the server'
        });
    }
}

module.exports.DeleteManga = (req,res,next)=>{
    try{
        let id = req.params.id;
        Manga.deleteOne({_id:id}).then(() =>
        {
            res.redirect('/Manga')
        })
    }
    catch(error){
        console.error(err);
        res.render('Manga/list',
        {
            error: 'Error on the server'
        });
    }
}