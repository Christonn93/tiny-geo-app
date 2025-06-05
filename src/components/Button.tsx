type ButtonProps = {
  setShowLocation: (show: boolean) => void;
};

export const Button = ({ setShowLocation }: ButtonProps) => {
  return (
    <button
      onClick={() => setShowLocation(true)}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-lg mb-8 mx-auto"
    >
      Get Location
    </button>
  );
};
