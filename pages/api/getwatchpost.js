import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("test");

       const posts = await db
           .collection("watchblogs")
           .find({})
           .toArray();

       res.json(posts);
   } catch (e) {
       console.error(e);
   }
};