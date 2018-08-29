var keystone = require('keystone');
var Announcement = keystone.list('Announcement').model;
var handlers = {
	getAnnouncements: function (req, res) {
		Announcement.find().exec(function (err, data) {
            console.log("on99 index.js /handlers");
			if (err) {
				console.log(err);
				res.status(500).send('DB Error');
			}
			res.status(200).send(data);
		});
	},
};
module.exports = handlers;
