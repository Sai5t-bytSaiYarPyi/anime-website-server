const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
  episodeNumber: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
});

const animeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  genres: {
    type: [String],
    required: true,
  },
  cover: {
    type: String,
    default: '',
  },
  episodes: [episodeSchema],
});

module.exports = mongoose.model('Anime', animeSchema);