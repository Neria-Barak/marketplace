import { AxiosInstance } from "axios";

type User = {
    id: number;
    name: string;
}

export class UserApi {
    private path = "/users";
    constructor(private api: AxiosInstance) {}

    async getUsers(): Promise<User[]> {
        const res = await this.api.get<User[]>(this.path);
        return res.data;
    }

    async getUserById(id: number): Promise<User> {
        const res = await this.api.get<User>(`${this.path}/${id}`);
        if (res.status !== 200) return undefined;
        return res.data;
    }

    async createUser(name: string): Promise<User> {
        const res = await this.api.post<User>(this.path, { name });
        return res.data;
    }

    async updateUserName(id: number, name: string): Promise<User> {
        const res = await this.api.put<User>(`${this.path}/${id}`, { name });
        return res.data;
    }

    async deleteUser(id: number) {
        await this.api.delete(`${this.path}/${id}`);
    }
}