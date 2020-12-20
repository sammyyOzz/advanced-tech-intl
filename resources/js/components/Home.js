import React from 'react'
import './Home.css'
import HomeTopCard from './HomeTopCard'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import HomeImageCard from './HomeImageCard';
import BottomWithForm from './BottomWithForm';
import ReactWhatsapp from 'react-whatsapp';
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory()

    return (
        <div className="home">
            <div className="home__top">
                <div className="home__overlay">
                    <div className="home__topContent">

                    {/* <ReactWhatsapp number="1-212-736-5000" message="Hello World!!!" /> */}
                        {/* <div className="home__topButton">
                            <h4>We are providing the most reliable and trendy solution you are looking for</h4>
                        </div> */}

                        <div className="home__cards">
                            <Grid container spacing={5}>
                                <Grid item xs={12} md={4}>
                                    <HomeTopCard
                                        caption="AUTOMATE"
                                        text="Try out our world-class automation products"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <HomeTopCard
                                        mobileHide
                                        caption="EDUCATE"
                                        text="We have wide range of education research products"
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <HomeTopCard
                                        mobileHide
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
                            <div className="home__mobileContainer">
                                <div className="homeTopCardMobile">
                                    <Grid container direction="column" spacing={2}>
                                        <Grid item xs={12}>
                                            <HomeTopCard
                                                caption="EDUCATE"
                                                text="We have wide range of education research products"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <HomeTopCard
                                                caption="INNOVATIVE"
                                                text="we are representing worlds' leading research products"
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                            <h3>About Us</h3>
                            <h2>25 Long Years Of Service Excellence With Quality At It's Best!</h2>
                            <p style={{ marginBottom: '30px' }}>We are the authorised exclusive Distributors of World’s leading Companies. We reach out all our Customers with Strong Sales and Marketing Teams. We have been Extremely Successful as we with our trained technical teams providing right solutions and installation and support locally.</p>
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

                                    <h3 onClick={() => {history.push('/products/industrial-automation')}}
                                    className="leftHoverBorder">Industrial Automation</h3>
                                    <div className="leftLinksBox">
                                        <span onClick={() => {history.push('/products/industrial-automation/universal-testing-solutions')}}
                                            id="firstSpanLink">
                                            Material Testing
                                        </span>
                                        <span onClick={() => {history.push('/products/industrial-automation/universal-testing-solutions')}}>
                                            Fork Testing
                                        </span>
                                        <span onClick={() => {history.push('/products/industrial-automation/universal-testing-solutions')}}>
                                            Torque Testing
                                        </span>
                                        <span onClick={() => {history.push('/products/industrial-automation/primary-flow-calibrator')}}>
                                            Primary Flow Calibrator</span>
                                        <span onClick={() => {history.push('/products/industrial-automation/networking-enterprise-solution')}}>
                                            Networking & Enterprise Solution</span>
                                        <span onClick={() => {history.push('/products/industrial-automation/sensing-and-measuring-instruments')}}>
                                            Sensing and Measuting Instruments</span>
                                        <span onClick={() => {history.push('/products/industrial-automation/indicator-controller')}}>
                                            Indicator & Controller</span>
                                        <span onClick={() => {history.push('/products/industrial-automation/data-acquisition-and-control-system')}}>
                                            Date Acquisition and Control System</span>
                                        <span onClick={() => {history.push('/products/industrial-automation/environmental-monitoring')}}
                                         id="lastSpanLink">
                                            Environmental Monitoring
                                        </span>
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

                                    <h3 onClick={() => {history.push('/products/education-research')}}
                                        className="leftHoverBorder">
                                            Education & Research
                                    </h3>
                                    <div className="leftLinksBox">
                                        <span onClick={() => {history.push('/products/education-research/aeronautical-engineering')}}
                                            id="firstSpanLink">
                                            Aeronautical Engineering
                                        </span>
                                        <span onClick={() => {history.push('/products/education-research/civil-engineering')}}>
                                            Civil Engineering
                                        </span>
                                        <span onClick={() => {history.push('/products/education-research/mechanical-engineering')}}>
                                            Mechanical Engineering
                                        </span>
                                        <span onClick={() => {history.push('/products/education-research/steam-renewable-energy')}}>
                                            Steam & Renewable Energy
                                        </span>
                                        <span onClick={() => {history.push('/products/education-research/material-testing-research')}}>
                                            Material Testing & Research
                                        </span>
                                        <span onClick={() => {history.push('/products/education-research/corrosion-online')}}
                                            id="lastSpanLink">
                                                Corrosion Online
                                        </span>
                                    </div>

                                    <hr/>

                                    <h3 onClick={() => {history.push('/products/defense-aerospace')}}
                                        className="leftHoverBorder">
                                            Defense & Aerospace
                                    </h3>
                                    <div className="leftLinksBox">
                                        <span onClick={() => {history.push('/products/defense-aerospace/test-measurement')}}
                                            id="firstSpanLink">
                                                Test & Measurement
                                        </span>
                                        <span onClick={() => {history.push('/products/defense-aerospace/data-center-management')}}>
                                            Data Center Management
                                        </span>
                                        <span onClick={() => {history.push('/products/defense-aerospace/cosa-embedded-systems')}}>
                                            COSA Embedded Systems
                                        </span>
                                        <span onClick={() => {history.push('/products/defense-aerospace/rugged-displays-panel-pc')}}>
                                            Rugged Displays & Panel PC
                                        </span>
                                        <span onClick={() => {history.push('/products/defense-aerospace/motion-simulation-systems')}}>
                                            Motion Simulation Systems
                                        </span>
                                        <span onClick={() => {history.push('/products/defense-aerospace/single-board-computers')}}>
                                            Single Board Computers
                                        </span>
                                        <span onClick={() => {history.push('/products/defense-aerospace/chassis-components-power-supplies')}}
                                            id="lastSpanLink">
                                                Chassis, Components & Power Supplies
                                        </span>
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
            <BottomWithForm />

        </div>

    )
}

export default Home
