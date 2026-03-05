import { UserApi } from "./user";
import axios from "axios";
import 'dotenv/config';

const port = process.env.API_PORT;
const baseUrl = process.env.API_BASE_URL;
const url = `${baseUrl}:${port}`;

const axiosInstance = axios.create({
    baseURL: url
})
const api = new UserApi(axiosInstance);

async function main() {
    try {
        const u1 = await api.createUser("neria");
        const u2 = await api.createUser("alice");
    
        console.log(await api.getUsers());
    
        console.log(await api.getUserById(u1.id));
    
        await api.updateUserName(u2.id, "bob");
    
        await api.deleteUser(u1.id);
    
        console.log(await api.getUsers());
    } catch (err) {
        if (axios.isAxiosError(err)) {
            console.log("Request failed with status:", err.response?.status);
            console.log("Body:", err.response?.data);
        }
    }
}

main();