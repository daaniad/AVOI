import EventsView from "./EventsView";
import useFetch from "../../hooks/useFetch/useFetch";

export default function Events() {
  const {response, error} = useFetch(`http://localhost:3000/event`)
  
  return <EventsView events={response}/>;
}
