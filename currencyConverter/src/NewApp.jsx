import React from "react";
import ConvertorCard from "./components/ConvertorCard";
import CountryListCard from "./components/CountryListCard";
import { Provider } from "react-redux";
import store from "./redux/store";

function NewApp() {
  return (
    <>
      <Provider store={store}>
        <div
          className="w-full h-screen flex flex-wrap gap-10 justify-center items-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          }}
        >
          <CountryListCard />
          <ConvertorCard />
        </div>
      </Provider>
    </>
  );
}

export default NewApp;
