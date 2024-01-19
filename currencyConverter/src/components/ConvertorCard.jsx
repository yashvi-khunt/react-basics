import React from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import { useState, useEffect } from "react";
import InputBox from "./InputBox";
import { useSelector, useDispatch } from "react-redux";
import { updateCountry } from "../redux/countryActions";

function ConvertorCard() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("gbp");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const topCountries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const reset = () => {
    setAmount(0);
    setConvertedAmount(0);
  };

  const convert = () => {
    console.log("debouncing " + amount);
    setConvertedAmount(amount * currencyInfo[to] || 0);
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      convert();
    }, 500);

    return () => clearTimeout(getData);
  }, [amount]);

  useEffect(() => {
    if (!topCountries.includes(to)) {
      dispatch(updateCountry(to));
    }
  }, [amount]);

  return (
    <div className="">
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <div className="w-full mb-1">
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => {
              setFrom(currency);
              reset();
            }}
            onAmountChange={(amount) => setAmount(amount)}
            selectCurrency={from}
          />
        </div>
        <div className="relative w-full h-0.5">
          <button
            type="button"
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
            onClick={swap}
          >
            swap
          </button>
        </div>
        <div className="w-full mt-1 mb-4">
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => {
              setTo(currency);
              reset();
            }}
            selectCurrency={to}
            amountDisable
          />
        </div>
      </div>
    </div>
  );
}

export default ConvertorCard;
