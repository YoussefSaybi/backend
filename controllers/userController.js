const userModel = require('../models/userSchema');

module.exports.addUserClient = async (req , res) => {
    try {
        const {username , email , password} = req.body;
        const roleClient = 'client';
        const user = await userModel.create({
             username, email,  password , role : roleClient

        })


        res.status(200).json({});
        
    } catch (error) {
        res.status(500).json({message : error.message})
        
    }
}
module.exports.addUserAdmin = async (req , res) => {
    try {
        const {username , email , password} = req.body;
        const roleAdmin = 'admin';
        const user = await userModel.create({
             username, email,  password , role : roleAdmin

        })


        res.status(200).json({});
        
    } catch (error) {
        res.status(500).json({message : error.message})
        
    }
}
module.exports.getAllUsers = async (req , res) => {
    try {
        
        const userliste = await userModel.find()


        res.status(200).json({userliste});
        
    } catch (error) {
        res.status(500).json({message : error.message})
        
    }
}
module.exports.getUsersById = async (req , res) => {
    try {
        const id = req.params.id
        console.log(req.params)
        const user = await userModel.findById(id)


        res.status(200).json({user});
        
    } catch (error) {
        res.status(500).json({message : error.message})
        
    }
}
module.exports.deleteUserById = async (req , res) => {
    try {
        const {id} = req.params
        const user= await userModel.findById(id);

          if (!user) {
            throw new Error("user not found");
          }
         await userModel.findByIdAndDelete(id)


        res.status(200).json("deleted");
        
    } catch (error) {
        res.status(500).json({message : error.message})
        
    }
}
module.exports.addUserClientWithImg = async (req , res) => {
    try {
        const {username , email , password} = req.body;
        const roleClient = 'client';
        const {filename} = req.file
        const user = await userModel.create({
             username, email,  password , role : roleClient , user_image : filename

        })


        res.status(200).json({});
        
    } catch (error) {
        res.status(500).json({message : error.message})
        
    }
}
module.exports.updateuserById = async (req, res) => {
    try {
    const {email , username} = req.body;
    const  {id}= req.params;
    await userModel.findByIdAndUpdate(id, {$set : {email ,username }})
    const updated = await userModel.findById(id);
    res.status(200).json({updated})
} catch (error){
    res.status(500).json({message : error.message})

}}