import React from 'react'
import './Datasheet.css'
import DataCard from './DataCard'
import Grid from '@material-ui/core/Grid'
import RemoveIcon from '@material-ui/icons/Remove';

function PrimaryFlow() {
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
                <p><RemoveIcon id="dash" /><span>Flow Calibrator</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <DataCard
                                image="primary-flow/liquied-calibrator.png"
                                title="Liquid Primary Flow Calibrator"
                                text="Liquid primary flow calibrator used for Coriolis, Turbine, Orifice, PD, Variable Area, Venturi, and Vortex and all types flow meter and generate NIST traceable calibration. PC-based user interface automatically merges data, performs calculations, saves data, displays data and prints data sheets."
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DataCard
                                image="primary-flow/gas-calibrat.png"
                                title="Gas Primary Flow Calibrator"
                                text="Calibrates all principal types of flow meters turbine, variable area and thermal flow meters and generate NIST traceable calibration. Automatic data acquisition through PC and interface. Displays, prints and analyzes data in desired units of measure. Automatic level compensation for liquid seal volume."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>
            </div>
        </div>
    )
}

export default PrimaryFlow
