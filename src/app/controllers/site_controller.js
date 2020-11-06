const Course = require('../models/course');

class SiteController {
    // [GET] /
    index(req, res) {
        Course.find({}, function (err, docs) {
            if (!err) {
                res.json(docs);
            } else {
                res.status(400).json({ error: 'Error' });
            }
        });

        // res.render('home');
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
