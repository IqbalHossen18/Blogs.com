
import mongoose from "mongoose";

const Usersschema = new mongoose.Schema({
  name:{type:String, required:true},
  email:{type:String, unique:true,  required:true},
  password:{type:String, required:true}
},{timestamps:true});
mongoose.models = {}
export default mongoose.model('Users', Usersschema)