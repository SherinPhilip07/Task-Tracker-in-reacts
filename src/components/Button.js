import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    
    return (        
            <button onClick={onClick} style={{backgroundColor :color}} className='btn'>{text}</button>
        
    )
}

Button.propTypes={
    onClick: PropTypes.func
}

export default Button
