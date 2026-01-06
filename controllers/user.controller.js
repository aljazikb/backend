import { User } from "../src/models/user.model.js"; // ✅ صحيح

// Example controller function to create a new user
const registerUser = async (req, res) => {
    try {
        const {Username, email, password} = req.body;

        //basic validation
        if(!Username || !email || !password){
            return res.status(400).json({message: "Please provide all required fields"});
        }
        //check if user already exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "User already exists"});
        }

        //create new user
        const user = new User({name: Username, email, password, loggedIn: false});
        ///add
        await user.save();
        return res.status(201).json({
            message: "User created successfully",
            user:{id: user._id, uername: user.name, email: user.email}
        });

    } catch (error) {

        res.status(500).json({message: "Server error", error: error.message});

    }
};

const loginUser = async (req, res) => {
    try {
        //checking if the user already exists
        const {email, password} = req.body;
        const user = await User.findOne({email: email.toLowerCase()});

        if(!user){
            return res.status(400).json({message: "User does not exist"});
        }

        //compare passwords
        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid password"}); 
        }

        res.status(200).json({message: "Login successful", 
            user:{id: user._id, username: user.name, email: user.email}});

    }catch (error) {
        res.status(500).json({message: "Server error", error: error.message});
    }
};


const logoutuser = async (req, res) => {
    try {
        const {email} = req.body;
        const user = await User.findOne({email: email.toLowerCase()});
        if(!user){
            return res.status(400).json({message: "User does not exist"}); 
        }
        res.status(200).json({message: "Logout successful"});
    } catch (error) {
        res.status(500).json({message: "Server error", error: error.message});
    }
};


export  {
  registerUser,
  loginUser,
    logoutuser
};
