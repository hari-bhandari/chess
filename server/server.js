import express from 'express'
import helmet from 'helmet'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import connectDB from './config/db.js'
import {errorHandler} from './middlewares/error.js'
const app=express()
import auth from './routes/auth.js'
import * as io from "socket.io"
import { createServer } from 'http';
app.use(express.json());
//initializing socket.io
const Server = createServer(app);
const socketio = new io.Server(Server);

const PORT= process.env.PORT||5000
connectDB()
////////////////////////////////

//config

//Body parser
//connecting to db
//implementing helmet
app.use(helmet())
//cors
app.use(cors())
//routes
app.use('/api/auth',auth)
//error
app.use(errorHandler)
socketio.on('connection',function (socket){
    console.log('a user connected')
})
//implementing error handler
const server=app.listen(PORT,()=>console.log(`server running in Production mode on port ${PORT}`))

//handle unhandled promised rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`error:${err.message}`)
    server.close(()=>process.exit(1))
});
