export default function MapCard(){
  return(
    <div className="card map-container">
      <h2 className="card-title">Emergency Alerts Map</h2>

      <iframe
        title="map"
        src="https://maps.google.com/maps?q=india&t=&z=5&ie=UTF8&iwloc=&output=embed"
        className="map.jpg"
        style={{height:"400px", border:"100", width:"100%"}}
      ></iframe>

      <button className="map-btn nav-active">Track My Location</button>
    </div>
  )
}