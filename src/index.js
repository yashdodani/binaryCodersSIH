require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3100;

app.use(express.static(path.join("public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

main().then(()=> console.log("Database connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

app.post("/test",(req,res)=>{
    console.log(req.body);
    res.status(200).send();
});

app.use("/auth",require("./routes/auth"));
app.use("/school",require("./routes/school"));
app.use("/college",require("./routes/college"));

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.get("/register",(req,res)=>{
    res.render("register");
});
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});