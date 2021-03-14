import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

export default function NavBar({setFormOpen}){
    return(
        <Menu inverted fixed='top'>
            <Container>
            <Menu.Item header>
                    <img src='https://i.ibb.co/30zckxS/revents-logo.png' alt='Logo' style={{marginRight: 15}}/>
                    Revents
                </Menu.Item>
                <Menu.Item >
                    Events
                </Menu.Item>
                <Menu name='Events'/>
                <Menu.Item>
                    <Button positive inverted content='Crear Evento' onClick={()=>{setFormOpen(true)}}/>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button inverted content='Login' />
                    <Button inverted content='Register' style={{marginLeft:'0.5em'}}/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}