import {  useState } from "react";
import "./App.css";
import Header from "./components/Header";
import List1 from "./components/List1";
import List2 from "./components/List2";
import List3 from "./components/List3";
import myContext from "./components/store/myContext";
import Swith from "./components/Swith";

function App() {
  // const [name,setName]=useState('')
  // const children = (e) => {
  //   setName(e);
  // };

  return (
    <div className="App">
      {/* <Swith children={children} /> */}
      {/* <h1>{name}</h1> */}
      <Header />
      <myContext.Provider value={{ value: "ffff" }}>
        <List1 />
        <List2 />
        <List3 />
      </myContext.Provider>
    </div>
  );
}

export default App;
