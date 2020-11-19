import React from 'react'
import './Home.css'
import HomeTopCard from './HomeTopCard'
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import HomeImageCard from './HomeImageCard';

function Home() {
    return (
        <div className="home">
            <div className="home__top">
                <div className="home__overlay">
                    <div className="home__topContent">

                        <div className="home__cards">
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={4}>
                                    <HomeTopCard
                                        caption="AUTOMATE"
                                        text="Try out our world-class automation products"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <HomeTopCard
                                        caption="EDUCATE"
                                        text="We have wide range of education research products"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <HomeTopCard
                                        caption="INNOVATIVE"
                                        text="we are representing worlds' leading research products"
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home__aboutUs">
                <Grid container>
                    <Grid item md={3} />
                    <Grid item xs={12} md={6}>
                        <div className="home__aboutUsContent">
                            <h3>About Us</h3>
                            <h2>25 Long Years Of Service Excellence With Quality At It's Best!</h2>
                            <p style={{ marginBottom: '30px'}}>We are the authorised exclusive Distributors of World’s leading Companies. We reach out all our Customers with Strong Sales and Marketing Teams. We have been Extremely Successful as we with our trained technical teams providing right solutions and installation and support locally.</p>
                            <p>Our factory trained team of Engineers provides Installation and Support services including 24X7 timelines on mission critical installations. Our Engineers visit customers to provide these services within UAE, other Middle East and African countries.</p>
                        </div>
                    </Grid>
                    <Grid item md={3} />
                </Grid>
            </div>

            <div className="home__ourProducts">
                <div className="home__overlayProducts">
                    <div className="home__productsContent">
                        <Grid container spacing={10}>
                            <Grid item xs={12} md={7}>
                                <div className="home__productsLeft">
                                    <h3 style={{ marginBottom: '30px', color: '#b0bec5'}}>Our products</h3>
                                    <h2>We are providing the most reliable and trendy solution you are looking for.</h2>

                                    <hr/>

                                    <h3 className="leftHoverBorder">Industrial Automation</h3>
                                    <div className="leftLinksBox">
                                        <span id="firstSpanLink">Material Testing</span>
                                        <span>Fork Testing</span>
                                        <span>Torque Testing</span>
                                        <span>Primary Flow Calibrator</span>
                                        <span>Networking & Enterprise Solution</span>
                                        <span>Sensing and Measuting Instruments</span>
                                        <span>Indicator & Controller</span>
                                        <span>Date Acquisition and Control System</span>
                                        <span id="lastSpanLink">Environmental Monitoring</span>
                                    </div>

                                    <hr/>

                                    <h3 className="leftHoverBorder">SCADA & Analytics</h3>
                                    <div className="leftLinksBox">
                                        <span id="firstSpanLink">Enterprise Solution</span>
                                        <span>Data Historian</span>
                                        <span>IoT Solutions</span>
                                        <span>Mobility Solution</span>
                                        <span>Visualization</span>
                                        <span id="lastSpanLink">Analytics</span>
                                    </div>

                                    <hr/>

                                    <h3 className="leftHoverBorder">Education & Research</h3>
                                    <div className="leftLinksBox">
                                        <span id="firstSpanLink">Aeronautical Engineering</span>
                                        <span>Civil Engineering</span>
                                        <span>Mechanical Engineering</span>
                                        <span>Steam & Renewable Energy</span>
                                        <span>Material Testing & Research</span>
                                        <span id="lastSpanLink">Corrosion Online</span>
                                    </div>

                                    <hr/>

                                    <h3 className="leftHoverBorder">Defense & Aerospace</h3>
                                    <div className="leftLinksBox">
                                        <span id="firstSpanLink">Test & Measurement</span>
                                        <span>Data Center Management</span>
                                        <span>COSA Embedded Systems</span>
                                        <span>Rugged Displays & Panel PC</span>
                                        <span>Motion Simulation Systems</span>
                                        <span>Single Board Computers</span>
                                        <span id="lastSpanLink">Chassis, Components & Power Supplies</span>
                                    </div>

                                    <hr/>

                                </div>
                            </Grid>


                            <Grid item xs={12} md={5}>
                                <div className="home__productsRight">
                                    <div className="home__productsRightContent">
                                        <h2 style={{ marginBottom: '40px'}}>The only place where you’ll get the perfect solution for all your industry needs.</h2>
                                        <Button variant="contained" style={{ backgroundColor: '#fdd835', color: 'white'}}><h4>Learn More</h4></Button>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>

            {/* Our Contributions */}
            <div className="home__ourContributions">
                <div className="home__ourContributionsContent">
                    <h4>Our Contributions</h4>
                    <h2>Industries We Serve!</h2>
                    <p>We help Industries to optimise with Integration of data from Shop floor to Top floor Realtime to make the timely decision.</p>
                    <div className="home__imageCards">
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <HomeImageCard
                                    image="aerospace.jpg"
                                    tag="Defence And Aerospace"
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <HomeImageCard
                                    image="oil.jpg"
                                    tag="Oil And Gas Industry"
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <HomeImageCard
                                    image="automotive1.jpg"
                                    tag="Automotive Industry"
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <HomeImageCard
                                    image="education-research.jpg"
                                    tag="Education And Research"
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <HomeImageCard
                                    image="iautomation.jpg"
                                    tag="SCADA & Analytics"
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <HomeImageCard
                                    image="industry-web.jpg"
                                    tag="IoT and Industry 4.0 Solutions"
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="home__carosel">
                        <h1>Carosel div</h1>
                        <h1>Carosel div</h1>
                        <h1>Carosel div</h1>
                    </div>
                </div>
            </div>


            {/* Bottom */}
            <div className="home__bottom">
                <div className="home__bottomOverlay">
                    <div className="home__bottomContent">
                        <Grid container spacing={10}>
                            <Grid item container spacing={3} xs={12} md={7}>
                                <Grid item xs={6} md={4}>
                                    <div className="home__bottomGrid">
                                        <h4>Products</h4>
                                        <p>Industrial Automation</p>
                                        <p>SCADA & Analytics</p>
                                        <p>Education & Research</p>
                                        <p>Defese & Aerospace</p>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <div className="home__bottomGrid">
                                        <h4>Services</h4>
                                        <p>Installation Services</p>
                                        <p>Repair & Calibration</p>
                                        <p>Turnkey Solution</p>
                                        <p>Project Maping</p>
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <div className="home__bottomGrid">
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
                                <div className="home__bottomForm">
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

export default Home
