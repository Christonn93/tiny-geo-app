import { useGeoLocation } from "../hook/useGeoLocation";

function GeoLocationCard() {
  const geo = useGeoLocation();
  if (geo.loading)
    return (
      <div className="flex justify-center items-center py-8 text-blue-600 font-semibold w-full text-center">
        Loading...
      </div>
    );
  if (geo.error)
    return (
      <div className="flex justify-center items-center py-8 text-red-600 font-semibold w-full text-center">
        Error: {geo.error}
      </div>
    );
  if (geo.coordinates) {
    return (
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-[0_4px_32px_0_rgba(200,200,200,0.25)] dark:shadow-[0_4px_32px_0_rgba(50,50,50,0.5)] rounded-2xl p-8 max-w-md mx-auto mt-8 flex flex-col items-center text-center transition-all">
        <div className="mb-4 w-full flex justify-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center w-full tracking-tight">
            Your Location
          </h2>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-200 w-full text-center font-mono">
          Lat: {geo.coordinates.latitude}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-200 w-full text-center font-mono">
          Lon: {geo.coordinates.longitude}
        </p>
      </div>
    );
  }
  return null;
}

export default GeoLocationCard;
