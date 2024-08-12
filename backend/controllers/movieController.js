const axios = require('axios');

const getMovies = async (req, res) => {
    try {
        const { query } = req.query;
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`);
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching movies' });
    }
};

module.exports = { getMovies };
