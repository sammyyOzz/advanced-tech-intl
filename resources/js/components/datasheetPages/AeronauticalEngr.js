import React from 'react'
import './Datasheet.css'
import DataCard from './DataCard'
import Grid from '@material-ui/core/Grid'
import RemoveIcon from '@material-ui/icons/Remove';

function AeronauticalEngr() {
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
                <p><RemoveIcon id="dash" /><span>Propulsion Systems</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="aeronautical/MiniLab_SR30.jpg"
                                title="Minilab"
                                text="MiniLab™ is a self-contained SR30 turbojet engine, offers exciting teaching opportunities in applied thermodynamics and jet propulsion. A DAQ system displays and records compressor inlet temperature and pressure, turbine inlet temperature and pressure, turbine exit temperature and pressure, thrust and fuel flow."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="aeronautical/TurboGen.jpg"
                                title="Turbogen"
                                text="The primary component of TurboGen™ is a self-contained turbo shaft engine. A complete micro turbine genset to consist of an engine/generator combination designed and manufactured specifically for engineering education. The engines mechanically-free power turbine drives an electric generator."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="aeronautical/Sprayview-lab.jpg"
                                title="Sprayview"
                                text="SprayView™ is an optional fuel spray testing system for the SR-30™ Gas Turbine Engine manufactured by Turbine Technologies, Ltd. It has been designed with a built-in engine spray manifold to allow MiniLab™ operators the ability to test the atomization characteristics of fuels before they are burned in the engine."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="aeronautical/Airflow-System.jpg"
                                title="Airflow System"
                                text="The Airflow System has been specifically designed to allow students to investigate a wide range of and low speed air flow phenomena and fundamental aerodynamics."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="aeronautical/BERNOULLI_S-EQUATION.jpg"
                                title="Bernoulli's Equation"
                                text="The Optional Bernoulli’s Equation investigation duct has been designed for operation with the Airflow System."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="aeronautical/ROUND-TURBULENT-JET-INVESTIGATION.jpg"
                                title="Round Turbulent Jet Investigation"
                                text="The Optional Round Turbulent Jet Investigation components have been designed for operation with the Airflow System."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <DataCard
                                image="aeronautical/PRINCIPLES-of-AIRFLOW-FRICTION-LOSSES-in-BENDS-and-PIPE-ELEMENTS.jpg"
                                title="Principles of Airflow, Friction Losses in Bends and Pipe Elements"
                                text="The Optional Principles of Airflow, Friction Losses in Bends and Pipe Elements components have been designed for operation with the Airflow System."
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DataCard
                                image="aeronautical/JET-PROPULSION-TEST-STAND.jpg"
                                title="Jet Propulsion Test Stand"
                                text="The ramjet, the simplest concept of aircraft propulsion, consists of an almost cylindrical duct, open at both ends. It relies on its forward speed to ram air into the forward opening. Fuel is burnt inside the duct to accelerate the air stream, which together with the products of combustion, issues from the rear as a high velocity jet. The change in momentum in the engine provides the propulsive force."
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default AeronauticalEngr
