import mongoose, { Schema } from "mongoose";

const punctuationSchema = new Schema(
    {
        username: String,
        puntuations:[{
            
            film:{
                type:String,
                unique:true,
            }, 
            puntuation: 
            {
                type:Number,
                unique:true,
            } ,
        }],
    },
    {
        versionKey:false,
        Timestamp:true
    }


)

export default mongoose.model("punctuations", punctuationSchema)