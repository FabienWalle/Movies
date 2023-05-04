import { useState, useEffect } from 'react'
import axios from 'axios'
import './Movies.scss'

const MoviesByGenre = ({ genre, heading }) => {
    const [movies, setMovies] = useState([])
    const API_KEY = import.meta.env.VITE_API_KEY

    const genre_query = `https://api.themoviedb.org/3/discover/movie?sort_by=vote_average.desc&with_genres=${genre}&api_key=${API_KEY}&vote_average.gte=8&vote_count.gte=100`

    const HookByGenre = () => {
        axios
            .get(genre_query)
            .then((res) => {
                setMovies(res.data.results)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(HookByGenre, [genre_query])

    return (
        <div className="MoviesRow">
                <span className="heading">{heading}</span>
                <div className="movieSlider">
                {movies?.map((movie, key) => (
                    key < 10 &&
                    <div className="card" key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} width="200px"></img>
                    </div>
                )
                )}
                </div>
            </div>
    )
}

export default MoviesByGenre