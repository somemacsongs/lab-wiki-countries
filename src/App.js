import CountriesList from "./components/CountriesList/CountriesList.js";
import Navbar from "./components/Navbar/Navbar"
import CountryDetails from "./components/CountryDetails/CountryDetails.js";
import countries from "./countries.json"
import style from "./Apps.module.css"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
        <Navbar/>
        <div className={style.container}>
        <CountriesList countries={countries}/>
        <Routes>
          
            <Route path=":id" element={ <CountryDetails countries={countries} /> } />
          
        </Routes>
        </div>
    </div>
  );
}

export default App;
