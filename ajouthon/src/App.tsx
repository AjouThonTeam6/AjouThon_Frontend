import React from "react";
import { RecoilRoot } from "recoil";
import Router from "./Router";
import { GlobalStyle } from "./styles/Globalstyles";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Router />
    </RecoilRoot>
  );
}

export default App;
