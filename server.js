const express = require('express');
const blogsRoutes = require('./src/blogs/routes');
const rateLimit = require("express-rate-limit");
const req = require('express/lib/request');
const app = express();
const port = 3000;

const limiter = rateLimit({
    max: 50,
    windowMs: 30 * 30 * 50,
    message: " To many  request from this IP, please try again in an minute."
});


app.use("/api", limiter);


app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world");
}
);


app.use("/api/v1/blogs", blogsRoutes);


app.listen(port, () => console.log(`app listening on port ${port}`));
