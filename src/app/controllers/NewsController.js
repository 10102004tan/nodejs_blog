class NewController {
  // [GET] /news
  index(req, res) {
    res.render('news');
  }

  // [GET] /news/:sluG
  show(req, res) {
    res.send('NEWS DETAIL!!!');
  }
}

module.exports = new NewController();
