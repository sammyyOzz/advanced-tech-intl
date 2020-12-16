import React from 'react'
import Map from './Map'
import Grid from '@material-ui/core/Grid'
import CarouselComp from './CarouselComp'
import ContactUsForm from './ContactUsForm'
import './ContactUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer.js'


function ContactUs() {
    return (
        <div className="contact">
            <div className="contact__top">
                <div className="contact__topContent">
                    <h1>CONTACT US</h1>
                    <h3>Need an expert? you are more than welcomed to leave your contact info and we will be in touch shortly</h3>
                </div>
            </div>
            <div className="contact__center">
                <div className="contact__centerContent">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <div className="contact__card">
                                <h1><FontAwesomeIcon icon={faHome} /></h1>
                                <h2>VISIT US</h2>
                                <p>We are located in SAIF Zone, Sharjah. We welcome visitors to have in-house product demo or training, please visit us:</p>
                                <span>P.O. Box:8877, SAIF Zone, Sharjah</span>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className="contact__card">
                                <h1><FontAwesomeIcon icon={faPhone} /></h1>
                                <h2>CALL US</h2>
                                <p>Want to talk to our product expert? For more details of our product, services or any clarification, please call us:</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className="contact__card" style={{borderRight: 'none'}}>
                                <h1><FontAwesomeIcon icon={faEnvelope} /></h1>
                                <h2>CONTACT US</h2>
                                <p>Are you looking for an expert advise, a demo or a quote? Please feel free to write to our email:</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="contact__mapForm">
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Map />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ContactUsForm />
                    </Grid>
                </Grid>
            </div>

            <Footer />

        </div>
    )
}

export default ContactUs
