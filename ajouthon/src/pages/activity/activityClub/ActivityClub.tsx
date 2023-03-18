import React from "react";
import { Outlet } from "react-router-dom";
import ClubTable from "../../../components/ClubTale";

const ActivityClub = () => {
  return (
    <div>
      <h1>This is ActivityClub page !</h1>
      <ClubTable></ClubTable>
      <Outlet></Outlet>
    </div>
  );
};

export default ActivityClub;
