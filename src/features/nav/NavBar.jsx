import React from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';

export default function NavBar(){
  return(
    <Menu inverted fixed='top' >
      <Container>
        <Menu.Item header>
          <img src='/public/assets/logo.png' alt='logo' style={{margin: '15px'}}/>
          Revents
        </Menu.Item>
        <Menu name='Events'/>
        <Menu.Item>
          <Button positive inverted content='create event'/>
        </Menu.Item>
        <Menu.Item position='right'>
          <Button basic inverted content='login'/>
          <Button basic inverted content='Register' style={{marginLeft: '0.5em'}}/>
        </Menu.Item>
      </Container>
    </Menu>
  )
}