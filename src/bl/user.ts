import { DBTable } from "../dal/db";
import { User, userSchema } from "../types/user";

export class UserLogic {
    private db = new DBTable<User>("user", userSchema);

    async getUsers() {
        return await this.db.getAll();
    }

    async getUserById(id: string) {
        return await this.db.getEntryById(id);
    }

    async addUser(name: string) {
        const newUser: User = {
            name: name,
        };
        return await this.db.addEntry(newUser);
    }

    async updateUser(id: string, updatedFields: Partial<User>) {
        return await this.db.updateById(id, updatedFields);
    }

    async deleteUser(id: string) {
        return await this.db.deleteById(id);
    }
}