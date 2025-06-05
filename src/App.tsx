import { useState } from "react";
import GeoLocationCard from "./components/GeoLocationCard";
import { PrivacyNotice } from "./components/PrivacyNotice";
import { Button } from "./components/Button";
import { AppContainer } from "./components/AppContainer";

function App() {
  const [showLocation, setShowLocation] = useState(false);

  return (
    <AppContainer>
      {!showLocation && <Button setShowLocation={() => setShowLocation(true)} />}
      <div className="w-full flex justify-center">{showLocation && <GeoLocationCard />}</div>
      <div className="align-self-bottom">
        <PrivacyNotice />
      </div>
    </AppContainer>
  );
}

export default App;
