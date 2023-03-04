import mongoose from "mongoose";
import { UserDocument } from "../utils/interface";

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		userName: {
			type: String,
			required: true,
		},
        email: {
			type: String,
			required: true,
		},
        password: {
			type: String,
			required: true,
		},
        authType: {
			type: String,
			required: true,
		},
        role: {
            type: String,
            required: true
        }
	},
	{
		timestamps: true,
	}
);

export default mongoose.model<UserDocument>("User", userSchema);