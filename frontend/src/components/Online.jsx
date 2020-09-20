import React from "react";
import { IoMdPerson } from "react-icons/io";
import { BsDot } from "react-icons/bs";

const Online = ({ users }) => {
  return (
    <div className="bg-white ml-2 rounded-md shadow-md py-4 px-8">
      <div className="bg-green-500 rounded-full text-center align-middle px-2 mb-2 text-white">Online</div>
      <div className="overflow-y-auto h-64 overscroll-contain">
      {users
        ? users.map((user, i) => (
            <div key={i} className="flex justify-start items-center ">
              <IoMdPerson />
              <div className="text-2xl text-center text-green-500"><BsDot/></div>
              <div className="ml-2 text-gray-700">{user.name}</div>
            </div>
          ))
        : null}
        </div>
    </div>
  );
};

export default Online;
