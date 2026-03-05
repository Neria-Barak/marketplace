import { UserDb } from "../dal/user";
import { User } from "./user";
import express from "express";
import 'dotenv/config';

const port = process.env.API_PORT;
const baseUrl = process.env.API_BASE_URL;
const url = `${baseUrl}:${port}`;

const server = express();

server.use(express.json());

const userDb = new UserDb();

server.get("/users", (req, res) => {
    const users = userDb.getUsers();
    if (users === undefined) {
        res.sendStatus(404);
    } else {
        res.status(200).json(users);
    }
});

server.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = userDb.getUserById(id);
    if (user === undefined) {
        res.sendStatus(404);
    } else {
        res.status(200).json(user);
    }
});

server.post("/users", (req, res) => {
    const newUser = new User(req.body.name);
    if (userDb.addUser(newUser)) {
        res.status(201).json(newUser);
    } else {
        res.sendStatus(500);
    }
});

server.put("/users/:id", (req, res) => {
    const id = req.params.id;
    let updatedUser = new User(req.body.name);
    updatedUser = userDb.updateUser(id, updatedUser);

    if (updatedUser === undefined) {
        res.sendStatus(404);
    } else {
        res.status(200).json(updatedUser);
    }
});

server.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    if (userDb.deleteById(id)) {
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});

server.listen(port, () => {
    console.log(`Server running at ${url}`);
});

process.on("SIGINT", () => {
    console.log("Server shutting down...");
    process.exit();
});