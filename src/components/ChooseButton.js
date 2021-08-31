import React from 'react'

const ChooseButton = ({ chooseAction }) => {
    return (
        <button
        className='chooseButton'
        onClick={chooseAction}>
        Choose Color
        </button>
    )
}

export default ChooseButton
