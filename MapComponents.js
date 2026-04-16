import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";
import axios from "axios";

const containerStyle = {
  width: "100%",
  height: "400px"
};

const defaultCenter = {
  lat: 22.3039, // default Rajkot
  lng: 70.8022
};

export default function MapComponent() {
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState(defaultCenter);

  const handleSearch = async () => {
    const res = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=YOUR_API_KEY`
    );

    const loc = res.data.results[0].geometry.location;

    setPosition({
      lat: loc.lat,
      lng: loc.lng
    });
  };

  return (
    <div className="card">
      <div className="flex gap-2 mb-3">
        <input
          className="input"
          placeholder="Enter location (e.g., Rajkot)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={10}>
          <Marker position={position} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}