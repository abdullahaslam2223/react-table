import { NavigateFunction, useNavigate } from "react-router-dom";

const App = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const handleAgencyClick = (): void => {
    navigate("agency");
  };
  const handleShiftClick = (): void => {
    navigate("shift");
  };
  const handleProfileClick = (): void => {
    navigate("profile/details");
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-5 text-center font-bold">
        Use these button to navigate across application
      </h1>
      <div className="w-1/2 p-10 bg-green-300 mx-auto">
        <button
          onClick={handleAgencyClick}
          className="p-2 bg-gray-500 text-white rounded mb-2 w-full hover:bg-gray-600"
        >
          Agency
        </button>
        <button
          onClick={handleShiftClick}
          className="p-2 bg-red-500 text-white rounded mb-2 w-full hover:bg-red-600"
        >
          Shift
        </button>
        <button
          onClick={handleProfileClick}
          className="p-2 bg-orange-500 text-white rounded w-full hover:bg-orange-600"
        >
          Profile
        </button>
      </div>
    </div>
  );
};

export default App;
