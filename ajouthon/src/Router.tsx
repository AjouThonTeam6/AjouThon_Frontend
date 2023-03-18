import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/account/login/Login";
import ActivityClub from "./pages/activity/activityClub/ActivityClub";
import ActivitySociety from "./pages/activity/activitySociety/ActivitySociety";
import ActivityWrite from "./pages/activity/activityWrite/ActivityWrite";
import Main from "./pages/main/Main";
import MemberClub from "./pages/member/memberClub/MemberClub";
import MemberSociety from "./pages/member/memberSociety/MemberSociety";
import RecordClub from "./pages/record/recordClub/RecordClub";
import RecordSociety from "./pages/record/recordSociety/RecordSociety";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/member-club" element={<MemberClub />}>
            {/* <Route path=":clubId" element={</>}></Route> */}
          </Route>
          <Route path="/activity-club/:clubId" element={<ActivityClub />}>
            <Route path="write" element={<ActivityWrite />}></Route>
          </Route>
          <Route path="/record-club/:clubId" element={<RecordClub />}></Route>

          <Route
            path="/member-society/:societyId"
            element={<MemberSociety />}
          ></Route>
          <Route path="/activity-society" element={<ActivitySociety />}>
            <Route path="write" element={<ActivitySociety />}></Route>
          </Route>
          <Route
            path="/record-society/:societyId"
            element={<RecordSociety />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
