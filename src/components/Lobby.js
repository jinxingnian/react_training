import React from 'react'
import PlayerCard from './PlayerCard'

const Lobby = () => {
    return (
        <div className='lobby'>
            <h1 style={{textAlign: 'center'}}>Game Lobby</h1>
            <PlayerCard text="Hello" backgroundColor='red'/>
            <PlayerCard text="abc" />
        </div>
    )
}


export default Lobby
