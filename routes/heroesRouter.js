const express = require('express');
const heroesController = require('../controllers/heroeController');
const router = express.Router();


router.get('/', heroesController.index);
router.get('/detalle/:id', heroesController.detail);
router.get('/bio/:id/:ok?', heroesController.bio);

module.exports = router
