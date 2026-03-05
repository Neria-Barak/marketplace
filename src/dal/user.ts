import { User } from "../bl/user";

export class UserDb {
    private users: User[] = [];

    getUsers() {
        return this.users;
    }
    
    addUser(user: User) {
        this.users.push(user);
        return true;
    }
    
    getUserAmount() {
        return this.users.length;
    }
    
    getUserById(id: string) {
        return this.users.find((user) => user.id === Number(id));
    }
    
    deleteById(id: string) {
        const amountBefore = this.getUserAmount();
        this.users = this.users.filter((user) => user.id !== Number(id));
        return this.getUserAmount() !== amountBefore;
    }
    
    updateUser(id: string, updatedUser: User) {
        if (!this.deleteById(id)) {
            return undefined;
        }
        updatedUser.id = Number(id);
        this.addUser(updatedUser);
        return updatedUser;
    }
}