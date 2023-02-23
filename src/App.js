import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from './components/SearchForm'
import WheatherForecast from './components/WheatherForecast';

function App() {
  return (
    // const city = useSelector((state) => state.city)


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchForm />} />
        <Route path="/WheatherForecast" element={<WheatherForecast />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
