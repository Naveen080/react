import React, { Component } from 'react';
import {  Link ,withRouter,} from 'react-router-dom'
import 'react-tabs/style/react-tabs.css';
import './style.css';

class LandingPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div class="col-lg-4 col-md-4 grd0 col-sm-12 col-xs-12">
                    <div class="grid">
							<figure class="effect-ruby er1">

								<img src="https://www.sasken.com/sites/default/files/images/homegrid/centimg1_1_0_0.png" alt="dashboard" class="img-responsive" />
                                 	<div class="hidtxt1">
                                     <Link to="/dashboard">Dashboard</Link>      
									</div>
							</figure>
						</div>
                        <div class="grid">
							<figure class="effect-ruby er1">

								<img src="https://www.sasken.com/sites/default/files/images/homegrid/iot_0_0.png" alt="managementDashboard" class="img-responsive" />
                                 	<div class="hidtxt1">
										<a href="/Dashnoard">Management Dashboard</a>
									</div>
							</figure>
						</div>
                    </div>
                    <div class="col-lg-4 col-md-4 grd0 col-sm-12 col-xs-12">
                    <div class="grid">
							<figure class="effect-ruby er1">

								<img src="https://www.sasken.com/sites/default/files/images/homegrid/centimg_1_1_0_0.png" alt="sec" class="img-responsive" />
                                 	<div class="hidtxt1">
                                     <Link to="/aboutSES">SEC</Link> 
										
									</div>

                                    
							</figure>
						</div>
                        </div>
                        <div class="col-lg-4 col-md-4 grd0 col-sm-12 col-xs-12">
                    <div class="grid">
							<figure class="effect-ruby er1">

								<img src="https://www.sasken.com/sites/default/files/images/homegrid/v2x_0_0.png" alt="scl" class="img-responsive" />
                                 	<div class="hidtxt1">
                                     <Link to="/scl">SCL</Link>  
									</div>
							</figure>
						</div>
                        <div class="grid">
							<figure class="effect-ruby er1">

								<img src="https://www.sasken.com/sites/default/files/images/homegrid/blockchain_0_0_1.png" alt="epic" class="img-responsive" />
                                 	<div class="hidtxt1">
                                     <Link to="/epic" >EPIC</Link>  
									</div>
							</figure>
						</div>
                    </div>
                    
                </div>
	
                
                            </div>
        );
    }
}

export default withRouter(LandingPage);