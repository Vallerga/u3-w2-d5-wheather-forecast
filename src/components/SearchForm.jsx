import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

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

export default SearchForm;
