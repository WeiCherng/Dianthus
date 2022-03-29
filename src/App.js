import { useState } from "react";
import "./App.css";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <Header color={visible}/>
      {!visible && <Landing onStart={setVisible}/>}
      {visible && <Content />}
    </div>
  );
}

export default App;
