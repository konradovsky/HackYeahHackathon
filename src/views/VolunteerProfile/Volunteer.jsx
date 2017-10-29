import React, { Component } from 'react';
import { Wrapper, StyledContainer, Header, Profile, Name, GameSection, UpdateSection, Icon} from './Volunteer_styles';


export default class Volunteer extends Component {
  render() {
    return (
        <Wrapper>
            <StyledContainer>
                <Header>
                    <Profile>
                        <img src="/img/avatar.svg"/>
                        <p>Profil</p>
                    </Profile>
                    <Name>
                        <div>
                            <h1>Mariusz Koznacki</h1>
                            <p>Wrocław</p>
                        </div>
                    </Name>
                </Header>
                <GameSection/>
                <UpdateSection></UpdateSection>
            </StyledContainer>
        </Wrapper> 
    )
  }
}
