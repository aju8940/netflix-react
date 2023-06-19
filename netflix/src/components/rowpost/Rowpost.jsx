import React from 'react'
import { useEffect, useState } from 'react'
import axios from '../../axios'
import { imgUrl, API_KEY } from '../../constants/constants'
import './rowpost.css'
import Youtube from 'react-youtube'


function Rowpost(props) {

    const [movies, setMovie] = useState([])
    const [urlId, setid] = useState('')

    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovie(response.data.results)
        }).catch(err => {
            console.log(err);
            // alert('Network Error')
        })
    })

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleMovie = (id) => {
        console.log(id, 'IDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD');
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            if (response.data.results.length != 0) {
                setid(response.data.results[0])
            }
        })

    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj) =>
                    <img onClick={() => handleMovie(obj.id)} src={`${imgUrl + obj.backdrop_path}`} className={props.isSmall ? 'smallPoster' : 'poster'} alt="poster" />
                )}

            </div>
            {urlId && <Youtube videoId={urlId.key} opts={opts} />}
        </div>
    )
}

export default Rowpost