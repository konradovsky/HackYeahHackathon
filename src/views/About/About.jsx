import React, { Component } from 'react';
import { Container } from '../../utils/styledComponents';
import { Header, Holder, AboutSec, LeftHolder, RightHolder, HappyImage, AboutText,AboutHeader, MainText } from './About_styles';


export default class About extends Component {
  render() {
    return (
      <Holder>
        <Container>
          <AboutSec >
          <LeftHolder>
            <HappyImage />
          </LeftHolder>
          <RightHolder>
            <AboutHeader>About</AboutHeader>
            <MainText>
            <AboutText>
            <p><strong> Our application allows to easily connect people and organizations that are in need with those who are willing to help. </strong></p>
            <br/>
            <p><strong>   For volunteers </strong> <br/>
              -  Are you full of energy, willing to help others?<br/>
              -  Create a free account!<br/>
              -  Check out who is in need of your aid and how you can help them out.<br/>
              -  Apply right away where you think you can do your best.<br/>
            </p>  <br/>
            <p>            
              <strong>   For organizations </strong><br/>
              -  Are you looking for volunteers to help in your cause?<br/>
              -  Create a free account with your name, location, number of volunteers needed and other details.<br/>
              -  Browse through available candidates.<br/>
            </p>
            <p><br/>
              <strong>   Try Aidly today and join our growing community of positive people! </strong><br/>
            </p>
            </AboutText>
            </MainText>
          </RightHolder>
          </AboutSec>
        </Container>
      </Holder>
    );
  }
}
