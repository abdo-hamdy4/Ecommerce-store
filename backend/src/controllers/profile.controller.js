import User from "../models/user.model.js";
export const showProfile = async(req,res) => {   
    try{
    const id = req.user.userid;
    const user = await User.findById({_id:id}).select("-password"); //exclude the password field
    if(!user){
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ success: true, profile: user });
    }
    catch(error){
        console.log(error);
    }
}
export const editProfile = async (req,res)=>{
    try{
        const id = req.user.userid;
        let user = await User.findById({_id:id}).select("-password"); //exclude the password field
        if(!user){
            return res.status(404).json({ error: 'User not found' });
        }
        user =  Object.assign(user, req.body);
        await user.save();
        res.status(200).send("user modified!!");
        }
        catch(error){
            console.log(error);
            res.status(403).send("user could not be modified");
        } 
}

