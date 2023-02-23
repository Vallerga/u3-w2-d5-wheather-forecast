import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [CityAlternative, setCityAlternative] = useState([]);
  const dispatch = useDispatch();

  const keyAuthenticator = "f3059d3a18356e8fd792da082f6f1418";
  const cityFetch = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=appid=${keyAuthenticator}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(cityFetch);
      if (response.ok) {
        const { data } = await response.json();
        setCityAlternative(data);
        dispatch({
          type: "CITY_ADD",
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
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
      {CityAlternative && (
        <Row xs={10} className="mx-auto mb-5">
          {CityAlternative.map((city, i) => (
            <Link className="nav-link" to="/WeatherForecast">
              <Col key={`city-${i}`} data={city}>
                {city.local_names.it}
              </Col>
            </Link>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default SearchForm;
