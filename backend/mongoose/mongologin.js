let mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/Signature",{useNewUrlParser:true,useUnifiedTopology:true});



const details=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    }

})
details.pre('save', async function(next) {
    if (this.isModified('password')) {
        
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})
const structurelog=mongoose.model('userlogin',details);

module.exports=structurelog;