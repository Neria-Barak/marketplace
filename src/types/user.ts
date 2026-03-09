import { Schema } from "mongoose"

export interface User {
    _id: number,
    name: string,
    creationDate: Date,
    lastUpdate?: Date,
    dateOfBirth: Date,
    gender: 'M' | 'F',
}

export const userSchema = new Schema<User>({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    creationDate: { type: Date, require: true},
    lastUpdate: { type: Date, require: false},
    dateOfBirth: { type: Date, require: true},
    gender: { type: String, enum: ['M', 'F'] , require: true},
});