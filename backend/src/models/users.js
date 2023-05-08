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
        notas:[
            {
                nombre:{
                    type:String
                },
                nota:{
                    type:Number
                }
            }
        ],
        porVer:[
            {
                nombre:{
                    type:String
                },
            }
        ],
        comentario:[
            {
                nombre:{
                    type:String
                },
                comentario:{
                    type:String
                }
            }
        ]
    },
    {
    
    }
)

export default mongoose.model('users', userSchema); //TODO Corregir esta sintaxis