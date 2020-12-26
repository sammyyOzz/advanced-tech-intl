import React from 'react'
import './BottomWithForm.css'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import CopyrightIcon from '@material-ui/icons/Copyright';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';

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
                                        <Link to='/products/industrial-automation'
                                         style={{ textDecoration: 'none' }}>
                                            <p className="bottomGridLink">Industrial Automation</p>
                                        </Link>
                                        <Link to='/products/scada-analytics'
                                         style={{ textDecoration: 'none' }}>
                                            <p className="bottomGridLink">SCADA & Analytics</p>
                                        </Link>
                                        <Link to='/products/education-research'
                                         style={{ textDecoration: 'none' }}>
                                            <p className="bottomGridLink">Education & Research</p>
                                        </Link>
                                        <Link to='/products/defense-aerospace'
                                         style={{ textDecoration: 'none' }}>
                                            <p className="bottomGridLink">Defese & Aerospace</p>
                                        </Link>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <div className="bottomGrid">
                                        <h4>Services</h4>
                                        <p className="bottomGridLink">Installation Services</p>
                                        <p className="bottomGridLink">Repair & Calibration</p>
                                        <p className="bottomGridLink">Turnkey Solution</p>
                                        <p className="bottomGridLink">Project Maping</p>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <div className="bottomGrid">
                                        <h4>About</h4>
                                        <Link to='/contact'
                                         style={{ textDecoration: 'none' }}>
                                            <p className="bottomGridLink">Contact Us</p>
                                        </Link>
                                        <p className="bottomGridLink">About Us</p>
                                        <p className="bottomGridLink">Projects</p>
                                        <p className="bottomGridLink">Blogs & Videos</p>
                                        <p className="bottomGridLink">News Letters</p>
                                        <p className="bottomGridLink">Careers</p>
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
