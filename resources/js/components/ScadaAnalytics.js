import React from 'react'
import './ScadaAnalytics.css'
import BottomWithForm from './BottomWithForm'
import Grid from '@material-ui/core/Grid'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CarouselComp from './CarouselComp';
import ProductPageDesc from './ProductPageDesc';
import { Link } from 'react-router-dom';

function ScadaAnalytics() {
    return (
        <div className="industrial">
            <div className="industrial__carousel">
                <CarouselComp
                    animate="fade"
                    time="4000"
                    images={[
                        "book-4126483_1920-1.jpg",
                        "military-jet-flight-flying-1245256.jpg"
                    ]}
                />
            </div>

            <ProductPageDesc
                header="SCADA & ANALYTICS PRODUCTS"
                text="ADVANCETECH provide information monitoring and management systems such as SCADA and Industrial EMS for complete, smart manufacturing solutions."
            />

            <div className="industrial__content">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <div className="industrial__leftLinks">
                            <div className="industrial__leftLinksHeader">
                                <span><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" /> SCADA & ANALYTICS </span>
                            </div>
                            <div className="industrial__leftLinksContent">
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Enterprise Solution</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Data Historian</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />IoT Solution</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Mobility Solution</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Visualization</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Analytics</p>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <div className="industrial__rightSect">
                            <div className="industrial__productGroup">
                                <h4>
                                    <Link to="/products/scada-analytics/enterprise-solution"
                                    style={{ textDecoration: 'none', color: 'red'}}>
                                        Enterprise Solution
                                    </Link>
                                    </h4>
                                <div className="industrial__productGroupTitles">
                                    <span>ICONICS CFSWorX™</span>
                                    <span style={{ borderRight: 'none'}}>The BridgeWorX™64</span>
                                </div>
                                <Grid container spacing={3}>
                                    <Grid item container xs={6}>
                                        <Grid item xs={1} />
                                        <Grid item xs={10}>
                                            <div className="industrial__image">
                                                <img src={require('../images/scada&analytics/CFSWorX-300x169.jpg')} alt=""/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={1} />
                                    </Grid>
                                    <Grid item container xs={6}>
                                        <Grid item xs={1} />
                                        <Grid item xs={10}>
                                            <div className="industrial__image">
                                                <img src={require('../images/scada&analytics/BridgeWorX64_desktop-300x203.png')} alt=""/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={1} />
                                    </Grid>
                                </Grid>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>
                                    <Link to="/products/scada-analytics/data-historian"
                                    style={{ textDecoration: 'none', color: 'red'}}>
                                        Data Historian
                                    </Link>
                                    </h4>
                                <div className="industrial__productGroupTitles">
                                    <span style={{ borderRight: 'none'}}>ICONICS’ Hyper Historian™</span>
                                </div>
                                <Grid container spacing={3}>
                                    <Grid item container xs={6}>
                                        <Grid item xs={1} />
                                        <Grid item xs={10}>
                                            <div className="industrial__image">
                                                <img src={require('../images/scada&analytics/HyperHistorianscreens-300x148.png')} alt=""/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={1} />
                                    </Grid>
                                    <Grid item container xs={6}>
                                        <Grid item xs={1} />
                                        <Grid item xs={10}>
                                            <div className="industrial__image">
                                                <img src={require('../images/scada&analytics/HyperHistorian_Architecture-300x276.png')} alt=""/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={1} />
                                    </Grid>
                                </Grid>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>
                                <Link to="/products/scada-analytics/iot-solutions"
                                    style={{ textDecoration: 'none', color: 'red'}}>
                                        IoT Solution
                                    </Link>
                                </h4>
                                <div className="industrial__productGroupTitles">
                                    <span style={{ borderRight: 'none'}}>IoTWorX™</span>
                                </div>
                                <Grid container spacing={2}>
                                    <Grid item xs={4} />
                                    <Grid item xs={4}>
                                        <div className="industrial__image">
                                            <img src={require('../images/scada&analytics/IoT_diagram_10.96-300x289.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4} />
                                </Grid>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>
                                    <Link to="/products/scada-analytics/mobility-solution"
                                    style={{ textDecoration: 'none', color: 'red'}}>
                                        Mobility Solution
                                    </Link>
                                </h4>
                                <div className="industrial__productGroupTitles">
                                    <span>MobileHMI</span>
                                    <span style={{ borderRight: 'none'}}>KPIWorX™</span>
                                </div>
                                <Grid container spacing={3}>
                                    <Grid item container xs={6}>
                                        <Grid item xs={1} />
                                        <Grid item xs={10}>
                                            <div className="industrial__image">
                                                <img src={require('../images/scada&analytics/MobileHMI_Architecture-300x277.jpg')} alt=""/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={1} />
                                    </Grid>
                                    <Grid item container xs={6}>
                                        <Grid item xs={1} />
                                        <Grid item xs={10}>
                                            <div className="industrial__image">
                                                <img src={require('../images/scada&analytics/KPIWorX_All-Devices_2-300x148.png')} alt=""/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={1} />
                                    </Grid>
                                </Grid>

                            </div>

                            <div className="industrial__productGroup">
                                <h4>
                                <Link to="/products/scada-analytics/visualization"
                                    style={{ textDecoration: 'none', color: 'red'}}>
                                        Visualization
                                    </Link>
                                </h4>
                                <div className="industrial__productGroupTitles">
                                    <span>GENESIS64™</span>
                                    <span style={{ borderRight: 'none'}}>GENESIS32™</span>
                                </div>
                                <Grid container spacing={2}>
                                    <Grid item container xs={6}>
                                        <Grid item xs={1} />
                                        <Grid item xs={10}>
                                            <div className="industrial__image">
                                                <img src={require('../images/scada&analytics/Genesis64screens-300x224.png')} alt=""/>
                                            </div>
                                        <Grid item xs={1} />
                                        </Grid>
                                    </Grid>
                                    <Grid item container xs={6}>
                                        <Grid item xs={1} />
                                        <Grid item xs={10}>
                                            <div className="industrial__image">
                                                <img src={require('../images/scada&analytics/Genesis32screen-300x265.png')} alt=""/>
                                            </div>
                                        </Grid>
                                        <Grid item xs={1} />
                                    </Grid>
                                </Grid>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>
                                    <Link to="/products/scada-analytics/analytics"
                                    style={{ textDecoration: 'none', color: 'red'}}>
                                        Analytics
                                    </Link>
                                </h4>
                                <div className="industrial__productGroupTitles">
                                    <span>Energy AnalytiX®</span>
                                    <span>Facility AnalytiX®</span>
                                    <span>Quality AnalytiX®</span>
                                    <span style={{ borderRight: 'none'}}>Alarm WorX64</span>
                                </div>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/scada&analytics/ArchitectureDiagram_manufacturing-300x212.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/scada&analytics/FacilityAnalytiXscreens-300x149.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/scada&analytics/QualityAnalytiXscreens-300x148.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/scada&analytics/AlarmWorX-300x220.png')} alt=""/>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>


                        </div>
                    </Grid>
                </Grid>

            </div>

            <BottomWithForm />
        </div>

    )
}

export default ScadaAnalytics
