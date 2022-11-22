import { getSession, signOut } from 'next-auth/react';
import Header from '../components/Header';

// gets a prop from getServerSideProps
function User({ user }) {
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <h1>Welcome to the app</h1>
      <h4 className="text-red">User session:</h4>
      <div className="max-w-screen-2xl mx-auto">
        <Header user={user} />
      </div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button className="btn" onClick={() => signOut({ redirect: '/signin' })}>
        Sign out
      </button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

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
    props: { user: session.user },
  };
}

export default User;
