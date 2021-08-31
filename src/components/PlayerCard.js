import React from 'react'
import ChooseButton from './ChooseButton'

const PlayerCard = ( {text, backgroundColor} ) => {

    const chooseAction =  () => {
        PlayerCard.setState ({backgroundColor: 'blue'})
    }

    return (
        <div className='playerCard'>

            <h1 className='playerName' 
            style={{textAlign: 'center'}}>
            {text}
            </h1>

            <div className='colorBoard'
            style={{backgroundColor: backgroundColor}}>
                <ChooseButton chooseAction={chooseAction} />
            </div>
            
        </div>
    )
}

PlayerCard.defaultProps = {
    backgroundColor: 'white',
}

export default PlayerCard
