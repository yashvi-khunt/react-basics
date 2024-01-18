import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIcecreamContainer from "./components/HooksIcecreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        {/* <HooksCakeContainer />
        <HooksIcecreamContainer /> */}
        {/* <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
