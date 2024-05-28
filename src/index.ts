import Fastify, {
    FastifyInstance,
    FastifyReply,
    FastifyRequest,
} from "fastify";
import dotenv from 'dotenv';
import userRoutes from "./routes/userRoutes";

dotenv.config();
const app: FastifyInstance = Fastify();
const PORT = (process.env.APP_PORT || 3000) as number


/* 
  GET /
  Welcome route
*/
app.get("/", async (_: FastifyRequest, reply: FastifyReply) => {
    reply.send("Bienvenue sur mon API");
});
app.register(userRoutes);

/* 
  Start server
*/

(async () => {
    try {
        await app.listen({port: PORT});
        console.log(`Server listening on http://localhost:${PORT}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();
