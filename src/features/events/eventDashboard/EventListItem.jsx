import React from "react";
import {
  Button,
  Icon,
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  List,
  Segment,
} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem({ event, selectEvent }) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={event.hostPhotoURL} />
            <ItemContent>
              <ItemHeader content={event.title} />
              <ItemDescription content={event.description} />
            </ItemContent>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' />
          {event.date.toString()}
          <Icon name='marker' />
          {event.venue.address}
        </span>
      </Segment>
      <Segment>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        <Button
          color='teal'
          floated='right'
          content='Ver'
          onClick={() => {selectEvent(event); console.log(event);
          }}
        />
      </Segment>
    </Segment.Group>
  );
}
