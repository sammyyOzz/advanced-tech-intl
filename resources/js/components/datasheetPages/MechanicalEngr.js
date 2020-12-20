import React from 'react'
import './Datasheet.css'
import DataCard from './DataCard'
import Grid from '@material-ui/core/Grid'
import RemoveIcon from '@material-ui/icons/Remove';
import ProductBackImage from '../ProductBackImage';
import Footer from '../Footer';

function MechanicalEngr() {
    return (
        <div className="datasheet">
            <div className="datasheet__carousel">
                <ProductBackImage title="MECHANICAL ENGINEERING" />
            </div>

            <div className="datasheet__content">
                <p><RemoveIcon id="dash" /><span>Refrigeration & Air Conditioning</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="mechanical/AIR-CONDITIONING-LABORATORY-UNIT.jpg"
                                title="Air Conditioning Laboratory Unit"
                                text="A complete, upgradeable, instrumented air conditioning laboratory unit mounted on a steel frame and castor wheels. upgrades may be added at any stage in the unit’s long life to spread the investment costs. available upgrades options: 1. re-circulation, 2. computer linking (with software), 3. pid control and environmental chamber."
                                file="mechanical/AIR-CONDITIONING-LABORATORY-UNIT.pdf"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="mechanical/REFRIGERATION-CYCLE-DEMONSTRATION-UNIT.jpg"
                                title="Refrigeration Cycle Demonstration Unit"
                                text="A bench mounted vapour compression refrigeration cycle demonstration unit using a hermetic compressor. the water cooled flooded glass condenser and evaporator allows both evaporation and condensation to be observed and understood. the unit operates on low-pressure non-toxic ozone friendly refrigerant. internal electrical and mechanical safety devices allow for unsupervised operation by students."
                                file="mechanical/REFRIGERATION-CYCLE-DEMONSTRATION-UNIT.pdf"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="mechanical/VORTEX-TUBE-REFRIGERATOR.jpg"
                                title="Vortex Tube Refrigerator"
                                text="The vortex tube refrigeration unit uses a compressed gas (usually air) divided into two streams at a lower pressure. one of these streams is about 50k colder, and the other is about 50k hotter than the compressed gas supplied. it is an unusual method for producing cooling air."
                                file="mechanical/VORTEX-TUBE-REFRIGERATOR.pdf"
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="mechanical/MECHANICAL-HEAT-PUMP.jpg"
                                title="Mechanical Heat Pump"
                                text="The mechanical heat pump has been designed to allow students to obtain an overall understanding and appreciation of the performance and characteristics of a heat pump working on the vapour compression cycle and having an electrically driven compressor, and is suitable for all course levels, from vocational to undergraduate."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="mechanical/AIR-and-WATER-HEAT-PUMP.jpg"
                                title="Air and Water Heat Pump"
                                text="The vapour compression cycle is the most common form of refrigeration, transferring heat from the area being cooled to a higher temperature region. heat pumps use this effect to recover heat at a useful temperature for heating or some other process by upgrading low grade ‘free’ heat e.g. from ambient air or water."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="mechanical/VAPOUR-JET-REFRIGERATOR_HEAT-PUMP.jpg"
                                title="Vapour Jet Refrigerator/Heat Pump"
                                text="The unit may be regarded as a combined heat engine and a refrigerator/heat pump. the system powering the refrigerator/heat pump works on the well-known rankine cycle."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="mechanical/VISUAL-REFRIGERATION-TRAINING-UNIT.jpg"
                                title="Visual Refrigeration Training Unit"
                                text="This unit is designed to demonstrate the basic principles of heat transfer, the vapour compression refrigeration cycle and the function and application of different flow controls."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="mechanical/REVERSE-CYCLE-REFRIGERATION-and-AIR-CONDITIONING-UNIT.jpg"
                                title="Reverse Cycle Refrigeration And Air Conditioning Unit"
                                text="This unit allows students to explore a more sophisticated refrigeration system incorporating reverse cycle operation, air cooled and water cooled condensers, forced air and static evaporators and dual temperature operation."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="mechanical/WATER-CHILLER-TRAINER.jpg"
                                title="Water Chiller Trainer"
                                text="This unit allows students to safely explore the parameters affecting evaporating pressure without danger to the operator or equipment."
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>

            <div className="datasheet__footer">
                <Footer />
            </div>
        </div>
    )
}

export default MechanicalEngr
