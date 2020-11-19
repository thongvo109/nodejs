const Course = require('../models/course');
const { handleArray } = require('../../util/mongoose');
class MeController {
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/stored-course', {
                    course: handleArray(courses),
                }),
            )
            .catch(next);
    }
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trash-course', {
                    course: handleArray(courses),
                }),
            )
            .catch(next);
    }
}
module.exports = new MeController();
