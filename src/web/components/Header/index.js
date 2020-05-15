import React, { Component } from 'react';
import SEC_Logo from '../../../assets/SEC_Logo.png';
import {  Link ,withRouter} from 'react-router-dom'
import './style.css';

class Header extends Component {
    render() {
      
        return (
            <div className="headerContainer">
                <div className="nav">
  <input type="checkbox" id="nav-check" />
  <div class="nav-header">
    <div class="nav-title">
    <Link to="/home">
                <img class="secLogo" src={SEC_Logo} alt="SECLogo" /></Link>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">

   <Link className= "linkStyle" to="/home">Home</Link>
                     
                    <Link to="/dashboard">Dashboard</Link>        
                   
                    {/*<Link to="/managementDashboard">Management Dashboard</Link>
                    <Link to="/learningJourney">Learning Journey</Link>   */}
                    
                    {/* <Link to="#/">Dashboard</Link>         */}
                   
                   <Link to="/managementDashboard">Management Dashboard</Link>
                    <Link to="#/">Learning Journey</Link>
                    <Link to="/epic">EPIC</Link>  
                    <Link to="/scl">SCL</Link>  
                    <Link to="/aboutSES">About SEC</Link>  
                   
              
  </div>
  {/* <Switch>
                <Route exact path="/home"component={Home}/> 
                 <Route exact path="/"component={Home}/>
                <Route exact path="/epic" component={Epic} />
                <Route exact path="/scl" component={SCLPage} />
                <Route exact path="/aboutSES" component={AboutInfo} />
                <Route exact path="/dashboard" component={Dashboard} />
                </Switch>  */}
</div>

            </div>
        );
    }
}

export default withRouter(Header);