import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import Burger from "./Burger/Burger";

function App() {
  return (
    <Provider store={store}>
      <Burger />
    </Provider>
  );
}

export default App;
