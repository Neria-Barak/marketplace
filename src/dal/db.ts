import { HydratedDocument, Model, model, Schema } from "mongoose";
import { connectDB } from "./connect";

export class DBTable<T> {
    private model: Model<T>;

    constructor(name: string, schema: Schema<T>) {
        this.model = model<T>(name, schema);
        connectDB();
    }
    
    async getAll() {
        return await this.model.find();
    }

    async addEntry(element: T) {
        const entry = new this.model(element);

        return await entry.save();
    }

    async count() {
        return await this.model.countDocuments();
    }

    async getEntryById(id: string) {
        return await this.model.findById(id);
    }

    async deleteById(id: string): Promise<HydratedDocument<T>> {
        return await this.model.findByIdAndDelete(id);
    }

    async updateById(id: string, updatedElement: Partial<T>) {
        return await this.model.findByIdAndUpdate(id, updatedElement, { returnDocument: 'after' });
    }
}