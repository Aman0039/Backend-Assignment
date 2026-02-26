import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json([
        {msg : "This is the Message 1"},
        {msg : "This is the message 2"} ,
        {msg : "This is the Message 3"},
        {msg : 'This is the message 4'},
        {msg : "This is the message 5"},
        {msg : "This is the message 6"},
        {msg : "This is the message 7"}
    ] );
})

const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});
