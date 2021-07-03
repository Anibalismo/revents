import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import {useState} from 'react';
function App() {
  const [formOpen, setFormOpen] = useState(true)

  return (
    <>
      <NavBar setFormOpen={setFormOpen}/>
      <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
    </>
  );
}

export default App;
