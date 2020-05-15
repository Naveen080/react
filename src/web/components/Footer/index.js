import React, { Component } from 'react';
import './style.css';
import Saskenlogo from '../../../assets/Saskenlogo.png';
import { Row, Col } from 'reactstrap';


class Footer extends Component {
    render() {
        return (
        //     <div className="container">
        //         <h3 className="footerStyle"><q>What we have learned is like a handful of earth; What we have yet to learn is like the whole world</q> 
		// Translated from a quote by Avvaiyar, a 4th Century Tamil poet from India.</h3>
        //     </div>
        // <footer>
      <div class="footerContainer">
                
{/* <Container> */}
  <Row>
    <Col xs="6" className="col"><a href="https://www.sasken.com/">
                <img class="saskenLogo" src={Saskenlogo} alt="SaskenLogo" /></a>
                
                <p className="descStyle">Sasken is a specialist in Product Engineering and Digital Transformation providing concept-to-market, chip-to-cognition R&D services to global leaders in Semiconductor, Automotive, Industrials, Smart Devices & Wearables, Enterprise Grade Devices, Satcom and Transportation industries.</p>
               </Col>
    <Col xs="6" className="col1"><h3 className="footerStyle">SOFTWARE ENGINEERING CENTER</h3> 
                <ul>
<li>Sasken Technologies Ltd</li>
<li>139/25, Ring Road, Domlur, Bengaluru 560071, India</li>
<li>CIN# L72100KA1989PLC014226</li>
</ul></Col>
  </Row>
  {/* </Container> */}

      </div>
    // </footer>
        );
    }
}

export default Footer;