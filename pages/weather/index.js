import styles from "../../styles/startpage.module.css"
import { Inter } from '@next/font/google'
import { useRouter } from "next/router"



export default function Home() {
  const states = ["AL","AR","AZ","CA","CO","CT","DE","FL","GA","HI","IA","ID","IL","IN","KS","KY","LA",
    "MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","RI",
    "SC","SD","TN","TX","UT","VA","VT","WA","WI","WV","WY"]


  return (
    <div>
    <h1 className = {styles.title} >Select a State to view forecast zones</h1>
    {states &&
    states.map( state => (
      <div key={state}>
        <h1 className = {styles.state}><a href = {`weather/state?area=${state}`}>{state} </a></h1>
      </div>

    ))}
    </div>
  
  )
}
