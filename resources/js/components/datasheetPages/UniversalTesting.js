import React from 'react'
import DataCard from './DataCard'
import './Datasheet.css'
import Grid from '@material-ui/core/Grid'
import RemoveIcon from '@material-ui/icons/Remove';


function UniversalTesting() {
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
                <p><RemoveIcon id="dash" /><span>Material Testing Products</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="universal-testing/Mecmesin-Twin-column-Materials-Tester-Omni-Test-25kN.png"
                                title="OmniTest: Twin-column"
                                text="A versatile and easy to use materials tester, the twin-column OmniTest is available in 10 kN, 25 kN and 50 kN capacities. Controlled by VectorPro MT, Mecmesin's newly developed materials testing software designed for use in QC and R&D laboratories."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="universal-testing/Mecmesin-Single-column-Materials-Tester-Omni-Test-5-kN.png"
                                title="OmniTest Single-column"
                                text="A versatile and easy to use materials tester, the single-column OmniTest is available in 5 kN and 7.5 kN capacities. Controlled by VectorPro MT, Mecmesin's newly developed materials testing software designed for use in QC and R&D laboratories."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="universal-testing/Mecmesin-Motorized-Low-force-Materials-Tester-MultiTest-dV.png"
                                title="MultiTest-dV: Low-force materials tester"
                                text="The MultiTest-dV configured with an Enhanced Load Sensor, VectorPro MT software and an optional extensometer, transforms this motorised force tester into a basic materials tester. This makes the MultiTest-dV the ideal choice for quality assurance checks in the QC lab and gives it the power necessary for more in-depth analysis of material properties in the R&D laboratory."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="universal-testing/product-falling-impact-dart-tester_1280.png"
                                title="MEC-FD range Falling dart impact testers"
                                text="The Mecmesin MEC-FD3 Falling Dart Impact Tester is designed to measure the impact resistance or toughness of plastic films in compliance with ASTM D1709 and ISO 7765 free-falling dart Test Methods A and B. The machine is supplied with all the relevant weights and darts required to perform the Test Methods. The sample clamp and dart drop are pneumatically-operated for optimum test reproducibility. The tester is small enough to conveniently stand on a desktop or laboratory bench."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="universal-testing/ROCKWELL-HARDNESS-TSTER-FUTURE-TECH-1-193x300.jpg"
                                title="ROCKWELL TYPE HARDNESS TESTER"
                                text="This is designed for All Rockwell Scales, Regular & Superficial, and Light Load Brinell Test instantly available with the touch of a finger. Direct Loading Method with Load-Cell Feedback instead of Weights System & Direct Linear Displacement Measurement. High Speed Test Cycle and Extremely Accurate Loading Control based on Intelligent Software come true."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="universal-testing/MANUAL-MICRO-VICKERS-HARDNESS-TSTER-FUTURE-TECH-JAPAN..jpg"
                                title="MANUAL MICRO/VICKERS HARDNESS TSTER"
                                text="System with Cylindrical/ spherical offset function and the specimen thickness calculation function. Advanced color LCD touch panel operation and display color LCD touch panel/display coordinated with highly integrated PC board.Measuring procedures, conditions and data are displayed clearly. Accurate light load Brinell Testing is available as a standard function."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container spacing={8}>
                        <Grid item xs={12} md={6}>
                            <DataCard
                                image="universal-testing/Hardness-Tester-fully-automatic-300x224.png"
                                title="LOAD-CELL FULLY-AUTOMATIC VICKERS HARDNESS TESTING SYSTEM"
                                longText="Innovative elevating type head and wide test load range is adopted. Advanced intelligent system of high speed sample profiling function. Improvement of high speed, high accuracy, excellent in operability, reading efficiency and repeatability.
                                Reliable hardness test as close as human eyes and sensitivity."
                                li={[
                                    'Load-cell type loading mechanism.',
                                    'Load apply mechanism by elevating type head',
                                    'High resolution camera',
                                    'Sample surface inclination/slope correction function',
                                    'Measurement image saving function',
                                    'Large motorized XY stage',
                                    'Various measuring pattern',
                                    'Function which traces edge of sample as standard feature',
                                    'Image processing software',
                                    'Various data output format and statistical processing.'
                                ]}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DataCard
                                image="universal-testing/FULLY-AUTOMATIC-MICROVICKERS-HARDNESS-TSTER-300x190.png"
                                title="FULLY AUTOMATIC MICRO/ VICKERS HARDNESS TSTER"
                                longText="Most Advanced System with High-speed Sample Profile Memory Function. High-speed,High-accuracy,High-repeatability,Easy-operation,Improved Read Power. More Reliable for Large quantities of testing without human error."
                                li={[
                                    'A series of measurement operations : Continuous Indentation～Focusing～Reading～Data Record :Just by selecting a measurement pattern, all testing will be fully-automatic with high speed.',
                                    'Various Measurement Patterns…',
                                    'Intelligent Sample Profile Memory Function allows complicated Random measurements or Teaching Measurement along with the edge of specimen － Standard Function',
                                    'Various Patterns can meet customers’ requirements : Straight Line / Zigzag / Circle /Arc / Line Set / Random / Matrix / Teaching / etc.',
                                    'Capability of Reading unclear Indents on un-mirror surface has been improved by more advanced Data Processing Software'
                                ]}
                            />
                        </Grid>
                    </Grid>
                </div>

                <p><RemoveIcon id="dash" /><span>Metallography Testing Products</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="universal-testing/Future-Tech-Abrasive-Cutting-Machine-1-300x191.png"
                                title="Abrasive Cut-off Machine"
                                text="Automatically cuts delicate samples that can be installed in small places such as the workbench. Space saving design."
                                textList={[
                                    'Silent operation is realized by the tough machine body.',
                                    'Simple design with handleability.',
                                    'Many kinds of sample fixing jig can be used on the stage.'
                                ]}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="universal-testing/FUTURE-TECH-MOUNTING-MACHINE-1-190x300.png"
                                title="Hot Mounting Press"
                                text="Slide mould cap system is adopted. Remarkably easy cleaning. Sample can be installed and removed easily and safely."
                                textList={[
                                    'Fully automatc one cycle (pressurizing, heating and cooling).',
                                    'Space-saving desk type, light-weight compact body.',
                                    'Large size LCD touch panel and simple icon have greatly improved the operation. ',
                                    'Adjustable to set perfect conditions for moullding all kinds of resin.',
                                    'Long cylinder & utilizing space have achieved the simultaneous double mounting of sample.'
                                ]}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="universal-testing/GRINDING-POLISHING-1-1-300x191.png"
                                title="Auto Grinding & Polishing Machine"
                                text="Flush water system prevent the drain from clogging with polishing waste. This saves your time to clean up the machine."
                                textList={[
                                    'Sample holder can be quickly and easily washed by simply sliding the head to the washing tub.',
                                    'Individual pressure or central pressure can be selected. ',
                                    'Large LCD touch panel is easy to see and it has various user friendly functions.'
                                ]}
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <DataCard
                                image="universal-testing/Futuretech-4-300x191.png"
                                title="Precision Cutting Machine"
                                text="The machine automatically cuts a sensitive sample precisely. "
                                textList={[
                                    'The crystal cutting of the properties of material study. ',
                                    'The electron microscope sample cutting of the metal structure analyzing. ',
                                    'For electronic materials, ceramics, various metal sample cutting etc… ',
                                    'It is possible to control the revolution load of the cutter by load lever.'
                                ]}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DataCard
                                image="universal-testing/OMOS-Series.png"
                                title="Analytical Metallographic Inverted Microscope"
                                text="Analytical metallographic systems make perfect solutions for the microstructure of materials automatic analysis. When you image and analyze samples, you are often faced with complex and interrupted processes that can make tasks take much longer than you want them to. OMOS M series microscopes have vast experience in bringing together optical precision, automation, analytical power, and data management via the workflow-oriented system."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <p><RemoveIcon id="dash" /><span>Force Testing Products</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="universal-testing/Mecmesin-MultiTest-i-Twin-Column-Force-Tester.png"
                                title="MultiTest-i Twin-Column Force Tester"
                                text="The MultiTest-i is a versatile tensile & compression tester controlled by software running on a PC. The twin-column range can be mounted neatly on your bench-top and is ideal for product testing applications according to your own test methods. A wide range of tensile grips, bend jigs and compression fixtures make the MultiTest-i easy to use for measuring tension and compression from as little as 2 N right up to 50 kN."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="universal-testing/Mecmesin-MultiTest-i-Single-Column-Force-Tester.png"
                                title="MultiTest-i Single-Column Force Tester"
                                text="The single-column MultiTest-i is a versatile tensile and compression tester controlled by software running on a PC. The single-column range fits neatly on your bench-top and is ideal for product testing applications according to your own test methods. The single-column MultiTest-i testers are the perfect solution for measuring forces up to 5 kN (1100 lbf) on a huge variety of components made from almost any material, either during their normal operation or when being pulled/pushed until they deliberately fail or break."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="universal-testing/Mecmesin-MultiTest-dV-Motorized-Force-Tester.png"
                                title="MultiTest-dV Motorized Force Tester"
                                text="The MultiTest-dV is a versatile and easy to use stand-alone force tester.Ideal for routine quality control in a production or laboratory environment, with three models rated to 0.5 kN, 1 kN and 2.5 kN. A motorised test stand can be configured with a Digital Force Gauge for product testing or an Enhanced Load Sensor for basic materials testing."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="universal-testing/MDD-Precision-Handwheel-300x300.png"
                                title="MDD Precision Handwheel"
                                text="Manually-operated test stands are compact, portable, and can be bench-mounted for ergonomic use. Combine with any Mecmesin digital force gauge to measure tension and compression up to 1000 N."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="universal-testing/Mecmesin-Shotcrete-Penetrometer-300x300.png"
                                title="Shotcrete Penetrometer"
                                text="The Shotcrete Penetrometer is a complete portable system for testing the compressive strength of the initial curing stage of young sprayed concrete to BS EN 14488-2 (Method A). It provides accurate readings of the forces required to penetrate sprayed (shotcrete) or poured concrete. These resistive force readings are then used to convert to a compressive strength value. This accuracy—beyond the requirements of the standard—and portability make it ideal for on-site testing."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="universal-testing/Mecmesin-Automated-Friction-Peel-Tear-Tester.png"
                                title="Automated friction, peel and tear tester"
                                text="The FPT is a comprehensive, multi-purpose test system for measuring Friction, Peel and Tear characteristics. Controlled by software running on a PC, it is accurate, easy to use and optimised for measuring loads up to 100 N. Ideally suited for measuring the coefficient of friction of plastic films, printed carton or paper with added versatility for peel testing of adhesives and tear strength of packaging substrates."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <p><RemoveIcon id="dash" /><span>Torque Testing Products</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="universal-testing/Mecmesin-Precision-automated-Torque-Tester-Helixa-i-300x300.png"
                                title="Precision Automated Torque Tester: Helixa-i"
                                text="The Helixa-i is a precision torque tester controlled by software running on a PC. Designed for precision torque applications where torque forces may be very small and accuracy is the priority. With a wide range of precision fixtures, the Helixa-i is easy to use and optimized for measuring torque from 1 mN.m to 6 N.m."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="universal-testing/Mecmesin-Automated-Computerized-Torque-TesterVortex-i--300x300.png"
                                title="Automated Computerized Torque Tester: Vortex-i"
                                text="The Vortex-i is a top of the range torque tester controlled by software running on a PC. Accurate, easy to use and optimized for measuring static torque up to 10 N.m.The ultimate flexible solution for automated torque testing of a wide range of closures and components. A sturdy twin-column test frame capable of applying torque up to 10 N.m (90 lbf.in). Tall and wide enough to accept a variety of test specimens yet compact to use as a bench-top tester."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="universal-testing/Mecmesin-Motorized-Torque-Tester-Vortex-dV.png"
                                title="Motorized Torque Tester: Vortex-dV"
                                text="The Vortex-dV is a versatile, robust, stand-alone torque tester, rated to 10 N.m. Easy to use, it is suited for routine quality control checks in a production or lab environment.Configure this motor-driven stand with a torque sensor connected to a display unit, a choice of gripping fixtures, and optional software. Specimens up to 440mm tall and 280mm wide can easily be tested in both clockwise and counter-clockwise directions."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="universal-testing/Mecmesin-Digital-Manual-Cap-torque-Tester-Tornada-300x300.png"
                                title="Digital Manual Cap torque Tester: Tornado"
                                text="The Tornado digital torque tester is ideally suited for the testing of application and removal torque on caps and closures. Manually operated, the Tornado range has 4 models with capacities ranging from 1.5 - 10 N.m to cover almost all closures types and sizes. Its ability to detect initial bridge torque and peak torque make it the instrument of choice for testing closures with tamper-evident seals."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="universal-testing/Cork-extraction-tester-300x300.png"
                                title="Cork Extraction Tester: CombiCork"
                                text="The CombiCork is a purpose-built tester to reliably and objectively measure the release torque (and optionally the pull-out force) when extracting a cork from a sparkling wine or spirits bottle. Its innovative bottle clamping design makes it quick and easy to carry out batch testing of champagne or capsulated (‘bar-top’) corks fitted to bottles ranging in size from 25cl to Magnum."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="universal-testing/Torque-wrench-calibrator.png"
                                title="Torque Wrench Calibrator: TWC"
                                text="The TWC Torque Wrench Calibrator is is a simple and cost-effective solution for checking the settings on standard 'beam', 'click' and 'break-over' wrenches. Manually operated and measuring both clockwise and counter-clockwise torque up to 1000 N.m with RS232 data-output for recording results for each wrench."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>


            </div>

        </div>
    )
}

export default UniversalTesting
