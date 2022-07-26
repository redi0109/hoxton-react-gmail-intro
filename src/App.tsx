import "./App.css";


import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import MainSection from "./components/MainSection";


function App(){
  return (
    <div className="app">

      <Header /> 
      <LeftMenu/>
      <MainSection/>
    </div>
  )
}

export default App;
