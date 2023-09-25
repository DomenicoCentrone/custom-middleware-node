import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log("Requeste method: ", req.method);
    next();
})

app.get("/", (req, res) => {
    res.send("<h1>Hello, World!</h1>")
})

app.listen(3000, () => {
    console.log(`Server running on port ${port}.`);
})