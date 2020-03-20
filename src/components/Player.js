import React, { useState } from 'react'
import ReactPlayer from 'react-player'

const Player = () => {
    const [streaming, setStreaming] = useState(true)
    const [key, setKey] = useState(0)
    
    return (
        !streaming ? 
        <div class="not-streaming">At this time, the cinema is closed. Check the Facebook group for the next available showing.</div>
        : <ReactPlayer
            key={key}
            url='https://stream.covidcinema.michael-panik.com/hls/covidcinema.m3u8'
            controls={true}
            playing={true}
            fileConfig={{
                forceHLS: true
            }}
            onError={() => {
                setStreaming(false)
            }}
        />
    )
}

export default Player