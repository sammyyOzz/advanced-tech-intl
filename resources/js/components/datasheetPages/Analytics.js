import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import ProductBackImage from '../ProductBackImage'
import './DatasheetAnalytics.css'

function Analytics() {
    return (
        <div className="analytics">
            <div className="analytics__top">
                <ProductBackImage title="ANALYTICS" />
            </div>

            <div className="analytics__content">
                <div className="analytics__section">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__mainImg">
                                <img src={require('../../images/scada&analytics/ArchitectureDiagram_manufacturing-1024x723.png')} alt=""/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__subImg">
                                <img src={require('../../images/scada&analytics/Energy-AnalytiX-1024x136.png')} alt=""/>
                                <p className="analytics__text">Energy AnalytiX® is an energy monitoring, analysis, and management system that delivers rich, real-time visualization, providing open universal data connectivity and data integration to a wide variety of BMS, SCADA, ERP, and control systems. Managers of any building or plant can utilize this revolutionary smart energy software solution that is intuitive to configure, customize, and operate. Energy AnalytiX includes built-in calculations, analytics, a data historian, reporting, and the visualization needed to take decisive action in order to reduce and manage utility costs and consumption</p>
                            </div>
                        </Grid>
                    </Grid>

                    <div className="analytics__button">
                        <Link to='/pdfs/scada&analytics/GENESIS64.pdf' target="_blank" download>
                            <button className="cardBtn">Datasheet</button>
                        </Link>
                    </div>
                </div>

                <div className="analytics__section">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__subImg">
                                <img src={require('../../images/scada&analytics/Facility-AnalytiX-1024x135.png')} alt=""/>
                                <p className="analytics__text">Facility AnalytiX® is a complete, ongoing commissioning software solution based on ICONICS’ advanced Fault Detection and Diagnostics (FDD) technology, which significantly reduces costs and improves operational efficiency. Facility AnalytiX incorporates user customizable fault rules to report faults and failures. It also weighs the probability of equipment failure and advises personnel of immediate preventative actions that can be taken, improving safety, and optimizing energy savings.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__mainImg">
                                <img src={require('../../images/scada&analytics/FacilityAnalytiXscreens-1024x510.png')} alt=""/>
                            </div>
                        </Grid>
                    </Grid>

                    <div className="analytics__button">
                        <Link to='/pdfs/scada&analytics/Facility-AnalytiX.pdf' target="_blank" download>
                            <button className="cardBtn">Datasheet</button>
                        </Link>
                    </div>
                </div>

                <div className="analytics__section">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__mainImg">
                                <img src={require('../../images/scada&analytics/QualityAnalytiXscreens-1024x506.png')} alt=""/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__subImg">
                                <img src={require('../../images/scada&analytics/Quality-AnalytiX-1024x131.png')} alt=""/>
                                <p className="analytics__text">Quality AnalytiX® enables operators, quality personnel, manufacturing engineers, and management to view quality SPC data and other production parameters impacting product quality. Users can apply any of the extensive set of built-in SPC calculations to any process variable and integrate SPC data into expressions and logic to drive corrective actions based on process trends. Quality AnalytiX leverages ICONICS Hyper Historian™ technology for data collection and calculations. The architecture supports large enterprise-wide SPC quality programs as well as applications requiring rapid sample rates</p>
                            </div>
                        </Grid>
                    </Grid>

                    <div className="analytics__button">
                        <Link to='/pdfs/scada&analytics/Quality_AnalytiX.pdf' target="_blank" download>
                            <button className="cardBtn">Datasheet</button>
                        </Link>
                    </div>
                </div>

                <div className="analytics__section">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__subImg">
                                <img src={require('../../images/scada&analytics/AlarmWorX64-1024x117.png')} alt=""/>
                                <p className="analytics__text">Alarm management systems are utilized in process industries to notify plant personnel of abnormal conditions, events or equipment malfunctions of a particular process or line. An alarm is a visible or audible notification of an abnormal event or situation. Successful organizations require intelligent management of alarms, so as to prevent alarm flood (too many alarm notifications to which to successfully respond), but also ensure proper response to those alarms deemed critical to an organization’s operations.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__mainImg">
                                <img src={require('../../images/scada&analytics/AlarmWorX.png')} alt=""/>
                            </div>
                        </Grid>
                    </Grid>

                    <div className="analytics__button">
                        <Link to='/pdfs/scada&analytics/Alarm-Analytics.pdf' target="_blank" download>
                            <button className="cardBtn">Datasheet</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="analytics__footer">
                <Footer />
            </div>

        </div>
    )
}

export default Analytics
