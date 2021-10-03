const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema ({
	username: {
		type: String,
		required: true,
		min: 3,
		max: 20,
		unique: true
	},
	name: {
		type: String,
		required: true,
		min: 3,
		max: 5
	},
	password: {
		type: String,
		required: true,
		min: 5
	}
},
{timestamps: true}
);

module.exports = mongoose.model('Admin', AdminSchema);