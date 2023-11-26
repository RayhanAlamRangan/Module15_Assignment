const mongoose=require('mongoose')
const StudentSchema=mongoose.Schema(
    {
		firstName:{type:String},
		lastName:{type:String},
		
        email:{type:String},
        title:{type:String},
        description:{type:String},
        status:{type:String}
    },
    {timestamps:true,versionKey:false}
)
const StudentCrud=mongoose.model('Studentinfo',StudentSchema);
module.exports=StudentCrud;