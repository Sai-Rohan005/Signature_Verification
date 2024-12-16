let mongoose=require('mongoose');


mongoose.connect("mongodb://localhost:27017/Signature",{useNewUrlParser:true,useUnifiedTopology:true});



const details=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        
    },
    password:{
        type:String,
        require:true,
    },
    img:{
        type:String
    },
    date:{
        type:String
    }

})
const structure=mongoose.model('user',details);

module.exports=structure;