import React from "react";

const ProfileCard: React.FC = (): JSX.Element => {
  return (
    <div className="w-screen h-screen bg-gray-200">
      <div className="w-1/2 bg-white rounded-lg mx-auto py-10">
        {/* <button>Edit</button> */}
        <img
          className="mx-auto rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&s"
          alt="Profile"
        />
        <div className="mb-5">
          <span className="block text-center">Employee Name</span>
          <h1 className="block text-center text-lg font-bold">
            John Doe Francis
          </h1>
        </div>
        <div className="mb-5">
          <span className="block text-center">Department</span>
          <h1 className="block text-center text-lg font-bold">Healthcare</h1>
        </div>
        <div className="flex justify-between w-1/2 mx-auto">
          <div>
            <span className="block">Job Title</span>
            <h1 className="block text-lg font-bold">Nurse</h1>
          </div>
          <div>
            <span className="block">Job Category</span>
            <h1 className="block text-lg font-bold">Full Time</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
