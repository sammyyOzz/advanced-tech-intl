import React from 'react'
import './IndustrialAutomation.css'
import Grid from '@material-ui/core/Grid'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import BottomWithForm from './BottomWithForm'


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
                                <h4>Data Acquisition and Control System</h4>
                                <div className="industrial__productGroupTitles">
                                    <span>Data Acquisition System</span>
                                    <span>PLC & IO System</span>
                                    <span>HMI Display</span>
                                    <span style={{ borderRight: 'none'}}>RTU & Signal Conditioner</span>
                                </div>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/data-station.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/Modular-Controller-300x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/Flexedge-300x244.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/Expansion-I-O-Module.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                </Grid>
                                <div className="industrial__btn">
                                    <button>Learn More</button>
                                </div>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>Indicator & Controller</h4>
                                <div className="industrial__productGroupTitles">
                                    <span>Indicator</span>
                                    <span>PID Controller</span>
                                    <span style={{ borderRight: 'none'}}>Industrial Controller</span>
                                </div>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/Panel-meter.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/Visual-Management.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/PID-Controller-300x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/Din-rail-controller.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                </Grid>
                                <div className="industrial__btn">
                                    <button>Learn More</button>
                                </div>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>Networking & Enterprise Solution</h4>
                                <div className="industrial__productGroupTitles">
                                    <span>Ethernet Switches</span>
                                    <span style={{ borderRight: 'none'}}>Communication Converter</span>
                                </div>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/router.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/RUgged-switches.gif')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/serial-conver.gif')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/Protocol-Conver.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                </Grid>
                                <div className="industrial__btn">
                                    <button>Learn More</button>
                                </div>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>Primary Flow Calibrator</h4>
                                <div className="industrial__productGroupTitles">
                                    <span style={{ borderRight: 'none'}}>Flow Calibrator</span>
                                </div>
                                <Grid container spacing={2}>
                                    <Grid item container xs={6}>
                                        <Grid item xs={3} />
                                        <Grid item xs={6}>
                                            <div className="industrial__image">
                                                <img src={require('../images/industrial/liquied-calibrator-150x150.png')} alt=""/>
                                            </div>
                                        <Grid item xs={3} />
                                        </Grid>
                                    </Grid>
                                    <Grid item container xs={6}>
                                        <Grid item xs={3} />
                                        <Grid item xs={6}>
                                            <div className="industrial__image">
                                                <img src={require('../images/industrial/gas-calibrat-150x150.png')} alt=""/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={3} />
                                    </Grid>
                                </Grid>
                                <div className="industrial__btn">
                                    <button>Learn More</button>
                                </div>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>Sensing and Measuring Instruments</h4>
                                <div className="industrial__productGroupTitles">
                                    <span>Industrial Flow Meter</span>
                                    <span style={{ borderRight: 'none'}}>Humidity & Temperature Transmitter</span>
                                </div>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/Turbibe-Meter-300x219.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/mag-meter-img-1-284x300.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/H1-1-300x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/ztt50-211x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                </Grid>
                                <div className="industrial__btn">
                                    <button>Learn More</button>
                                </div>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>Environmental Monitoring</h4>
                                <div className="industrial__productGroupTitles">
                                    <span style={{ borderRight: 'none'}}>Radon Monitor & Accessories</span>
                                </div>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/Soil-Probes-300x225.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/RAD-H2O-Kit-300x228.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/RAD-AQUA-300x179.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/Radon-Monitor_RAD7-1-280x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                </Grid>
                                <div className="industrial__btn">
                                    <button>Learn More</button>
                                </div>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>Multiloop Process Controller</h4>
                                <div className="industrial__productGroupTitles">
                                    <span style={{ borderRight: 'none'}}>353 RetroPACK</span>
                                </div>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={4}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/ML_and_Flushmount_C.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={4}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/Retropak.fw_-1.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={4}>
                                        <div className="industrial__image">
                                            <img src={require('../images/industrial/353-Retro-web-page-image-1.jpg')} alt=""/>
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

            <BottomWithForm />
        </div>
    )
}

export default IndustrialAutomation
