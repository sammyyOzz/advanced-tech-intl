import React from 'react'
import './IndustrialAutomation.css'
import Grid from '@material-ui/core/Grid'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


function IndustrialAutomation() {
    return (
        <div className="industrial">
            <div className="industrial__carousel">
                <h1>carousel</h1>
                <h1>carousel</h1>
                <h1>carousel</h1>
                <h1>carousel</h1>
                <h1>carousel</h1>
            </div>

            <div className="industrial__content">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <div className="industrial__leftLinks">
                                <div className="industrial__leftLinksHeader">
                                    <span><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" /> INDUSTRIAL AUTOMATION </span>
                                </div>
                            <div className="industrial__leftLinksContent">
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Universal Testing Solution</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Data Acquisition and Control System</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Indicator & Controller</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Networking & Enterprise Solution</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Primary Flow Calibrator</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Sensing and Measuring Instruments</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Environmental Monitoring</p>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <div className="industrial__rightSect">
                            <div className="industrial__productGroup">
                                <h4>Universal Testing Solution</h4>
                                <div className="industrial__productGroupTitles">
                                    <span>Material Testing</span>
                                    <span>Metallography Testing Products</span>
                                    <span>Force Testing</span>
                                    <span style={{ borderRight: 'none'}}>Torque Testing</span>
                                </div>
                                <Grid container>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/Hardness-Tester-fully-automatic-300x224.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/CORMET-SSRT-225x300.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/tensile_tester-205x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/Vortex-xt-with-bottle800-252x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                </Grid>
                                <div className="industrial__btn">
                                    <button>Learn More</button>
                                </div>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>Universal Testing Solution</h4>
                                <div className="industrial__productGroupTitles">
                                    <span>Material Testing</span>
                                    <span>Metallography Testing Products</span>
                                    <span>Force Testing</span>
                                    <span style={{ borderRight: 'none'}}>Torque Testing</span>
                                </div>
                                <Grid container>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/Hardness-Tester-fully-automatic-300x224.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/CORMET-SSRT-225x300.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/tensile_tester-205x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/Vortex-xt-with-bottle800-252x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                </Grid>
                                <div className="industrial__btn">
                                    <button>Learn More</button>
                                </div>
                            </div>

                        </div>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default IndustrialAutomation
