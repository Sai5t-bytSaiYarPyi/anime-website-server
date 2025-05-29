const express = require('express');
const router = express.Router();
const animeController = require('../controllers/animeController');

// Routes
router.get('/', animeController.getAnimeList); // GET /api/anime
router.get('/:slug', animeController.getAnimeBySlug); // GET /api/anime/:slug
router.get('/:animeSlug/episode/:episodeNumber', animeController.getEpisode); // GET /api/anime/:animeSlug/episode/:episodeNumber

module.exports = router;