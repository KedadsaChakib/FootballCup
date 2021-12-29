import mongoose from "mongoose";
import { init } from "./init.js";
const username ="username"; 
const password ="1234";

const dbURI =`mongodb+srv://${username}:${password}@cluster0.yhdca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;


const promise = mongoose.connect(dbURI);

promise.then (()=>{
    init().then(() =>{
        console.log("Iinialisation conplete");
    })
}).catch(err =>{
    console.error(err.message);
})

mongoose.connection.on("connected",()=>{
    console.log("Connected to MongoDb");
})
mongoose.connection.on("error", err => console.log("Connection error"+ err.message));
mongoose.connection.on("disconnected", ()=> console.log("Connection disconnected"));

process.on("SIGNIT", ()=>{
    mongoose.connection.close(() =>{
        console.log("Connection stoped");
        process.exit(0);
    });
});