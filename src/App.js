import CountriesList from "./components/CountriesList/CountriesList.js";
import Navbar from "./components/Navbar/Navbar"
import countries from "./countries.json"
import style from "./Apps.module.css"

function App() {
  return (
    <div>
        <Navbar />
        <div className={style.container}>
        <CountriesList countries={countries}/>

        </div>
        
    </div>
  );
}

export default App;
