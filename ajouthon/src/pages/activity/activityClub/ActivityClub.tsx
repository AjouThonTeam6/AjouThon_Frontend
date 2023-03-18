import React from "react";
import { Outlet } from "react-router-dom";

const ActivityClub = () => {
  return (
    <div>
      <h1>This is ActivityClub page !</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default ActivityClub;
