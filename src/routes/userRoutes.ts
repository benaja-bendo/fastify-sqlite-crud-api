import { FastifyInstance } from "fastify";
import UserController from "../controllers/UserController";

async function userRoutes(fastify: FastifyInstance) {
  fastify.get("/api/users", UserController.getAllUsers);
  fastify.get("/api/users/:id", UserController.getUserById);
  fastify.post("/api/users", UserController.createUser);
  fastify.put("/api/users/:id", UserController.updateUser);
  fastify.delete("/api/users/:id", UserController.deleteUser);
}

export default userRoutes;
