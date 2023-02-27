import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import EventIdView from "./EventIdView";
export default function EventId() {
  const { id } = useParams(); //Lo llamamos id porque en App.jsx el path lo llamamos ":id"
  const [event, setEvent] = useState(null);
  const [updatedEvent, setUpdatedEvent] = useState(null);


  useEffect(function () {
    async function fetchEvent() {
      const response = await fetch(`http://localhost:3000/event/${id}`);
      const data = await response.json();
      setEvent(data);
    }
    fetchEvent();
  }, []);

  useEffect(function() {
    async function updateEvent() {
      const event = await fetch(`http://localhost:3000/event/update/${id}`);
      const updatedData = await event.json();
      setUpdatedEvent(updatedData)
    }
    updateEvent();
  }, [])
  return <EventIdView event={event} updateEvent={updatedEvent} setUpdatedEvent={setUpdatedEvent}/>;
}
