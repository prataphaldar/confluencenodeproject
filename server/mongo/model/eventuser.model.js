var mongoose= require('mongoose');
var schema = mongoose.Schema;

var eventuserSchema= new schema({
    eventId:String,
    empId:Number,
    active:Boolean,
    fullName:String,
    contactNo:Number,
    emailId:String,
    tableNo:[],
    business:String,
    account:String,
    password:String,
    pic:Buffer
});

module.exports = mongoose.model('EventUser',eventuserSchema);
