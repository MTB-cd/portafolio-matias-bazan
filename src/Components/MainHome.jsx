import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const MainHome = ({ alumno }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={alumno.imagen} />
      <Card.Body>
        <Card.Title>
          {alumno.nombre}
          {alumno.apellido}
        </Card.Title>
        <Card.Text>
          <hr />
          Estudiante de programacion
          <hr />
          <ul>
            Lenguajes : 
            {alumno.lenguajes.map((lenguaje, index) => (
                <li key={index}>{lenguaje}</li>
            ))}

          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MainHome;
