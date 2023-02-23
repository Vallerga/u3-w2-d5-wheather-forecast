import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const WheatherForecast = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  // const city = useSelector((state) => state.city)
  // const navigate = useNavigate();
  // const [coordinateFetch, setCoordinateFetch] = useState([]);
  // const keyAuthenticator = "f3059d3a18356e8fd792da082f6f1418";
  // const cityFetch = `http://api.openweathermap.org/geo/1.0/direct?q=genoa&limit=5&appid=appid=${keyAuthenticator}`;

  //   try {
  //     const response = await fetch(cityFetch)
  //     if (response.ok) {
  //       const { data } = await response.json()
  //       setCoordinateFetch(data)
  //     } else {
  //       alert('the request result in an error!')
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }

  //experiment
  // const handleChange = (e) => {
  //   setQuery(e.target.value);
  // };
  //   const [city, setcity] = useState('');
  //   const params = useParams();
  // useEffect(() => {
  //  setcity()
  // }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CITY_ADD",
      payload: query,
    });
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Select a city"
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default WheatherForecast;
