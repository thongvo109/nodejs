class NewsController {
    index(req, res) {
        res.render('news');
    }
    // [GET] /news/:slug
    show(req, res) {
        res.send('hihi');
    }
}
module.exports = new NewsController();
