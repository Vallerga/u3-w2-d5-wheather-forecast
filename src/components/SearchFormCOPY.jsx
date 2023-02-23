import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {
    const [search, setSearch] = useState('');

  const navigate = useNavigate();

  
    const city = useSelector((state) => state.city)
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch()
    }
 
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    dispatch({ type: 'CITY_ADD', payload: search})
  }, [])

  //   const [city, setcity] = useState('');
  //   const params = useParams();

  const fetchBase = "";

  // useEffect(() => {
  //  setcity()
  // }, [])

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={search}
              onChange={handleChange}
              placeholder="Select a city"
            />
          </Form>
        </Col>
        <Col xs={10} className='mx-auto mb-5'>{city?"city":'devi digitare una citta'} risultati ricerca</Col>
      </Row>
    </Container>
    )
}

// `${city}`

export default SearchForm;
