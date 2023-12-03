var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Manga = require('./Manga');
let MangaController = require('../controllers/Manga')
let mongoose = require('mongoose');

// helper function
function requireAuth(req,res,next){
    if(!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}

/* Get route for the Bio Mangas list */
// Read Operation
router.get('/', MangaController.DislayMangalist);
/* Get route for Add Manga page --> Create */
router.get('/add', requireAuth, MangaController.AddManga); 
/* Post route for Add Manga page --> Create */
router.post('/add', requireAuth, MangaController.ProcessManga);
/* Get route for displaying the Edit Manga page --> Update */
router.get('/edit/:id', requireAuth, MangaController.EditManga);
/* Post route for processing the Edit Manga page --> Update */
router.post('/edit/:id', requireAuth, MangaController.ProcessEditManga);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', requireAuth, MangaController.DeleteManga);
module.exports = router;