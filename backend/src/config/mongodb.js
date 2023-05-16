import mongoose from 'mongoose'

const MONGODB_URI = process.env.DB_URI 
console.log(MONGODB_URI)

const dbConnect= async ()=>{
    await mongoose.connect("mongodb+srv://admin:admin@atlascluster.umozjky.mongodb.net/Prueba?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true
        })
}

export default dbConnect

