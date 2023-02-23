import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

function CardWeather() {
  const kelvin = useSelector((state) => state.main.temp);
  const temp = +kelvin -273.15
  const name = useSelector((state) => state.main.name);
  const description = useSelector((state) => state.main.weather.description);
  const icon = useSelector((state) => state.main.weather.icon);





  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={icon} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {temp} - {description}
        </Card.Text>        
      </Card.Body>
    </Card>
  );
}

export default CardWeather;
