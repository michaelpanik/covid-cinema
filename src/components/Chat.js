import React, { useState } from 'react'

const Player = () => {
    const [hidden, toggleHidden] = useState(false)

    return (
        <div className={`chatroom ${hidden ? 'active' : ''}`}>
            <div className="chatroom__handle" onClick={() => toggleHidden(!hidden)}>Chat</div>
            <iframe
                src="https://minnit.chat/covidCinema?embed&&nickname="
                width={400}
                height={600}
                style={{border: 'none'}}
                allowTransparency={true}
            />
        </div>
    )
}

export default Player