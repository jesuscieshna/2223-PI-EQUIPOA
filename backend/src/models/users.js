import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            unique:true
        },
        password:{
            type:String
        },
        email:{
            type:String,
            unique:true
        },
        porVer:[
            {
                nombre:{
                    type:String
                },
            }
        ],
    },
    {
    versionKey:false
    }
)

export default mongoose.model('users', userSchema); //TODO Corregir esta sintaxis