import React from "react";
import {Segment, Item, Icon, Button, List} from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee';
export default function EventListItem({event}){
  return(
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={event.hostPhotoURL}/>
            <Item.Content>
              <Item.Header>{event.title}</Item.Header>
              <Item.Description>
                {event.hostedBy}
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>

      </Segment>
      <Segment>
        <span>
          <Icon name = 'clock'/>{event.date}
          <Icon name = 'marker' />{event.venue}
        </span>
      </Segment>
      <Segment>
        <List horizontal>
          {event.attendees.map(attendee => (
            <EventListAttendee key={attendee.id} attendee={attendee}/>

          ))}

        </List>
      </Segment>
      <Segment clearing>
        <span>{event.description}</span>
        <Button color='teal' floated='right' content='view'/>
      </Segment>
    </Segment.Group>
  )
}