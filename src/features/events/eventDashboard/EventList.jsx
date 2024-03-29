import React from 'react';
import EventListItem from './EventListItem';

export default function EventList({events, selectEvent}){
  return(
    <>
    {events.map( event => (
      <EventListItem event={event} selectEvent={selectEvent} key={event.id}/>
    ))}
    </>
  )
}