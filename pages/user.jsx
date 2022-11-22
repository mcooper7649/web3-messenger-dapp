import { getSession, signOut } from 'next-auth/react';
import Header from '../components/Header';
import Messages from '../components/Messages';
import { useState } from 'react';

// gets a prop from getServerSideProps
function User({ user }) {
  const [userProfile, setUserProfile] = useState({
    user,
    username: '',
  });
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <h1>Welcome to the app</h1>
      <h4 className="text-red">User session:</h4>
      <div className="max-w-screen-2xl mx-auto">
        <Header
          user={user}
          userProfile={userProfile}
          setUserProfile={setUserProfile}
        />
      </div>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      {/* <button className="btn" onClick={() => signOut({ redirect: '/signin' })}>
        Sign out
      </button> */}
      <Messages userProfile={userProfile} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  let res = await fetch('http://localhost:3000/api/messages', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let allPosts = await res.json();

  // redirect if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  return {
    props: { user: session.user, allPosts: allPosts },
  };
}

export default User;
