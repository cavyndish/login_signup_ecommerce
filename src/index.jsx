import React from "react";
import { AuthProvider } from "react-oidc-context";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const oidcConfig = {
  onSignIn: () => {
    // Redirect?
  },
  authority:
    "https://twelveb2corg.b2clogin.com/twelveb2corg.onmicrosoft.com/b2c_1_susi_v2",
  client_id: "516246c7-af35-43bb-bf6b-cb40c333d3f9",
  redirect_uri: "http://localhost:3000/redirect.html",
  loadUserInfo: false,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>

  <BrowserRouter>
    <AuthProvider {...oidcConfig}>
      <ChakraProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>
    </AuthProvider>
  </BrowserRouter>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
