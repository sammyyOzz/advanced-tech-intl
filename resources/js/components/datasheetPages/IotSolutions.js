import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import ProductBackImage from '../ProductBackImage'
import './DatasheetAnalytics.css'

function IotSolutions() {
    return (
        <div className="analytics">
            <div className="analytics__top">
                <ProductBackImage title="IOT SOLUTIONS" />
            </div>

            <div className="analytics__content">
                <div className="analytics__section">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__mainImg">
                                <img src={require('../../images/scada&analytics/IoT_diagram_10.96-1024x988.png')} alt=""/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__subImg">
                                <img src={require('../../images/scada&analytics/IoTWorX.png')} alt=""/>
                                <p className="analytics__text">IoTWorX™ combines ICONICS’ cutting-edge IoT software technology with its proven HMI/SCADA, analytics, and mobile solutions running in the cloud. ICONICS offers manufacturers and facility managers several key IoT technologies, including connectivity to assets, secure cloud communications, and built-in real-time visualization. Analytics at the edge result in minimized latency while leveraging FDD technology to significantly reduce costs and improve operational efficiency. Users can connect to virtually any automation equipment through supported industry protocols such as OPC UA, BACnet, SNMP, Modbus, web services, and classic OPC tunneling.</p>
                            </div>
                        </Grid>
                    </Grid>

                    <div className="analytics__button">
                        <Link to='/pdfs/scada&analytics/GENESIS64.pdf' target="_blank" download>
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

export default IotSolutions
