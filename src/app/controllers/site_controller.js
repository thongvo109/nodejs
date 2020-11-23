const Course = require('../models/course');
const { handleArray } = require('../../util/mongoose');
class SiteController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    course: handleArray(courses),
                });
            })
            .catch(next);
    }
    indexJson(req, res, next) {
        Course.find({})
            .then((item) => {
                res.json({ item });
            })
            .catch(next);
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
