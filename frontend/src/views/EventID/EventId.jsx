import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import EventIdView from "./EventIdView"
export default function EventId() {
    const { id } = useParams(); //Lo llamamos id porque en App.jsx el path lo llamamos ":id"
  const [event, setEvent] = useState(null);

  useEffect(function () {
    async function fetchEvent() {
      const response = await fetch(
        `http://localhost:3000/event/${id}`
      );
      const data = await response.json();
      setEvent(data);
    }
    fetchEvent();
  }, []);
  return <EventIdView event={event} />;
}