import axios from 'axios';
import { RANDOM_USER_PROFILE_URI } from '../constants/constant.js';

export const defaultController = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Hello, world!"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    }
}

export const healthController = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Server is healthy!"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    }
}

export const randomProfilesController = async (req, res) => {
    try {
        const count = req.params.count;
        const profiles = await axios.get(`${RANDOM_USER_PROFILE_URI}`);
        
        if (!profiles) {
            return res.status(500).json({
                success: false,
                message: "No Profiles found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Profile fetched successfully!",
            profiles: profiles.data
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to reach server at this moment",
            error: error.message
        })
    }
}
