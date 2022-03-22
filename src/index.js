require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3100;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

main().then(()=> console.log("Database connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

app.use("/auth",require("./routes/auth"));
app.use("/school",require("./routes/school"));
app.use("/college",require("./routes/college"));

app.get("/",(req,res)=>{
    res.send("<h1> Hello World </h1>");
});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});