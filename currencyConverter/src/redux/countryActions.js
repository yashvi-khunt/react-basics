import { TOP_COUNTRIES } from "./countryTypes";

export const updateCountry = (country) => {
  return {
    type: TOP_COUNTRIES,
    payload: country,
  };
};
