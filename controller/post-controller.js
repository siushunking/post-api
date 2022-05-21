const mongoose = require('mongoose');
const express = require('express')
const Post = require('../model/index').postModel
const router = express.Router()


const getById = (req, res) => {
    let { _id } = req.params;
    Post.findOne({ _id })
      .populate("author", ["username","email","_id"])
      .then((post) => {
        res.send(post);
      })
      .catch((e) => {
        res.send(e);
      });
  }
  exports.getById = getById

const deleteById = async (req, res) => {
    let { _id } = req.params;
    let post = await Post.findOne({ _id });
    if (!post) {
      res.status(404);
      return res.json({
        success: false,
        message: "Post not found.",
      });
    }
  
    if (post.author.equals(req.user._id)) {
      Post.deleteOne({ _id })
        .then(() => {
          res.send("Post deleted.");
        })
        .catch((e) => {
          res.send({
            success: false,
            message: e,
          });
        });
    } else {
      res.status(403);
      return res.json({
        success: false,
        message:
          "Only the author of this Post or web admin can delete this Post.",
      });
    }
  }

  exports.deleteById = deleteById


const newPost =  async (req, res) => {
    let { title, description, type } = req.body;

    if (!req.user) {
      return res.status(400).send("Only user can post a new Post.");
    }

    let newPost = new Post({
        title,
        description,
        type,
        author: req.user._id
      });

      try {
        await newPost.save();
        res.status(200).send("New Post has been saved.");
      } catch (err) {
        res.status(400).send("Cannot save Post.");
      }
}

exports.newPost = newPost

const getAllPost = (req, res) => {
    
    Post.find({  })
      .populate("author", ["username","email","_id"])
      .then((post) => {
        res.send(post);
      })
      .catch((e) => {
        res.send(e);
      });
  }

  exports.getAllPost = getAllPost

const editPostById = async (req, res) => {
  
    let { _id } = req.params;
    let post = await Post.findOne({ _id });
    if (!post) {
      res.status(404);
      return res.json({
        success: false,
        message: "Post not found.",
      });
    }
  
    if (post.author.equals(req.user._id) ) {
        Post.findOneAndUpdate({ _id }, req.body, {
        new: true,
        runValidators: true,
      })
        .then(() => {
          res.send("Post updated.");
        })
        .catch((e) => {
          res.send({
            success: false,
            message: e,
          });
        });
    } else {
      res.status(403);
      return res.json({
        success: false,
        message:
          "Only the author of this course or web admin can edit this Post.",
      });
    }
  }

  exports.editPostById = editPostById;