var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.section = 'announcement';
	locals.data = {
		announcementDesc: [],
	};
	view.on('init', function (next) {
		keystone.list('Announcement').model.find().exec(function (err, results) {
			if (err || !results.length) {
				return next(err);
			}
			locals.data.announcementDesc[0] = results[0].description;
			locals.data.announcementDesc[1] = results[1].description;

			console.log(locals.data.announcements);
			next(err);
		});
	});

	// Render the view
	view.render('announcement');
};

