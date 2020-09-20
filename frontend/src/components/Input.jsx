import React from "react";

import { MdSend } from "react-icons/md";
import { VscSmiley } from "react-icons/vsc";

const Input = ({
  setMessage,
  sendMessage,
  message,
  emojiPickerState,
  SetEmojiPicker,
}) => {
  const triggerPicker = (event) => {
    event.preventDefault();
    SetEmojiPicker(!emojiPickerState);
  };

  return (
    <div>
      <form className="flex m-2 items-center" autoComplete="off">
        <button onClick={triggerPicker}>
          <VscSmiley className="text-3xl mr-2 text-gray-400 hover:text-gray-700" />
        </button>

        <input
          className="shadow appearance-none border rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="message"
          type="text"
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
          placeholder="Type a message..."
          autoFocus
        />
        <button
          className="text-blue-500 hover:text-blue-700 font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline cursor-pointer"
          onClick={(e) => sendMessage(e)}
        >
          <MdSend className="text-4xl" />
        </button>
      </form>
    </div>
  );
};

export default Input;
