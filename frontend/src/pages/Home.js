import React, { useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const Home = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        const response = await axios.get(`/api/movies/search?query=${query}`);
        setMovies(response.data);
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center my-8">Search Movies</h1>
            <form onSubmit={searchMovies} className="flex justify-center mb-8">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter movie name"
                    className="border rounded p-2 w-full max-w-md"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded ml-2">Search</button>
            </form>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Home;
