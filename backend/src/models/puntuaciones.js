import mongoose, { Schema } from "mongoose";

const puntuationSchema = new Schema(
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

export default mongoose.model("puntuations", puntuationSchema)