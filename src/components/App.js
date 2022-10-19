import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [submitData, setSubmitData] = useState("")

  function handleSubmit(searchInput) {
    console.log("Submitted:", searchInput);
    setSubmitData(searchInput)
  }

  return (
    <div className="app">
      <Header submitSearch={handleSubmit} />
      <ListingsContainer search={submitData} />
    </div>
  );
}

export default App;
