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
                <p><RemoveIcon id="dash" /><span>Force Apparatus</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HFC1_REACTION-of-BEAMS-APPARATUS.jpg"
                                title="Reaction of Beams Apparatus"
                                text="Experimental determination of the reaction forces in the supports of a simply supported beam under various loadings. Validation of the principal of equilibrium."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HFC2_TRIANGLE-of-FORCES.jpg"
                                title="Triangle of Forces Apparatus"
                                text="Allows for the study of three or more coplanar forces acting at a point, on a circular disc, or on a rectangular shape."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HFC3_FUNICULUR-POLYGON-and-FORCES-APPARATUS.jpg"
                                title="Polygon and Forces Apparatus"
                                text="To resolve by experiment any suitable system of static coplanar forces which may or may not be concurrent.To verify graphically triangle of forces polygon of forces link polygon."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HFC8_CENTRE-of-GRAVITY-APPARATUS.jpg"
                                title="Center of Gravity Apparatus"
                                text="The centre of gravity of a shape of uniform thickness can easily be found by this apparatus. It provides a simple technique for complicated shapes, far quicker than using calculus for example."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HFC12_THREE-WIRE-SUSPENSION.jpg"
                                title="Three Wire Suspension Apparatus"
                                text="To investigate the possibility of redundancy in the vertical tie. To compare the sum of the vertical components of the forces in the three wires with the vertical load they support."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HFC14_WALL-JIB-CRANE.jpg"
                                title="Wall Jib Crane"
                                text="Determination of forces in crane members allows for the confirmation by theory and polygon of forces."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HFC15_DERRICK-CRANE.jpg"
                                title="Derrick Crane"
                                text="Determination of forces in the crane members; confirmation of theory, and polygon of forces."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HFC16_TENSION-COEFFICIENTS-APPARATUS.jpg"
                                title="Tension Coefficient Apparatus"
                                text="To determine experimentally forces induced in individual frame members.calculate the theoretical forces induced, using the method of tension coefficients."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HFC19_TOGGLE-JOINT-APPARATUS.jpg"
                                title="Toggle Joint Apparatus"
                                text="Determines the horizontal reaction due to loading a toggle joint mechanism; assesses the effect of the toggle angle."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HFC21_CENTRIFUGAL-FORCE-APPARATUS.jpg"
                                title="Centrifugal Force Apparatus"
                                text="To verify that the centrifugal force on a rotating mass is proportional to the square of the speed, mass, radius of gyration."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HFC29_CORIOLIS-FORCE-APPARATUS.jpg"
                                title="Coriolis Force Apparatus"
                                text="To observe the Coriolis Force on a jet of water being rotated in a horizontal plane Effect of jet deflection as a function of boom rotational speed and the direction of boom rotation."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HFC31_COMBINED-SHEAR-FORCE-_-BENDING-MOMENT.jpg"
                                title="Combined Shear Force and Bending Moment Apparatus:"
                                text="Allows for the study of both shear force and bending moment in a single compact unit. Shear Force and Bending Moment at a ‘cut’ section in a beam."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HFC33_CONSERVATION-of-LINEAR-MOMENTUM.jpg"
                                title="Conservation of Linear Momentum"
                                text="Observe collisions between two trolleys, testing for the conservation of momentum Measure energy changes during different types of collisions."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HFC17_BASIC-ROOF-TRUSS.jpg"
                                title="Basic Roof Truss"
                                text="Experimental values of the forces in the struts and tie of a basic roof truss with theoretical predictions To observe the effect of changing the tie bar length."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HFC38_WORK-DONE-by-a-VARIABLE-FORCE-VERTICAL-AND-TANGENTIAL.jpg"
                                title="Work Done by a Variable Force (Combined Vertical and Tangential)"
                                text="A single unit for experiments on mechanical work and potential energy. Lifting a weight using a lever and a dynamometer (spring balance) in both the vertical and tangential plane."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <p><RemoveIcon id="dash" /><span>Friction Apparatus</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HFN1_FRICTION-on-an-INCLINED-PLANE.jpg"
                                title="Friction on an Inclined Plane"
                                text="A compact, bench mounted apparatus to measure the force required to move a body up an inclined plane and measure the friction coefficient for various materials in contact with that plane."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HFN3_CLUTCH-PLATE-FRICTION-APPARATUS.jpg"
                                title="Clutch Plate Friction Apparatus"
                                text="A self contained, wall mounted unit, to demonstrate and determine the coefficient of friction of brake lining material and minimum torque to maintain rotation."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HFC38_WORK-DONE-by-a-VARIABLE-FORCE-VERTICAL-AND-TANGENTIAL.jpg"
                                title="Pivot Friction Apparatus"
                                text="A wall mounted apparatus that demonstrates the relationship between friction torque and axial thrust; determines the influence of bearing cone angle."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HFN5_JOURNAL-FRICTION-APPARATUS.jpg"
                                title="Journal Friction Apparatus:"
                                text="Self-contained, free-standing, floor mounted unit driven by a speed controlled motor. Determines the friction torque under variable load , speed and lubrication."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HFN6_BEARING-FRICTION-APPARATUS.jpg"
                                title="Bearing Friction Apparatus"
                                text="Wall mounted unit to compare the frictional losses of bearings by measuring the coefficient of sliding friction between pairs of materials."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HFN8_ROPE-BELT-FRICTION-APPARATUS.jpg"
                                title="Rope Belt Friction Apparatus"
                                text="A self contained, wall mounted unit for the effective determination of the coefficient of friction between a steel pulley and cotton rope. To also investigate belt tensions; evaluate effects of different `V` angles in a pulley, and of different lap angles."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <DataCard
                                image="civil/HFN9_FRICTION-of-BELTS-APPARATUS.jpg"
                                title="Friction of Belts Apparatus"
                                text="A self-contained, wall mounted apparatus for determining relationship of friction in varying beltsdetermine the coefficient of friction between the pulley and belt for the belt sections Safety interlock to stop pulley rotating."
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DataCard
                                image="civil/HFN11_BRAKE-DRUM-FRICTION-APPARATUS.jpg"
                                title="Brake Drum Friction Apparatus"
                                text="A self contained, bench mounted apparatus, with a single leading and trailing shoe, for the study of coefficient of friction and determine experimentally the variation of tangential force with braking load."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <p><RemoveIcon id="dash" /><span>Strength of Material</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HSM1_DEFLECTION-of-BEAMS-APPARATUS.jpg"
                                title="Deflection of Beams Apparatus"
                                text="Experiments to show, Deflection of a simply supported beam with varying span. Deflection for an offset load on a simply supported beam. Distributed Loads on a simply supported beam."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HSM2_TORSION-of-BARS-APPARATUS.jpg"
                                title="Torsion of Bars Apparatus"
                                text="Apparatus to understand and investigate directly the relationship between the torsional load applied to a round bar and the angular twist produced and how this relationship varies with the beam material and it’s cross sectional polar moment of area."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HSM7_EXTENSION-OF-SPRINGS-APPARATUS.jpg"
                                title="Extension of Springs Apparatus"
                                text="To determine spring stiffness using measured spring data and load versus extension graphs. The dependence of spring stiffness on the wire diameter, spring diameter, length, number of turns and material can be calculated."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HSM10_CURVED-BAR-APPARATUS.jpg"
                                title="Curved Bar Apparatus"
                                text="To experimentally determine the vertical and horizontal deflections of various curved bars whose cross sectional dimensions are small compared with the bar radius"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HSM11_COMBINED-BENDING-and-TORSION-APPARATUS.jpg"
                                title="Combined Bending and Torsion Apparatus"
                                text="A self contained, bench mounted apparatus to determine elastic failure of a specimen subjected to several ratios of simultaneous bending and torsion : allowing comparison of results with the established theories of failure."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HSM15_CRITICAL-CONDITION-of-STRUTS.jpg"
                                title="Critical Condition of Struts"
                                text="To observe the behaviour of four struts of the same length, but with different end constraints, when subjected to buckling loads. Compare the results with theoretical predictions, such as Euler’s formula."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HSM18_ELECTRICAL-RESISTANCE-STRAIN-GAUGE.jpg"
                                title="Electrical Resistance Strain Guage"
                                text="The apparatus has been designed to illustrate the basic features of electrical resistance strain gauges and their application in measuring bending and torsion."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HSM19D_ROTATING-FATIGUE-MACHINE.jpg"
                                title="Rotating Fatigue Machine"
                                text="This unit has been designed to introduce students to the effects of material fatigue using a sinusoidal variation of bending stress. Comes complete with data logging functionality."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HSM30_UNSYMMETRICAL-CANTILEVER-APPARATUS.jpg"
                                title="Unsymmetrical Cantilever Apparatus"
                                text="This apparatus allows the vertical and horizontal deflections of the free end of a test specimen to be measured when loading occurs along a principle axis or at a known angle."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HSM31_TORSION-TESTING-MACHINE.jpg"
                                title="Torsion Testing Machine"
                                text="Torsion testing machine for destructional testing of steel, brass and aluminium samples. Strain gauge technology is used within the torsion head and the output from these strain gauges."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HSM41_PENDULUM-IMPACT-TESTER.jpg"
                                title="Pendulum Impact Tester"
                                text="A study bench top mounted unit for the study of notched bar (Charpy) impact strength tests. A heavy base plate with protective guard surrounds all the components Lockable door and brake mechanism."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HSM56_EXTENSION-and-COMPRESSION-of-SPRINGS.jpg"
                                title="Extension and Compression of Springs"
                                text="Wall mounted apparatus to demonstrate Hooke’s law and the relationship between deflection and load for tension and compression springs."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <DataCard
                                image="civil/HSM35_TORSION-and-DEFLECTION-TESTING-APPARATUS.jpg"
                                title="Torsion and Deflection Apparatus"
                                text="This bench top unit allows a variety of experiments to be undertaken to investigate test specimens under torsional loading and bending loading within their elastic limits."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>



                <p><RemoveIcon id="dash" /><span>Structures</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HST4_THREE-HINGED-ARCH.jpg"
                                title="Three Hinged Arch"
                                text="To study the Relationship between horizontal thrust at arch springing for varying applied load Understand characteristics of symmetrical &unsymmetrical three pinned arch."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HST2_SIMPLE-SUSPENSION-BRIDGE.jpg"
                                title="Simple Suspension Bridge"
                                text="Comparison of theory with actual results for a uniformly distributed load and point load and rolling load .Cable tension obtained for loads at varying positions and magnitude along the bridge deck."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HST5_TWO-HINGED-PARABOLIC-ARCH.jpg"
                                title="Two Hinged Parabolic Arch"
                                text="To study relationship between applied loads and horizontal thrust ,Comparison of horizontal thrust at springing with simplified theory Verifies model analysis theory."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HST7_DEFLECTION-of-FRAMES.jpg"
                                title="Deflection of Frames"
                                text="Study the load, horizontal thrust, deflections, sway in portal frames .Comparison of experimental results with theoretical values derived using Castigliano’s theorem and numerical analysis by Simpson’s rule."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HST8_PLASTIC-BENDING-of-PORTALS.jpg"
                                title="Plastic Bending of Portals"
                                text="Studies the change in the collapse mechanism as the ratio of horizontal to vertical load is varied Verifies that hinges occur at positions of greatest bending moment."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HST9_SHEAR-FORCE-in-a-BEAM.jpg"
                                title="Shear Force in a Beam"
                                text="Shear force variation with varying point loads, load positions and load arrangements. Visual demonstration of shear force at a ‘cut’ in a beam."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HST10_BENDING-MOMENT-in-a-BEAM.jpg"
                                title="Bending Moment in a Beam"
                                text="Shear force variation with differing load points, positions and arrangements Visual demonstration of shear force at a ‘cut’ in a beam .Law Bending Moment Diagrams Young’s’ Modulus Verification of Equilibrium of Vertical Forces and Moments."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HST11_CONTINUOUS-and-INDETERMINATE-BEAMS.jpg"
                                title="Continuous and Indeterminate Beams"
                                text="Study of the general formula for beam deflections in bending in the form y= c Verification of the effect of changing the length of the beams The principle of superposition Indeminate Beams Cantilevers and Propped Cantilever."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HST12_DEFLECTION-of-CURVED-BARS.jpg"
                                title="Deflection of Curved Bars"
                                text="Comparison of experimental results with those derived by exact and approximate methods of analysis Use Castigliano’s rule and Simpsons rule Deflection of free end analysed using twin displacement gauges."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HST13_DEFLECTION-of-BEAMS-and-CANTILEVERS.jpg"
                                title="Deflection of Beams and Cantilevers"
                                text="Measure beam deflections for point and uniformly distributed loads. Verify differential equation for beam bending. Measure and calculate slope and end rotations."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HST16_REDUNDANT-TRUSS.jpg"
                                title="Redundant Truss"
                                text="Study of deflection of a truss with and without redundancy Study of strains, forces and deflections in a determinate and indeterminate framework."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HST17_FORCES-in-a-TRUSS-Resolution.jpg"
                                title="Forces in a Truss (Resolution)"
                                text="Measure strains exerted on each truss member Calculate member forces by resolution of joints To view compressive and tensile forces/strains."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HST18_SUSPENDED-CENTRE-SPAN-BRIDGE.jpg"
                                title="Suspended Centre Span Bridge"
                                text="The model three span bridge has a flat deck and solid spandrels to the three spans. Use of the influence lines for a tandem rolling load Production of influence lines for all six reactions."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HST19_PIN-JOINTED-FRAMEWORKS.jpg"
                                title="Pin Jointed Frameworks"
                                text="To study of strains and Stresses within various true pin jointed frameworks Comparison of actual and theoretical results.Using Law Castiglianos’ Theorem Modulus of Elasticity. Reactions. Bow’s notation."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HST21_UNSYMMETRICAL-BENDING-_-SHEAR-CENTER.jpg"
                                title="Unsymmetrical Bending and Share Center"
                                text="Study of the horizontal and vertical deflection of asymmetrical cantilevers when the plane of loading does not coincide with a principle axis of the section, neutral axis in an angle section & Shear Centre in U channel section."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HST22_TORSION-of-RODS-and-TUBES.jpg"
                                title="Torsion of Rods and Tubes"
                                text="Theory of torsion in circular section rods and tubes Comparison of the extended theory of torsion for a hollow square section member using Law Modulus of Rigidity Polar moment of inertia."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HST35_STRAIN-MEASUREMENT-for-STRUCTURES.jpg"
                                title="Strain Measurements for Structures"
                                text="Determination of the gauge factor materials with strain / stress conversion using Young’s Modulus. Different Clamp Arrangements."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HST23_EQUILIBRIUM-of-FORCES.jpg"
                                title="Equilibrium of Forces"
                                text="Equilibrium of a set of forces acting in a vertical plane Equilibrium of up to six concurrent and non-concurrent forces Graphical solution of a triangle of forces."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/Buckling-of-Struts.jpg"
                                title="Buckling of Struts"
                                text="Varying end conditions and strut length against Euler’s buckling load Off-centre Strut loading."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HST46_COMBINED-SHEAR-FORCE-_-BENDING-MOMENT.jpg"
                                title="Combined Shear Force & Bending Moment"
                                text="Visual demonstration of the Shear Force and Bending Moment at a ‘cut’ section in a beam .Variation in bending moment for variations in load, load position and load arrangement."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/hda200_DIGITAL-INTERFACEDAQ.jpg"
                                title="Digital Interface HDA200"
                                text="The HDA200 Interface is supplied in a corrosion resistant metal enclosure, with rubber feet for bench top mounting. A frame mounting bracket is also supplied for mounting onto the HST1. The LCD has an excellent viewing angle."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <DataCard
                                image="civil/HST100_Bench-mounted-frame.jpg"
                                title="BENCH MOUNTED FRAME"
                                text="Bench mounted frame offers the ideal working area for assembling and operating a large majority of the Structures range of experiments. Manufactured from high quality, aluminium profile, it comprises a dual frame, which creates a continuous mounting slot around all four sides of the frame."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <p><RemoveIcon id="dash" /><span>Vibration Apparatus</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HVT3_COMPOUND-PENDULUM.jpg"
                                title="Compound Pendulum"
                                text="A wall mounted apparatus to determine the radius of gyration and centre of gravity of a compound pendulum. Investigations also include the effect of fulcrum position, finding gravitational acceleration ‘g’, and comparison with a simple pendulum."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HVT5_SEISMIC-TABLE.jpg"
                                title="Seismic Table"
                                text="A bench mounted uniaxial motion simulator allowing some of the fundamental concepts of structure design and designing principles to be investigated. Topics as resonance, dampening, torsion, material properties and end condition fixings."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HVT8_BIFILAR-TRIFILAR-SUSPENSION.jpg"
                                title="Bifilar / Trifilar Suspension"
                                text="Both Bifilar and Trifilar setup apparatus to determine experimentally the moment of inertia and radius of gyration of a rectangular bar, ring and cylinder."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HVT13_TORSIONAL-VIBRATION-APPARATUS.jpg"
                                title="Torsional Vibration Apparatus"
                                text="A bench top unit for investigating torsional vibration and stiffness and demonstration of the effect of frictional damping."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HVT12_UNIVERSAL-VIBRATION-APPARATUS.jpg"
                                title="Universal Vibration System"
                                text="To allow the study of free and forced vibration, resonance and damping Kit ,Natural Frequency A damping absorber is also supplied that attaches to the beam, and can be adjusted."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/hvt12c_BEAM-BENDING-VIBRATIONS-MODULE.jpg"
                                title="Beam Bending"
                                text="A flexible beam supported between two end brackets which create simply supported end conditions. Allowing the study of free and forced vibrations, resonance, amplitude and phase lag."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HAC-Tachometer.jpg"
                                title="Tachometer"
                                text="Displays the excitation force frequency as part of the HVT12G free and forced vibrations experiment. Unit to control the rotational speed of the motor exciters used on the HVT12C and HVT12G.The unit connects directly to the HAC90 tachometer."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HVT13_TORSIONAL-VIBRATION-APPARATUS.jpg"
                                title="Torsional Oscillation Module"
                                text="Accessory to verify the dependence of the periodic time of oscillation of a “shaft” mounted flywheel on the moment of inertia, length of shaft, and shaft diameter . Allows the study of the modulus of rigidity and effect of damping."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="civil/HVT12-Daq.jpg"
                                title="Data Acquisition System"
                                text="Two channel digital oscilloscope and software allows the capture, display, storage and retrieval of the excitation frequency and beam response from the HVT12 apparatus."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <DataCard
                                image="civil/HVT12F_VIBRATION-FRAME.jpg"
                                title="Vibration Frame"
                                text="HVT12 Universal Vibrations Apparatus Modules are all mounted within the HVT12f Vibration frame"
                            />
                        </Grid>
                    </Grid>

                </div>


            </div>
        </div>
    )
}

export default AeronauticalEngr
