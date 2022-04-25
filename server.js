/** @format */
"use strict";

require("dotenv").config();
const { randomUUID } = require("crypto");
const express = require("express");
const fs = require("fs");
const cors = require("cors");
// const multer = require("multer");
const videoRoute = require("./routes/videos");

const app = express();
const PORT = process.env.PORT || 8080;

// const uploadImage = multer({
//   dest: "assets/image",
// });

app.listen(PORT);
app.use(cors());
app.use(express.json());
app.use("/videos/", videoRoute);

//******** API THAT GETS Random Id ******** */
app.get("/randomId", (req, res) => {
  const newId = randomUUID();
  res.send(newId);
});

//******** API THAT GETS The Home Page ******** */
app.get("/", (req, res) => {
  const content = fs.readFileSync("./data/video.json");
  res.send(JSON.parse(content));
});

app.post("/upload", (req, res) => {
  const newVideo = {
    id: randomUUID(),
    title: req.body.title,
    channel: "BrainFlix and Chill",
    image: req.body.image.thumbnail,
    description: req.body.description,
    views: "404",
    likes: "200",
    duration: "4:04",
    video: "Such good, much like.",
    timestamp: new Date(),
    comments: [
      {
        name: "A Person",
        comment: "Such amaze, much wow",
        likes: 3,
        timestamp: new Date() - 5000000,
        id: randomUUID(),
      },
      {
        name: "Another Person",
        comment: "Such amaze, much wow",
        likes: 3,
        timestamp: new Date() - 400000,
        id: randomUUID(),
      },
      {
        name: "Yet Another Person",
        comment: "Such amaze, much wow",
        likes: 3,
        timestamp: new Date() - 250000,
        id: randomUUID(),
      },
    ],
  };

  const fileContent = JSON.parse(fs.readFileSync("./data/video.json"));
  fileContent.push(newVideo);
  fs.writeFileSync("./data/video.json", JSON.stringify(fileContent));

  res.status(201).json(newVideo);
});
