const mongoose = require('mongoose')

const TicketSchema = new mongoose.Schema({
	company: {
		type: String,
		required: true,
  	},
	date: {
		type: String,
		required: false,
  	},
	status: {
		type: String,
		required: false,
  	},
	region: {
		type: String,
		required: false,
  	},
	notes: {
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

module.exports = mongoose.model('Ticket', TicketSchema)