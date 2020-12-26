import React from 'react';
import Fab from '@material-ui/core/Fab';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import './FloatingButton.css'
import ReactWhatsapp from 'react-whatsapp'


export default function FloatingButton() {

  return (
    <div className="floatingButton">
      <span>Contact Us:</span>
      <ReactWhatsapp 
      style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
      number="1-212-736-5000" 
      message="Hello, I would like to know more about the services you offer">
          <WhatsAppIcon fontSize="large" style={{ color: '#25D366' }} />
      </ReactWhatsapp>
    </div>
    
  );
}
