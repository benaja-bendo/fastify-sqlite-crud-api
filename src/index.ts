import Fastify, { FastifyInstance } from 'fastify';

const app: FastifyInstance = Fastify();

app.get('/', (request, reply) => {
  reply.send('Hello from Fastify with TypeScript!');
});

(async () => {
  try {
    await app.listen(3000);
    console.log('Server listening on port 3000');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
