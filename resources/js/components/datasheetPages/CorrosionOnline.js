import React from 'react'
import './Datasheet.css'
import DataCard from './DataCard'
import Grid from '@material-ui/core/Grid'
import RemoveIcon from '@material-ui/icons/Remove';
import ProductBackImage from '../ProductBackImage';
import Footer from '../Footer';

function CorrosionOnline() {
    return (
        <div className="datasheet">
            <div className="datasheet__carousel">
                <ProductBackImage title="CORROSION ONLINE" />
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
            </div>

            <div className="datasheet__footer">
                <Footer />
            </div>

        </div>
    )
}

export default CorrosionOnline
