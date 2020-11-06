const Course = require('../models/course');
const { handleObject } = require('../../util/mongoose');
class Coures {
    //detail item
    store(req, res, next) {
        const model = req.body;
        model.image = `https://img.youtube.com/vi/${model.videoId}/sddefault.jpg`;
        const item = new Course(model);
        item.save()
            .then(() => res.redirect(`/`))
            .catch((error) => {});
    }
    create(req, res) {
        res.render('courses/create');
    }
    show(req, res, next) {
        Course.findOne({
            slug: req.params.slug,
        })
            .then((course) => {
                res.render('courses/show', {
                    course: handleObject(course),
                });
            })
            .catch(next);
        // res.send('Detail' + req.params.slug);
    }
}
module.exports = new Coures();
