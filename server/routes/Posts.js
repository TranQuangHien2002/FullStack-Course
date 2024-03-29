const express = require('express');
const router = express.Router();
const { Posts } = require('../models');


router.get("/", async (req,res) => {
    const listPosts = await Posts.findAll();
    res.json(listPosts);
});

router.post("/", async (req,res) => {
    const post = req.body;
    await Posts.create(post);
    res.json(post);
});

module.exports = router;    