import axios from "axios";
import React, { useEffect, useState } from "react";
import Example from "../components/Modal";
import Room from "../components/Room";

function Homescreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "http://localhost:4000/api/rooms/getAllRooms"
        );
        setRooms(data);
        console.log(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 gap-10">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          rooms.map((room) => <Room room={room} />)
        )}
      </div>
    </div>
  );
}

export default Homescreen;
