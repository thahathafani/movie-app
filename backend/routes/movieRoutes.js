const express = require('express');
const { getMovies } = require('../controllers/movieController');

const router = express.Router();

router.get('/search', getMovies);

module.exports = router;
