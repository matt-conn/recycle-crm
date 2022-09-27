const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema({
	todo: {
		type: String,
		required: true,
  	},
	
  	// completed: {
	// 	type: Boolean,
	// 	required: true,
  	// }
})

module.exports = mongoose.model('Company', CompanySchema)