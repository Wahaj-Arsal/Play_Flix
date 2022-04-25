/** @format */
const path = require("path");

const express = require("express");
// const app = express();
const fs = require("fs");
const router = require("express").Router();
const { randomUUID } = require("crypto");
const videoJSON = path.join(__dirname, "../data/video.json");
const video = require(videoJSON);
// let rawVideo = fs.readFileSync("../data/video.json");
// let video = JSON.parse(fs.readFileSync("data\video.json"));

//******** API THAT GETS the Aside Videos ******** */
router.get("/", (req, res) => {
  const newItem = video.map((item) => {
    return {
      id: item.id,
      title: item.title,
      channel: item.channel,
      image: item.image,
    };
  });
  res.status(200).send(newItem);
});

//******** GET ALL VIDEO DETAILS USING ID******** */
router.get("/:id", (req, res) => {
  const id = req.params.id;

  for (let i = 0; i < video.length; i++) {
    if (video[i].id == id) {
      res.status(200).send(video[i]);
    }
  }
});

//******** PUT EndPoint To Like Videos******** */
router.put("/:id/likes", (req, res) => {
  const id = req.params.id;

  const fileContent = JSON.parse(fs.readFileSync(videoJSON));

  for (let i = 0; i < fileContent.length; i++) {
    if (fileContent[i].id == id) {
      let getLikes = fileContent[i].likes;
      let convertToNumber = parseInt(getLikes.replace(",", ""));
      let newNumber = convertToNumber + 1;
      let numberToString = newNumber.toLocaleString();
      fileContent[i].likes = numberToString;
      fs.writeFileSync(videoJSON, JSON.stringify(fileContent));
      res.status(200).json(numberToString);
    }
  }
});

router.post("/:id/comments", (req, res) => {
  const id = req.params.id;

  const newComment = {
    id: randomUUID(),
    name: req.body.name,
    comment: req.body.comment,
    likes: 3,
    timestamp: Date.parse(new Date()),
  };

  const fileContent = JSON.parse(fs.readFileSync(videoJSON));

  for (let i = 0; i < fileContent.length; i++) {
    if (fileContent[i].id == id) {
      const selectedVideo = fileContent[i].comments;
      selectedVideo.push(newComment);
      fs.writeFileSync(videoJSON, JSON.stringify(fileContent));
      res.status(200).json(newComment);
    }
  }
  // res.status(404).json("Video Not Found");
});

router.delete("/:Id/comments/:commentId", (req, res) => {
  const Id = req.params.Id;
  const commentId = req.params.commentId;

  const fileContent = JSON.parse(fs.readFileSync(videoJSON));

  for (let i = 0; i < fileContent.length; i++) {
    if (fileContent[i].id == Id) {
      let selectedComment = fileContent[i].comments;
      // console.log(selectedComment);
      const commentsAfterDeletion = selectedComment.filter(
        (comments) => comments.id !== commentId
      );
      selectedComment.splice(0, selectedComment.length);
      commentsAfterDeletion.forEach((comment) => {
        selectedComment.push(comment);
      });
      fs.writeFileSync(
        videoJSON,
        JSON.stringify(fileContent),
        "utf8",
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
      res.status(200).json(selectedComment);
    }
  }
});

module.exports = router;
