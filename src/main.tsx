import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import { Provider as StoreProvider } from "react-redux";
import store from "app/store";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "api/apolloClient";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </StoreProvider>
  </React.StrictMode>
);
