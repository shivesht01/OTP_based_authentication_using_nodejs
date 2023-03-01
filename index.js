const express = require("express");
const app = express();
const mongoose=require('mongoose')
require("dotenv").config();
const User = require('../models/User'); 
// Application configurations
const PORT = process.env.PORT || 3000;
app.use(express.json());
// Application Routing
app.use("/", require("../OTP_api_project/routes/router"));
mongoose.connect(
  process.env.MONGODB_URI, 
  { useNewUrlParser: true, 
    useUnifiedTopology: true, 
  }
)
.then(()=>console.log("Connected to Mongodb"))
.catch((err)=>console.log("Mongodb connection failed"));

app.listen(PORT, () => {
  console.log("Sever started at PORT", PORT);
});


