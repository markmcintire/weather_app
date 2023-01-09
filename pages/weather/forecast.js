import styles from '../../styles/forecast.module.css'
import { useRouter } from 'next/router'

export default function Home(forecast){
    const router = useRouter();
    const zone = router.query.zone
    return(
        <div>
        <h1 className={styles.title}> Forecast for {zone}</h1>
            {forecast &&
            forecast.forecast.properties.periods.map( day => (
                <div className = {styles.day} key={day.number}>
                    <h1 className = {styles.name}>{day.name}</h1>
                    <h2 className = {styles.forecast}>{day.detailedForecast}</h2>
                </div>
            ))}
        </div>
    )


}

export async function getServerSideProps( {query} ){
    const zone = query.zone
    const res = await fetch(`https://api.weather.gov/zones/land/${zone}/forecast`)
    const forecast = await res.json()

    return {
        props: {forecast}
    }
}