import Head from 'next/head';
import { useRouter } from 'next/router';
import MeetupDetail from '../../components/meetups/MeetupDetail';

export default function MeetupDetails(props) {
  const router = useRouter();

  const meetupData = router.query;
  console.log(props.secret);
  return (
    <>
      <Head>
        <title>{meetupData.title}</title>
        <meta name='description' content={meetupData.description}/>
      </Head>
      <MeetupDetail props={meetupData} />
    </>
  );
}

export function getStaticProps() {
  return { props: { secret: 'its me! Marios' } };
}

export async function getStaticPaths() {
  const response = await fetch('http://localhost:3000/api/meetups');
  const data = await response.json();
  const paths = data.map((meetup) => ({ params: { meetupId: meetup.id } }));

  return {
    paths: [...paths],
    fallback: true,
  };
}
