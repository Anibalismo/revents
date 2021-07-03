import { Grid, Container } from "semantic-ui-react";
import EventList from './EventList';
import EventForm from '../eventForm/EventForm'
import {sampleData} from '../../../app/api/sampleData.js'
import {useState} from 'react';

export default function EventDashboard({formOpen, setFormOpen}) {
    const [events, setEvents] = useState(sampleData);
    return(
        <Container className='main'>
            <Grid >
                <Grid.Column width={10}>
                    <EventList events={events}/>
                </Grid.Column>
                <Grid.Column width={6}>
                    {formOpen && <EventForm setFormOpen={setFormOpen} setEvents={setEvents}/>}
                    
                </Grid.Column>
            </Grid>
        </Container>

    );
}

