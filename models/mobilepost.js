
import mongoose from "mongoose";

const mobileSchema = new mongoose.Schema({


   tag: { type: String, required: true },
   name: { type: String, required: true, unique: true },
   category: { type: String, required: true },
   subdesc: { type: String, required: true },
   price: { type: String, required: true },
   officialprice: {
      varient1: { type: String, required: true },
      varient2: { type: String, required: true },
      varient3: { type: String, required: true }
   },
   unofficialprice: {
      varient4: { type: String, required: true },
      varient5: { type: String, required: true },
      varient6: { type: String, required: true }
   },
   articlelink: { type: String, required: true },
   articleimg: { type: String, required: true },
   articleimg2: { type: String, required: true },
   articleimg3: { type: String, required: true },
   articleimg4: { type: String, required: true },
   articleimg5: { type: String, required: true },
   articleimg6: { type: String, required: true },
   postdescription: { type: String, required: true },
   highlight: { type: String, required: true },
   config: {
      launch: {
         announced: { type: String, required: true },
         release: { type: String, required: true }
      },
      display: {
         type: { type: String, ruquired: true },
         size: { type: String, ruquired: true },
         resolution: { type: String, ruquired: true },
         protection: { type: String, ruquired: true }
      },
      camera: {
         maincam: {
            mainmodule: { type: String, ruquired: true },
            mainvideo: { type: String, ruquired: true }
         },
         selfiecam: {
            selfiemodule: { type: String, ruquired: true },
            selfievideo: { type: String, ruquired: true }

         }
      },
      body: {
         dimensions: { type: String, ruquired: true },
         weight: { type: String, ruquired: true },
         buildof: { type: String, ruquired: true },
         slot: { type: String, ruquired: true }
      },
      memory: { type: String, ruquired: true },
      battery: {
         type: { type: String, ruquired: true },
         charging: { type: String, ruquired: true }
      },
      network: { type: String, required: true },
      connectivity: {
         wifihotspot: { type: String, ruquired: true },
         bluetooth: { type: String, ruquired: true },
         radio: { type: String, ruquired: true },
         usb: { type: String, ruquired: true }
      },
      features: {
         faceid: { type: String, ruquired: true },
         fingerprint: { type: String, ruquired: true }
      }

   },
   prosandcons: {
      pros: {
         PR1: { type: String },
         PR2: { type: String },
         PR3: { type: String },
         PR4: { type: String },
         PR5: { type: String },
         PR6: { type: String }

      },
      cons: {
         CR1: { type: String },
         CR2: { type: String },
         CR3: { type: String }
      }
   },
   opinion: { type: String, required: true },
   postimg: { type: String, required: true, unique: true }

}, { timestamps: true });
mongoose.models = {}
export default mongoose.model("mobileblogs", mobileSchema)