const Anime = require('../models/Anime');

// Get all anime
exports.getAnimeList = async (req, res) => {
  try {
    const anime = await Anime.find();
    res.json(anime);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get anime by slug
exports.getAnimeBySlug = async (req, res) => {
  try {
    const anime = await Anime.findOne({ slug: req.params.slug });
    if (!anime) return res.status(404).json({ message: 'Anime not found' });
    res.json(anime);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get episode by anime slug and episode number
exports.getEpisode = async (req, res) => {
  try {
    const anime = await Anime.findOne({ slug: req.params.animeSlug });
    if (!anime) return res.status(404).json({ message: 'Anime not found' });

    const episode = anime.episodes.find(
      ep => ep.episodeNumber === parseInt(req.params.episodeNumber)
    );
    if (!episode) return res.status(404).json({ message: 'Episode not found' });

    res.json(episode);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};