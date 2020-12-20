import React from 'react'
import './Datasheet.css'
import DataCard from './DataCard'
import Grid from '@material-ui/core/Grid'
import RemoveIcon from '@material-ui/icons/Remove';
import ProductBackImage from '../ProductBackImage';
import Footer from '../Footer';

function IndicatorController() {
    return (
        <div className="datasheet">
            <div className="datasheet__carousel">
                <ProductBackImage title="INDICATOR & CONTROLLER" />
            </div>

            <div className="datasheet__content">
                <p><RemoveIcon id="dash" /><span>Material Testing Products</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="indicator-controller/Process-Indicator-1.jpg"
                                title="Universal Process Indicator"
                                text="Process indicator available with various feature and sizes. Digital indicator with single universal input and up to 3 outputs, 5 digit configurable display. Green or red color LED and RS485 communication. DIN Rail or Panel mount type."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="indicator-controller/Panel-meter.png"
                                title="Panel Meters"
                                text="Digital or analog panel meters comes with add or change capabilities with plug and play, field install able cards. Display, count, rate, time, voltage, current process, strain gauge and temperature input type. Front panel IP 65 protection."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="indicator-controller/Visual-Management.jpg"
                                title="Visual Management"
                                text="Productivity Station lets you create your own sophisticated production scoreboard using standard, consumer-grade LCD, LED or plasma TVs. Built-in communications drivers and protocol conversion let you interface to most PLCs, drives etc."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <p><RemoveIcon id="dash" /><span>PID Controller​</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="indicator-controller/PID-Controller.jpg"
                                title="PID and Profile Controller"
                                text="PID or Profile controller available with various sizes and types. Universal programmable input types, up to 3 configurable alarm and digit output and 4 digit display. Panel mount and DIN rail mount type controller."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="indicator-controller/New-controller.jpg"
                                title="Multi Loop/Multi function Controller"
                                text="Multi loop controller with 3 installation modes: compact, split, remote. Specific “function block” library dedicated to graphic pages, Process data logger by means of web server connectivity. Additional expandable modules."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="indicator-controller/Dual-loop.jpg"
                                title="Process Controller"
                                text="Process controller features including universal inputs 1/16, 1/8 and 1/4 DIN models, as well as one of the largest dual line displays in the industry. On demand auto tuning, two control outputs for reverse or direct application and easy setup with software."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <p><RemoveIcon id="dash" /><span>Industrial Controller</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="indicator-controller/Batch-controlle.jpg"
                                title="Batch Controller"
                                text="Dual loop controller suitable for industrial batch and heat treatment ovens. 16 programs and 256 segment programmer, up to 4 configurable alarm, auto tunning with natural frequency. Multi function on/off, PID, auto/man station and other functions."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="indicator-controller/Din-rail-controller.jpg"
                                title="DIN Rail Controller"
                                text="DIN rail mount controller with futures of common bus for power supply and serial communication. Totally withdraw-able, easy replacement without switching of the power supply. Used for multi-loop data acquisition and process control."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="indicator-controller/Refrige-controller.jpg"
                                title="Thermostat / Refrigeration Controller"
                                text="Digital thermostat refrigeration controller with 3 input and up to 3 relay outputs. Defrosting function, mechanical keyboard. Front panel IP 65 protection with suitable operating temperature. Standard model available for refrigeration application."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>
            </div>

            <div className="datasheet__footer">
                <Footer />
            </div>

        </div>
    )
}

export default IndicatorController
