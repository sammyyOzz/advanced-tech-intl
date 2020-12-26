import Grid from '@material-ui/core/Grid'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import ProductBackImage from '../ProductBackImage'
import './DatasheetAnalytics.css'

function EnterpriseSolution() {
    return (
        <div className="analytics">
            <div className="analytics__top">
                <ProductBackImage title="ENTERPRISE SOLUTION" />
            </div>

            <div className="analytics__content">
                <div className="analytics__section">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__mainImg">
                                <img src={require('../../images/scada&analytics/CFSWorX-1024x576.jpg')} alt=""/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__subImg">
                                <img src={require('../../images/scada&analytics/CFSWorX-Logo.png')} alt=""/>
                                <p className="analytics__text">ICONICS CFSWorX™ is a solution designed to streamline the efficiency of field service organizations through intelligent scheduling and reliable notifications. It empowers field service workers and maintenance personnel to move past the legacy break/fix model towards more proactive facilities and equipment management.</p>
                            </div>
                        </Grid>
                    </Grid>

                    <div className="analytics__lowerText">
                        <h4>Key Features</h4>
                        <ul className="analytics__list">
                            <li>Smart App for Connected Field Service Workers.</li>
                            <li>Automatically Assigns Tasks Based on Location, Schedule, Availability, and Skill Level.</li>
                            <li>Intelligent Scheduling with Reliable Notifications.</li>
                            <li>Workflow-based Escalation for Critical Issues. Integrates with Microsoft Dynamics 365 and Other Popular ERP/CRM Systems.</li>
                            <li>Comprehensive Audit Trail for Reporting and Accountability.</li>
                        </ul>
                    </div>
                </div>

                <div className="analytics__section">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__subImg">
                                <img src={require('../../images/scada&analytics/BridgeWorX64-1024x148.png')} alt=""/>
                                <p className="analytics__text">The BridgeWorX™64 service provides the latest 64-bit data bridging technology for ICONICS products. Graphical data bridging enables users to rapidly implement data orchestration and integration tasks that adhere to business logic without requiring programming. BridgeWorX64 can access Microsoft SQL Server, Oracle, Microsoft Access, SAP, and virtually any real-time or archived manufacturing or business data source.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__mainImg">
                                <img src={require('../../images/scada&analytics/BridgeWorX64_desktop-300x203.png')} alt=""/>
                            </div>
                        </Grid>
                    </Grid>

                    <div className="analytics__button">
                        <Link to='/pdfs/scada&analytics/BridgeWorX.pdf' target="_blank" download>
                            <button className="cardBtn">Datasheet</button>
                        </Link>
                    </div>
                </div>

                <div className="analytics__section">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__mainImg">
                                <img src={require('../../images/scada&analytics/Fault-View-1024x641.jpg')} alt=""/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__subImg">
                                <img src={require('../../images/scada&analytics/FDDWorX.png')} alt="" />
                                <p className="analytics__text">Fault Detection and Diagnostics (FDD) technology significantly reduces costs and improves operational efficiency. It incorporates a standard library of fault rules that can be customized to predict equipment failures and advise personnel of preventive actions.</p>
                            </div>
                        </Grid>
                    </Grid>

                    <div className="analytics__lowerText">
                        <h4>Benefits of ICONICS FDD Solutions</h4>
                        <ul className="analytics__list">
                            <li>Predict, Reduce and Eliminate Equipment Downtime</li>
                            <li>Automatically Detect Faults and Receive Real-time Notifications</li>
                            <li>Utilize Preconfigured Fault Rules in the Standard Rules Library</li>
                            <li>Reduce Maintenance and Determine Probable Causes</li>
                            <li>Rich Visualization and Reporting</li>
                            <li>Return on Investment Typically Within 12 to 18 Months</li>
                        </ul>
                    </div>
                </div>

                <div className="analytics__section">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__subImg">
                                <h4>Overall Equipment Effectiveness (OEE)</h4>
                                <p className="analytics__text">OEE software provides a full end-to-end process performance monitoring solution that provides actionable intelligence to users at any level of an enterprise. Highly accurate, real-time and historical information can then drive global operational efficiency and help to gain a competitive advantage. OEE software solutions typically involve pre-built calculations, downtime analytics, and production scheduling; all of which combine to help ensure effective business processes.</p>

                                <h4>Benefits</h4>
                                <ul className="analytics__list">
                                    <li>Advanced Analytics and Automated Reporting</li>
                                    <li>Prioritize Workloads</li>
                                    <li>Accountability</li>
                                    <li>Preconfigured Templates</li>
                                    <li>Connectivity to Multiple Data Sources</li>
                                    <li>Powerful Data Mining Tracks Real-Time KPIs</li>
                                </ul>
                            </div>

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__mainImg">
                                <img src={require('../../images/scada&analytics/OEE-Software.png')} alt=""/>
                            </div>
                        </Grid>
                    </Grid>

                </div>

                <div className="analytics__section">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__mainImg">
                                <img src={require('../../images/scada&analytics/MES.png')} alt=""/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="analytics__subImg">
                                <h4>Manufacturing Execution Systems (MES)</h4>
                                <p className="analytics__text">Most modern plants use a Manufacturing Execution System (MES) to manage and monitor work in progress on the factory floor. MES solutions involve system control systems that rely on up-to-date info to provide a snapshot of the current state of products being manufactured. In regulated industries, it is also the repository for critical lot and process data.</p>

                                <h4>Benefits</h4>
                                <ul className="analytics__list">
                                    <li>Fast, Intuitive Graphical Workflow Designer</li>
                                    <li>Data Mine Any Real-Time Data Source</li>
                                    <li>Powerful Transaction Workflow Scheduler</li>
                                    <li>Seamlessly Orchestrate Historical Data Integration</li>
                                    <li>Centralized Unified Data Manager</li>
                                    <li>Real-Time OPC Compliance</li>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>

                </div>
            </div>

            <div className="analytics__footer">
                <Footer />
            </div>
        </div>
    )
}

export default EnterpriseSolution
