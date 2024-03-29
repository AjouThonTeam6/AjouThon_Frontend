import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Login from "./pages/account/login/Login";
import ActivityClub from "./pages/activity/activityClub/ActivityClub";
import ActivitySociety from "./pages/activity/activitySociety/ActivitySociety";
import ActivityWrite from "./pages/activity/activityWrite/ActivityWrite";
import Help from "./pages/help/Help";
import Main from "./pages/main/Main";
import MemberClub from "./pages/member/memberClub/MemberClub";
import MemberSociety from "./pages/member/memberSociety/MemberSociety";
import RecordClub from "./pages/record/recordClub/RecordClub";
import RecordSociety from "./pages/record/recordSociety/RecordSociety";

const Router = () => {
  return (
    <BrowserRouter>
      <TopContainer>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="member-club" element={<MemberClub />}>
              {/* <Route path=":clubId" element={</>}></Route> */}
            </Route>
            <Route path="activity-club" element={<Outlet />}>
              <Route path="main" element={<ActivityClub />}></Route>
              <Route path="write" element={<ActivityWrite />}></Route>
            </Route>
            <Route path="record-club" element={<RecordClub />}></Route>

            <Route path="member-society" element={<MemberSociety />}></Route>
            <Route
              path="activity-society"
              element={
                <>
                  <Outlet />
                </>
              }
            >
              <Route path="main" element={<ActivitySociety />}></Route>
              <Route path="write" element={<ActivityWrite />}></Route>
            </Route>
            <Route path="record-society" element={<RecordSociety />}></Route>
            <Route path="help" element={<Help />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </TopContainer>
    </BrowserRouter>
  );
};

export default Router;

const TopContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
