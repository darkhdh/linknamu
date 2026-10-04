import { MongoClient } from "mongodb";

// MONGODB_URI가 있으면 MongoDB Atlas에, 없으면 메모리에 저장한다 (서버 재시작 시 초기화)
const uri = process.env.MONGODB_URI;

const globalForClicks = globalThis as unknown as {
  mongoClient?: Promise<MongoClient>;
  memoryClicks?: Map<string, number>;
};

function getCollection() {
  globalForClicks.mongoClient ??= new MongoClient(uri!).connect();
  return globalForClicks.mongoClient.then((client) =>
    client.db().collection<{ _id: string; count: number }>("clicks"),
  );
}

export async function recordClick(linkId: string): Promise<number> {
  if (uri) {
    const clicks = await getCollection();
    const doc = await clicks.findOneAndUpdate(
      { _id: linkId },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return doc?.count ?? 1;
  }

  const memory = (globalForClicks.memoryClicks ??= new Map());
  const count = (memory.get(linkId) ?? 0) + 1;
  memory.set(linkId, count);
  return count;
}
