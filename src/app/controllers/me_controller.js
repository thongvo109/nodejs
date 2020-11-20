const Course = require('../models/course');
const { handleArray } = require('../../util/mongoose');
class MeController {
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()]).then(
            ([courses, deleteCount]) =>
                res.render('me/stored-course', {
                    course: handleArray(courses),
                    deleteCount,
                }),
        );
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
