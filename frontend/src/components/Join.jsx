import React from "react";
import logo from "../buddy-chat-logo.png";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Join = () => {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = ({ name, room }) => {
    history.push(`/chat?name=${name}&room=${room}`);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-friends bg-cover">
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <img
            className="rounded-lg h-32 w-auto mx-auto shadow-lg"
            src={logo}
            alt="buddy-chat-logo"
          />

          <div className="my-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="name"
              ref={register({ required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">
                Name is required
              </p>
            )}
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name="room"
              type="text"
              placeholder="Room"
              ref={register({ required: true })}
            />
            {errors.room && (
              <p className="text-red-500 text-xs italic">Room is required</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Join;
