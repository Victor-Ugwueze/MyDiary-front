// react libraries
import React from 'react';

const Modal = (props) => (
  <div id="sign-up-login" className={`modal ${props.isModalOpen ? 'show': 'hide'} col-2`}>
  <div className="modal-content">
      <div className="modal-body">
         {props.children}
      </div>
  </div>
</div>
)

export default Modal;
