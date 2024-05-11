import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Connector } from "@web3-react/types";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

function getLibrary(provider:any) {
  return new Web3(provider);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <Web3ReactProvider getLibrary={getLibrary}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  // </Web3ReactProvider>
);
