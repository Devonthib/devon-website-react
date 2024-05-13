import { Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";

import store from "@redux/store";
import Home from "@pages/Home";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
