import clientPromise from "../lib/mongodb";

export default function Allusers({ user }) {
    return (
        <div>
            <h1>All Users Identity</h1>
            <p>
                <small>(Signed up users)</small>
            </p>
            <ul>
                {user.map((singleuser, index) => (
                    <li key={index}>
                        <h1>{singleuser.name}</h1>
                        <h3>{singleuser.email}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("test");

        const user = await db
            .collection("users")
            .find({})
            .toArray();

        return {
            props: { user: JSON.parse(JSON.stringify(user)) },
        };
    } catch (e) {
        console.error(e);
    }
}