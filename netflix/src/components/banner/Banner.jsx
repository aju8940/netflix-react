import React, { useEffect } from 'react'
import { API_KEY } from '../../constants/constants'
import { imgUrl } from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'
import { useState } from 'react'

function Banner() {

    const [movie,setMovie] = useState()
    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        setMovie(response.data.results[randomIndex])
        
      })
    }, [])
    
    return (
        <div style={{backgroundImage: `url(${movie ? imgUrl+movie.backdrop_path : ''})`}} 
        className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ''}</h1>
                <div className='banner-buttons'>
                    <button className='btn'>Play</button>
                    <button className='btn'>My List</button>
                </div>
                <h2 className='description'>{movie ? movie.overview : ''}</h2>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner