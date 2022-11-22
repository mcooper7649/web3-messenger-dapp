import Image from 'next/image';
import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';

function Header({ user, setUserProfile, userProfile }) {
  console.log(userProfile);
  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700 text-pink-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            src="https://links.papareact.com/3pi"
            layout="fill"
            alt="profile-image"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
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
