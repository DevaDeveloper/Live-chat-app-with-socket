import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";

const socket = io.connect("http://localhost:5000");

function App() {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");

  const joinRoom = () => {
    if (username !== "" && roomId !== "") {
      socket.emit("join_room", roomId);
    }
  };

  return (
    <div className="App">
      <div className="joinChatContainer">
        <h3>whatsapp</h3>
        <input
          type="text"
          placeholder="ime..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="ID sobe..."
          onChange={(e) => {
            setRoomId(e.target.value);
          }}
        />
        <button onClick={joinRoom}>pridruzi se sobi</button>
      </div>

      <Chat socket={socket} username={username} room={roomId} />
    </div>
  );
}

export default App;
