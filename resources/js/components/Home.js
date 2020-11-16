import React from 'react'
import './Home.css'
import HomeTopCard from './HomeTopCard'
import Grid from '@material-ui/core/Grid';

function Home() {
    return (
        <div className="home">
            <div className="home__top">
                <div className="home__topOverlay">
                    {/* <div>
                        <button>Click me</button>
                    </div> */}

                    <div className="home__cards">
                        <Grid container spacing={3}>
                            <Grid item>
                                <HomeTopCard
                                    caption="AUTOMATE"
                                    text="Try out our world-class automation products"
                                />
                            </Grid>
                            <Grid item>
                                <HomeTopCard
                                    caption="EDUCATE"
                                    text="We have wide range of education research products"
                                />
                            </Grid>
                            <Grid item>
                                <HomeTopCard
                                    caption="INNOVATIVE"
                                    text="we are representing worlds' leading research products"
                                />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>

            <Grid container>
                <Grid item md={3} />
                <Grid item md={6}>
                    <div className="home__aboutUs">
                        <h3>About Us</h3>
                        <h2>25 Long Years Of Service Excellence With Quality At It's Best!</h2>
                        <p id="pTop">We are the authorised exclusive Distributors of World’s leading Companies. We reach out all our Customers with Strong Sales and Marketing Teams. We have been Extremely Successful as we with our trained technical teams providing right solutions and installation and support locally.</p>
                        <p>Our factory trained team of Engineers provides Installation and Support services including 24X7 timelines on mission critical installations. Our Engineers visit customers to provide these services within UAE, other Middle East and African countries.</p>
                    </div>
                </Grid>
                <Grid item md={3} />
            </Grid>

            
        </div>

    )
}

export default Home
