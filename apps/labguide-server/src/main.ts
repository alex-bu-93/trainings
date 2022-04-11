import * as express              from 'express';
import * as path                 from 'path';
import * as bodyParser           from 'body-parser';
import { MongoClient, ObjectId } from 'mongodb'

const app = express();
app.use(express.static(path.join(__dirname, '../../../dist/apps/labguide')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongo = new MongoClient('mongodb://localhost:27017');
mongo.connect();

app.get('/notes', async (req, res) => {
  const notes = await mongo.db('labguide').collection('notes').find(req.query).toArray();
  res.send(notes);
});

app.post('/notes', async (req, res) => {
  await mongo.db('labguide').collection('notes').insertOne(req.body);
  res.end();
});

app.delete('/notes', async (req, res) => {
  await mongo.db('labguide').collection('notes').deleteOne({_id: new ObjectId(req.body._id)});
  res.end();
});

app.listen(8080);
