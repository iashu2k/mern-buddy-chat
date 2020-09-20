import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import ScrollToBottom from "react-scroll-to-bottom";
import Input from "./Input";
import Header from "./Header";
import Message from "./Message";
import Online from "./Online";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    console.log(message);
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  const [emojiPickerState, SetEmojiPicker] = useState(false);

  let emojiPicker;
  if (emojiPickerState) {
    emojiPicker = (
      <Picker
        title="Pick your emoji…"
        emoji="point_up"
        onSelect={(emoji) => setMessage(message + emoji.native)}        
      />
    );
  }

  return (
    <div className="bg-blue-200 min-h-screen flex flex-wrap justify-center items-center font-body">
    <div className="mr-2">{emojiPicker}</div>
    
      <div className="bg-white w-1/4 rounded-md shadow-md">
        <Header room={room} />
        
          <ScrollToBottom className="overflow-y-auto px-2 h-64 overscroll-contain">
            {messages.map((message, i) => (
              <div key={i}>
                <Message message={message} name={name} />
              </div>
            ))}
          </ScrollToBottom>
        

        <Input
          setMessage={setMessage}
          sendMessage={sendMessage}
          message={message}
          emojiPickerState={emojiPickerState}
          SetEmojiPicker={SetEmojiPicker}
        />
      </div>
      <Online users={users} />
    </div>
  );
};

export default Chat;
