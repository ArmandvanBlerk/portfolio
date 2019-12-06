import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';

class About extends React.Component {

  render() {
    return (
      <BaseLayout title="Armand van Blerk - Learn More About Me" {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein">Feel free to read short description about me.</p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>My name is Armand van Blerk and I am a Full stack Developer whom specializes in the MERN stack. </p>
                <p>
                I have completed the HyperionDev bootcamp as an Full stack Web Developer and have chosen this campus and route
                due to their exceptional standards being one of South-Africa's leading bootcamps for real-world exprience and up
                to date Technology stacks.
                </p>
                <p>
                Throughout my 9 month journey, I have learned to cope under pressure through the immersive and still being able to function
                at my day job and that by learning to drink out of a firehose, is also a valueble skill. Also i grew to love 14 hour
                days for 9 months, as it became apart of me and realized that the only constant in this field is progression. Afterall
                progression and the ability to adapt in this industry is key.
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default About;
