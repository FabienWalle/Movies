import { useState, useEffect } from 'react'
import axios from 'axios'
import './Movies.scss'

const CollectionMovies = ({ collection, heading }) => {
    const [movies, setMovies] = useState([])
    const API_KEY = import.meta.env.VITE_API_KEY
    const API_TOKEN = import.meta.env.VITE_API_TOKEN

    const collection_query = `https://api.themoviedb.org/4/list/${collection}?page=1&api_key=${API_KEY}`

    const HookByCollection = () => {
        axios
            .get(collection_query,
                {
                    headers: {
                        'Authorization': `token ${API_TOKEN}`
                    }
                })
            .then((res) => {
                setMovies(res.data.results)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(HookByCollection, [collection_query, API_TOKEN])

    return (
        <>
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
        </>
    )
}

export default CollectionMovies