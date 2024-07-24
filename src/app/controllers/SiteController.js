const Course = require('../models/Course');
const Post = require('../models/Post');

class SiteController {
  // [GET] /home
  index(req, res, next) {
    Post.find({})
      .then((posts) => {
        posts = posts.map((post) => post.toObject());
        res.render('home', {
          posts,
        });
      })
      .catch(next);
  }

  // [GET]
  show(req, res) {
    res.send(req.params.slug);
  }
}

module.exports = new SiteController();
