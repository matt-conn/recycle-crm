const mongoose = require('mongoose')

const CollectionSchema = new mongoose.Schema({
	todo: {
		type: String,
		required: true,
  	},
  	completed: {
		type: Boolean,
		required: true,
  	},
  	userId: {
		type: String,
		required: true
  	}
})

module.exports = mongoose.model('Collection', CollectionSchema)