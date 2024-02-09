import React from 'react'
import Typewriter from 'typewriter-effect';


const Type = () => {
    return (
        <Typewriter 
            options={{
                strings: ['Software Developer', 'Freelancer', 'and', 'Java Developer'],
                autoStart: true,
                loop: true,
                deletespedd:50
            }}
        />
    )
}

export default Type
