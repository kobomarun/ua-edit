import { MongoClient, ObjectId } from "mongodb";

const dbName = "db-name";
const url = `mongodb+srv://root:mdf3Xb4S2crNOIjH@cluster0.tt47l.mongodb.net/ua?retryWrites=true&w=majority`;

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  if (!client.isConnected()) await client.connect();
  const db = client.db(dbName);
  return { db, client };
}

export { connect, ObjectId };
