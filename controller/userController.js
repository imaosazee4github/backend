import Users from '../models/userModels.js'


export const updateUser = async (req,res,next) => {
    try{ 
        const updateUser = await Users.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true})
        res.status(200).json(updateUser)

    }catch(err){
        next(err)
    }
}

export const deleteUser = async (req,res,next) => {
    try{ 
        await Users.findByIdAndDelete(
            req.params.id,
        );
        res.status(200).json("User has been deleted.")

    }catch(err){
        next(err)
    }

}

export const getSingleUser = async(req,res,next)=>{
    try{ 
        const user = await Users.findById(req.params.id);
        res.status(200).json(user)

    }catch(err){
        next(err)
    }

}

export const getUsers = async () => {
    try{ 
        const users = await Users.find()
        res.status(200).json(users)

    }catch(err){
        next(err)
    }

}