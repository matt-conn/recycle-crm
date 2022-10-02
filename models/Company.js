const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema({
	company: {
		type: String,
		required: true,
  	},
	website: {
		type: String,
		required: false,
  	},
	phone: {
		type: String,
		required: false,
  	},
	street: {
		type: String,
		required: false,
  	},
	city: {
		type: String,
		required: false,
  	},
	state: {
		type: String,
		required: false,
  	},
	zip: {
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

module.exports = mongoose.model('Company', CompanySchema)