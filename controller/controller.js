const User = require('../user/user');


//To Get User Details
const getAllUsers = async(req,res) =>{
    const users= await User.find({});
    res.json({users:users});
}

//To Post User Details
const userDetails = async (req,res) =>{
    const user = new User(req.body);
    user.save((error,result)=>{
        if(error){
            res.json({status:false});
        }else{
            res.json({status:true});
        }
    })
}
// To Find a Particular Person with any one field
const getParticularUser = async (req,res) =>{
    const user = await User.findOne({Password:req.params.id});
    res.json({user:user});
}



const updateUser = async (req, res) => {
    const user = await User.findOneAndUpdate({_id:req.body._id}, {$set:req.body}, {new: true});
    res.json({updated: user});
  };


  const deleteUser = async (req, res) => {
    const user = await User.findOneAndDelete({_id:req.body._id},{new: true});
    res.json({delete: user});
  };
  

/*const update = async (req,res) =>{
const myQuery = { Password:"12131415" };
  const newValues = { $set: {name: "Sathish", Password:"12131415" } };
  await User.findOneAndUpdate(myQuery, newValues, function(err, res) {
    if (err) {
        res.json({status:false});
    }else{
        res.json({status:true});
  });
}  */









module.exports = {getAllUsers,userDetails,getParticularUser,updateUser,deleteUser};