import mongoose, { Schema } from "mongoose";

const punctuationSchema = new Schema(
    {
        username: String,
        puntuations:[{
            film:String,
            puntuation: Number
        }],
    },
    {
        versionKey:false,
        Timestamp:true
    }


)

export default mongoose.model("punctuations", punctuationSchema)