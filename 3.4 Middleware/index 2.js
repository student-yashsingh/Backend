// import express from "express";
// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import bodyParser from "body-parser";
// const __dirname = dirname(fileURLToPath(import.meta.url));
// const app=express();
// const port = 3000;
// app.use(bodyParser.urlencoded({extended:true}));

// app.get("/",(req,res)=>{
//     res.sendFile(__dirname + "/public/index.html");
// })
// app.post("/submit", (req,res)=>{
//     console.log(req.body);
// });

// app.listen(port,()=>{
//     console.log(`Listening on the ${port}`);
// })




// morgan and {custom} middleware.
// The morgan middleware is used in Node.js/Express applications for HTTP request logging.
// It’s mainly used during development to help you monitor incoming requests and debug issues easily.


// Logging is the process of recording messages about an application’s runtime behavior,
// such as errors, warnings, events, or general information. It’s essential for debugging, monitoring, and maintaining software.
import express from "express";
import morgan from "morgan";
const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.get("/",(req,res)=>{
    res.send("Hello");
});
app.listen(port,()=>{
    console.log(`my server is running at the ${port}`);
});




