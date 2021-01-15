import React from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import './FloatingButton.css'
import ReactWhatsapp from 'react-whatsapp'


export default function FloatingButton() {

  return (
    <div className="floatingButton">
      <span>Contact Us:</span>
      <ReactWhatsapp
      style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
      number="+2349037420887"
        // default:  1-212-736-5000
      message="Hello, are you the developer of this site? its beautiful 😁😁😁">
          <WhatsAppIcon
            fontSize="large"
            style={{
                color: '#25D366',
                backgroundColor: 'white',
                padding: '8px',
                borderRadius: '50px',
                boxShadow: '1px 2px 2px gray'
            }}
          />
      </ReactWhatsapp>
    </div>

  );
}
