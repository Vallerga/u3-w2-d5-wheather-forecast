const initialState = {
  lat: null,
  lon: null,
  country: null,
  city: null,
  coordinateFetch: [],
  wheather: null,
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
      case "WHEATHER_CARD":
        return {
          ...state,
          wheather: [action.payload]
        };
    default:
      return state;
  }
};

export default mainReducer;
