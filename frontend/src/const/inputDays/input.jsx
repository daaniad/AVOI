const dayWeek = {
    1: "Lunes",
    2: "Martes",
    3: "Miercoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sabado",
    7: "Domingo"
  };
  
  const hour = {
    0: "Mañana",
    1: "Tarde"
  };
  
  export default function Input({ value, label }) {
    return (
      <div className="input-group">
        <label htmlFor={label}>{label}</label>
        <div className="input">
          <input type="text" value={dayWeek[value] || hour[value]} disabled />
        </div>
      </div>
    );
  }