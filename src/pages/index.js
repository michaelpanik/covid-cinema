import React from 'react'
import ReactPlayer from 'react-player'

const Index = () => {
    return (
        <main>
            <h1>Covid Cinema</h1>
            <p>A Michael Panik Production</p>
            <ReactPlayer
                url='http://142.93.13.93:8080/hls/covidcinema.m3u8'
                controls={true}
                fileConfig={{
                    forceHLS: true
                }}
            />
        </main>
    )
}

export default Index