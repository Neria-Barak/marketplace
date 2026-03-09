import { DBCollection } from "../dal/db";
import { User, userSchema } from "../types/user";

export class UserLogic {
    private lastId = 0;
    private db = new DBCollection<User>("user", userSchema);

    private getNewId() {
        return ++this.lastId;
    }

    async getUsers() {
        return await this.db.getAll();
    }

    async getUserById(id: string) {
        return await this.db.getEntryById(id);
    }

    async addUser(userInfo: any) {
        const newUser: User = {
            _id: this.getNewId(),
            name: userInfo.name,
            creationDate: new Date(),
            dateOfBirth: userInfo.dateOfBirth,
            gender: userInfo.gender,
        };
        return await this.db.addEntry(newUser);
    }

    async updateUser(id: string, updatedFields: Partial<User>) {
        updatedFields.lastUpdate = new Date();
        return await this.db.updateById(id, updatedFields);
    }

    async deleteUser(id: string) {
        return await this.db.deleteById(id);
    }
}