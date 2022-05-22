const express = require("express");
const home = require("./routes/home");
const blog = require("./routes/blog");
const aboutUs = require("./routes/aboutUs");

const app = express();


app.use("/home", home);
app.use("/aboutUs", aboutUs);
app.use("/blog", blog);

app.listen(3000, () => {
console.log("Server is running at port 3000")
})
