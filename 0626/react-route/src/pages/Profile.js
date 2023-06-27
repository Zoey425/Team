import React from "react";
import { useNavigate, useParams } from "react-router-dom";


const ProfileDate = {
  zoey: {
    id: 1,
    name: "박은영",
    description: "리액트 강의 수강 중",
  },
  somi:{
    id:2,
    name:"소미",
    description : "아이돌입니다."
  },
};

const Profile = () => {
  const {username} = useParams();
  const navigate = useNavigate();
  const profile = ProfileDate[username]

  // console.log(useParams());
  // console.log(username);
  // console.log(useNavigate());
  console.log(profile);

  return (
    <div>
      <h3>{profile.name} ({username})이 무엇을하는 사람일까요</h3>
      <p>{profile.description}</p>
      <p onClick={() => navigate(-1)}></p>
    </div>
    )
}

export default Profile;