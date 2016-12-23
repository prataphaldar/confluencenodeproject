var mongoose = require('mongoose');
var schema = mongoose.Schema;

var eventSchema= new schema({
   date: Date,
   dayList:[{
       agendaList:[{
           agendaNo:String,
           endTime:Date,
           startTime:Date,
           status:String,
           title:String,
           venue:String
       }],
       date:Date,
       day:String,
       dayNo:String,
       status:Boolean
   }],
   eventName:String,
   status:Boolean
});

module.exports= mongoose.model("Event",eventSchema);
