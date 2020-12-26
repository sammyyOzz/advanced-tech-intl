import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import ProductBackImage from '../ProductBackImage'
import './DatasheetAnalytics.css'

function DataHistorian() {
    return (
        <div className="analytics">
            <div className="analytics__top">
                <ProductBackImage title="DATA HISTORIAN" />
            </div>

            <div className="analytics__content">
                <div className="analytics__section">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__mainImg">
                                <img src={require('../../images/scada&analytics/HyperHistorianscreens-1024x506.png')} alt=""/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__subImg">
                                <img src={require('../../images/scada&analytics/Hyper-Historian-1024x131.png')} alt=""/>
                                <p className="analytics__text">ICONICS’ Hyper Historian™ is an advanced 64-bit high-speed, reliable, and robust historian. Designed for the most mission-critical applications, Hyper Historian’s advanced high compression algorithm delivers unparalleled performance with very efficient use of resources. Hyper Historian integrates with the latest big data technologies, including Azure SQL, Microsoft Data Lakes, Kafka, and Hadoop. This makes Hyper Historian the most efficient and secure real-time plant historian for any Microsoft operating system.</p>
                            </div>
                        </Grid>
                    </Grid>

                    <div className="analytics__button">
                        <Link to='/pdfs/scada&analytics/Hyper-Historian.pdf' target="_blank" download>
                            <button className="cardBtn">Datasheet</button>
                        </Link>
                    </div>
                </div>

                <div className="analytics__section">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__subImg">
                                <h4>How it Works</h4>
                                <p className="analytics__text">Using a data historian provides organizations with the ability to benefit and learn from their accumulated information. Modern data historians need to be able to capture a vast amount of data at high speeds and also recall that same data with the same quickness for comparisons to real-time or more recent data, using integrated trending and reporting tools. Integrating systems with a rapid, robust data historian can be also benefit other connected applications including those involving quality analysis/SPC.</p>

                                <ul className="analytics__list">
                                    <li>Integrate performance calculations.</li>
                                    <li>Archive data from unattended operations</li>
                                    <li>Replay real-time and historical data</li>
                                    <li>Customize trends and charts Store and forward critical data</li>
                                    <li>Trace diagnostic data with event logs</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__mainImg">
                                <img src={require('../../images/scada&analytics/HyperHistorian_Architecture.png')} alt=""/>
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div className="analytics__section">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__subImg">
                                <h4>Remote Collector</h4>
                                <p className="analytics__text"
                                    style={{ marginBottom: '50px' }}>
                                    Architected as a distributed, enterprise-wide historian, Hyper Historian utilizes remote collectors, which allow for historical data collection from dispersed locations. Remote collectors ascribe by ICONICS’ universal connectivity capability, including integration with OPC-UA, BACnet, and SNMP protocols.
                                </p>

                                <h4>Data Merging</h4>
                                <p className="analytics__text">Hyper Historian includes a module for automatic or manual insertion of data, empowering users to import historical or log data from databases, other historians, or intermittently connected field devices and equipment. This also provides for greatly increased reliability in capturing all data, even when network disruptions occur.</p>


                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} />
                    </Grid>
                </div>
            </div>

            <div className="analytics__footer">
                <Footer />
            </div>

        </div>
    )
}

export default DataHistorian
