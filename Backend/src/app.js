import express from "express";
import {createServer} from "node:http";  //here used to connect socket and express together 
import {Server} from "socket.io";
 import mongoose from "mongoose";
 import cors from "cors";
import { connect } from "node:http2";
import { connectToSocket } from "./controllers/socketmanage.js";
import userRoutes from "./routes/usersroutes.js";




const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);


 app.get("/",(req,res) => {
    res.send("home page")
 });


 const start = async ()=> {
// The password "Adru@323" becomes "Adru%40323"
   const connectDb = await mongoose.connect("mongodb+srv://adarshsalunkhe19089_db_user:Adru%40323@cluster0.ly0fxwj.mongodb.net/");
   console.log(`Mongoose connected DB host ${connectDb.connection.host}`);
   server.listen(app.get("port"),()=>{
    console.log("Server is live at port 8000");
 });
 
 }

start();
