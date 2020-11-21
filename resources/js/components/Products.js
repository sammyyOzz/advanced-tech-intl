import React from 'react'
import './Products.css'
import Grid from '@material-ui/core/Grid'
import ProductCard from './ProductCard.js'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';

function Products() {
    return (
        <div className="products">
            <div className="products__carousel">
                <h1>Carousel</h1>
                <h1>Carousel</h1>
                <h1>Carousel</h1>
                <h1>Carousel</h1>
                <h1>Carousel</h1>
            </div>
            <div className="products__section">
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <div className="products__leftLinks">
                            <div className="products__leftLinksHeader">
                                <span><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" /> INDUSTRIAL AUTOMATION </span>
                            </div>
                            <div className="products__leftLinksContent">
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Universal Testing Solution</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Data Acquisition and Control System</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Indicator & Controller</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Networking & Enterprise Solution</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Primary Flow Calibrator</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Sensing and Measuring Instruments</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Environmental Monitoring</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ProductCard
                            name="omniTest"
                            description="A versatile and easy to use materials tester, the twin-column OmniTest is available in 10 kN, 25 kN and 50 kN capacities."
                            image="omnitest.png"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ProductCard
                            name="Vickers Hardness Tester"
                            description="Most Advanced System with High-speed Sample Profile Memory Function. High-speed,High-accuracy,High-repeatability, Easy-operation,Improved Read Power. More Reliable for Large quantities of testing without human error.​"
                            image="vicker.png"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="products__leftLinks">
                            <div className="products__leftLinksHeader">
                                <span><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" /> SCADA & ANALYTICS </span>
                            </div>
                            <div className="products__leftLinksContent">
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Enterprise Solution</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Data Historian</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />IoT Solutions</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Mobility Solution</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Visualization</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Analytics</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ProductCard
                            name="Flow Meter"
                            description="Electromagnetic flow meters represent the accurate measurement in water cycle and process applications. This meter incorporates improvements to the magnetic distribution elements that allow accurate operation throughout all flow regimes, allowing up to a 1000:1 turn down.​"
                            image="flow-meter.png"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ProductCard
                            name="Data Acquisition with Multi Protocol"
                            description="Data station system including SD card slot for data logging and database upload / download. Communicate with over 300 protocols easily convert between serial, and Ethernet devices manage multi-vendor environments."
                            image="multi-protocol.png"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="products__leftLinks">
                            <div className="products__leftLinksHeader">
                                <span><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" /> EDUCATION & RESEARCH </span>
                            </div>
                            <div className="products__leftLinksContent">
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Aeronautical Engineering</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Civil Engineering</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Mechanical Engineering</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Steam & Renewable Energy</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Material Testing & Research</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Corrosion Online</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ProductCard
                            name="Data Historian"
                            description="ICONICS’ Hyper Historian™ is an advanced 64-bit high-speed, reliable, and robust historian. Designed for the most mission-critical applications, Hyper Historian’s advanced high compression algorithm delivers unparalleled performance with very efficient use of resources."
                            image="historian.png"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ProductCard
                            name="Mobility"
                            description="MobileHMI is an enterprise mobile application that runs on hundreds of different phones and tablets and can scale to thousands of devices. MobileHMI delivers real-time rich visualization, historical trends, and alarm notifications without compromising security."
                            image="mobility.png"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="products__leftLinks">
                            <div className="products__leftLinksHeader">
                                <span><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" /> DEFENSE & AEROSPACE </span>
                            </div>
                            <div className="products__leftLinksContent">
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Test & Measurement</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Data Center Management</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />COSA Embedded Systems</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Rugged Displays & Panel PC</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Motion Simulation Systems</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Single Board Computers</p>
                                <p><ArrowForwardIosIcon fontSize="small" id="products__arrowIcon" />Chassis, Components & Power Supplies</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ProductCard
                            name="Control System"
                            description="A versatile and easy to use materials tester, the twin-column OmniTest is available in 10 kN, 25 kN and 50 kN capacities."
                            image="control-system.jpg"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ProductCard
                            name="Wind Lab"
                            description="WindLab™ is a classroom-sized energy power plant built to last with aerospace grade components including an all alloy planetary gear box, 3-phase power generator, cut-away gondola cover, a stainless steel tower, and rapid prototyped blades."
                            image="wind-lab.jpg"
                        />
                    </Grid>
                    <Grid item md={4}>
                        <div className="products__leftLinks"></div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ProductCard
                            name="Angle Position Indicator"
                            description="Angle Position Indicator (API) is a rack mount or benchtop measurement instrument featuring two fully independent inputs that can be used to read two separate input signals simultaneously, or can be combined to measure multi-speed Synchros or Resolvers. Improved flexibility is provided by front panel controls and input terminals."
                            image="angle-indicator.jpg"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ProductCard
                            name="Model 5330A"
                            description="Synchro/Resolver Simulator is a rack mount or benchtop instrument featuring two fully independent outputs that can be used to simulate two separate Synchro or Resolver signals simultaneously, or can be combined to operate as two-speed outputs. Improved flexibility is provided by integrated touch screen controls and input terminals."
                            image="model.jpg"
                        />
                    </Grid>
                </Grid>
            </div>

            <div className="products__bottom">
                <div className="products__bottomOverlay">
                    <div className="products__bottomContent">
                        <Grid container spacing={10}>
                            <Grid item container spacing={3} xs={12} md={7}>
                                <Grid item xs={6} md={4}>
                                    <div className="products__bottomGrid">
                                        <h4>Products</h4>
                                        <p>Industrial Automation</p>
                                        <p>SCADA & Analytics</p>
                                        <p>Education & Research</p>
                                        <p>Defese & Aerospace</p>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <div className="products__bottomGrid">
                                        <h4>Services</h4>
                                        <p>Installation Services</p>
                                        <p>Repair & Calibration</p>
                                        <p>Turnkey Solution</p>
                                        <p>Project Maping</p>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <div className="products__bottomGrid">
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
                                <div className="products__bottomForm">
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

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products
