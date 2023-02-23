import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import CardWeather from "./CardWeather";

const WeatherForecast = () => {

  const dispatch = useDispatch();

  const lon = useSelector((state) => state.lon)
  const lat = useSelector((state) => state.lat)

  const keyAuthenticator = "ee6a1ff9ab910d226f6e1b7297aa8b01";
  const cityFetch = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyAuthenticator}`;

  useEffect(() => {
    getWeather()
  }, [])

  const getWeather = async () => {
    try {
      const response = await fetch(cityFetch)
      if (response.ok) {
        const { data } = await response.json()
        dispatch({
          type: "WEATHER_CARD",
          payload: data,
        });
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }  

  return (
    <Container>
      <Row>
        <Col>
          <CardWeather/>
        </Col>
      </Row>
    </Container>
  );
};
export default WeatherForecast;



//experiment

// const handleChange = (e) => {
//   setQuery(e.target.value);
// };
//   const [city, setcity] = useState('');
//   const params = useParams();
// useEffect(() => {
//  setcity()
// }, [])