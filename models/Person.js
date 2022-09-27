const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
  	},
	lastName: {
		type: String,
		required: true,
  	},
	company: {
		type: String,
		required: false,
  	},
	jobTitle: {
		type: String,
		required: false,
  	},
	email: {
		type: String,
		required: false,
  	},
	phone: {
		type: String,
		required: false,
  	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
  	},
	createdAt: {
		type: Date,
		default: Date.now,
  	}
})

module.exports = mongoose.model('Person', PersonSchema)