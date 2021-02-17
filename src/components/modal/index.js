
import { useState, useEffect } from 'react';
import "./styles.scss"

const CustomModal = (props) => {


  const onClose = () => {
    props.onClose();
  }


  if (props.open)
  return (
    <>
    <div className="modal-container">
      <div className="modal-section">
        <span className="close-btn clickable-link" onClick={onClose}>+</span>
        <div className="modal-header">{props.modalHeader || 'Sample Header'}</div>
        <div className="modal-content">
          <div className="modal-content-inner">
          {props.children}
          </div>
        </div>
      </div>
      <div className="modal-backdrop clickable-link" onClick={onClose}></div>
      </div>
    </>
  )
  return <div />
}


export default CustomModal;
