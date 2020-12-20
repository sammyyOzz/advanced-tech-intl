import React from 'react'
import './IndustrialAutomation.css'
import Grid from '@material-ui/core/Grid'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import BottomWithForm from './BottomWithForm'
import { Link } from 'react-router-dom';
import CarouselComp from './CarouselComp';
import ProductPageDesc from './ProductPageDesc';

function DefenceAerospace() {
    return (
        <div className="industrial">
            <div className="industrial__carousel">
                <CarouselComp />
            </div>

            <ProductPageDesc
                header="DEFENSE & AEROSPACE PRODUCTS"
                text="ADVANCETECH  provides quality products and services while rapidly responding to international needs for innovative and accurate educational and research equipment."
            />

            <div className="industrial__content">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <div className="industrial__leftLinks">
                            <div className="industrial__leftLinksHeader">
                                <span><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" /> DEFENCE & AEROSPACE </span>
                            </div>
                            <div className="industrial__leftLinksContent">
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Test & Measurement</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Data Center Management</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />COSA Embedded Systems</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Rugged Displays & Panel PC</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Motion Simulation Systems</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Single Board Computers</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="industrial__arrowIcon" />Chassis, Components & Power Supplies</p>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <div className="industrial__rightSect">
                            <div className="industrial__productGroup">
                                <h4>
                                    <Link to="/products/defense-aerospace/test-measurement"
                                    style={{ textDecoration: 'none', color: 'red'}}>
                                        Test & Measurement
                                    </Link>
                                </h4>
                                <div className="industrial__productGroupTitles">
                                    <span>Bench Top Instruments</span>
                                    <span>Synchro/Resolver Simulator</span>
                                    <span>JTAG Boundary Scan Solutions</span>
                                    <span>Test Development System</span>
                                    <span>Test Execution System</span>
                                    <span>Boundary-Scan ISP Tools</span>
                                    <span style={{ borderRight: 'none'}}>Bus Analyzers And Exercisers</span>
                                </div>
                                <Grid container spacing={4}>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/8810A-Front-Angle-Position-Indicator-Synchro-Resolver-1024x430-1-300x126.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/Phase-Ange-Voltmeter-2250A-1024x470-1-300x138.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/8810A-Front-Angle-Position-Indicator-Synchro-Resolver-1024x430-1-300x126.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/5300-Synchro-Resolver-Simulator-600x229-1-300x115.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>
                                    <Link to="/products/defense-aerospace/data-center-management"
                                    style={{ textDecoration: 'none', color: 'red'}}>
                                        Data Center Management
                                    </Link>
                                </h4>
                                <div className="industrial__productGroupTitles">
                                    <span>DCMS Go</span>
                                    <span>DCMS Pro</span>
                                    <span>DCMS Expert</span>
                                    <span>COMS</span>
                                    <span>4D Cool</span>
                                    <span style={{ borderRight: 'none'}}>ICS Security Program</span>
                                </div>
                                <Grid container spacing={4}>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/DCMS-Go-300x163.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/COMS1-265x300.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/Cooling-Management.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/ICS-300x109.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>
                                    <Link to="/products/defense-aerospace/cosa-embedded-systems"
                                    style={{ textDecoration: 'none', color: 'red'}}>
                                        COSA Embedded Systems
                                    </Link>
                                </h4>
                                <div className="industrial__productGroupTitles">
                                    <span>Smart I/O Boards</span>
                                    <span>Single Board Computers with I/O</span>
                                    <span>Rugged COTS Systems</span>
                                    <span style={{ borderRight: 'none'}}>Rugged Ethernet Switch</span>
                                </div>
                                <Grid container spacing={4}>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/68ARM1_new_logo.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/75PPC1_new_logo.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/SIU36_new-1-300x248.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/NIU2A-.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>
                                    <Link to="/products/defense-aerospace/rugged-displays-panel-pc"
                                    style={{ textDecoration: 'none', color: 'red'}}>
                                        Rugged Displays & Panel PC
                                    </Link>
                                </h4>
                                <div className="industrial__productGroupTitles">
                                    <span>Military Grade Displays</span>
                                    <span>Marine Grade Displays</span>
                                    <span>Industrial Solutions</span>
                                    <span>Air Traffic Control Displays</span>
                                    <span style={{ borderRight: 'none'}}>Military Keyboards & Trackballs</span>
                                </div>
                                <Grid container spacing={4}>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/8819-Rugged-Displays-300x246.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/4421R5C-Rugged-Displays-300x266.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/CFP21W2_Datasheet-21.3-Air-Traffic-Controls-square-Displays-274x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/50mm-Military-Trackball-Module-1024x991-1-300x290.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>
                                    <Link to="/products/defense-aerospace/motion-simulation-systems"
                                    style={{ textDecoration: 'none', color: 'red'}}>
                                        Motion Simulation Systems
                                    </Link>
                                    </h4>
                                <div className="industrial__productGroupTitles">
                                    <span>Single Axis Rate Tables</span>
                                    <span>Two Axis Rate Tables</span>
                                    <span style={{ borderRight: 'none'}}>Three Axis Rate Tables</span>
                                </div>
                                <Grid container spacing={4}>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/2002P-2-Axis-Positioning-Rate-Table.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/Single-axis-1281-rate-table-1.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/2103-3-Axis-Rate-Table.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/2102C-2-Axis-Positioning-Rate-Table.png')} alt=""/>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>
                                    <Link to="/products/defense-aerospace/single-board-computers"
                                    style={{ textDecoration: 'none', color: 'red'}}>
                                        Single Board Computers
                                    </Link>
                                </h4>
                                <div className="industrial__productGroupTitles">
                                    <span>3U VPX Single Board Computer</span>
                                    <span>3U Open VPX Single Board Computer with IO</span>
                                    <span>6U VPX Single Board Computer</span>
                                    <span>6U VME Single Board Computer with IO</span>
                                    <span>3U cPCI Single Board Computer with I/O</span>
                                    <span>3U and 6U cPCI Single Board Computer</span>
                                    <span>COM Express Mini, Basic, Compact</span>
                                    <span>PMC / XMC Processor Boards</span>
                                    <span>Solid State Storage Module</span>
                                    <span style={{ borderRight: 'none'}}>Rack Mount Servers</span>
                                </div>
                                <Grid container spacing={4}>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/3U-VPX-SIngle-Board-Computers-300x200.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/NAI-3u-CPCI-2-264x300.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/NAI-6U-VME-190x300.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/68ARM1_new_logo.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className="industrial__productGroup">
                                <h4>
                                    <Link to="/products/defense-aerospace/chassis-components-power-supplies"
                                    style={{ textDecoration: 'none', color: 'red'}}>
                                        Chassis, Components & Power Supplies
                                    </Link>
                                </h4>
                                <div className="industrial__productGroupTitles">
                                    <span>Backplanes</span>
                                    <span>Chassis Platforms</span>
                                    <span>VPX Power Supply</span>
                                    <span>AC/DC Brick Type Power Supplies</span>
                                    <span>DC/DC Brick Type Power Supplies</span>
                                    <span>DC Power Line Conditioners with Holdup Time</span>
                                    <span style={{ borderRight: 'none'}}>Rotary Switches</span>
                                </div>
                                <Grid container spacing={4}>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/US-BP-PICMG-Family-I-1-300x225.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/US-RS-Rotary-Selector-Switches-Family-I-300x300.jpg')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/Rugged-Chassis-239x300.png')} alt=""/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <div className="industrial__image">
                                            <img src={require('../images/defence&aerospace/Test-Chassis-300x300.png')} alt=""/>
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

export default DefenceAerospace
