import { useState } from "react";
import { useGeoLocation } from "./hook/useGeoLocation";
import "./App.css";

function App() {
  const [showLocation, setShowLocation] = useState(false);
  const geo = useGeoLocation();

  return (
    <>
      {!geo.coordinates && <button onClick={() => setShowLocation(true)}>Get Location</button>}
      <div>
        {showLocation &&
          (geo.loading ? (
            "Loading..."
          ) : geo.error ? (
            `Error: ${geo.error}`
          ) : geo.coordinates ? (
            <div className="card">
              <div className="card__header">
                <h2 className="card__title">Your Location</h2>
              </div>
              <p className="card__content">Lat: {geo.coordinates.latitude}</p>
              <p className="card__content">Lon: {geo.coordinates.longitude}</p>
            </div>
          ) : null)}
      </div>
    </>
  );
}

export default App;
