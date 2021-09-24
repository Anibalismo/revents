import React from 'react';
import { Container, Menu, Button, MenuItem } from 'semantic-ui-react';

export default function NavBar({setFormOpen}){
  return(
    <Menu inverted fixed='top' >
      <Container>
        <Menu.Item header>
          <img src={'/assets/logo.png'} alt='logo' style={{margin: '1px'}}/>
          Revents
        </Menu.Item>
        <MenuItem  content='Events'/>
        <Menu.Item>
          <Button positive inverted content='create event' onClick={()=>setFormOpen(true)}/>
        </Menu.Item>
        <Menu.Item position='right'>
          <Button basic inverted content='login'/>
          <Button basic inverted content='Register' style={{marginLeft: '0.5em'}}/>
        </Menu.Item>
      </Container>
    </Menu>
  )
}