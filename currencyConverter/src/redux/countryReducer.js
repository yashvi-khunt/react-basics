import { TOP_COUNTRIES } from "./countryTypes";

const initialState = {
  countries: ["inr", "eur", "gbp", "jpy", "cad"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOP_COUNTRIES:
      return {
        ...state,
        countries: [...state.countries.slice(1), action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
