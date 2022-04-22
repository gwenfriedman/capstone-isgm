import React from 'react'
import x from './images/x.png'
import './Modal.css';

const EvidenceModal = props => {
  return (
    <div className={"modal evidence"}>
        <img src={x} alt='close' className='closeButton-evidence' onClick={() => props.closeFunction(false)} />
        <h2 className='title-evidence'> {props.title} </h2>
        <p className='note-evidence'> {props.note} </p>
        <img className='modal-image-evidence' src={props.image} alt='seascape' />
    </div>
  )
}

export default EvidenceModal

