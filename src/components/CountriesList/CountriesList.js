import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import style from "./CountriesList.module.css"

function CountriesList (props){
    const getFlag=c=>String.fromCodePoint(...[...c.toUpperCase()].map(x=>0x1f1a5+x.charCodeAt()));
    return (
        <div className={style.list} >
            {props.countries.map((currentCountrie) => {
                return (
                        <Link to={`/${currentCountrie.alpha3Code}`} className={style.btn}>
                            <button className="btn list-group-item list-group-item-action">
                                <p>{`${getFlag(currentCountrie.alpha2Code)} ${currentCountrie.name.common}`}</p>
                            </button>
                        </Link>
                );
             })}  
        </div>
    )
}

export default CountriesList;