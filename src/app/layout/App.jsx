import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';

function App() {
  return (
    <div >
      <h1>Re-vents</h1>
      <NavBar/>
      <EventDashboard/>
    </div>
  );
}

export default App;
