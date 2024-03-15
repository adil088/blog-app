import dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
import authRouter from './router/auth.route.js'
dotenv.config()

mongoose.connect(process.env.MONGODB).then(()=>{
  console.log("Connected to MongoDB!")
}).catch((err)=>{
  console.log(err)
})

const app = express();

app.use(express.json()) //This is to read JSON 

app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
  })

app.use('/api/auth', authRouter)