import mongoose from "mongoose";
import { ImageDocument } from "../utils/interface";

const imageSchema = new mongoose.Schema(
	{
		imageUrl: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model<ImageDocument>("Image", imageSchema);
