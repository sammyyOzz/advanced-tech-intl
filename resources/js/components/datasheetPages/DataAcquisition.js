import React from 'react'
import './Datasheet.css'
import DataCard from './DataCard'
import Grid from '@material-ui/core/Grid'
import RemoveIcon from '@material-ui/icons/Remove';


function DataAcquisition() {
    return (
        <div className="datasheet">
            <div className="datasheet__carousel">
                <h1>Carousel</h1>
                <h1>Carousel</h1>
                <h1>Carousel</h1>
                <h1>Carousel</h1>
                <h1>Carousel</h1>
            </div>

            <div className="datasheet__content">
                <p><RemoveIcon id="dash" /><span>Data Acquisition System</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="data-acquisition/Flexedge.jpg"
                                title="Rugged Data Acquisition with I/O"
                                text="Rugged DAS including ethernet, USB, serial ports and optional Wi-Fi make communication simple Built-in data, event, and security, Point and click cloud connectivity. Advanced web server provides remote visualization and control, reducing costly site visits."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="data-acquisition/data-station.png"
                                title="Data Acquisition with Multi Protocol"
                                text="Data station system including SD card slot for data logging and database upload / download. Communicate with over 300 protocols easily convert between serial, and Ethernet devices manage multi-vendor environments."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="data-acquisition/Modular-Controller.jpg"
                                title="Multi-zone PID Control with Web Server"
                                text="Data acquisition, single-node system, hot-swap design, DIN-rail mounted, data logging, faster data transfer and downloading with an integral USB port. Dedicated PID modules, analog and digital I/O module."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <p><RemoveIcon id="dash" /><span>PLC & IO System</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <DataCard
                                image="data-acquisition/PAC-System-1024x663-1.jpg"
                                title="Distributed PAC Systems"
                                text="Super compact multi function programmable controller, on board I/O, expansion ca0.3+
                                pabilities. Programmable according to IEC61131-3 standard, ARM Cortex M7 32 bit, 216 MHz processor. Removable spring clamps."
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DataCard
                                image="data-acquisition/Expansion-I-O-Module.jpg"
                                title="Expansion I/O Module"
                                text="Stand alone modules for effective distributed automation. Ethernet port and USB port available. RS485 communication port with modbus RTU protocol. Easy wiring with built-in terminal blocks, DIN rail mounting models."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <p><RemoveIcon id="dash" /><span>HMI Display</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <DataCard
                                image="data-acquisition/Graphite-200w-update.gif"
                                title="Rugged HMI with IO"
                                text="HMI touchscreens to combine all-aluminum construction with an I/O Module architecture. HMI with drag-and-drop protocol conversion, data logging and web-based monitoring and control. Built in web server and real time data logging."
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DataCard
                                image="data-acquisition/CR-HMI.gif"
                                title="Industrial HMI"
                                text="Full-color HMI touchscreen, Industry-leading protocol conversion, Suitable to industrial environment. Ethernet, USB and serial ports make communication simple, Built in data logging enhances troubleshooting system"
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <p><RemoveIcon id="dash" /><span>RTU & Signal Conditioner</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <DataCard
                                image="data-acquisition/sixnet.jpg"
                                title="RTU with on Board Input Output"
                                text="Industrial PowerPC, Operating system embedded open-source Linux, Dynamic memory 32 Mb for program execution, dynamic variables, dynamic file system, etc. IEC 61131 programming, ISaGRAF for ladder logic, SFC, flow charting and more."
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DataCard
                                image="data-acquisition/Signal-con.gif"
                                title="Signal Conditioners"
                                text="Signal conditioning products for frequency, temperature and process applications. Our signal conditioning solutions range from dedicated to universal models capable of accepting over 100 inputs"
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

            </div>

        </div>
    )
}

export default DataAcquisition
