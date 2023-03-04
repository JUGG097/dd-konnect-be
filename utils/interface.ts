import mongoose, { Document, RefType } from "mongoose";

export interface UserDocument extends Document {
	name: string;
	userName: string;
	email: string;
	password: string;
	authType: string;
	role: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface DesignDocument extends Document {
	user: RefType;
	title: string;
	description: string;
	thumbnails: Array<RefType>;
	createdAt: Date;
	updatedAt: Date;
}

export interface SubmissionDocument extends Document {
	user: RefType;
	design: RefType;
	title: string;
	githubLink: string;
	hostLink: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface ImageDocument extends Document {
	imageUrl: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface AttemptDocument extends Document {
	user: RefType;
	design: RefType;
	createdAt: Date;
	updatedAt: Date;
}

export interface LikeDocument extends Document {
	user: RefType;
	design: RefType;
	createdAt: Date;
	updatedAt: Date;
}
