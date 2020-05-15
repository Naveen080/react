import React, { Component } from 'react';
import AboutInfo from '../../components/AboutInfo';
import Dashboard from '../../components/Dashboard';
import SCLPage from '../../components/SCLPage';
import { Route,Switch,withRouter} from 'react-router-dom'
import Epic from '../../components/Epic';
import 'react-tabs/style/react-tabs.css';
import ManagementDashboard from '../../components/ManagementDashboard';
import LandingPage from '../../components/LandingPage';
import './style.css';

class Main extends Component {
    render() {
        return (
            <div>
                {/* <div className="row">
                    <div class="col-lg-4 col-md-4 grd0 col-sm-12 col-xs-12">
                    <div class="grid">
							<figure class="effect-ruby er1">

								<img src="https://www.sasken.com/sites/default/files/images/homegrid/centimg1_1_0_0.png" class="img-responsive" />
                                 	<div class="hidtxt1">
										<a href="/Dashnoard">Dashboard</a>
									</div>
							</figure>
						</div>
                        <div class="grid">
							<figure class="effect-ruby er1">

								<img src="https://www.sasken.com/sites/default/files/images/homegrid/centimg1_1_0_0.png" class="img-responsive" />
                                 	<div class="hidtxt1">
										<a href="/Dashnoard">Dashboard</a>
									</div>
							</figure>
						</div>
                    </div>
                    <div class="col-lg-4 col-md-4 grd0 col-sm-12 col-xs-12">
                    <div class="grid">
							<figure class="effect-ruby er1">

								<img src="https://www.sasken.com/sites/default/files/images/homegrid/centimg_1_1_0_0.png" class="img-responsive" />
                                 	<div class="hidtxt1">
                                     <Link to="/AboutInfo">SEC</Link> 
										
									</div>

                                    
							</figure>
						</div>
                        </div>
                        <div class="col-lg-4 col-md-4 grd0 col-sm-12 col-xs-12">
                    <div class="grid">
							<figure class="effect-ruby er1">

								<img src="https://www.sasken.com/sites/default/files/images/homegrid/centimg1_1_0_0.png" class="img-responsive" />
                                 	<div class="hidtxt1">
										<a href="/Dashnoard">Dashboard</a>
									</div>
							</figure>
						</div>
                        <div class="grid">
							<figure class="effect-ruby er1">

								<img src="https://www.sasken.com/sites/default/files/images/homegrid/centimg1_1_0_0.png" class="img-responsive" />
                                 	<div class="hidtxt1">
										<a href="/Dashnoard">Dashboard</a>
									</div>
							</figure>
						</div>
                    </div>
                    
                </div> */}
	{/* <Router> */}
        <Switch>
		<Route exact path="/home"component={LandingPage}/> 
                 <Route exact path="/"component={LandingPage}/>
                <Route exact path="/epic" component={Epic} />
                <Route exact path="/scl" component={SCLPage} />
                <Route exact path="/aboutSES" component={AboutInfo} />
                <Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/managementDashboard" component={ManagementDashboard} />
        </Switch>
    {/* </Router> */}
                
                            </div>
        );
    }
}

export default withRouter(Main);