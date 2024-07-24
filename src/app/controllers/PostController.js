class PostController {
  index(req, res) {}

  show(req, res) {}

  store(req, res) {}

  create(req, res) {
    res.render('posts/create');
  }
}

module.exports = new PostController();
