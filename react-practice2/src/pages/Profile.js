import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProfileData = {
  soohyun: {
    id: 1,
    name: '신수현',
    description: '신수현의 프로필입니다.',
  },
  gildong: {
    id: 2,
    name: '홍길동',
    description: '홍길동의 프로필입니다.',
  },
};

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const profile = ProfileData[username];

  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <div onClick={() => navigate(-1)}>뒤로가기</div>
    </div>
  );
};

export default Profile;
