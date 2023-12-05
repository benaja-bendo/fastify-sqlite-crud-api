import Fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import userRoutes from "./routes/userRoutes";

const app: FastifyInstance = Fastify();
/* 
  GET /
  Welcome route
*/
app.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
  reply.send("Bienvenue sur mon API");
});
app.register(userRoutes);

/* 
  Start server
*/
const PORT = process.env.PORT || 3000;
(async () => {
  try {
    await app.listen(PORT);
    console.log(`Server listening on http://localhost:${PORT}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
