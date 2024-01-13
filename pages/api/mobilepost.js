// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToMongo from "../../lib/mongoose";
import mobilepost from "../../models/mobilepost";
const handler = async (req, res) => {
    try {
        if (req.method === "POST") {
            try {
                // Destructure the required fields from req.body
                const {
                    tag,
                    name,
                    category,
                    subdesc,
                    price,
                    officialprice,
                    unofficialprice,
                    articlelink,
                    articleimg,
                    articleimg2,
                    articleimg3,
                    articleimg4,
                    articleimg5,
                    articleimg6,
                    postdescription,
                    highlight,
                    config,
                    prosandcons,
                    opinion,
                    postimg
                } = req.body;


                // Create a new instance of the watchpost model with the provided data
                const newpost = new mobilepost({
                    tag,
                    name,
                    category,
                    subdesc,
                    price,
                    officialprice,
                    unofficialprice,
                    articlelink,
                    articleimg,
                    articleimg2,
                    articleimg3,
                    articleimg4,
                    articleimg5,
                    articleimg6,
                    postdescription,
                    highlight,
                    config,
                    prosandcons,
                    opinion,
                    postimg
                });

                // Save the new post to the database
                await newpost.save();

                // Respond with a success message
                res.status(200).json({ success: 'mobile post added' });
                // res.status(200).json(newpost)
            } catch (error) {
                // If there's an error, respond with a 500 status and the error message
                res.status(500).json({ error: error.message });
            }
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

export default connectToMongo(handler);
