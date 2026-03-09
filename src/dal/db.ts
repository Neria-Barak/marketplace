import { Model, model, Schema } from "mongoose";
import { DBConnection } from "./connect";

export class DBCollection<T> {
    private model: Model<T>;

    constructor(name: string, schema: Schema<T>) {
        this.model = model<T>(name, schema);
        DBConnection.connectDB();
    }
    
    async getAll() {
        return await this.model.find().lean();
    }

    async addEntry(element: T) {
        const entry = await this.model.create(element);
        return entry.toObject();
    }

    async count() {
        return await this.model.countDocuments();
    }

    async getEntryById(id: string) {
        return await this.model.findById(id).lean();
    }

    async deleteById(id: string) {
        return await this.model.findByIdAndDelete(id).lean();
    }

    async updateById(id: string, updatedElement: Partial<T>) {
        return await this.model.findByIdAndUpdate(id, updatedElement, { returnDocument: 'after' }).lean();
    }
}