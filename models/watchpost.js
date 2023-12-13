
import mongoose from "mongoose";

const Blogpostschema = new mongoose.Schema({


    tag:{type:String, required:true},
    name:{type: String , required:true, unique:true},
    category:{type:String , required:true},
    surname:{type: String , required:true},
    subdesc:{type: String , required:true},
    price:{type: String , required:true},
    articlelink:{type: String , required:true},
    articleimg:{type: String , required:true},
    postdescription:{type: String, required:true},
    highlight:{type: String , required:true},
    config:{
         display:{type:String, required:true},
         chip:{type:String, required:true},
         body:{type:String, required:true},
         batterylife:{type:String, required:true},
         fitnesshealth:{type:String, required:true},
         networkconnectivity:{type:String, required:true},
         waterresistantmemory:{type:String, required:true}
    },
    resontobuy:{
      pros:{
        PR1:{type:String},
        PR2:{type:String},
        PR3:{type:String},
        PR4:{type:String},
        PR5:{type:String},
        PR6:{type:String}

      },
      cons:{
        CR1:{type:String},
        CR2:{type:String},
        CR3:{type:String},
        CR4:{type:String},
        CR5:{type:String},
        CR6:{type:String}
      }
    },
    opinion:{type: String , required:true},
    postimg:{type:String, required: true , unique:true}

},{timestamps:true});
mongoose.models = {}
export default mongoose.model("watchposts", Blogpostschema)