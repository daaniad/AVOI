import EventsView from "./EventsView";
import useFetch from "../../hooks/useFetch/useFetch";

export default function Events() {
    return <EventsView/>
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


/**
 * id   idUser   turno   idDiaSemana 
 * 1     23         2           L
 * 2     23         2           X
 * 3     23         1           J
 * 
 *                                                  56  turnoid ---> 1 idSemanan --> L 
 */