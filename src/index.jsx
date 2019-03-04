import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./main/reducer";
import Routes from "./main/routes";
import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { ConnectedRouter } from "react-router-redux";

const history = createBrowserHistory();

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(thunk, multi, promise)(createStore)(
  reducers,
  devTools
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter store={store} history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
