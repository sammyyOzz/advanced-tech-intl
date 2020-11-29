import React from 'react'
import './Datasheet.css'
import DataCard from './DataCard'
import Grid from '@material-ui/core/Grid'
import RemoveIcon from '@material-ui/icons/Remove';

function SensingMeasuring() {
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
                <p><RemoveIcon id="dash" /><span>Industrial Flow Meter</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="sensing-measuring/Turbibe-Meter.png"
                                title="Turbine Flow Meter"
                                text="Flow meters are used in a wide variety of applications like automotive and aerospace test stands; subsea control systems, feedback and control systems on aero derivative turbine generators, as well as general purpose industrial flow measurements."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="sensing-measuring/PD-Meter.png"
                                title="Positive Displacement Meter"
                                text="Positive displacement flow meters (PD Meter) are ideal for a wide variety of liquid flow applications. These flow meters are both highly accurate and easily adaptable to most industrial applications."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="sensing-measuring/mag-meter-img-1.png"
                                title="Electromagnetic Flow Meter"
                                text="Electromagnetic flow meters represent the accurate measurement in water cycle and process applications. This meter incorporates improvements to the magnetic distribution elements that allow accurate operation throughout all flow regimes, allowing up to a 1000:1 turn down."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <p><RemoveIcon id="dash" /><span>Humidity & Temperature Transmitter</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="sensing-measuring/H1.jpg"
                                title="Humidity Transmitter"
                                text="Humidity Transmitter uses a high accuracy capacitive sensor integrated in a silicon microchip. The sensor is very durable and moisture resistant. The sensor can be easily replaced without the need for re-calibration."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="sensing-measuring/ztt15.jpg"
                                title="Head Mount Temp. Transmitter"
                                text="The Transmitter is commonly used temperature sensor, slide wire transducer or millivolt signal and coverts the output to the industry standard 4 to 20 mA transmission signal."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="sensing-measuring/ztt50.jpg"
                                title="DIN Rail Mount Temp. Transmitter"
                                text="SMART, programmable, programmable with software and USB interface, interface and instrument supplied by USB port, input and output isolated from each other."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>
            </div>
        </div>
    )
}

export default SensingMeasuring
