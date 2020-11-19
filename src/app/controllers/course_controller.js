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

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: handleObject(course),
                }),
            )
            .catch(next);
    }
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
    destroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}
module.exports = new Coures();
