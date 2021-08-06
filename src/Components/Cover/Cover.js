import React from 'react'
import './Cover.css'
import coverVideo from '../Media/coverVideo.mp4'

const Cover = () => {
    return (
        <div className='cover-container'>
            <video className='video' src={coverVideo} autoPlay loop muted />
            <h1>Leonardo Catto</h1>
            <p>Full Stack web developer</p>
        </div>
    )
}

export default Cover;
