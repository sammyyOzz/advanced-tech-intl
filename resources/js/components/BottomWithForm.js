import React from 'react'
import './BottomWithForm.css'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import CopyrightIcon from '@material-ui/icons/Copyright';
import FavoriteIcon from '@material-ui/icons/Favorite';

function BottomWithForm() {
    return (
        <div className="bottom">
                <div className="bottomOverlay">
                    <div className="bottomContent">
                        <Grid container spacing={10}>
                            <Grid item container spacing={3} xs={12} md={7}>
                                <Grid item xs={6} md={4}>
                                    <div className="bottomGrid">
                                        <h4>Products</h4>
                                        <p>Industrial Automation</p>
                                        <p>SCADA & Analytics</p>
                                        <p>Education & Research</p>
                                        <p>Defese & Aerospace</p>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <div className="bottomGrid">
                                        <h4>Services</h4>
                                        <p>Installation Services</p>
                                        <p>Repair & Calibration</p>
                                        <p>Turnkey Solution</p>
                                        <p>Project Maping</p>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <div className="bottomGrid">
                                        <h4>About</h4>
                                        <p>Contact Us</p>
                                        <p>About Us</p>
                                        <p>Projects</p>
                                        <p>Blogs & Videos</p>
                                        <p>News Letters</p>
                                        <p>Careers</p>
                                    </div>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} md={5}>
                                <div className="bottomForm">
                                    <form>
                                        <input type="text" placeholder="Name" />
                                        <input type="email" placeholder="Email" />
                                        <input type="text" placeholder="Phone Number" />
                                        <textarea placeholder="Message" ></textarea>
                                        <Button variant="contained" style={{ backgroundColor: '#fdd835', color: 'white'}}><h4>Submit</h4></Button>
                                    </form>
                                </div>
                            </Grid>
                        </Grid>

                        <hr />

                        <div className="bottom__footer">
                            <div className="bottom__footerLeft">
                                <span><CopyrightIcon fontSize="small" /></span>
                                <span>All rights Advancetech International 2020</span>
                            </div>
                            <div className="bottom__footerRight">
                                <span>Made with </span>
                                <span><FavoriteIcon fontSize="small" color="secondary" /></span>
                                <span> by Elementor</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

    )
}

export default BottomWithForm
