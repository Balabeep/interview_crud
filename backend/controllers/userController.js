import User from "../models/UserModel.js";

export const createUser = async (req,res) => {
    try {
        const {name,email,status} = req.body

        const user = await User.create({name,email,status})

        res.status(201).json({message:"User Created Successfully",data:user})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:"Interal server error"})
    }
}

export const getUser = async (req,res) => {
    try {
        const users = await User.find()
        res.status(200).json({data:users})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:"Interal server error"}) 
    }
}

export const getUserById = async (req,res) => {
    try {
        const {id} = req.params
        const user = await User.findById(id)

        res.status(200).json({data:user})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:"Interal server error"}) 
    }
}

export const updateUser = async (req,res) => {
    try {
        const {id} = req.params
        const {name,email,status} = req.body

        const user = await User.findByIdAndUpdate(id,{name,email,status},{new:true})

        res.json({messsage:"Updated Successfully",data:user})
    } catch (error) {
        console.log(error.message)
        res.json({message:error.message})
    }
}

export const deleteUser = async(req,res) => {
    try {
         const {id} = req.params

         await User.findByIdAndDelete(id)
         res.json({message:"Deleted Successfully"})
    } catch (error) {
        console.log(error.message)
        res.json({message:error.message})
    }
}