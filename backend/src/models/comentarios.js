import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
    {
        username: String,
        comments:[{
            film:String,
            comment: String
        }],
    },
    {
        versionKey:false,
        Timestamp:true
    }

)

export default mongoose.model("comments", commentSchema)