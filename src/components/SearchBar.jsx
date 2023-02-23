import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";


const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const dispatch = useDispatch()
  dispatch()

  return (
    <Form.Control
      type="search"
      value={query}
      onChange={handleChange}
      placeholder="Select a city"
    />
  );
};

export default SearchBar;
