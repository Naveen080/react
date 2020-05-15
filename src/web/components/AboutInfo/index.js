import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import'./style.css';

const AboutInfo = () => {
  return (
    <div className="aboutPage">
      <Card>
      <div class="desc2">
      <font className="fontStyle">About SEC</font><br /><br />
      </div>
        <CardBody>
          <CardTitle>Vision of SEC: Attract Right Talent and Enhance Their Engineering skills to help Sasken Stay Ahead !</CardTitle>
          <br /><br />
          <CardText>The learning journey in SEC involves enhancing foundational and specialization competencies, primarily by solving problems individually and as part of live projects. In this endeavor, SEC creates and sustains enabling systems on an ongoing basis for continuous learning and improvement of technical capabilities of all Sasians.</CardText>
          <br /> <br />
          <br /> <br />
          <h3>SEC Core team: V Madhusudana D Rao, Rajiv Mulay</h3>
        </CardBody>
      </Card>
    </div>
  );
};

export default AboutInfo;