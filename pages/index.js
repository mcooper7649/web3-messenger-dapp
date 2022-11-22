import Head from 'next/head';
import SignIn from './signin';
export default function Home() {
  const isAuthenticated = false;
  if (!isAuthenticated) return <SignIn />;
  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse Dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
