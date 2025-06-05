import { useGeoLocation } from "../hook/useGeoLocation";

function GeoLocationCard() {
  const geo = useGeoLocation();
  if (geo.loading) return <div className="flex justify-center items-center py-8 text-blue-600 font-semibold w-full text-center">Loading...</div>;
  if (geo.error) return <div className="flex justify-center items-center py-8 text-red-600 font-semibold w-full text-center">Error: {geo.error}</div>;
  if (geo.coordinates) {
    return (
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 max-w-md mx-auto mt-8 flex flex-col items-center text-center">
        <div className="mb-4 w-full flex justify-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center w-full">Your Location</h2>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-200 w-full text-center">Lat: {geo.coordinates.latitude}</p>
        <p className="text-lg text-gray-700 dark:text-gray-200 w-full text-center">Lon: {geo.coordinates.longitude}</p>
      </div>
    );
  }
  return null;
}

export default GeoLocationCard;
