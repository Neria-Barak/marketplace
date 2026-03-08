import express from "express";
import 'dotenv/config';
import { UserLogic } from "../bl/user";

const port = process.env.API_PORT;
const baseUrl = process.env.API_BASE_URL;
const url = `${baseUrl}:${port}`;

const server = express();

server.use(express.json());

const userLogic = new UserLogic();

server.get("/users", async (req, res) => {
    const users = await userLogic.getUsers();
    if (users === undefined) {
        res.sendStatus(404);
        return;
    }
    res.status(200).json(users);
});

server.get("/users/:id", async (req, res) => {
    const id = req.params.id;
    const user = await userLogic.getUserById(id);
    if (user === undefined) {
        res.sendStatus(404);
        return;
    }
    res.status(200).json(user);
});

server.post("/users", async (req, res) => {
    const result = await userLogic.addUser(req.body.name);

    if (result === undefined) {
        res.sendStatus(500);
        return;
    }
    res.status(201).json(result);
});

server.patch("/users/:id", async (req, res) => {
    const id = req.params.id;
    const updatedUser = await userLogic.updateUser(id, req.body);

    if (updatedUser === undefined) {
        res.sendStatus(404);
        return;
    }
    res.status(200).json(updatedUser);
});

server.delete("/users/:id", async (req, res) => {
    const id = req.params.id;
    const deletedUser = await userLogic.deleteUser(id);

    if (deletedUser === undefined) {
        res.sendStatus(404);
        return;
    }
    res.status(200).json(deletedUser);
});

server.listen(port, () => {
    console.log(`Server running at ${url}`);
});

process.on("SIGINT", () => {
    console.log("Server shutting down...");
    process.exit();
});