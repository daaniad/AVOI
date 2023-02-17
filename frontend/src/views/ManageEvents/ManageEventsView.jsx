import { useState } from "react";

export default function ManageEventsView() {
  const [newEvent, setNewEvent] = useState(null)

  function handleInput (event) {
    const events = {
      ...newEvent,
      [event.target.name]: event.target.value
    };
    
  }
  return (
    <>
      <h1>Esto es Manage Events</h1>

      <form className="row g-3">
        <input></input>
      </form>
      
    </>
  );
}
