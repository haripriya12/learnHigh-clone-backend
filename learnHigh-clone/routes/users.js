var express = require('express');
var router = express.Router();
var models  = require('../models');

/* GET users listing. */

//creating a post 

router.post('/post', function(req, res) {
  console.log(req.body)
  models.Post.create({
      userId:req.body.userId,
      title: req.body.title,
      titleDescription: req.body.titleDescription,
      // authorName: req.body.authorName,
      subDomain: req.body.subDomain,
      readTime: req.body.readTime,
      postDescription: req.body.postDescription,
      // image: req.body.image,
      tag:req.body.tag,
  })
  .then(function (data) {
    console.log("response",data)
    res.json(data)
  });
});

//update a post

router.patch('/posts/:postID', function(req,res){
  console.log(req.body)
  models.Post.update({
    title: req.body.title,
    titleDescription: req.body.titleDescription,
    authorName: req.body.authorName,
    subDomain: req.body.subDomain,
    readTime: req.body.readTime,
    postDescription: req.body.postDescription,
    image: req.body.image
  },{
    where: {
      id: req.params.postID
    }
  }).then(function () {
    
  });
});

//Delete a poost

router.delete('/posts/:postID', function(req, res){
  models.Post.destroy({
    where: {
      id:req.params.postID
    }
  }).then(function (res) {
    res.json(res) });
});

//Get the post

router.get('/posts/:postID', function (req, res){
  console.log("hello0000")
  models.Post.findAll({
    include: [ models.user ],
    where: {
      id: req.params.postID
    }
  }).then(users => res.json({
    error: false,
    data: users
  }))
  .catch(error => res.json({
    error: true,
    message: 'error'
  }));
});

//get all the posts..

router.get('/posts', function(req, res){
  console.log(req.body)
  models.Post.findAll({
    include: [ models.user ]
  }).then(users => res.json({
    error: false,
    data: users
  }))
  .catch(error => res.json({
    error: true,
    message: 'error'
  }));
});

//get all posts related to tag

router.get('/posts/tag/:Tag', function(req, res) {   //need to change
  console.log("hello")
  console.log(req.body.tag)
  console.log("in params", req.params.Tag)
  models.Post.findAll({
    where: {
      tag: req.params.Tag
    }
  }).then(users => res.json({
    error: false,
    data: users
  }))
  .catch(error =>{
    console.log(error)
    res.json({
      message: 'there are no posts yet'
    })
  })
})


// //Creating a comment

router.post('/posts/:postID/comments', function(req, res){  //need to change
  console.log("...............",req.params)
  models.Comment.create({
    postid: req.params.postID,
    commentData: req.body.commentData,
    commentBy: req.body.commentBy, 
    //commentedby: req.body.commentedby,
    // image: req.body.image
  })
  .then(function (data) {
    console.log(data)
    res.json(data)
  });
});

//updating a comment

router.patch('/posts/:postID/comments/:commentID', function(req,res){
  console.log(req.body)
  models.Comment.update({
    commentdate: req.body.commentdate,
    commentdata: req.body.commentdata,
    commentedby: req.body.commentedby,
    image: req.body.image
  },{
    where: {
      postid: req.params.postID,
      id: req.params.commentID
    }
  }).then(function () {
    
  });
});

//Deleting a comment

router.delete('/posts/:postID/comments/:commentID', function(req, res){
  console.log(req.body)
  models.Comment.destroy({
    where: {
      postid: req.params.postID,
      id: req.params.commentID
    }
  }).then(users => res.json({
    error: false,
    message: 'comment has been deleted'
  }))
  .catch(error => res.json({
    error: true,
    message: 'error'
  }));
});

//Get the comment

router.get('/posts/:postID/comments/:commentID', function (req, res){
  models.Comment.findAll({
    where: {
      postid: req.params.postID,
     // id: req.params.commentID
    }
  }).then(users => res.json({
    error: false,
    data: users
  }))
  .catch(error => res.json({
    error: true,
    message: 'error'
  }));
});

//get all comments..

router.get('/posts/:postID/comments', function(req, res){
  models.Comment.findAll({
    where: {
      postid: req.params.postID
    }

  }).then(users => res.json({
    error: false,
    data: users
  }))
  .catch(error => res.json({
    error: true,
    message: 'error'
  })); 
});

//sign in page
router.post('/signup', function(req, res){
  models.user.create({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    image: req.body.image,
  })
  .then(function (data) {
    console.log(data)
    res.json(data)
  });
});


router.post('/signin', function(req, res){
  models.user.findAll({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  })
  .then(function (data) {
    console.log(data)
    res.json(data)
  });
})

// router.post('/signin', function(req, res){
//   models.User.findAll({
//     where: {
//       email: req.body.email,
//       password: req.body.password
//     }
//   }).then((exist) => {
//     if(exist.length == 0) {
//       res.json("Enter correct email address or password")
//     } else {
//       res.redirect("http://localhost:3001/")
//     }
//   })
// })



module.exports = router;
