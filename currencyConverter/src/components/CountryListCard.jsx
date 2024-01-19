import React, { useEffect, useState } from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import { useSelector } from "react-redux";

function CountryListCard() {
  const topCountries = useSelector((state) => state.countries);
  const currencyInfo = useCurrencyInfo("usd");
  const [topCountriesInfo, setTopCountriesInfo] = useState([]);

  const mapCurrency = () => {
    const topCountriesInfo = topCountries.map((country) => {
      return {
        country: country,
        currency: currencyInfo[country],
      };
    });
    setTopCountriesInfo(topCountriesInfo);
  };

  useEffect(() => {
    mapCurrency();
  }, [topCountries, currencyInfo]);

  return (
    <div>
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/50">
        <table className="table-fixed w-full">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <td>Country</td>
              <td>Equivalent USD</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>USD</td>
              <td>1</td>
            </tr>
            {topCountriesInfo.map((country) => {
              return (
                <tr key={country.country}>
                  <td>{country.country.toUpperCase()}</td>
                  <td>{country.currency}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryListCard;
