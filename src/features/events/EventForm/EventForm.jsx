import cuid from "cuid";
import React, { useState } from "react";
import { Header, Segment, Form, Button } from "semantic-ui-react";

export default function EventForm({
  setFormOpen,
  setEvent,
  createEvent,
  selectedEvent,
  updateEvent,
}) {
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleFormSubmit() {
    selectedEvent ? updateEvent ({...selectedEvent, ...values})
    : createEvent({ ...values, id: cuid(), hostedBy: "", attendees: [] });
    setFormOpen(false)
  }

  return (
    <Segment clearing>
      <Header content={ selectedEvent ? 'Editar evento' : 'Crear nuevo evento'  } />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          {" "}
          <input
            value={values.title}
            name='title'
            onChange={(e) => handleInputChange(e)}
            type='text'
            placeholder='Título'
          />{" "}
        </Form.Field>
        <Form.Field>
          {" "}
          <input
            value={values.description}
            name='description'
            onChange={(e) => handleInputChange(e)}
            type='text'
            placeholder='Descripción'
          />{" "}
        </Form.Field>
        <Form.Field>
          {" "}
          <input
            value={values.city}
            name='city'
            onChange={(e) => handleInputChange(e)}
            type='text'
            placeholder='Ciudad'
          />{" "}
        </Form.Field>
        <Form.Field>
          {" "}
          <input
            value={values.venue}
            name='venue'
            onChange={(e) => handleInputChange(e)}
            type='text'
            placeholder='Local'
          />{" "}
        </Form.Field>
        <Form.Field>
          {" "}
          <input
            value={values.date}
            name='date'
            onChange={(e) => handleInputChange(e)}
            type='date'
            placeholder='Fecha'
          />{" "}
        </Form.Field>
        <Button
          type='submit'
          floated='right'
          positive
          content='enviar'
          
        />
        <Button
          onClick={() => setFormOpen(false)}
          type='submit'
          floated='right'
          negative
          content='cancelar'
        />
      </Form>
    </Segment>
  );
}
