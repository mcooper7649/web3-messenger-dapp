import Head from 'next/head';
import SignIn from '../components/signin';
export default function Home() {
  const isAuthenticated = false;
  if (!isAuthenticated) return <SignIn />;
  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse Dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen-2xl mx-auto">
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
