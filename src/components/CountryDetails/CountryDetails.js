import { useParams } from "react-router-dom";
import style from "./CountryDetails.module.css"

function CountryDetails (props){
      
    const params = useParams();
    
    
    return (
        <div>
            {props.countries
                .filter((currentCountry) => {console.log(params.id); return (currentCountry.alpha3Code === params.id)})
                .map((currentCountry) => (
                <div className={style.info}>
                    <h1>{currentCountry.name.common}</h1>
                    <table className={style.table}>
                        <tr className={style.linha}>
                            <td>Capital</td>
                            <td>{currentCountry.capital}</td>
                        </tr>
                        
                        <tr className={style.linha}>
                            <td>Area</td>
                            <td>{`${currentCountry.area} km 2`}</td>
                        </tr>
                        
                        <tr className={style.linha}>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {currentCountry.borders.map((c)=><li>{c}</li>)}
                                </ul>
                            </td>
                        </tr>
                    </table>
                        
                    
                </div>
                ))}
        </div>
        
    );
}

export default CountryDetails;