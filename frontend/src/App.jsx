import React from "react";
import NavigationBar from "./components/Navbar"; // Assuming NavigationBar is in the same folder
import MyProject from "./components/Project";

function App() {
  return (
    <>
      <h1>HELLO MUSA</h1>
      <NavigationBar />
      <MyProject />
      <NavigationBar />
    </>
  );
}

export default App;
