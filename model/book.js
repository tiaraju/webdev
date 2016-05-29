var mongoose = require('mongoose');


var BookSchema = new mongoose.Schema(
	{
		title:{type:String, required:true},
		comments:[{type:String}],
		writers:[{type:String, required:true}],
		price:{type:Number, required:true},
		description:{type:String},
		cover:{type:String}
	}

);

module.exports = mongoose.model("Book",BookSchema);