// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToMongo from "../../lib/mongoose";
import User from '../../models/Users';
const handler =  async(req, res)=> {
    try {
        if(req.method === "POST"){
            const {name , email , password} = req.body;
                  let newuser = new User({
                    name:name, email:email, password: password
                  })
                  await newuser.save()
                  res.status(200).json({success:'user added'})
         }else{
            res.status(400).json({error:'This method is not allowed'})
         }
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
   
  }
  
  export default connectToMongo(handler);
