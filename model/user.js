import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },

    firstname:{ 
        type: String,  
        required: true
    },

    lastname:{
        type: String,
        required: true
    },
  
    password: {
        type: String,
        required: true
    },

    wPhone: {
        type: String,
        required: true
      
    },

    emailVerified: {
        type: Boolean,
        default: false,
        required: true
    }
});

export const User = mongoose.model("User", userSchema);

export default User;