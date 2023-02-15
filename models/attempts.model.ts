import mongoose from "mongoose";
import { AttemptDocument } from "../utils/interface";

const attemptSchema = new mongoose.Schema(
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

export default mongoose.model<AttemptDocument>("Attempt", attemptSchema);
