import React from 'react'
import './Footer.css'
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CopyrightIcon from '@material-ui/icons/Copyright';


function Footer() {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footerLeft">
                    <span><CopyrightIcon fontSize="small" /></span>
                    <span>
                        All rights Advancetech International 2020
                    </span>
                </div>
                <div className="footerRight">
                    <span><LinkedInIcon fontSize="small" /></span>
                    <span><WhatsAppIcon fontSize="small" /></span>
                    <span><PinterestIcon fontSize="small" /></span>
                    <span><TwitterIcon fontSize="small" /></span>
                </div>
            </div>
        </div>
    )
}

export default Footer
