import mongoose from "mongoose";
import { LikeDocument } from "../utils/interface";

const likeSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		design: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Design",
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model<LikeDocument>("Like", likeSchema);
