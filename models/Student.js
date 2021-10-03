const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
	complete_name:{
		type: String,
		required: true,
		min: 3,
		max: 5
	},
	document: {
		type: String,
		required: true,
		min: 3,
		unique: true
	},
	age: {
		type: String,
		required: true,
		min: 1
	},
	gender:{
		type: String,
		required: true
	},
	note: {
		type: String
	},
	autoevaluation: {
		type: String
	},

},

{timestamps: true}
);

module.exports = mongoose.model('Student', StudentSchema);