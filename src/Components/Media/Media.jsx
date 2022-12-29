import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import "./Media.css";
import MediaCard from "./MediaCard";
const Media = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [mystatuses, setMyStatuses] = useState([])
  useEffect(() => {
    if (email) {
      fetch(`https://instabook-thunder-server-440siddik.vercel.app/mystatuses?email=${email}`)
      .then(res => res.json())
      .then(data => setMyStatuses(data))
    }
  }, [email]);
  return (
    <div>
      <h1 className="text-center font-semibold text-3xl my-4">My Posts</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {mystatuses.map((mysts) => (
          <MediaCard mysts={mysts} key={mysts._id}></MediaCard>
        ))}
      </div>
    </div>
  );
};

export default Media;
