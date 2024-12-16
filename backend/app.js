let express=require('express');
let path =require('path');
let cors=require('cors')
let fs=require('fs');
let multer=require('multer');
let axios=require('axios');
let bodyParser=require('body-parser');
let struct = require('./mongoose/mongo.js');
const FormData = require('form-data');
let app=express();


app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname+'/build')));



let uniqueSuffix;
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
      uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix);
    }
  })
  
const upload = multer({ storage: storage })



const usrdetails={name:null,
    mail:null,
    date:null,
    img:null
};
// const upload=multer({stroage:stroage});

app.get('*',(req,res)=>{
    res.sendFile(__dirname+'/build'+'/index.html');
})

app.post('/profile',(req,res)=>{
    if(!usrdetails.name){
        res.json({
            status:404,
            message:"please Login to view profile"
        })
    }
    res.json({
        status:200,
        username:usrdetails.name,
        mail:usrdetails.mail,
        created:usrdetails.date
    })
})

app.post('/login-account',async (req,res)=>{
    let {username,password}=req.body
    
    if(!username || !password){
        
        return res.json({status:404,
            message:"Please enter all details"
        });
    }
    try{

        let db=await struct.findOne({username});
        if(!db){
            return res.json({
                status:404,
                message:"Username Not Found"
            })
        }
        if(password!==db.password){
            return res.json({
                status:404,
                message:"Incorrect Password"
            })

        }
        usrdetails.name=db.username;
        usrdetails.mail=db.email;
        usrdetails.date=db.date;
        usrdetails.img=db.img;
        res.json({
            status:200,
            message:"Login Done Sucessfully"
        })
    }
    catch{
        return res.json({
            status:404,
            message:"There is an error in submitting form"
        })
    }
})
app.post('/signup-form',upload.single('sigfile'),async ( req,res)=>{

    let {username,email,password,confirmPassword}=req.body;
    let fileurl=req.file ? `/uploads/${req.file.filename}` : null;
    if(!username || !email || !password || !confirmPassword){
        console.log("Please enter all details");
        return res.json({status:404,
            message:'Please enter all details'
        })
    }
    if(password!=confirmPassword){
        return res.json({status:404,
            message:"Password and confirmPassword is not matching"
        })
    }
    try{
        const exists=await struct.findOne({username});
        if(exists){
            return res.json({status:404,
                message:'Username already exists'
            })

        }
        const newUser=new struct({username:username,
            email:email,
            password:password ,
            img:path.join(`${__dirname}/uploads/${req.file.filename}`),
            date:new Date().toISOString().split('T')[0]
        })
        await newUser.save();
        console.log(newUser);
        res.json({
            status:200,
            message:"Signup sucessfull"
        })
        console.log("Data Saved Sucessfully");


    }
    catch(err){
        return res.json({status:404,
            message:err.message
        })
    }
    
    
})
app.use('/uploads', express.static('uploads'));



app.post('/verify', upload.single('signature'), async (req, res) => {
    if (!usrdetails.name) {
        return res.json({
            status: 501,
            message: "Please login to verify the signature"
        });
    }

    try {
        
        const formData = new FormData();
        formData.append('image1', fs.createReadStream(req.file.path)); 
        formData.append('image2', fs.createReadStream(usrdetails.img)); 


        const response = await axios.post(
            'http://localhost:5000/compare_images',
            formData,
            {
                headers: {
                    ...formData.getHeaders(), 
                }
            }
        );

        const similarity = response.data.similarity;
        const result = similarity >= 0.8 ? "Match" : "No Match"; 

        console.log(`Similarity: ${similarity}, Result: ${result}`);

        res.json({
            status: 200,
            message: result,
            similarity: similarity,
            
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error in image comparison");
    }
});


module.exports=app;