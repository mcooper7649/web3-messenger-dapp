import Image from 'next/image';
import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';
import { useState } from 'react';

function Header({ user }) {
  const [userProfile, setUserProfile] = useState({
    user,
    username: '',
  });
  console.log(userProfile);
  return (
    <div className="text-pink-500">
      <div className="">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            src="https://links.papareact.com/3pi"
            layout="fill"
            alt="profile-image"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div>
          <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar user={user} />
          </div>
          <h1 className="text-3xl">Welcome to the PAPAFAM Metaverse</h1>
          <h2 className="text-5xl font-bold truncate">
            {userProfile.username || user.address}
          </h2>
          <ChangeUsername setUserProfile={setUserProfile} />
        </div>
      </div>
    </div>
  );
}

export default Header;
