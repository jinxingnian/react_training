import React from 'react'
import PropTypes from 'prop-types'
import Button from './button'


const Header = ({ title }) => {
    const onClick = () => {
        console.log('click')
    }
    return (
        <header className='header'>
            <h1 style={headingStyle}>{title}</h1>
            <Button color='red' text='Hello' onClick={onClick}/>
        </header>
    )
}


Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red', backgroundColor: 'black'
}
export default Header;
