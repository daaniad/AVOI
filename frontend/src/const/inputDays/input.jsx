const dayWeek = {
    L: "Lunes",
    M: "Martes",
    X: "Miercoles",
    J: "Jueves",
    V: "Viernes",
    S: "Sabado",
    D: "Domingo"
  };
  
  const hour = {
    1: "Mañana",
    0: "Tarde"
  };
  
  export default function Input({list}) {
    return (
      <ul >
        {list.map(item => (
          <li>Dia de la semana: {dayWeek[item.day]} en horario: {hour[item.hour]}</li>

        ))}
      </ul>
    );
  }