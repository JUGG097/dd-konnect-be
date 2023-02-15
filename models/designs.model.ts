import mongoose from "mongoose";
import { DesignDocument } from "../utils/interface";

const designSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		thumbnails: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Image",
			},
		],
		likes: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model<DesignDocument>("Design", designSchema);
