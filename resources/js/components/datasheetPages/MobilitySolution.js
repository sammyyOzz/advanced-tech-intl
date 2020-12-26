import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import ProductBackImage from '../ProductBackImage'
import './DatasheetAnalytics.css'

function MobilitySolution() {
    return (
        <div className="analytics">
            <div className="analytics__top">
                <ProductBackImage title="MOBILITY SOLUTION" />
            </div>

            <div className="analytics__content">
                <div className="analytics__section">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__mainImg">
                                <img src={require('../../images/scada&analytics/MobileHMIscreens-1024x768.png')} alt=""/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__subImg">
                                <img src={require('../../images/scada&analytics/MobileHMI-1024x150.png')} alt=""/>
                                <p className="analytics__text">MobileHMI is a full HMI/SCADA solution designed for use on mobile devices, such as tablets, phones, HDTVs, and other web connected devices. It leverages HTML5 technology to deliver your dashboards and displays to any glass. Easy to set up and simple to deploy, MobileHMI can bring your business data to your hand anytime, anywhere</p>
                            </div>
                        </Grid>
                    </Grid>

                    <div className="analytics__button">
                        <Link to='/pdfs/scada&analytics/MobileHMI.pdf' target="_blank" download>
                            <button className="cardBtn">Datasheet</button>
                        </Link>
                    </div>
                </div>

                <div className="analytics__section">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__subImg">
                                <h4>How It Works</h4>
                                <p className="analytics__text">The same control screens that can be configured via ICONICS GraphWorX64™ data visualization tool to be used on PCs and laptops can be customized for access via a wide variety of mobile devices, such as smartphones, tablets, and wearables. These devices can then utilize ICONICS MobileHMI™ enterprise mobile applications in order to view instant KPIs and alerts at any time, from anywhere.</p>

                                <h4>Benefits of ICONICS Data Mobility Solutions</h4>
                                <ul className="analytics__list">
                                    <li>Available on Any Mobile Device KPIWorX™ Integration</li>
                                    <li>Responsive User Interface</li>
                                    <li>Augmented Reality with Location Services</li>
                                    <li>Notifications Where and When Required</li>
                                    <li>Ready for What’s Next</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__mainImg">
                                <img src={require('../../images/scada&analytics/MobileHMI_Architecture.jpg')} alt=""/>
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className="analytics__section">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__mainImg">
                                <img src={require('../../images/scada&analytics/KPIWorX_All-Devices_2-1024x505.png')} alt=""/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__subImg">
                                <img src={require('../../images/scada&analytics/KPIWorX.png')} alt=""/>
                            
                                <p className="analytics__text">KPIWorX™ delivers a powerful visualization and analysis tool directly to executives, managers, and industry personnel. Connect all devices to KPIWorX to effortlessly manage and navigate assets with real-time data. Configure self-service dashboards that meet specific industry needs while interacting with displays in runtime. Visualize the most important performance indicators of any system or business from any desktop or mobile client and transfer dashboards seamlessly.</p>
                            </div>
                        </Grid>
                    </Grid>

                </div>
            </div>

            <div className="analytics__footer">
                <Footer />
            </div>

        </div>
    )
}

export default MobilitySolution
