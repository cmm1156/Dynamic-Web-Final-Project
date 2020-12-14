import React from "react";
import UserProfileComponent from "../components/UserProfileComponent";
import { useParams } from "react-router-dom";
import axios from "axios";
const { id } = useParams();

function UserProfile({ userAuthInfo }) {
  return (
    <div>
      <h1>User Profile</h1>
      <UserProfileComponent userAuthInfo={userAuthInfo} />
    </div>
  );
}

export default UserProfile;
