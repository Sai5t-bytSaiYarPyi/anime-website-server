const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Anime = require('./models/Anime');

const seedData = async () => {
  await connectDB();
  await Anime.deleteMany({});
  await Anime.insertMany([
    {
      title: 'Naruto Shippuden',
      slug: 'naruto-shippuden',
      description: 'Naruto continues his journey to become Hokage.',
      genres: ['Action', 'Adventure'],
      cover: 'https://example.com/naruto-cover.jpg',
      episodes: [
        { episodeNumber: 1, title: 'Homecoming', videoUrl: 'https://example.com/naruto-ep1.mp4' },
        { episodeNumber: 2, title: 'The Akatsuki Makes Its Move', videoUrl: 'https://example.com/naruto-ep2.mp4' },
      ],
    },
    {
      title: 'Attack on Titan',
      slug: 'attack-on-titan',
      description: 'Humanity fights against giant Titans.',
      genres: ['Action', 'Drama'],
      cover: 'https://example.com/aot-cover.jpg',
      episodes: [
        { episodeNumber: 1, title: 'To You, in 2000 Years', videoUrl: 'https://example.com/aot-ep1.mp4' },
      ],
    },
  ]);
  console.log('Data seeded');
  process.exit();
};

seedData();