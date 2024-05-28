import {FastifyReply, FastifyRequest} from "fastify";
import UserService from "../services/userService";

class UserController {
    async getAllUsers(request: FastifyRequest, reply: FastifyReply) {
        const params = request.query;
        console.log('params', params);
        const users = await UserService.getAllUsers();
        reply.send(users);
    }

    async getUserById(request: any, reply: FastifyReply) {
        const userId = Number(request?.params?.id);
        const user = await UserService.getUserById(userId);
        reply.send(user);
    }

    async createUser(request: FastifyRequest, reply: FastifyReply) {
        const userData = request.body;
        const newUser = await UserService.createUser(userData);
        reply.send(newUser);
    }

    async updateUser(request: any, reply: FastifyReply) {
        const userId = Number(request?.params?.id);
        const userData = request.body;
        const updatedUser = await UserService.updateUser(userId, userData);
        reply.send(updatedUser);
    }

    async deleteUser(request: any, reply: FastifyReply) {
        const userId = Number(request?.params?.id);
        await UserService.deleteUser(userId);
        reply.send({message: "User deleted successfully"});
    }
}

export default new UserController();
