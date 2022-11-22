import Image from 'next/image';
import { signOut } from 'next-auth/react';

function Avatar({ username, user }) {
  console.log(user);
  return (
    <Image
      className="rounded-full bg-black cursor-pointer hover:opacity-75"
      onClick={() => {
        signOut({ redirect: '/signin' });
      }}
      layout="fill"
      alt="dicebear-avatar"
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user.address
      }.svg`}
    />
  );
}

export default Avatar;
