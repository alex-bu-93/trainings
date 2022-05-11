import * as express              from 'express';
import * as path                 from 'path';
import * as bodyParser           from 'body-parser';
import * as cors                 from 'cors';
import { MongoClient, ObjectId } from 'mongodb'

const app = express();

app.use(cors());
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

app.get('/sections', async (req,res) => {
  const sections = await mongo.db('labguide').collection('sections').find(req.query).toArray();
  res.send(sections);
});

app.post('/sections', async (req, res) => {
  await mongo.db('labguide').collection('sections').insertOne(req.body, async (e, r) => res.send(r.insertedId));
});

app.delete('/sections', async (req, res) => {

  const sections = await mongo.db('labguide').collection('sections').find().toArray();
  const removedSectionsIds = getRemovedSectionsIds(req.query._id as string, sections);
  const removedSectionsObjectIds = removedSectionsIds.map(id => new ObjectId(id))

  await mongo.db('labguide').collection('notes').deleteMany({sectionId: {$in: removedSectionsIds}});
  await mongo.db('labguide').collection('sections').deleteMany({_id: {$in: removedSectionsObjectIds}});

  res.end();
});

app.listen(8080);


function getRemovedSectionsIds(id: string, sections: { _id: ObjectId, parentId?: string }[]): string[] {
  const removeIds = [id];
  sections = sections.filter(item => item._id.toString() !== id);

  const parentIds = sections.filter(i => i.parentId === id).map(i => i._id.toString());
  removeByParentIds(parentIds);

  function removeByParentIds(parentIds: string[]) {
    removeIds.push(...parentIds);
    const childrenIds = sections.filter(item => parentIds.includes(item.parentId)).map(item => item._id.toString());
    sections = sections.filter(i => !childrenIds.includes(i._id.toString()));
    if (childrenIds.length) removeByParentIds(childrenIds);
  }

  return removeIds;
}
