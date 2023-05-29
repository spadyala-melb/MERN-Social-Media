import React, { useEffect, useState } from "react";
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import ProfileRightSidebar from "../../components/profileRightSidebar/ProfileRightSidebar";
import Feed from "../../components/feed/Feed";
import axios from "axios";
import { API_BASE_URL } from "../../utils/constants";
import { useUserContext } from "../../hooks/useUserContext";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { user } = useUserContext();
  const [profile, setProfile] = useState();
  let { id } = useParams();
  console.log("match id: ", id);

  console.log("profile: ", profile);

  useEffect(() => {
    console.log("inside useEffect");
    const fetchProfileUser = async () => {
      const response = await axios.get(`${API_BASE_URL}/users/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setProfile(response.data);
    };
    fetchProfileUser();
  }, []);

  return (
    <>
      <Topbar />
      <div className="profile-container">
        {/* <LeftSidebar className="profile-left-sidebar" /> */}
        {profile && <ProfileRightSidebar profile={profile} />}
      </div>
    </>
  );
};

export default Profile;
