const mongoose = require('mongoose')

const CollectionSchema = new mongoose.Schema({
	date: {
		type: String,
		required: true,
  	},
	company: {
		type: String,
		required: false,
  	},
	description: {
		type: String,
		required: false,
  	},
	notes: {
		type: String,
		required: false,
  	},
	gross: {
		type: Number,
		required: false,
  	},
	tare: {
		type: Number,
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

module.exports = mongoose.model('Collection', CollectionSchema)