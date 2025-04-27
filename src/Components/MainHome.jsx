import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const MainHome = ({ alumno }) => {
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f0f8ff",
    }}
  >
    <Card
      style={{
        width: "18rem",
        background: "linear-gradient(135deg, #0099cc, #00bfff)",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        color: "white",
        fontFamily: "'Georgia', serif",
      }}
    >
      <Card.Img variant="top" src={alumno.imagen} />
      <Card.Body>
        <Card.Title style={{ fontSize: "24px", textAlign: "center" }}>
          {alumno.nombre} {alumno.apellido}
        </Card.Title>
        <Card.Text style={{ fontSize: "16px", lineHeight: "1.5", textAlign: "center" }}>
          <hr style={{ borderColor: "white" }} />
          Estudiante de programación
          <hr style={{ borderColor: "white" }} />
          <ul>
            Lenguajes:
            {alumno.lenguajes.map((lenguaje, index) => (
              <li key={index} style={{ listStyleType: "none", textAlign:"center" }}>
                {lenguaje}
              </li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  );
};

export default MainHome;
