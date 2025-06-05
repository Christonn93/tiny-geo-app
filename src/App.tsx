import { useState } from "react";
import GeoLocationCard from "./components/GeoLocationCard";
import { PrivacyNotice } from "./components/PrivacyNotice";
import { Appwrapper } from "./components/Appwrapper";
import { Button } from "./components/Button";

function App() {
  const [showLocation, setShowLocation] = useState(false);

  return (
    <Appwrapper>
      {!showLocation && <Button setShowLocation={() => setShowLocation(true)} />}
      <div className="w-full flex justify-center">{showLocation && <GeoLocationCard />}</div>
      <PrivacyNotice />
    </Appwrapper>
  );
}

export default App;
