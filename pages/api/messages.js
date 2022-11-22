// posts.js

import clientPromise from '../../mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('web3Messenger');
  switch (req.method) {
    case 'POST':
      let bodyObject = JSON.parse(req.body);
      let myPost = await db.collection('messages').insertOne(bodyObject);
      res.json(myPost.ops[0]);
      break;
    case 'GET':
      const allPosts = await db.collection('messages').find({}).toArray();
      res.json({ status: 200, data: allmessages });
      break;
  }
}
