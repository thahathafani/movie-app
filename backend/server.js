const express = require('express');
const cors = require('cors');
const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
require('dotenv').config();

const movieRoutes = require('./routes/movieRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/movies', movieRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
