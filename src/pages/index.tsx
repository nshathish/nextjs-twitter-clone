import Head from 'next/head';

import SideBar from '@/components/layout/sidebar';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>NextJs Twitter clone</title>
        <meta name='description' content='NextJs Twitter clone' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex min-h-screen max-w-7xl mx-auto'>
        <SideBar />
      </main>

    </div>
  );
}
