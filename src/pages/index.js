import React from 'react'
import Player from '../components/Player'
import Chat from '../components/Chat'

import '../style/main.css'

const Index = () => {
    return (
        <main>
            <header>
                <h1><small>Covid</small><span>Cinema</span></h1>
                <p>A Michael Panik Production</p>
            </header>
            <Player />
            <Chat />
        </main>
    )
}

export default Index