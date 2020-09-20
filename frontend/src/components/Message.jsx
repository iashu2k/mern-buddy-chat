import React from "react";

const Message = ({ name, message: { text, user } }) => {
  let time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  if (user === "admin") {
    return (
        <div className="flex justify-center">
        <div className="bg-gray-200 my-1 p-2 rounded-md text-xs break-words">{text}</div>
      </div>
    );
  } else {
    return isSentByCurrentUser ? (
      <div className="flex flex-col items-end px-4">
        <div className="bg-blue-200 my-1 px-4 py-2 rounded-br-none rounded-full break-words max-w-sm shadow-md">{text}</div>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    ) : (
        <div className="flex flex-col items-start">
        <p className="text-sm text-gray-600">{user}</p>
        <div className="bg-gray-300 mb-1 px-4 py-2 rounded-bl-none rounded-full break-words max-w-sm shadow-md">{text}</div>
        <p className="text-xs text-gray-500">{time}</p>
        </div>
    );
  }
};

export default Message;
