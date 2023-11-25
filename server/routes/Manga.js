var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Manga = require('./Manga');
let MangaController = require('../controllers/Manga')
/* Get route for the Bio Mangas list */
// Read Operation
router.get('/', MangaController.DislayMangalist);
/* Get route for Add Manga page --> Create */
router.get('/add', MangaController.AddManga); 
/* Post route for Add Manga page --> Create */
router.post('/add', MangaController.ProcessManga);
/* Get route for displaying the Edit Manga page --> Update */
router.get('/edit/:id', MangaController.EditManga);
/* Post route for processing the Edit Manga page --> Update */
router.post('/edit/:id', MangaController.ProcessEditManga);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', MangaController.DeleteManga);
module.exports = router;