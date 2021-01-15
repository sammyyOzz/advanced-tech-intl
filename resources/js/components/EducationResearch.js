import React from 'react'
import './IndustrialAutomation.css'
import Grid from '@material-ui/core/Grid'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import BottomWithForm from './BottomWithForm'
import { Link } from 'react-router-dom';
import CarouselComp from './CarouselComp';
import ProductPageDesc from './ProductPageDesc';

function EducationResearch() {
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
                header="EDUCATION & RESEARCH PRODUCTS"
                text="ADVANCETECH  provides quality products and services while rapidly responding to international needs for innovative and accurate educational and research equipment."
            />

            <div className="industrial__content">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <div className="industrial__leftLinks">
                            <div className="industrial__leftLinksHeader">
                                <span><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" /> EDUCATION & RESEARCH </span>
                            </div>
                            <div className="industrial__leftLinksContent">
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Aeronautical Engineering</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Civil Engineering</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Mechanical Engineering</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Steam & Renewable Energy</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Material Testing & Research</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Corrosion Online High Temp-Pressure SSRT</p>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <div className="industrial__rightSect">
                            <div className="industrial__productGroup">
                                <h4>
                                    <Link to="/products/education-research/aeronautical-engineering"
                                    style={{ textDecoration: 'none', color: 'red'}}>
                                        Aeronautical Engineering
                                    </Link>
                                </h4>
                                <div className="industrial__productGroupTitles">
                                    <span style={{ borderRight: 'none'}}>Propulsion Systems</span>
                                </div>
                                <Grid container spacing={4}>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/Airflow-System-300x279.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/TurboGen-300x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/MiniLab_SR30-300x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/JET-PROPULSION-TEST-STAND-300x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>
                                    <Link to="/products/education-research/civil-engineering"
                                    style={{ textDecoration: 'none', color: 'red'}}>
                                        Civil Engineering
                                    </Link>
                                </h4>
                                <div className="industrial__productGroupTitles">
                                    <span>Force Apparatus</span>
                                    <span>Friction Apparatus</span>
                                    <span>Strength of Material</span>
                                    <span>Structures</span>
                                    <span style={{ borderRight: 'none'}}>Vibration Apparatus</span>
                                </div>
                                <Grid container spacing={4}>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/HFC2_TRIANGLE-of-FORCES-300x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/HFC29_CORIOLIS-FORCE-APPARATUS-300x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/HFC3_FUNICULUR-POLYGON-and-FORCES-APPARATUS-300x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/HSM41_PENDULUM-IMPACT-TESTER-300x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>
                                    <Link to="/products/education-research/mechanical-engineering"
                                    style={{ textDecoration: 'none', color: 'red'}}>
                                        Mechanical Engineering
                                    </Link>
                                </h4>
                                <div className="industrial__productGroupTitles">
                                    <span>Refrigeration & Air Conditioning</span>
                                    <span>Internal Combustion Engines</span>
                                    <span>Heat and Mass Transfer</span>
                                    <span>Theory of Machines</span>
                                    <span style={{ borderRight: 'none'}}>Fluid Mechanics</span>
                                </div>
                                <Grid container spacing={4}>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/REFRIGERATION-CYCLE-DEMONSTRATION-UNIT-267x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/h050_BOYLES-LAW-DEMONSTRATOR-300x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/Diesel-Engine-Lab-272x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/VAPOUR-JET-REFRIGERATOR_HEAT-PUMP-300x298.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>
                                    <Link to="/products/education-research/steam-renewable-energy"
                                    style={{ textDecoration: 'none', color: 'red'}}>
                                        Steam & Renewable Energy
                                    </Link>
                                </h4>
                                <div className="industrial__productGroupTitles">
                                    <span>Renewable Energy</span>
                                    <span style={{ borderRight: 'none'}}>Steam</span>
                                </div>
                                <Grid container spacing={4}>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/Windlab-285x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/S220_RANKINE-CYCLE-STEAM-TURBINE-300x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/PHOTOVOLTAIC-TRAINER-270x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/HORIZONTAL-AXIS-WIND-TURBINE-300x215.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>
                                    <Link to="/products/education-research/material-testing-research"
                                    style={{ textDecoration: 'none', color: 'red'}}>
                                        Material Testing & Research
                                    </Link>
                                </h4>
                                <div className="industrial__productGroupTitles">
                                    <span>SSRT Autoclaves & Tools</span>
                                    <span style={{ borderRight: 'none'}}>Universal Testing Systems</span>
                                </div>
                                <Grid container spacing={4}>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/Loading-Devices-300x225.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/UNIVERSAL-TESTING-MACHINE-269x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/TWIN-HYDRAULIC-RAM-SYSTEM-230x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/Test-loops-300x243.png')} alt=""/>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>
                                    <Link to="/products/education-research/corrosion-online"
                                    style={{ textDecoration: 'none', color: 'red'}}>
                                    Corrosion Online High Temp-Pressure SSRT
                                    </Link>
                                </h4>
                                <div className="industrial__productGroupTitles">
                                    <span>SSRT Autoclaves & Tools</span>
                                    <span style={{ borderRight: 'none'}}>Online Corrosion Monitors</span>
                                </div>
                                <Grid container spacing={4}>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/CORMET-SSRT-225x300.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/er-probe-300x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/CEION-Probes-300x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/education&research/Set03-600x600-1-300x300.jpg')} alt=""/>
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

export default EducationResearch
