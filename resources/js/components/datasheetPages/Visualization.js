import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import ProductBackImage from '../ProductBackImage'
import './DatasheetAnalytics.css'

function Visualization() {
    return (
        <div className="analytics">
            <div className="analytics__top">
                <ProductBackImage title="VISUALIZATION" />
            </div>

            <div className="analytics__content">
                <div className="analytics__section">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__mainImg">
                                <img src={require('../../images/scada&analytics/Genesis64screens-1024x764.png')} alt=""/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__subImg">
                                <img src={require('../../images/scada&analytics/GENESIS64-1024x147.png')} alt=""/>
                                <p className="analytics__text">GENESIS64™ is an advanced HMI/SCADA solution suite designed for Microsoft operating systems. ICONICS GENESIS64 suite delivers unparalleled performance with OPC, BACnet, Modbus, and open standard database connectivity. The GENESIS64 suite provides connectivity from plant floor and building facilities to corporate business systems. Designed to leverage 64-bit and OPC UA technologies, GENESIS64 allows operators, executives, and IT professionals to integrate real-time manufacturing, energy, and business information into a secure and unified web-enabled visualization dashboard.</p>
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
                                <img src={require('../../images/scada&analytics/Genesis32-1024x386.png')} alt=""/>
                                <p className="analytics__text">GENESIS32™ is the industry’s most reliable 32-bit suite of OPC, SNMP, BACnet, and web-enabled HMI and SCADA applications. GENESIS32 has been deployed in countless applications across a variety of industries, designed with Microsoft Windows operating systems, providing reliable integration with the most popular communication infrastructures. GENESIS32 continues to deliver unparalleled dependability, performance, and implementation efficiency.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__mainImg">
                                <img src={require('../../images/scada&analytics/Genesis32screen-1024x905.png')} alt=""/>
                            </div>
                        </Grid>
                    </Grid>

                    <div className="analytics__button">
                        <Link to='/pdfs/scada&analytics/GENESIS32.pdf' target="_blank" download>
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

export default Visualization
