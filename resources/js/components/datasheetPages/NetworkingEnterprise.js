import React from 'react'
import './Datasheet.css'
import DataCard from './DataCard'
import Grid from '@material-ui/core/Grid'
import RemoveIcon from '@material-ui/icons/Remove';

function NetworkingEnterprise() {
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
                <p><RemoveIcon id="dash" /><span>Ethernet Switches​</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="networking-enterprise/Switches.gif"
                                title="Managed or Unmanaged Switches"
                                text="Managed ethernet switches provide the ability to configure port settings, manage network performance and monitor your LAN. Unmanaged Ethernet switches offer powerful network performance with plug-and-play functionality."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="networking-enterprise/RUgged-switches.gif"
                                title="Rugged Ethernet Switches MIL Grade"
                                text="Rugged gigabit ethernet switch provides a rugged, dust proof and water resistant enclosure with sixteen 10/100/1000Base-T(X) M12 X-coded ports to create a reliable and secure communication network for equipment in harsh environments."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="networking-enterprise/router.jpg"
                                title="Industrial Router"
                                text="Industrial routers provide secure network communication between local and wide area networks. Rugged design and flexible platform, the routers provide the ability to remotely connect, monitor and control assets across a variety of industrial application."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>

                <p><RemoveIcon id="dash" /><span>Communication Converter</span><RemoveIcon id="dash" /></p>
                <div className="datasheet__row">
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="networking-enterprise/Protocol-Conver.jpg"
                                title="Protocol Converter"
                                text="Networking products guide protocol converter modular design makes designing for compatibility with rapidly evolving communications standards as easy as replacing a field-install-able sled. FlexEdge platform, enables connectivity to virtually anything in system."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="networking-enterprise/media-conv.gif"
                                title="Media Converter"
                                text="Ethernet copper to fiber media converter that provides fast performance allowing for real-time operation in industrial networking applications. These ruggedized converters are industrial hardened to provide superior reliability."
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DataCard
                                image="networking-enterprise/serial-conver.gif"
                                title="Serial Converter"
                                text="Serial converter module provides the capability of interfacing equipment with RS-485 serial communications to equipment with RS-232 communications. Data format of the RS-232 and RS-485 equipment must be the same."
                            />
                        </Grid>
                    </Grid>

                    <hr/>

                </div>
            </div>

        </div>
    )
}

export default NetworkingEnterprise
