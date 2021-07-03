import {Form} from 'semantic-ui-react';
import {useState} from 'react'

export default function EventForm2(){
  const initialValues = {
    title: '',
    description: '',
  }

  const [values, setValues] = useState(initialValues);
  
  const handleOnChangeEvent = (e) => {
    const {name, value} = e.target;
    setValues({...values , [name]:value})
  }
  return(
    <Form>
      <Form.Input>
        <input 
          type='text'
          placeholder='Title'
          name='title'
          value = 'title'
        />
      </Form.Input>

    </Form>
  )
}