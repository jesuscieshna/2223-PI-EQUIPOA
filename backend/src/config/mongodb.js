import mongoose from 'mongoose'

const MONGODB_URI = process.env.DB_URI 
console.log(MONGODB_URI)

const dbConnect= async ()=>{
    await mongoose.connect(MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
        })
}

export default dbConnect

