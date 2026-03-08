import { Schema, Types } from "mongoose"

export interface User {
    _id?: Types.ObjectId,
    name: string,
}

export const userSchema = new Schema<User>({
    name: { type: String, required: true },
});