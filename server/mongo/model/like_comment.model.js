var mongoose = require('mongoose');
var schema = mongoose.Schema;

var like_commentSchema= new schema({
    eventName:String,
    dayName:String,
    agendaName:String,
    eventId:String,
    dayId:String,
    agendaId:String,
    likes:[{
               userId:String
           }],
    comments:[{
               userId:String,
               commentText:String
           }]
});

module.exports = mongoose.model("like_comment",like_commentSchema);
