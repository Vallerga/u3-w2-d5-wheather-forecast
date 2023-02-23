import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from './components/SearchForm'
import WeatherForecast from './components/WeatherForecast';

function App() {
  return (
    // const city = useSelector((state) => state.city)


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchForm />} />
        <Route path="/WeatherForecast" element={<WeatherForecast />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// non sono riuscito a rendere funzionale l'app. Non mi funziona il primo fetch per avere le cordinate ed in generale non riesco ad usare correttamente le funzionalità di redux.
// Ho cercato di impostare l'esercizio almeno come logica e cercando di implementare le nuove funzionalità.