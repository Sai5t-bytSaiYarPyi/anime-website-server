const express = require('express');
const Anime = require('../models/Anime');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all anime
router.get('/', async (req, res) => {
  try {
    const anime = await Anime.find();
    res.json(anime);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get anime by ID
router.get('/:id', async (req, res) => {
  try {
    const anime = await Anime.findById(req.params.id);
    if (!anime) return res.status(404).json({ message: 'Anime not found' });
    res.json(anime);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get episode by ID
router.get('/episode/:id', async (req, res) => {
  try {
    const anime = await Anime.findOne({ 'episodes._id': req.params.id });
    if (!anime) return res.status(404).json({ message: 'Episode not found' });
    const episode = anime.episodes.id(req.params.id);
    res.json(episode);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add anime (admin only)
router.post('/', auth, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ message: 'Admin access required' });

  const { title, thumbnail, cover, description, genres, year, status, rating, episodes } = req.body;
  try {
    const anime = new Anime({ title, thumbnail, cover, description, genres, year, status, rating, episodes });
    await anime.save();
    res.json(anime);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;