import { useState } from "react";
import GeoLocationCard from "./components/GeoLocationCard";
import { PrivacyNotice } from "./components/PrivacyNotice";
import { AppWrapper } from "./components/AppWrapper";
import { Button } from "./components/Button";

function App() {
  const [showLocation, setShowLocation] = useState(false);

  return (
    <AppWrapper>
      {!showLocation && <Button setShowLocation={() => setShowLocation(true)} />}
      <div className="w-full flex justify-center">{showLocation && <GeoLocationCard />}</div>
      <div className="align-self-bottom">
        <PrivacyNotice />
      </div>
    </AppWrapper>
  );
}

export default App;
