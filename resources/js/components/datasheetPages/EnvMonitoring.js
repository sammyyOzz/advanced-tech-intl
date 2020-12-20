import React from 'react'
import './Datasheet.css'
import DataCard from './DataCard'
import Grid from '@material-ui/core/Grid'
import RemoveIcon from '@material-ui/icons/Remove';
import ProductBackImage from '../ProductBackImage';
import Footer from '../Footer';

function EnvMonitoring() {
    return (
        <div className="datasheet">
            <div className="datasheet__carousel">
                <ProductBackImage title="ENVIRONMENTAL MONITORING" />
            </div>

            <div className="datasheet__content">
                <p><RemoveIcon id="dash" /><span>Radon Monitor & Accessories</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="environmental-monitoring/Radon-Monitor_RAD7-1.jpg"
                                title="Radon/Thoron Monitor"
                                text="RAD7 is a truly versatile radon and thoron detector used by research scientists and professionals worldwideThe RAD7 is a Sniffer that detects the 3-minute alpha decay of a radon daughter, without interference from other radiations."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="environmental-monitoring/RAD-H2O-Kit.jpg"
                                title="RAD H2O/Radon In Water Accessory Kit"
                                text="The RAD H2O is an accessory for the RAD7 that enables you to measure radon in water over a concentration range of from less than 10 pCi/L to greater than 400,000 pCi/L. The RAD H2O gives results after 30 minutes analysis with a sensitivity that matches or exceeds that of liquid scintillation methods."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="environmental-monitoring/Soil-Probes.jpg"
                                title="RAD7-SOIL GAS PROBES"
                                text="We offer two heavy-duty soil probes for Radon/Thoron from underground measurement purpose: the Hardened Steel Soil Gas Probe, and the AMS Stainless Steel Soil Gas Probe. When measuring radon underground, it is essential to collect samples without exposing them to the outside air."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="environmental-monitoring/RAD-AQUA.png"
                                title="RAD AQUA/Continuous Radon in Water Accessory"
                                text="The RAD AQUA is an accessory for the DURRIDGE RAD7 radon detector that is used to bring the radon concentration in a closed air loop into equilibrium with the radon concentration in a flow-through water supply."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="environmental-monitoring/Water-Probe-1536x1060-1.jpg"
                                title="WATER PROBE"
                                text="The DURRIDGE Water Probe is used to collect radon samples from large bodies of water. The probe consists of a semi-permeable membrane tube mounted on an open wire frame. The tube is placed in a closed loop with the RAD7."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="environmental-monitoring/CAPTURE-Softwae.png"
                                title="CAPTURE/Data Acquisition and Analysis Software"
                                text="DURRIDGE’s free CAPTURE software for Macintoshand Windows provides the ability to download radondata files from the RAD7 and issue commands to theinstrument for performing various common tasks. Achart recorder renders sophisticated real-time graphsof radon and thoron data from single or multipleRAD7s."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <DataCard
                                image="environmental-monitoring/Emission-Chamber-1536x534-1.png"
                                title="Bulk/Surface Emission Chambers"
                                text="Bulk Emission Chamberis perfect for storing samples of rock, soil, and more. Two quick-release ports make it easy to connect the Bulk Emission Chamber to the RAD7 in a closed loop for continuous measurement. The chamber’s lid is attached with six thumbscrews, which can be easily loosened when the sample needs to be replaced."
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

export default EnvMonitoring
