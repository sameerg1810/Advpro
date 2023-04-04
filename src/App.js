import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserList from "./components/userCard";

function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="App container-fluid">
      <Navbar toggleVisible={toggleVisible} />
      <UserList visible={visible} />
    </div>
  );
}

export default App;
