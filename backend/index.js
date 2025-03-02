// //step-1
// // const express = require("express");
// import express from "express";
// import dotenv from "dotenv";
// import databaseConnection from "./utils/database.js";
// import cookieParser from "cookie-parser";
// import userRoute from "./routes/userRoute.js";
// import cors from "cors";

// databaseConnection();

// dotenv.config({
//     path:".env"
// })

// const app = express();
// //middlewares 
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// app.use(cookieParser());
// const corsOptions = {
//     origin:'http://localhost:3000',
//     credentials:true
// }
// app.use(cors(corsOptions));
 
// // api
// app.use("/api/v1/user", userRoute);

// app.listen(process.env.PORT,() => {
//     console.log(`Server listen at port ${process.env.PORT}`);
// });


// ... 





import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

// Load environment variables
dotenv.config({ path: ".env" });

// Connect to database
databaseConnection();

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//  Update CORS to allow both localhost & deployed frontend
const corsOptions = {
    origin: [
        "http://localhost:3000",  //  Allow local development
        "https://primemax-1.onrender.com"  //  Allow deployed frontend
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"], //  Allow these methods
};
app.use(cors(corsOptions));

// API Routes
app.use("/api/v1/user", userRoute);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
