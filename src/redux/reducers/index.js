const initialState = {
  lat: null,
  lon: null,
  country: null,
  city: null,
  coordinateFetch: [],
  weather: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CITY_ADD":
      return {
        ...state,
        lat: [action.payload.lat],
        lon: [action.payload.lon],
        country: [action.payload.country],
        city: [action.payload.name],
      };
      case "WEATHER_CARD":
        return {
          ...state,
          weather: [action.payload]
        };
    default:
      return state;
  }
};

export default mainReducer;
