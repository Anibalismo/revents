import React from 'react';
import { Header, Segment, Form, Button } from 'semantic-ui-react';

export default function EventForm({setFormOpen}){
  return(
    <Segment clearing>
      <Header content='Crear nuevo evento'/>
      <Form>
        <Form.Field> <input type='text' placeholder='Título'/> </Form.Field>
        <Form.Field> <input type='text' placeholder='Descripción'/> </Form.Field>
        <Form.Field> <input type='text' placeholder='Ciudad'/> </Form.Field>
        <Form.Field> <input type='text' placeholder='Local'/> </Form.Field>
        <Form.Field> <input type='date' placeholder='Fecha'/> </Form.Field>
        <Button type='submit' floated='right' positive content='enviar'/>
        <Button onClick={()=>setFormOpen(false)} type='submit' floated='right' negative content='cancelar'/>
      </Form>
    </Segment>
  )
}