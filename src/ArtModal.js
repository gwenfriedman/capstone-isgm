import React from 'react'
import seascape from './images/art/seascape.jpg'
import x from './images/x.png'

import './Modal.css';

const ArtModal = props => {
    return(
        <div className={"modal"}> 
            <img src={seascape} />

            <div className='info'>
                <img src={x} className='closeButton' onClick={() => props.closeFunction(false)}/>
                <h2 style={{width:"250px", marginBottom:"40px"}}> {props.title} </h2>

                {props.info.map(i => (
                    <h4 className='note'>{i}</h4>
                    ))}
                <h4> Noteworthy: </h4>
                {props.noteworthy.map(note => (
                    <h4 className='note'>{note}</h4>
                    ))}

                <div className='value'>
                    <h4> {props.value} </h4>
                </div>
           </div>
          </div>
    )
}

export default ArtModal
