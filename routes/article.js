const express = require('express')
const Post = require('../model/index').postModel
const router = express.Router()
const postController = require('../controller/post-controller')

router.patch("/edit/:_id", postController.editPostById);

router.post('/new', postController.newPost)

router.get("/allpost", postController.getAllPost);


router.get("/:_id", postController.getById);


router.delete("/delete/:_id", postController.deleteById);

//before save admin need to approvel

// router.get('/follow/:id', async (req,res)=>{
//     let { id } = req.params;
    
//    let post = Post.findOne({ id })
//    if(post){
//        Post.updateOne(
//         { '_id': id},
//         { $push: { follower: req.user._id } }
//      ).then(() => {
//         res.send("you has follew this page" + id);
//       })
//       .catch((e) => {
//         res.send({
//           success: false,
//           message: e,
//         });
//       });
//    }
// })

module.exports = router