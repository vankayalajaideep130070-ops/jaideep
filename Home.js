import Navbar from "../components/Navbar"
import AlertForm from "../components/AlertForm"
import MapCard from "../components/MapCard"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Home(){

  const [alerts,setAlerts] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:5000/api/alerts")
    .then(res=>setAlerts(res.data))
  },[])

  return(
    <div>
      
      <Navbar/>

      
      <div className="hero">
        <h1 className="hero-title nav-active">Emergency Alert System</h1>
        <p className="hero-subtitle">
           All alerts are shared with emergency response teams.
        </p>
      </div>

      <div className="main-grid">
        <AlertForm/>
        <MapCard/>
      </div>

      <div style={{padding:"20px"}}>
        <h2>Recent Alerts</h2>

        {alerts.map(a=>(
          <div key={a._id} className="card" style={{marginTop:"10px"}}>
            <h3>{a.location}</h3>
            <p>{a.severity}</p>
            <p>{a.details}</p>
          </div>
        ))}
      </div>

    </div>
  )
}