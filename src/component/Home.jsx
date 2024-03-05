import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let [val, setval] = useState();
  const navigate = useNavigate();
  const Joinroom = useCallback(() => {
    navigate(`/room/${val}`);
  },[val,navigate]);

  return (
    <div>
      <input
        type="text"
        placeholder="enter your room code"
        onChange={e => setval(e.target.value)}
      />
      <button onClick={Joinroom}>Join Room</button>
    </div>
  );
};

export default Home;
