import React from "react";
import Modal from "./Modal";

export default function Room({ room }) {
  return (
    <div className="w-full rounded-lg shadow-md lg:max-w-sm">
      <img
        className="object-cover w-full h-48"
        src={room.imageurls[0]}
        alt="image"
      />
      <div className="p-4">
        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
          {room.name.substring(0, 30)}...
        </h4>
        <p className="mb-2 leading-normal">
          {room.description.substring(0, 100)}...
        </p>
        <Modal room={room} />
      </div>
    </div>
  );
}
