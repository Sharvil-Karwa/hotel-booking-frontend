import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function Roomscreen() {
  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `http://localhost:4000/api/rooms/room/${id}`
        );
        setRoom(data);
        console.log(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <div className="flex justify-center items-center bs m-5">
          <Card className="w-96">
            <CardHeader color="blue" className="relative h-56">
              <img
                src={room.imageurls[0]}
                alt="img-blur-shadow"
                className="h-full w-full "
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="text-blue-500 mb-2">
                Booking details
              </Typography>
              <Typography variant="h2" className="mb-2">
                {room.name}
              </Typography>
              <Typography variant="h1" className="">
                From: <hr />
                To: <hr />
                Capacity: {room.maxcount}
                <hr />
                No. of days: <hr />
                Rent per day: {room.rentperday} <hr />
                Price: <hr />
              </Typography>
              <Button className="mt-2">Pay Now</Button>
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Roomscreen;
