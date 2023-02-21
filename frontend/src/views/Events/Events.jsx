import EventsView from "./EventsView";

export default function Events() {
  
  return <EventsView/>;
}

// const {response,error} = useFetch("https://rickandmortyapi.com/api/character",{
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(credentials),
//   });
// console.log(response)
//     return(
//         <EventsView events={response}/>
//     )
