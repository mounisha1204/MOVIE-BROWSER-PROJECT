import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Herocom from './hero';

const MovieView = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ab166ff82684910ae3565621aea04d62&language=en-US`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch movie details');
                }
                return response.json();
            })
            .then(data => {
                setMovieDetails(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching movie details:', error);
                setError(error);
                setIsLoading(false);
            });
    }, [id]);

    if (isLoading) {
        return <Herocom star="loading" backdrop="" />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (movieDetails && movieDetails.poster_path) {
        const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
        const backdrop = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;

        return (
            <div >
                <Herocom star={movieDetails.original_title} backdrop={backdrop} />
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <img className='img-fluid shadow rounded' src={posterPath} alt={movieDetails.original_title} />
                        </div>
                        <div className='col-md-9 my-5'>
                            <h2>{movieDetails.original_title}</h2>
                            <p className='lead'>{movieDetails.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    return null; // Render nothing if movie details are not available
};

export default MovieView;
