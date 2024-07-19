class SiteController {

    // [GET] /home
    index(req, res) {
        res.render('home');
    }

    // [GET]
    show(req, res) {
        res.send('NEWS DETAIL!!!');
    }
}

module.exports = new SiteController;
