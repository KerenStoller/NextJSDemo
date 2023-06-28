import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const client = await MongoClient.connect(
    'mongodb+srv://KerenStoller:212keRen&$@cluster0.wfh2cmy.mongodb.net/MeetupDB?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();

  client.close();
  res.status(200).json(
    meetups.map((meetup) => ({
      title: meetup.title,
      address: meetup.address,
      image: meetup.image,
      description: meetup.description,
      id: meetup._id.toString(),
    }))
  );
}
