import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';

export default function HomePage({ meetups }) {
  return (
    <>
      <Head>
        <title>React Next Meetups</title>
        <meta name='description' content='bla bla bla'/>
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/meetups');
  const data = await response.json();
  return { props: { meetups: data }, revalidate: 1 };
}
