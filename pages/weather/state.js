import {useRouter} from 'next/router'
import styles from "../../styles/state.module.css"


export default function Home({data}) {
    const router = useRouter();
    const area = router.query.area
    return (

    <div>

        <h1 className = {styles.title}>Forecast zones for {area}</h1>
        <h1 className = {styles.prompt}>Select a zone to view forecast</h1>
        {data &&
            data.features.map(zone => (
                <div className = {styles.zone} key={zone.properties.id}>
                    <a href={`./forecast?zone=${zone.properties.id}`}>{zone.properties.id} : {zone.properties.name}</a>
                </div>

        ))}
    </div>  
    
       
    )
}

export async function getServerSideProps( {query} ){
    //const router = useRouter();
    const area = query.area
    const res = await fetch(`https://api.weather.gov/zones/land?area=${area}`)
    const data = await res.json()
    return {
        props : { data },
    };

}