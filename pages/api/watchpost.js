// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToMongo from "../../lib/mongoose";
import watchpost from "../../models/watchpost";
const handler =  async(req, res)=> {
    try {
        if (req.method === "POST") {
            try {
                // Destructure the required fields from req.body
                const {
                    tag,
                    name,
                    category,
                    surname,
                    subdesc,
                    price,
                    articlelink,
                    articleimg,
                    postdescription,
                    highlight,
                    config,
                    resontobuy,
                    opinion,
                    postimg
                } = req.body;
        
                // Create a new instance of the watchpost model with the provided data
                const newpost = new watchpost({
                    tag,
                    name,
                    category,
                    surname,
                    subdesc,
                    price,
                    articlelink,
                    articleimg,
                    postdescription,
                    highlight,
                    config,
                    resontobuy,
                    opinion,
                    postimg
                });
        
                // Save the new post to the database
                await newpost.save();
        
                // Respond with a success message
                res.status(200).json({ success: 'post added' });
            } catch (error) {
                // If there's an error, respond with a 500 status and the error message
                res.status(500).json({ error: error.message });
            }
        }
                
    } catch (error) {
        res.status(500).json({error:error.message})
    }
   
  }
  
  export default connectToMongo(handler);
